import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../../../data/contact';
import { cn } from '../../../utils/cn';
import { submitContactRequest } from '../../../services/contactService';
import Icon from '../../ui/Icon/Icon';
import styles from './ContactForm.module.css';

// No success/error states are designed, so the outcome is announced to assistive tech only.
const statusMessages = {
  sending: 'Sending your request…',
  sent: 'Thank you — your request has been sent.',
  error: 'Sorry, your request could not be sent. Please email info@elixirehr.com.',
};

/**
 * The approved Contact Us form (About Us, What Is Elixir, Contact Us). Submits through
 * services/contactService. `intro` renders inside the card above the fields (Contact Us page);
 * `className` lets a page apply its frame's card sizing. Optional `fieldNames` (subset and order of
 * the shared fields), `submitLabel` and `showConsent` cover frames that trim the form.
 */
function ContactForm({ intro, fieldNames, submitLabel, showConsent = true, className }) {
  const [status, setStatus] = useState('idle');
  const { form } = contact;
  const fields = fieldNames
    ? fieldNames.map((name) => form.fields.find((field) => field.name === name))
    : form.fields;

  async function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus('sending');
    try {
      await submitContactRequest(Object.fromEntries(new FormData(formElement)));
      formElement.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className={cn(styles.form, className)} onSubmit={handleSubmit}>
      {intro}
      <div className={styles.fields}>
        {fields.map((field) => {
          const id = `contact-${field.name}`;
          const Control = field.multiline ? 'textarea' : 'input';
          return (
            <div key={field.name} className={cn(styles.field, field.wide && styles.wide)}>
              <label htmlFor={id} className={styles.label}>
                {field.label}
              </label>
              <Control
                id={id}
                name={field.name}
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
      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {submitLabel ?? form.submitLabel}
        <Icon name="arrowRight" />
      </button>
      {showConsent && (
        <p className={styles.consent}>
          {form.consent.before}
          <Link to={form.consent.to}>{form.consent.link}</Link>
          {form.consent.after}
        </p>
      )}
      <p className="visually-hidden" role="status">
        {statusMessages[status] ?? ''}
      </p>
    </form>
  );
}

export default ContactForm;
