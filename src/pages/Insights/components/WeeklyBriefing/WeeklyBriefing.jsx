import { useId, useState } from 'react';
import { weeklyBriefing } from '../../../../data/insights';
import { subscribeToNewsletter } from '../../../../services/newsletterService';
import styles from './WeeklyBriefing.module.css';

// The outcome is shown under the form and announced (role="status"), as on the contact form.
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
    if (status === 'sending') return;
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
    <section id="newsletter" className={styles.card} aria-labelledby={`${emailId}-title`}>
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
        <button
          type="submit"
          className={styles.submit}
          disabled={status === 'sending'}
          aria-busy={status === 'sending' || undefined}
        >
          {status === 'sending' ? 'Subscribing…' : weeklyBriefing.submitLabel}
        </button>
      </form>
      <p className={`${styles.status} ${styles[status] ?? ''}`} role="status">
        {statusMessages[status] ?? ''}
      </p>
    </section>
  );
}

export default WeeklyBriefing;
