import { QUALIFICATION_FIELDS, safeSourcePath } from '../../../api/shared/contract.mjs';

export const WELCOME = 'Hello! I’m Elixir’s automated assistant. What are you looking to improve at your organization?';
export function initialConversation(sourcePath = '/') {
  return { sourcePath: safeSourcePath(sourcePath), messages: [{ role: 'assistant', content: WELCOME, citations: [] }], qualification: {}, skipped: [], pending: false, requestId: null, error: '', failedMessage: '', contactDeclined: false, showReview: false };
}

export function nextQualificationField(qualification = {}, skipped = []) {
  return Object.keys(QUALIFICATION_FIELDS).find((field) => !qualification[field] && !skipped.includes(field)) ?? null;
}

export function conversationReducer(state, event) {
  switch (event.type) {
    case 'request':
      return { ...state, pending: true, requestId: event.id, error: '', failedMessage: '', messages: event.retry ? state.messages : [...state.messages, { role: 'user', content: event.text }] };
    case 'success':
      if (state.requestId !== event.id || !state.pending) return state;
      return { ...state, pending: false, requestId: null, error: '', messages: [...state.messages, { role: 'assistant', content: event.reply.answer, citations: event.reply.citations ?? [] }], qualification: { ...state.qualification, ...event.reply.qualification }, contactDeclined: state.contactDeclined || event.reply.intent === 'decline', showReview: event.reply.intent === 'demo' && !state.contactDeclined };
    case 'failure':
      if (state.requestId !== event.id || !state.pending) return state;
      return { ...state, pending: false, requestId: null, error: event.error, failedMessage: state.messages.at(-1)?.content ?? '' };
    case 'qualification': {
      if (!Object.hasOwn(QUALIFICATION_FIELDS, event.field)) return state;
      const qualification = { ...state.qualification, [event.field]: String(event.value).trim().slice(0, 160) };
      return { ...state, qualification, skipped: state.skipped.filter((field) => field !== event.field) };
    }
    case 'skip':
      return Object.hasOwn(QUALIFICATION_FIELDS, event.field) ? { ...state, skipped: [...new Set([...state.skipped, event.field])] } : state;
    case 'review': return { ...state, showReview: event.open, contactDeclined: event.open ? false : state.contactDeclined };
    case 'decline': return { ...state, contactDeclined: true, showReview: false };
    case 'restart': return initialConversation(state.sourcePath);
    default: return state;
  }
}

export function buildLeadDescription(state) {
  return [
    'Elixir website assistant — demo / sales follow-up request',
    `Originating page: https://www.elixirehr.com${safeSourcePath(state.sourcePath)}`,
    ...Object.entries(QUALIFICATION_FIELDS).filter(([key]) => state.qualification[key]).map(([key, label]) => `${label} ${state.qualification[key]}`),
  ].join('\n');
}

export function chatRequest(state, text, retry = false) {
  const messages = retry ? state.messages : [...state.messages, { role: 'user', content: text }];
  // Keep recent context inside the public contract; structured facts survive trimming.
  const bounded = messages.map(({ role, content }) => ({ role, content })).slice(-24);
  while (bounded.length > 1 && bounded.reduce((n, message) => n + message.content.length, 0) > 18000) bounded.shift();
  return { messages: bounded, qualification: state.qualification, skipped: state.skipped, sourcePath: state.sourcePath };
}
