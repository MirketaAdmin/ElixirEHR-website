import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../../../data/contact';
import { webToLead } from '../../../data/webToLead';
import { cn } from '../../../utils/cn';
import { Recaptcha, WebToLeadFields } from '../../forms/WebToLead/WebToLead';
import { hasRecaptchaResponse, useResetOnPageShow } from '../../forms/WebToLead/webToLeadHelpers';
import Icon from '../../ui/Icon/Icon';
import styles from './ContactForm.module.css';

// Shown under the button and announced (role="status"). Success is Salesforce's redirect to the
// thank-you page, so there is no client-side success message.
const statusMessages = {
  sending: 'Sending your request…',
  captcha: 'Please confirm you are not a robot, then submit again.',
  unavailable: (
    <>
      The verification check could not load, so the form cannot be sent right now. Please email{' '}
      <a href="mailto:info@elixirehr.com">info@elixirehr.com</a>.
    </>
  ),
};

/**
 * The approved Contact Us form, used site-wide (Contact Us, About Us, What Is Elixir, Referral
 * Program, Contact Center, EVV for Field Service, ONC MFA, Elixir Certified Module). It is a
 * Salesforce Web-to-Lead form: each field posts under its Salesforce name (data/webToLead.js) with
 * the supplied hidden inputs and reCAPTCHA, and the browser goes to Salesforce, which redirects to
 * the thank-you page.
 *
 * `intro` renders inside the card above the fields; `className` applies a frame's card sizing.
 * Optional `fieldNames` (subset and order of the shared fields), `fieldOverrides`
 * ({ [name]: { label?, placeholder?, required?, wide? } }), `submitLabel`, `consent`
 * ({ before, link, to, after }) and `showConsent` let a frame trim or relabel the same form.
 */
function ContactForm({ intro, fieldNames, fieldOverrides, submitLabel, consent, showConsent = true, className }) {
  const [status, setStatus] = useState('idle');
  const { form } = contact;
  const fields = (
    fieldNames ? fieldNames.map((name) => form.fields.find((field) => field.name === name)) : form.fields
  ).map((field) => ({ ...field, ...fieldOverrides?.[field.name] }));
  const consentCopy = consent ?? form.consent;
  const markUnavailable = useCallback(() => setStatus('unavailable'), []);
  useResetOnPageShow(useCallback(() => setStatus('idle'), []));

  // Runs only once the browser's own required/email validation has passed. Unless something is
  // missing, the native POST to Salesforce goes ahead.
  function handleSubmit(event) {
    if (status === 'sending' || status === 'unavailable') {
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
    <form className={cn(styles.form, className)} action={webToLead.action} method="POST" onSubmit={handleSubmit}>
      <WebToLeadFields />
      {intro}
      <div className={styles.fields}>
        {fields.map((field) => {
          const id = `contact-${field.name}`;
          const salesforce = webToLead.fields[field.name];
          const Control = field.multiline ? 'textarea' : 'input';
          return (
            <div key={field.name} className={cn(styles.field, field.wide && styles.wide)}>
              <label htmlFor={id} className={styles.label}>
                {field.label}
              </label>
              <Control
                id={id}
                name={salesforce.name}
                maxLength={salesforce.maxLength}
                type={field.multiline ? undefined : field.type ?? 'text'}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                required={field.required}
                className={cn(styles.control, field.multiline && styles.textarea)}
              />
            </div>
          );
        })}
      </div>
      <Recaptcha className={styles.recaptcha} onUnavailable={markUnavailable} />
      <button
        type="submit"
        className={styles.submit}
        disabled={status === 'sending' || status === 'unavailable'}
        aria-busy={status === 'sending' || undefined}
      >
        {status === 'sending' ? 'Sending…' : (submitLabel ?? form.submitLabel)}
        <Icon name="arrowRight" />
      </button>
      {showConsent && (
        <p className={styles.consent}>
          {consentCopy.before}
          <Link to={consentCopy.to}>{consentCopy.link}</Link>
          {consentCopy.after}
        </p>
      )}
      <p className={cn(styles.status, styles[status])} role="status">
        {statusMessages[status] ?? ''}
      </p>
    </form>
  );
}

export default ContactForm;
