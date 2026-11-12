import { useCallback, useId, useState } from 'react';
import { weeklyBriefing } from '../../../../data/insights';
import { webToLead } from '../../../../data/webToLead';
import { PRIVATE_PREVIEW, PREVIEW_FORM_NOTICE } from '../../../../config/preview';
import { Recaptcha, WebToLeadFields } from '../../../../components/forms/WebToLead/WebToLead';
import {
  hasRecaptchaResponse,
  NOSCRIPT_MESSAGE,
  REQUIRED_NOTE,
  refreshRequiredFields,
  requiredFieldProps,
  useHydrated,
  useResetOnPageShow,
} from '../../../../components/forms/WebToLead/webToLeadHelpers';
import styles from './WeeklyBriefing.module.css';

// Shown under the button and announced (role="status"). Success is Salesforce's redirect to the
// thank-you page, so there is no client-side success message.
const statusMessages = {
  sending: 'Sending…',
  captcha: 'Please confirm you are not a robot, then subscribe again.',
  expired: 'The verification timed out. Please confirm you are not a robot again, then subscribe.',
  unavailable: 'The verification check could not load. Please email info@elixirehr.com.',
};

/**
 * "The Weekly Briefing" sign-up card in the Insights sidebars: a Salesforce Web-to-Lead form (the
 * Elixir snippet's First Name + Email, with the shared hidden fields and reCAPTCHA). The browser posts
 * it to Salesforce, which redirects to the thank-you page — the same flow as the site's lead forms.
 */
function WeeklyBriefing() {
  const uid = useId();
  const [status, setStatus] = useState('idle');
  const hydrated = useHydrated();
  const markUnavailable = useCallback(() => setStatus('unavailable'), []);
  const markExpired = useCallback(() => setStatus('expired'), []);
  useResetOnPageShow(useCallback(() => setStatus('idle'), []));
  const { fields } = weeklyBriefing;

  // Runs only once the browser's own required/format checks have passed.
  function handleSubmit(event) {
    if (PRIVATE_PREVIEW || status === 'sending' || status === 'unavailable') {
      event.preventDefault();
      return;
    }
    if (!hasRecaptchaResponse(event.currentTarget)) {
      event.preventDefault();
      setStatus('captcha');
      return;
    }
    setStatus('sending');
  }

  return (
    <section id="newsletter" className={styles.card} aria-labelledby={`${uid}-title`}>
      <h2 id={`${uid}-title`} className={styles.title}>
        {weeklyBriefing.title}
      </h2>
      {weeklyBriefing.text.map((line) => (
        <p key={line} className={styles.text}>
          {line}
        </p>
      ))}
      {PRIVATE_PREVIEW && <p role="note">{PREVIEW_FORM_NOTICE}</p>}
      <form
        className={styles.form}
        action={PRIVATE_PREVIEW ? undefined : webToLead.action}
        method="POST"
        onSubmit={handleSubmit}
      >
        {!PRIVATE_PREVIEW && <WebToLeadFields />}
        {!PRIVATE_PREVIEW && <p className={styles.requiredNote}>{REQUIRED_NOTE}</p>}
        {fields.map((field) => {
          const salesforce = webToLead.fields[field.key];
          return (
            <div key={field.key}>
              <label htmlFor={`${uid}-${field.key}`} className="visually-hidden">
                {field.label}
              </label>
              <input
                id={`${uid}-${field.key}`}
                name={salesforce.name}
                maxLength={salesforce.maxLength}
                type={field.type ?? 'text'}
                autoComplete={field.autoComplete}
                placeholder={`${field.placeholder} *`}
                {...requiredFieldProps(field.label)}
                disabled={PRIVATE_PREVIEW}
                className={styles.input}
              />
            </div>
          );
        })}
        {!PRIVATE_PREVIEW && <Recaptcha className={styles.recaptcha} onUnavailable={markUnavailable} onExpired={markExpired} />}
        <button
          type="submit"
          onClick={(event) => refreshRequiredFields(event.currentTarget.form)}
          className={styles.submit}
          disabled={PRIVATE_PREVIEW || !hydrated || status === 'sending' || status === 'unavailable'}
          aria-busy={status === 'sending' || undefined}
        >
          {status === 'sending' ? statusMessages.sending : weeklyBriefing.submitLabel}
        </button>
        {!PRIVATE_PREVIEW && (
          <noscript>
            <p className={styles.status}>{NOSCRIPT_MESSAGE}</p>
          </noscript>
        )}
      </form>
      <p className={`${styles.status} ${status === 'unavailable' || status === 'captcha' || status === 'expired' ? styles.error : ''}`} role="status">
        {status === 'sending' ? '' : (statusMessages[status] ?? '')}
      </p>
    </section>
  );
}

export default WeeklyBriefing;
