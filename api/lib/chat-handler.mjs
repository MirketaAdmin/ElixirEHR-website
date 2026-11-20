import { validateChatRequest } from '../shared/contract.mjs';
import { approvedKnowledge, fallbackKnowledge, retrieveKnowledge } from './knowledge.mjs';
import { reviewKnowledge } from './review-knowledge.mjs';
import { createHostedModel, ModelRateLimitError } from './hosted-model.mjs';
import { clientAddress, createClientLimiter } from './client-limit.mjs';

const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
const failure = (status, code, error) => ({ status, headers, body: { code, error } });

export function createChatHandler({ env = process.env, fetchImpl = fetch, knowledge, clientLimiter = createClientLimiter() } = {}) {
  const review = env.ASSISTANT_KNOWLEDGE_MODE === 'review' && env.ASSISTANT_REVIEW_ENVIRONMENT === 'latest';
  const entries = knowledge ?? (review ? reviewKnowledge : approvedKnowledge);
  let windowStart = Date.now();
  let dayStart = Date.now();
  let admissions = 0;
  let dailyAdmissions = 0;
  let inFlight = 0;
  // `context.headers` carries the incoming request headers; visitor text is never logged.
  return async (body, context = {}) => {
    if (env.ASSISTANT_ENABLED !== 'true') return failure(503, 'ASSISTANT_UNAVAILABLE', 'The assistant is not available yet. You can still use Contact Us.');
    let request;
    try {
      if (JSON.stringify(body).length > 32000) return failure(413, 'MESSAGE_TOO_LARGE', 'Please shorten your message and try again.');
      request = validateChatRequest(body);
    } catch { return failure(400, 'INVALID_MESSAGE', 'Please shorten your message or start a new conversation.'); }
    let model;
    try { model = createHostedModel({ env, fetchImpl }); }
    catch { return failure(503, 'ASSISTANT_UNAVAILABLE', 'The assistant is temporarily unavailable. Please try Contact Us.'); }
    if (!entries.some((entry) => entry.status === 'approved' || (review && entry.status === 'draft'))) return failure(503, 'KNOWLEDGE_NOT_READY', 'Reviewed product information is not available yet. Please use Contact Us.');
    const sources = retrieveKnowledge(request.messages, entries, { review, providerType: request.providerType });
    // A small grounded context keeps greetings and qualification-only turns conversational.
    if (!sources.length && knowledge === undefined) sources.push(...(review ? [reviewKnowledge[0]] : fallbackKnowledge(entries, { providerType: request.providerType })));
    if (!sources.length) return { status: 200, headers, body: { answer: 'I don’t have reviewed information to answer that question. You can ask about another topic or request a conversation with our team.', citations: [], qualification: {}, nextField: null, intent: 'explore' } };
    const perClient = clientLimiter.take(clientAddress(context.headers));
    if (!perClient.allowed) return { ...failure(429, 'PLEASE_WAIT', 'You have reached the assistant’s message limit for now. You can book a discovery call on our Contact Us page.'), headers: { ...headers, 'Retry-After': perClient.retryAfter } };
    // Coarse, per-worker protection only; deployment-level distributed abuse controls are a release gate.
    if (Date.now() - windowStart >= 60000) { windowStart = Date.now(); admissions = 0; }
    if (Date.now() - dayStart >= 86400000) { dayStart = Date.now(); dailyAdmissions = 0; }
    const groq = env.ASSISTANT_PROVIDER === 'groq';
    if (admissions >= (groq ? 4 : 30) || inFlight >= (groq ? 1 : 4) || (groq && dailyAdmissions >= 100)) return { ...failure(429, 'PLEASE_WAIT', 'The assistant is busy. Please wait a moment and try again.'), headers: { ...headers, 'Retry-After': dailyAdmissions >= 100 ? '3600' : '60' } };
    admissions++; dailyAdmissions++; inFlight++;
    try { return { status: 200, headers, body: await model.complete(request, sources) }; }
    catch (error) {
      if (error instanceof ModelRateLimitError) return { ...failure(429, 'PLEASE_WAIT', 'The assistant has reached its request limit. Please wait and try again.'), headers: { ...headers, 'Retry-After': error.retryAfter } };
      return failure(503, 'ASSISTANT_UNAVAILABLE', 'I couldn’t get a reply just now. Please try again or use Contact Us.');
    }
    finally { inFlight--; }
  };
}
