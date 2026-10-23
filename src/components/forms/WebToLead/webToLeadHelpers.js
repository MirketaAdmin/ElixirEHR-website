import { useEffect } from 'react';

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
