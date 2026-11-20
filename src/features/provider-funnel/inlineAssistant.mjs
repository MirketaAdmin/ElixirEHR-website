// The funnel's inline use of the site assistant: a one-time tailored "Why Elixir" answer and a
// small question box, both answered by the same /api/chat persona as the floating assistant. It
// reuses the assistant's conversation state, request builder, transport and per-session message
// budget, so the persona prompt, the caps and the fallbacks live in one place. Pure: no DOM or
// window access, so it runs under node --test.
import { chatRequest, conversationReducer, initialConversation } from '../sales-assistant/conversation.mjs';
import { requestReply } from '../sales-assistant/transport.mjs';

// The funnel sits on the Home page; the source path tells the persona where the visitor is.
export const INLINE_SOURCE_PATH = '/';

/** A fresh inline conversation for a provider type (no in-chat lead form; the discovery link is the handoff). */
export function inlineConversation(typeId = null) {
  return initialConversation(INLINE_SOURCE_PATH, { providerType: typeId, leadForm: false });
}

/**
 * The assistant's conversation reducer plus two inline needs: `init` starts over for a provider
 * type, and a failed request drops the unanswered question, so the next question never carries a
 * dangling turn.
 */
export function inlineReducer(state, event) {
  if (event?.type === 'init') return inlineConversation(event.typeId);
  const next = conversationReducer(state, event);
  if (event?.type === 'failure' && next !== state && next.messages.at(-1)?.role === 'user') {
    return { ...next, messages: next.messages.slice(0, -1) };
  }
  return next;
}

/** Whether this build can ask the model at all ('sample' answers locally in development). */
export function inlineAvailable(mode) {
  return mode === 'hosted' || mode === 'sample';
}

/**
 * Asks one question through the assistant transport, counting it against the shared session
 * budget. Resolves to { status } where status is 'empty', 'off' (assistant switched off),
 * 'limit' (session budget spent; nothing is sent), 'ok' (with `reply`) or 'error' (with
 * `message`). `onStart` runs once the question passes the gates, just before the request goes
 * out. An abort rejects with the AbortError so the caller can ignore it.
 */
export async function askInline({ state, text, mode, budget, signal, fetchImpl, onStart } = {}) {
  const question = typeof text === 'string' ? text.trim() : '';
  if (!question) return { status: 'empty' };
  if (!inlineAvailable(mode)) return { status: 'off' };
  if (!budget || budget.exhausted()) return { status: 'limit' };
  budget.consume();
  onStart?.(question);
  try {
    const options = fetchImpl ? { mode, signal, fetchImpl } : { mode, signal };
    const reply = await requestReply(chatRequest(state, question), options);
    return { status: 'ok', reply };
  } catch (error) {
    if (error?.name === 'AbortError') throw error;
    return { status: 'error', message: error?.message || 'The assistant can’t reply right now.' };
  }
}

/**
 * The visitor's question-and-answer turns for display: every turn after the greeting except the
 * tailored-summary exchanges (each a question index and the reply after it), which the Why Elixir
 * step shows on its own.
 */
export function questionTurns(messages, summaryIndices = []) {
  if (!Array.isArray(messages)) return [];
  const hidden = new Set();
  for (const index of Array.isArray(summaryIndices) ? summaryIndices : []) hidden.add(index).add(index + 1);
  return messages.map((message, index) => ({ ...message, index })).filter(({ index }) => index > 0 && !hidden.has(index));
}
