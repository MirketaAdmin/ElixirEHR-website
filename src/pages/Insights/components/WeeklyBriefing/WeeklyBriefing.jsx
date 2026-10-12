import { useId, useState } from 'react';
import { weeklyBriefing } from '../../../../data/insights';
import { subscribeToNewsletter } from '../../../../services/newsletterService';
import styles from './WeeklyBriefing.module.css';

// No success/error states are designed, so the outcome is announced to assistive tech only
// (as on the contact form).
const statusMessages = {
  sending: 'Subscribing…',
  sent: 'Thank you — you are subscribed to The Weekly Briefing.',
  error: 'Sorry, we could not subscribe you right now. Please try again later.',
};

/** "The Weekly Briefing" sign-up card in the Insights sidebar. */
function WeeklyBriefing() {
  const emailId = useId();
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    try {
      await subscribeToNewsletter(new FormData(form).get('email'));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={styles.card} aria-labelledby={`${emailId}-title`}>
      <h2 id={`${emailId}-title`} className={styles.title}>
        {weeklyBriefing.title}
      </h2>
      <p className={styles.text}>{weeklyBriefing.text}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor={emailId} className="visually-hidden">
          {weeklyBriefing.placeholder}
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={weeklyBriefing.placeholder}
          className={styles.input}
        />
        <button type="submit" className={styles.submit} disabled={status === 'sending'}>
          {weeklyBriefing.submitLabel}
        </button>
      </form>
      <p className="visually-hidden" role="status">
        {statusMessages[status] ?? ''}
      </p>
    </section>
  );
}

export default WeeklyBriefing;
