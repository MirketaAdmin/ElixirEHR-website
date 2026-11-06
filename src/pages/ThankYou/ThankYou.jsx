import Section from '../../components/layout/Section/Section';
import Button from '../../components/ui/Button/Button';
import { PRIVATE_PREVIEW } from '../../config/preview';
import styles from '../NotFound/NotFound.module.css';

export default function ThankYou() {
  return (
    <>
      <title>Contact request | Elixir</title>
      <meta name="robots" content="noindex" />
      <Section tone="dark" spacing="none" className={styles.section} containerClassName={styles.inner} data-hero>
        <h1 className={styles.title}>{PRIVATE_PREVIEW ? 'Confirmation page preview' : 'Thank you for contacting Elixir'}</h1>
        <p className={styles.text}>
          {PRIVATE_PREVIEW
            ? 'This is the confirmation page. Submissions are disabled in this preview; no request has been sent.'
            : 'If you have just submitted the contact form, thank you for your interest. For urgent questions, contact info@elixirehr.com.'}
        </p>
        <div className={styles.actions}><Button to="/" size="lg">Back to Home</Button></div>
      </Section>
    </>
  );
}
