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
      <input ref={settingsRef} type="hidden" name="captcha_settings" defaultValue={settings('')} />
      <input type="hidden" name="oid" value={webToLead.orgId} />
      <input type="hidden" name="retURL" value={webToLead.returnUrl} />
      <input type="hidden" name="lead_source" value={webToLead.leadSource} />
    </>
  );
}

// Google's script is loaded once, on the first form that needs it, and widgets are rendered
// explicitly (the automatic render only finds widgets present when the script first loads).
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

/** The reCAPTCHA checkbox. `onUnavailable` is called if Google's script cannot be loaded. */
export function Recaptcha({ className, onUnavailable }) {
  const ref = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadRecaptcha()
      .then((grecaptcha) => {
        const element = ref.current;
        if (cancelled || !element || element.childElementCount > 0) return;
        grecaptcha.render(element, { sitekey: webToLead.captcha.siteKey });
      })
      .catch(() => !cancelled && onUnavailable?.());
    return () => {
      cancelled = true;
    };
  }, [onUnavailable]);

  return <div ref={ref} className={className} />;
}
