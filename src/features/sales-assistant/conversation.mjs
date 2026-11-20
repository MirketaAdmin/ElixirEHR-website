import { PROVIDER_TYPES, QUALIFICATION_FIELDS, safeSourcePath, safeProviderType, isExplicitDemoRequest } from '../../../api/shared/contract.mjs';

export const WELCOME = 'Hi, I’m Ask Elixir, an automated assistant. Tell me a little about your organization and what you’d like to improve, and I’ll show you how Elixir approaches it.';
// Opening lines when another part of the site opens the assistant with page context.
export const PROVIDER_WELCOMES = {
  'online-behavioral-health': 'Hi, I’m Ask Elixir, an automated assistant. Delivering behavioral health care online? What would you most like to improve first: intake and consent, documentation, or billing?',
  'treatment-center': 'Hi, I’m Ask Elixir, an automated assistant. For treatment centers, the stretch between first call and admission is often where patients are lost. Where is your team feeling the most friction today?',
  cybhi: 'Hi, I’m Ask Elixir, an automated assistant. Working on school-based behavioral health billing under the CYBHI fee schedule? Where are you today: enrolled, already claiming, or still planning?',
  homecare: 'Hi, I’m Ask Elixir, an automated assistant. Running home care or home and community-based services? What causes the most friction today: EVV, authorizations, caregiver documentation or billing?',
  'specialty-clinic': 'Hi, I’m Ask Elixir, an automated assistant. Running a specialty or outpatient clinic? What kind of practice are you, and what would you most like to improve?',
};
export function welcomeFor(providerType) {
  return PROVIDER_WELCOMES[safeProviderType(providerType)] ?? WELCOME;
}

// `leadForm` false hides the in-chat request form; the discovery-call link is the handoff instead.
export function initialConversation(sourcePath = '/', { providerType = null, leadForm = true } = {}) {
  const provider = safeProviderType(providerType);
  return { sourcePath: safeSourcePath(sourcePath), providerType: provider, leadForm: leadForm !== false, lastIntent: null, assistantReplies: 0, messages: [{ role: 'assistant', content: welcomeFor(provider), citations: [] }], qualification: {}, skipped: [], nextField: null, pending: false, requestId: null, error: '', failedMessage: '', contactDeclined: false, contactPreference: 'unknown', showReview: false, reviewVersion: 0, requestReviewVersion: 0, leadDraft: { firstName: '', lastName: '', email: '', company: '', phone: '', role: '', preferredTime: '', summary: null, summaryEdited: false } };
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
      const showReview = state.showReview || (state.leadForm && state.reviewVersion === state.requestReviewVersion && event.reply.intent === 'demo' && !contactDeclined);
      const next = { ...state, pending: false, requestId: null, error: '', lastIntent: event.reply.intent ?? 'explore', assistantReplies: state.assistantReplies + 1, messages: [...state.messages, { role: 'assistant', content: event.reply.answer, citations: event.reply.citations ?? [] }], qualification, nextField, contactDeclined, contactPreference: contactDeclined ? 'declined' : state.contactPreference, showReview };
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
    case 'context': {
      const providerType = safeProviderType(event.providerType);
      if (!providerType) return state;
      // Only an untouched conversation swaps its greeting; an ongoing one keeps its history.
      const untouched = state.messages.length === 1 && state.messages[0].role === 'assistant' && !state.pending;
      return { ...state, providerType, messages: untouched ? [{ role: 'assistant', content: welcomeFor(providerType), citations: [] }] : state.messages };
    }
    case 'restart': return initialConversation(state.sourcePath, { providerType: state.providerType, leadForm: state.leadForm });
    default: return state;
  }
}

export function buildLeadDescription(state) {
  return [
    'Elixir website assistant — demo / sales follow-up request',
    `Originating page: https://www.elixirehr.com${safeSourcePath(state.sourcePath)}`,
    ...(safeProviderType(state.providerType) ? [`Page context: ${PROVIDER_TYPES[state.providerType]}`] : []),
    ...Object.entries(QUALIFICATION_FIELDS).filter(([key]) => state.qualification[key]).map(([key, label]) => `${label} ${state.qualification[key]}`),
  ].join('\n');
}

export function chatRequest(state, text, retry = false) {
  const messages = retry ? state.messages : [...state.messages, { role: 'user', content: text }];
  // Keep recent context inside the public contract; structured facts survive trimming.
  const bounded = messages.map(({ role, content }) => ({ role, content })).slice(-24);
  while (bounded.length > 1 && bounded.reduce((n, message) => n + message.content.length, 0) > 18000) bounded.shift();
  const request = { messages: bounded, qualification: state.qualification, skipped: state.skipped, sourcePath: state.sourcePath, contactPreference: isExplicitDemoRequest(text) ? 'requested' : state.contactPreference };
  if (safeProviderType(state.providerType)) request.providerType = state.providerType;
  return request;
}
