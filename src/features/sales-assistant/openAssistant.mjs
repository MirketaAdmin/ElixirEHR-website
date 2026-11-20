import { MAX_USER_LENGTH, PROVIDER_TYPES, safeProviderType } from '../../../api/shared/contract.mjs';

// Shared interface: any code on the site can open the assistant with
// window.dispatchEvent(new CustomEvent('elixir:open-assistant', { detail: { providerType, prompt } })).
// providerType is one of PROVIDER_TYPE_IDS or null; prompt prefills the input and is never auto-sent.
export const OPEN_ASSISTANT_EVENT = 'elixir:open-assistant';
export const PROVIDER_TYPE_IDS = Object.keys(PROVIDER_TYPES);

export function parseOpenAssistantDetail(detail) {
  const value = detail && typeof detail === 'object' ? detail : {};
  const prompt = typeof value.prompt === 'string' ? value.prompt.trim().slice(0, MAX_USER_LENGTH) : '';
  return { providerType: safeProviderType(value.providerType), prompt: prompt || null };
}

export function openAssistant({ providerType = null, prompt = null } = {}, target = typeof window === 'undefined' ? null : window) {
  if (!target || typeof CustomEvent === 'undefined') return false;
  return target.dispatchEvent(new CustomEvent(OPEN_ASSISTANT_EVENT, { detail: { providerType, prompt } }));
}

export function listenForOpenAssistant(target, onOpen) {
  if (!target) return () => {};
  const listener = (event) => onOpen(parseOpenAssistantDetail(event?.detail));
  target.addEventListener(OPEN_ASSISTANT_EVENT, listener);
  return () => target.removeEventListener(OPEN_ASSISTANT_EVENT, listener);
}
