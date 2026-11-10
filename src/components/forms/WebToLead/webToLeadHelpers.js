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
export const NOSCRIPT_MESSAGE = 'This form needs JavaScript to verify you are not a robot. Please email info@elixirehr.com.';

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
