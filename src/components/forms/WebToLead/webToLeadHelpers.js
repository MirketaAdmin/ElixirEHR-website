import { useEffect, useState } from 'react';

/**
 * False in the prerendered HTML and on the first client render, true once React has hydrated the
 * form. Lead forms keep their submit button disabled until then: before hydration the reCAPTCHA
 * widget and the token check do not exist yet, so a native POST would reach Salesforce with no
 * token and an empty captcha_settings ts, and Salesforce would discard it silently.
 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}

/** Shown only when JavaScript is off; the form cannot be sent without it (reCAPTCHA needs it). */
export const NOSCRIPT_MESSAGE = 'Please enable JavaScript to submit this form, or email info@elixirehr.com.';

/**
 * The page the form was sent from, appended to the Lead's Description so the sales team can see
 * which page (and campaign link) a Lead came from. Read at submit time in the browser.
 */
export function submissionSource() {
  const title = document.title.replace(/\s*\|\s*(ElixirEHR|Elixir)\s*$/, '');
  const { origin, pathname, search } = window.location;
  return `Submitted from: ${title} (${origin}${pathname}${search})`;
}

/** The visitor's message followed by the source line (blank parts dropped). */
export function withSubmissionSource(message) {
  return [message?.trim(), submissionSource()].filter(Boolean).join('\n\n');
}

/** True when the visitor has completed the reCAPTCHA inside `form`. */
export function hasRecaptchaResponse(form) {
  return Boolean(form.querySelector('[name="g-recaptcha-response"]')?.value.trim());
}

/**
 * Re-enables a form after the visitor comes back with the browser's Back button (the page may be
 * restored from the back/forward cache with its "sending" state).
 */
export function useResetOnPageShow(reset) {
  useEffect(() => {
    const onPageShow = (event) => event.persisted && reset();
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, [reset]);
}
