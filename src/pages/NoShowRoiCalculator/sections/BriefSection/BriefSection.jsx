import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { roiBrief } from '../../../../data/noShowRoiCalculator';
import { webToLead } from '../../../../data/webToLead';
import Section from '../../../../components/layout/Section/Section';
import { Recaptcha, WebToLeadFields } from '../../../../components/forms/WebToLead/WebToLead';
import { hasRecaptchaResponse, useResetOnPageShow } from '../../../../components/forms/WebToLead/webToLeadHelpers';
import RoiIntro from '../../components/RoiIntro/RoiIntro';
import { computeRoi } from '../../roiModel';
import styles from './BriefSection.module.css';

// No states are designed; success is Salesforce's redirect to the thank-you page.
const statusMessages = {
  sending: 'Sending your request…',
  captcha: 'Please confirm you are not a robot, then submit again.',
  unavailable: 'The verification check could not load. Please email info@elixirehr.com.',
};

/** Splits "Dr. Sarah Jenkins" into Salesforce's first ("Dr. Sarah") and last ("Jenkins") name. */
function splitName(fullName) {
  const parts = fullName.trim().split(/\s+/);
  const last = parts.pop() ?? '';
  return { first: parts.join(' '), last };
}

/**
 * "Get This ROI Model Delivered as an Executive Summary": a Salesforce Web-to-Lead form. The visible
 * fields keep the frame's design; on submit the full name is split into first/last name, and the
 * request, title/role and the calculator's current inputs and results go into the lead's
 * description (the supplied Web-to-Lead form has no separate fields for them).
 */
function BriefSection({ inputs }) {
  const { eyebrow, title, description, fields, submitLabel, note } = roiBrief;
  const [status, setStatus] = useState('idle');
  const hidden = useRef({});
  const markUnavailable = useCallback(() => setStatus('unavailable'), []);
  useResetOnPageShow(useCallback(() => setStatus('idle'), []));

  function handleSubmit(event) {
    const form = event.currentTarget;
    if (status === 'sending' || status === 'unavailable') {
      event.preventDefault();
      return;
    }
    if (!hasRecaptchaResponse(form)) {
      event.preventDefault();
      setStatus('captcha');
      return;
    }
    // Filled before the browser builds the POST body, which happens after this handler.
    // Full Name and Title / Role have no Salesforce field of their own, so they are read here and
    // not posted under their own names.
    const value = (key) => form.querySelector(`#roi-brief-${key}`)?.value.trim() ?? '';
    const values = { fullName: value('fullName'), role: value('role') };
    const name = splitName(values.fullName);
    hidden.current.first.value = name.first;
    hidden.current.last.value = name.last;
    hidden.current.description.value = [
      'Request: No-Show ROI executive summary',
      values.role ? `Title / role: ${values.role}` : null,
      `Calculator inputs: ${JSON.stringify(inputs)}`,
      `Calculator results: ${JSON.stringify(computeRoi(inputs))}`,
    ]
      .filter(Boolean)
      .join('\n');
    setStatus('sending');
  }

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="roi-brief-title">
      <RoiIntro id="roi-brief-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <form className={styles.form} action={webToLead.action} method="POST" onSubmit={handleSubmit}>
        <WebToLeadFields />
        <input ref={(el) => (hidden.current.first = el)} type="hidden" name="first_name" />
        <input ref={(el) => (hidden.current.last = el)} type="hidden" name="last_name" />
        <input ref={(el) => (hidden.current.description = el)} type="hidden" name="description" />
        <div className={styles.fields}>
          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={`roi-brief-${field.name}`} className={styles.label}>
                {field.label}
              </label>
              <input
                id={`roi-brief-${field.name}`}
                name={field.salesforceName}
                maxLength={field.maxLength}
                type={field.type ?? 'text'}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                required={field.required}
                className={styles.control}
              />
            </div>
          ))}
        </div>
        <Recaptcha className={styles.recaptcha} onUnavailable={markUnavailable} />
        <button
          type="submit"
          className={styles.submit}
          disabled={status === 'sending' || status === 'unavailable'}
          aria-busy={status === 'sending' || undefined}
        >
          {status === 'sending' ? 'Sending…' : submitLabel}
        </button>
        <p className={styles.note}>
          {note.before}
          <Link to={note.to}>{note.link}</Link>
          {note.after}
        </p>
        <p className={status === 'sending' ? 'visually-hidden' : styles.status} role="status">
          {statusMessages[status] ?? ''}
        </p>
      </form>
    </Section>
  );
}

export default BriefSection;
