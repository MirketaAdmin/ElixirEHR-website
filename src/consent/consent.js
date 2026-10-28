/*
 * First-party cookie consent. The visitor's choice is stored in this browser (localStorage) as
 *   { version, timestamp, categories: { necessary: true, analytics, marketing, functional } }
 * and mirrored to Google Consent Mode v2 through `gtag('consent', 'update', …)`.
 *
 * index.html sets the Consent Mode defaults (everything optional denied) and re-applies a saved
 * choice *before* any other script runs, so a Google tag added later starts from the visitor's
 * actual consent. Its storage key, version and category → signal mapping must match this file.
 *
 * Non-Google scripts that need consent load through `loadWhenConsented(category, load)`, which
 * runs `load` once the category is granted (immediately, if it already is).
 *
 * The site loads no analytics, advertising or chat scripts today; the only third-party script is
 * Google reCAPTCHA on the lead forms, which is strictly necessary (spam protection on submission).
 */

export const CONSENT_STORAGE_KEY = 'elixir-cookie-consent';
// Bump to ask every visitor again (e.g. when the categories or the policy change).
export const CONSENT_VERSION = 1;
export const OPTIONAL_CATEGORIES = ['analytics', 'marketing', 'functional'];
const CHANGE_EVENT = 'elixir:consent-change';

/** True when the browser sends a Global Privacy Control signal (honoured as a marketing opt-out). */
export function hasGlobalPrivacyControl() {
  return typeof navigator !== 'undefined' && navigator.globalPrivacyControl === true;
}

function normalise(categories) {
  return {
    necessary: true,
    analytics: categories.analytics === true,
    // The Privacy Policy honours GPC as an opt-out of "sale"/"sharing" (marketing).
    marketing: categories.marketing === true && !hasGlobalPrivacyControl(),
    functional: categories.functional === true,
  };
}

/** The saved choice, or null when the visitor has not chosen yet (or chose under an older version). */
export function readConsent() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(CONSENT_STORAGE_KEY));
    if (!saved || saved.version !== CONSENT_VERSION || !saved.categories) return null;
    return { ...saved, categories: normalise(saved.categories) };
  } catch {
    return null;
  }
}

/** Google Consent Mode v2 signals for a set of categories. */
export function consentModeSignals(categories) {
  const state = (granted) => (granted ? 'granted' : 'denied');
  return {
    analytics_storage: state(categories.analytics),
    ad_storage: state(categories.marketing),
    ad_user_data: state(categories.marketing),
    ad_personalization: state(categories.marketing),
    functionality_storage: state(categories.functional),
    personalization_storage: state(categories.functional),
  };
}

/** Saves a choice, updates Consent Mode at once and tells the page's consent-aware loaders. */
export function saveConsent(categories) {
  const consent = { version: CONSENT_VERSION, timestamp: new Date().toISOString(), categories: normalise(categories) };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Storage blocked (private mode): the choice still applies for this visit.
  }
  window.gtag?.('consent', 'update', consentModeSignals(consent.categories));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: consent }));
  return consent;
}

/** Calls `listener(consent)` on every saved change; returns an unsubscribe function. */
export function onConsentChange(listener) {
  const handler = (event) => listener(event.detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

/**
 * Runs `load` (e.g. injecting a vendor script) once `category` is granted — now, or when the
 * visitor grants it later. It runs at most once; withdrawing consent afterwards takes effect on
 * the next page load, when the script is no longer injected.
 */
export function loadWhenConsented(category, load) {
  let loaded = false;
  let unsubscribe = () => {};
  const run = (consent) => {
    if (!loaded && consent?.categories?.[category]) {
      loaded = true;
      unsubscribe();
      load();
    }
  };
  run(readConsent());
  if (!loaded) unsubscribe = onConsentChange(run);
  return () => unsubscribe();
}
