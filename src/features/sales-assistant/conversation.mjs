import { QUALIFICATION_FIELDS, safeSourcePath, isExplicitDemoRequest } from '../../../api/shared/contract.mjs';

export const WELCOME = 'Hello! I’m Elixir’s automated assistant. What are you looking to improve at your organization?';
export function initialConversation(sourcePath = '/') {
  return { sourcePath: safeSourcePath(sourcePath), messages: [{ role: 'assistant', content: WELCOME, citations: [] }], qualification: {}, skipped: [], nextField: null, pending: false, requestId: null, error: '', failedMessage: '', contactDeclined: false, contactPreference: 'unknown', showReview: false, reviewVersion: 0, requestReviewVersion: 0, leadDraft: { firstName: '', lastName: '', email: '', company: '', phone: '', role: '', preferredTime: '', summary: null, summaryEdited: false } };
}

export function nextQualificationField(qualification = {}, skipped = []) {
  return Object.keys(QUALIFICATION_FIELDS).find((field) => !qualification[field] && !skipped.includes(field)) ?? null;
}

export function conversationReducer(state, event) {
  switch (event.type) {
    case 'request':
      return { ...state, pending: true, requestId: event.id, requestReviewVersion: state.reviewVersion, error: '', failedMessage: '', contactPreference: isExplicitDemoRequest(event.text) ? 'requested' : state.contactPreference, contactDeclined: isExplicitDemoRequest(event.text) ? false : state.contactDeclined, messages: event.retry ? state.messages : [...state.messages, { role: 'user', content: event.text }] };
    case 'success': {
      if (state.requestId !== event.id || !state.pending) return state;
      const qualification = { ...state.qualification, ...event.reply.qualification };
      const contactDeclined = state.contactDeclined || event.reply.intent === 'decline';
      const nextField = event.reply.intent === 'explore' && Object.hasOwn(QUALIFICATION_FIELDS, event.reply.nextField) && !qualification[event.reply.nextField] && !state.skipped.includes(event.reply.nextField) ? event.reply.nextField : null;
      const showReview = state.showReview || (state.reviewVersion === state.requestReviewVersion && event.reply.intent === 'demo' && !contactDeclined);
      const next = { ...state, pending: false, requestId: null, error: '', messages: [...state.messages, { role: 'assistant', content: event.reply.answer, citations: event.reply.citations ?? [] }], qualification, nextField, contactDeclined, contactPreference: contactDeclined ? 'declined' : state.contactPreference, showReview };
      if (showReview && !state.leadDraft.summaryEdited) next.leadDraft = { ...state.leadDraft, summary: buildLeadDescription(next) };
      return next;
    }
    case 'failure':
      if (state.requestId !== event.id || !state.pending) return state;
      return { ...state, pending: false, requestId: null, error: event.error, failedMessage: state.messages.at(-1)?.content ?? '' };
    case 'qualification': {
      if (!Object.hasOwn(QUALIFICATION_FIELDS, event.field)) return state;
      const qualification = { ...state.qualification, [event.field]: String(event.value).trim().slice(0, 160) };
      const next = { ...state, qualification, nextField: state.nextField === event.field ? null : state.nextField, skipped: state.skipped.filter((field) => field !== event.field) };
      if (state.leadDraft.summary !== null && !state.leadDraft.summaryEdited) next.leadDraft = { ...state.leadDraft, summary: buildLeadDescription(next) };
      return next;
    }
    case 'skip':
      return Object.hasOwn(QUALIFICATION_FIELDS, event.field) ? { ...state, nextField: null, skipped: [...new Set([...state.skipped, event.field])] } : state;
    case 'review': return { ...state, showReview: event.open, reviewVersion: state.reviewVersion + 1, contactDeclined: event.open ? false : state.contactDeclined, contactPreference: event.open ? 'requested' : state.contactPreference, leadDraft: event.open && state.leadDraft.summary === null ? { ...state.leadDraft, summary: buildLeadDescription(state) } : state.leadDraft };
    case 'draft': {
      const limits = { firstName: 40, lastName: 80, email: 80, company: 40, phone: 40, role: 120, preferredTime: 160, summary: 3300 };
      if (!Object.hasOwn(limits, event.field)) return state;
      return { ...state, leadDraft: { ...state.leadDraft, [event.field]: String(event.value).slice(0, limits[event.field]), summaryEdited: state.leadDraft.summaryEdited || event.field === 'summary' } };
    }
    case 'decline': return { ...state, contactDeclined: true, contactPreference: 'declined', showReview: false, reviewVersion: state.reviewVersion + 1 };
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
  return { messages: bounded, qualification: state.qualification, skipped: state.skipped, sourcePath: state.sourcePath, contactPreference: isExplicitDemoRequest(text) ? 'requested' : state.contactPreference };
}
