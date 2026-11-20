import { DISCOVERY_URL } from '../../../api/shared/contract.mjs';

export { DISCOVERY_URL };
// Visitor messages allowed per browser session (shared across "Start over"). After that the
// assistant stops calling the model and hands over to the discovery-call link.
export const MAX_VISITOR_MESSAGES = 12;
export const SESSION_BUDGET_KEY = 'elixir-assistant-visitor-messages';
// A discovery call is recommended once the assistant has answered this many visitor messages.
export const RECOMMEND_AFTER_REPLIES = 3;

export function browserSessionStorage() {
  try { return typeof window === 'undefined' ? null : window.sessionStorage; } catch { return null; }
}

// Storage can be missing or throw (private windows, blocked site data); an in-memory count still
// enforces the cap for the life of the page.
export function createSessionBudget({ storage = null, cap = MAX_VISITOR_MESSAGES, key = SESSION_BUDGET_KEY } = {}) {
  let memory = 0;
  const used = () => {
    let stored = 0;
    try {
      const value = Number.parseInt(storage?.getItem(key) ?? '', 10);
      if (Number.isFinite(value) && value > 0) stored = value;
    } catch { stored = 0; }
    return Math.max(stored, memory);
  };
  return {
    cap,
    used,
    remaining: () => Math.max(0, cap - used()),
    exhausted: () => used() >= cap,
    consume() {
      memory = used() + 1;
      try { storage?.setItem(key, String(memory)); } catch { /* the in-memory count still applies */ }
      return Math.max(0, cap - memory);
    },
  };
}

const COPY = {
  limit: { heading: 'Let’s continue with our team', text: 'You’ve reached this chat’s message limit. A discovery call is the best next step: our team can answer the rest for your organization.' },
  fallback: { heading: 'Talk with our team instead', text: 'The assistant can’t reply right now. You can still book a discovery call and our team will pick it up from here.' },
  recommended: { heading: 'See how this would work for you', text: 'A short discovery call lets our team walk through your setup, answer pricing and implementation questions, and tailor a demo.' },
  available: { heading: '', text: '' },
};

// Which discovery-call prompt the widget shows. The link itself is always available.
export function discoveryCta(state, { mode = 'hosted', capReached = false } = {}) {
  let tone = 'available';
  if (capReached) tone = 'limit';
  else if (!['sample', 'hosted'].includes(mode) || state?.error) tone = 'fallback';
  else if (state?.contactDeclined) tone = 'available';
  else if (state?.lastIntent === 'demo' || state?.contactPreference === 'requested' || (state?.assistantReplies ?? 0) >= RECOMMEND_AFTER_REPLIES) tone = 'recommended';
  return { tone, href: DISCOVERY_URL, label: 'Book a discovery call', ...COPY[tone] };
}
