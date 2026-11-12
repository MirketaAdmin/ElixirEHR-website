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

/** Shown above every lead form's fields; each label carries a matching asterisk. */
export const REQUIRED_NOTE = '* All fields are required.';

// Phone numbers: 7–15 digits, optionally with a leading +, spaces, dashes, dots or brackets.
// `PHONE_PATTERN` is the HTML pattern (characters escaped for the browser's `v`-flag regex).
export const PHONE_PATTERN = String.raw`\+?[0-9 \(\)\.\-]{7,24}`;
const phoneDigits = (value) => value.replace(/\D/g, '').length;

/** The friendly message for a field's current problem ('' when it is valid). */
function fieldProblem(el, label) {
  const name = label.replace(/\s*\*\s*$/, '');
  const value = el.value;
  if (!value.trim()) return `Please fill in “${name}”.`;
  if (el.type === 'email' && (el.validity.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()))) {
    return 'Please enter a valid email address, for example name@hospital.com.';
  }
  if (el.type === 'tel' && (el.validity.patternMismatch || phoneDigits(value) < 7 || phoneDigits(value) > 15)) {
    return 'Please enter a valid phone number (7–15 digits; +, spaces, dashes and brackets are allowed).';
  }
  if (el.validity.tooLong) return `${name} is too long.`;
  return '';
}

/**
 * Validation for a required lead-form field, on top of the browser's own checks: the field counts as
 * empty when it holds only spaces, email and phone formats are checked, and the browser shows a
 * clear message for the field (Please fill in “Work Email”.). Spread onto the input/textarea.
 */
export function requiredFieldProps(label) {
  const check = (el) => el.setCustomValidity(fieldProblem(el, label));
  return {
    required: true,
    'data-required-label': label,
    onInput: (event) => check(event.currentTarget),
    onChange: (event) => check(event.currentTarget),
    onInvalid: (event) => check(event.currentTarget),
    onBlur: (event) => check(event.currentTarget),
  };
}

/**
 * Re-checks every required field of `form` right before the browser validates it. Put on the submit
 * button's onClick (Enter in a field also "clicks" it), so a value filled in without an input event
 * (some autofill) never keeps a stale message that would block a valid form.
 */
export function refreshRequiredFields(form) {
  for (const el of form?.querySelectorAll('[data-required-label]') ?? []) {
    el.setCustomValidity(fieldProblem(el, el.dataset.requiredLabel));
  }
}
