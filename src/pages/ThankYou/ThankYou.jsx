import Section from '../../components/layout/Section/Section';
import Button from '../../components/ui/Button/Button';
import ResourcesSection from '../../components/sections/ResourcesSection/ResourcesSection';
import { resources } from '../../data/home';
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
        {/* Scrolls down to the latest insights below. */}
        <div className={styles.actions}><Button href="#latest-insights" size="lg">Know More</Button></div>
      </Section>
      {/* The latest insights (newest published posts per category), as on Home. */}
      <div id="latest-insights">
        <ResourcesSection {...resources} />
      </div>
    </>
  );
}
