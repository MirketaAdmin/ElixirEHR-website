// Pure logic for the provider funnel: lookups, the tailored "Why Elixir" summary, and the
// assistant hand-off. No DOM or window access at module scope, so it is safe in the prerender and
// testable with node --test.
import {
  FUNNEL_STEPS,
  MAX_POINTS,
  MIN_POINTS,
  OPEN_ASSISTANT_EVENT,
  providerTypes,
} from './funnelData.mjs';

/** The provider type with this id, or null. */
export function getProviderType(typeId) {
  return providerTypes.find((type) => type.id === typeId) ?? null;
}

/**
 * The selected needs of a type, in the order the type lists them, ignoring unknown and repeated
 * ids. The order is fixed so the summary and the assistant prompt read the same however the
 * visitor clicked.
 */
export function resolveNeeds(typeId, needIds) {
  const type = getProviderType(typeId);
  if (!type || !Array.isArray(needIds)) return [];
  const wanted = new Set(needIds);
  return type.needs.filter((need) => wanted.has(need.id));
}

/** Adds or removes one need id, keeping the list free of duplicates. */
export function toggleNeed(needIds, needId) {
  const current = Array.isArray(needIds) ? needIds : [];
  return current.includes(needId) ? current.filter((id) => id !== needId) : [...current, needId];
}

/**
 * The capability points for the "Why Elixir" step: one per selected need, then the type's core
 * points until there are at least MIN_POINTS, never more than MAX_POINTS. Each point carries the
 * route it links to.
 */
export function buildWhyElixir(typeId, needIds) {
  const type = getProviderType(typeId);
  if (!type) return null;

  const needs = resolveNeeds(typeId, needIds);
  const points = needs.map((need) => ({ ...need.point, id: `need:${need.id}`, needId: need.id }));
  for (const core of type.corePoints) {
    if (points.length >= MIN_POINTS) break;
    points.push({ ...core, id: `core:${core.id}`, needId: null });
  }

  const phrases = needs.map((need) => need.phrase);
  const lead = phrases.length
    ? `For ${type.audience}, matched to the ${phrases.length === 1 ? 'need' : `${phrases.length} needs`} you picked.`
    : `For ${type.audience}, here is where Elixir fits. Pick what you are looking for to tailor this.`;

  return {
    title: `Why Elixir for ${type.audience}`,
    lead,
    points: points.slice(0, MAX_POINTS),
  };
}

/**
 * The first message offered to the site assistant: the provider type and the selected needs in
 * the visitor's own voice. It is only prefilled, never sent automatically.
 */
export function composeAssistantPrompt(typeId, needIds) {
  const type = getProviderType(typeId);
  if (!type) return null;
  const phrases = resolveNeeds(typeId, needIds).map((need) => need.phrase);
  const focus = phrases.length ? ` We are looking for help with: ${phrases.join('; ')}.` : '';
  return `${type.visitorIntro}${focus} How would Elixir help us?`;
}

/** The detail of the shared open-assistant event. */
export function buildAssistantEventDetail(typeId, needIds) {
  const type = getProviderType(typeId);
  return {
    providerType: type ? type.id : null,
    prompt: type ? composeAssistantPrompt(type.id, needIds) : null,
  };
}

/**
 * Opens the site assistant through the shared event. `target` defaults to the browser window and
 * is a parameter so tests can pass their own EventTarget. Returns false where there is no target
 * (the prerender) instead of throwing.
 */
export function openAssistant(detail, target = typeof window === 'undefined' ? null : window) {
  if (!target || typeof target.dispatchEvent !== 'function' || typeof CustomEvent !== 'function') {
    return false;
  }
  target.dispatchEvent(new CustomEvent(OPEN_ASSISTANT_EVENT, { detail }));
  return true;
}

/** The step index after a move, clamped to the flow. */
export function clampStep(index) {
  const last = FUNNEL_STEPS.length - 1;
  if (!Number.isFinite(index)) return 0;
  return Math.min(Math.max(Math.trunc(index), 0), last);
}
