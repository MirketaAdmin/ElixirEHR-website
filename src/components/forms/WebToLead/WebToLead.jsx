import { useEffect, useRef } from 'react';
import { webToLead } from '../../../data/webToLead';
import { hasRecaptchaResponse } from './webToLeadHelpers';

/**
 * Building blocks for the site's Salesforce Web-to-Lead forms (the supplied Web-to-Lead HTML,
 * adapted for React). A lead form is a plain `<form action={webToLead.action} method="POST">` that
 * renders <WebToLeadFields /> and <Recaptcha /> inside it; the browser posts it to Salesforce,
 * which redirects to the return URL. Nothing is faked: there is no client-side "success".
 */

const settings = (ts) =>
  JSON.stringify({ keyname: webToLead.captcha.keyName, fallback: 'true', orgId: webToLead.orgId, ts });

/**
 * The hidden inputs from the supplied code. As in Salesforce's own snippet, `captcha_settings`
 * carries a timestamp refreshed every 500ms until the reCAPTCHA has been answered.
 *
 * `captcha_settings` is deliberately given no `value`/`defaultValue` prop: it is written only by the
 * effect below. React re-applies `defaultValue` on every re-render, and on a hidden input that IS the
 * value, so the re-render triggered by the submit handler (status "sending") used to reset `ts` to ""
 * just before the browser built the POST body (CONTACT_US_FIX_V2_FINDINGS.md, finding W2-a).
 */
export function WebToLeadFields() {
  const settingsRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const input = settingsRef.current;
      if (input && !hasRecaptchaResponse(input.form)) input.value = settings(JSON.stringify(Date.now()));
    };
    tick();
    const timer = setInterval(tick, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <input ref={settingsRef} type="hidden" name="captcha_settings" />
      <input type="hidden" name="oid" value={webToLead.orgId} />
      <input type="hidden" name="retURL" value={webToLead.returnUrl} />
      <input type="hidden" name="lead_source" value={webToLead.leadSource} />
    </>
  );
}

// Google's script is loaded once, on the first form that needs it, and widgets are rendered
// explicitly (the automatic render only finds widgets present when the script first loads).
// If Google never calls back (script blocked or hanging), the form reports itself unavailable
// after this long instead of waiting for ever.
const RECAPTCHA_LOAD_TIMEOUT_MS = 15000;
let scriptPromise;
function loadRecaptcha() {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      window.onElixirRecaptchaLoad = () => resolve(window.grecaptcha);
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?onload=onElixirRecaptchaLoad&render=explicit';
      script.async = true;
      script.onerror = () => {
        scriptPromise = undefined;
        reject(new Error('reCAPTCHA failed to load'));
      };
      document.head.appendChild(script);
    });
  }
  return scriptPromise;
}

// The shared promise is kept (the script may still arrive and serve later forms); only this
// caller stops waiting.
function loadRecaptchaWithTimeout() {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error('reCAPTCHA load timed out')), RECAPTCHA_LOAD_TIMEOUT_MS);
  });
  return Promise.race([loadRecaptcha(), timeout]).finally(() => clearTimeout(timer));
}

/**
 * The reCAPTCHA checkbox. `onUnavailable` is called if Google's script cannot be loaded, and
 * `onExpired` when an answered check times out (about two minutes) and has to be ticked again.
 */
export function Recaptcha({ className, onUnavailable, onExpired }) {
  const ref = useRef(null);
  const widgetId = useRef(null);
  // Read through refs so a new callback from the parent never re-runs the render effect.
  const expiredRef = useRef(onExpired);
  expiredRef.current = onExpired;
  const unavailableRef = useRef(onUnavailable);
  unavailableRef.current = onUnavailable;

  useEffect(() => {
    let cancelled = false;
    loadRecaptchaWithTimeout()
      .then((grecaptcha) => {
        const element = ref.current;
        if (cancelled || !element || element.childElementCount > 0) return;
        widgetId.current = grecaptcha.render(element, {
          sitekey: webToLead.captcha.siteKey,
          'expired-callback': () => expiredRef.current?.(),
        });
      })
      .catch(() => !cancelled && unavailableRef.current?.());
    return () => {
      cancelled = true;
    };
  }, []);

  // Back from Salesforce's redirect, the browser may restore this page with the already-used answer
  // still in the widget; Salesforce rejects a reused answer, so the check is cleared to be ticked again.
  useEffect(() => {
    const onPageShow = (event) => {
      if (event.persisted && widgetId.current !== null) window.grecaptcha?.reset(widgetId.current);
    };
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  return <div ref={ref} className={className} />;
}
