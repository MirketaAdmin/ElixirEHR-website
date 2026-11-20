// Pure, credential-free contract shared by the browser and the deployed API.
export const QUALIFICATION_FIELDS = {
  organizationType: 'What kind of healthcare organization are you with?',
  currentSystem: 'Which EHR or practice-management system do you use today?',
  salesforceUsage: 'Does your organization already use Salesforce?',
  size: 'Roughly how many providers or locations would use Elixir?',
  primaryNeed: 'What is the main problem you would like to improve?',
  timeline: 'When are you hoping to make a change?',
};
const fields = Object.keys(QUALIFICATION_FIELDS);
// Page context another part of the site can pass when it opens the assistant (elixir:open-assistant).
// A hint about where the visitor came from, never a visitor-stated fact.
export const PROVIDER_TYPES = {
  'online-behavioral-health': 'Online or virtual behavioral health provider',
  'treatment-center': 'Addiction or behavioral health treatment center',
  cybhi: 'School-based behavioral health billing under California’s CYBHI fee schedule',
  homecare: 'Home care or home and community-based services',
  'specialty-clinic': 'Specialty or outpatient clinic',
};
export function safeProviderType(value) {
  return typeof value === 'string' && Object.hasOwn(PROVIDER_TYPES, value) ? value : null;
}
export const DISCOVERY_URL = 'https://www.elixirehr.com/contact-us/';
export const MAX_MESSAGES = 24;
export const MAX_USER_LENGTH = 2000;
export function isExplicitDemoRequest(text) {
  if (/\b(?:no|not)\s+(?:a\s+)?(?:demo|meeting|call)\b|\b(?:don't|do not|don’t|never)\s+(?:want|need|request|book|schedule|arrange|contact)\b/i.test(text)) return false;
  return /\b(?:request|arrange|book|schedule|want|like|need)\b.{0,40}\b(?:demo|meeting|call)\b|\bcontact me\b/i.test(text);
}

export function safeSourcePath(value) {
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//') || value.includes('\\')) return '/';
  try {
    const url = new URL(value, 'https://www.elixirehr.com');
    return url.origin === 'https://www.elixirehr.com' ? url.pathname.slice(0, 300) : '/';
  } catch { return '/'; }
}

function cleanFacts(value = {}, strict = false) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid qualification details.');
  const result = {};
  for (const [key, text] of Object.entries(value)) {
    if (!fields.includes(key)) {
      if (strict) throw new Error('Unknown qualification field.');
      continue;
    }
    if (typeof text !== 'string' || text.length > 160) {
      if (strict) throw new Error('Please shorten the qualification details.');
      continue;
    }
    if (text.trim()) result[key] = text.trim();
  }
  return result;
}

export function validateChatRequest(body) {
  if (!body || typeof body !== 'object' || !Array.isArray(body.messages) || !body.messages.length || body.messages.length > MAX_MESSAGES) throw new Error('Please start a new conversation.');
  const messages = body.messages.map((message) => {
    if (!message || !['user', 'assistant'].includes(message.role) || typeof message.content !== 'string' || !message.content.trim() || message.content.length > (message.role === 'user' ? MAX_USER_LENGTH : 4000)) throw new Error('Please shorten your message and try again.');
    return { role: message.role, content: message.content.trim() };
  });
  if (messages.at(-1).role !== 'user' || messages.reduce((n, message) => n + message.content.length, 0) > 18000) throw new Error('Please start a new conversation.');
  if (body.skipped !== undefined && (!Array.isArray(body.skipped) || body.skipped.length > fields.length || body.skipped.some((field) => !fields.includes(field)))) throw new Error('Invalid skipped question.');
  if (body.contactPreference !== undefined && !['unknown', 'declined', 'requested'].includes(body.contactPreference)) throw new Error('Invalid contact preference.');
  if (body.providerType !== undefined && body.providerType !== null && !safeProviderType(body.providerType)) throw new Error('Invalid provider type.');
  return { messages, qualification: cleanFacts(body.qualification, true), skipped: [...new Set(body.skipped ?? [])], sourcePath: safeSourcePath(body.sourcePath), contactPreference: body.contactPreference ?? 'unknown', providerType: safeProviderType(body.providerType) };
}

export function normalizeChatReply(value, sources = []) {
  if (!value || typeof value.answer !== 'string' || !value.answer.trim() || value.answer.length > 4000) throw new Error('The assistant returned an invalid response. Please try again.');
  const ids = new Set(Array.isArray(value.citationIds) ? value.citationIds.filter((id) => typeof id === 'string') : []);
  const citations = sources.filter((source) => ids.has(source.id) && /^https:\/\//.test(source.url ?? '')).slice(0, 4).map(({ id, title, url }) => ({ id, title: String(title).slice(0, 150), url }));
  return {
    answer: value.answer.trim(), citations,
    qualification: cleanFacts(value.qualification),
    nextField: fields.includes(value.nextField) ? value.nextField : null,
    intent: ['demo', 'support', 'decline', 'explore'].includes(value.intent) ? value.intent : 'explore',
  };
}
