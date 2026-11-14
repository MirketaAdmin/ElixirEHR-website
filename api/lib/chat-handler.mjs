import { validateChatRequest } from '../shared/contract.mjs';
import { approvedKnowledge, retrieveKnowledge } from './knowledge.mjs';
import { createHostedModel } from './hosted-model.mjs';

const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
const failure = (status, code, error) => ({ status, headers, body: { code, error } });

export function createChatHandler({ env = process.env, fetchImpl = fetch, knowledge = approvedKnowledge } = {}) {
  let windowStart = Date.now();
  let admissions = 0;
  let inFlight = 0;
  return async (body) => {
    if (env.ASSISTANT_ENABLED !== 'true') return failure(503, 'ASSISTANT_UNAVAILABLE', 'The assistant is not available yet. You can still use Contact Us.');
    let request;
    try {
      if (JSON.stringify(body).length > 32000) return failure(413, 'MESSAGE_TOO_LARGE', 'Please shorten your message and try again.');
      request = validateChatRequest(body);
    } catch { return failure(400, 'INVALID_MESSAGE', 'Please shorten your message or start a new conversation.'); }
    let model;
    try { model = createHostedModel({ env, fetchImpl }); }
    catch { return failure(503, 'ASSISTANT_UNAVAILABLE', 'The assistant is temporarily unavailable. Please try Contact Us.'); }
    if (!knowledge.some((entry) => entry.status === 'approved')) return failure(503, 'KNOWLEDGE_NOT_READY', 'Reviewed product information is not available yet. Please use Contact Us.');
    const sources = retrieveKnowledge(request.messages, knowledge);
    if (!sources.length) return { status: 200, headers, body: { answer: 'I don’t have reviewed information to answer that question. You can ask about another topic or request a conversation with our team.', citations: [], qualification: {}, nextField: null, intent: 'explore' } };
    // Coarse, per-worker protection only; deployment-level distributed abuse controls are a release gate.
    if (Date.now() - windowStart >= 60000) { windowStart = Date.now(); admissions = 0; }
    if (admissions >= 30 || inFlight >= 4) return failure(429, 'PLEASE_WAIT', 'The assistant is busy. Please wait a moment and try again.');
    admissions++; inFlight++;
    try { return { status: 200, headers, body: await model.complete(request, sources) }; }
    catch { return failure(503, 'ASSISTANT_UNAVAILABLE', 'I couldn’t get a reply just now. Please try again or use Contact Us.'); }
    finally { inFlight--; }
  };
}
