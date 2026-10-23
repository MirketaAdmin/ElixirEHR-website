import { useLocation } from 'react-router-dom';
import Section from '../../components/layout/Section/Section';
import Button from '../../components/ui/Button/Button';
import CareNetwork from '../../components/motion/CareNetwork';
import styles from './NotFound.module.css';

/**
 * Shown for any URL without a page — including links to pages that are planned but not built yet
 * (Privacy Policy, Support Center, …). It says so plainly and offers real next steps, instead of
 * silently sending the reader to Home.
 */
function NotFound() {
  const { pathname } = useLocation();

  return (
    <>
      <title>Page not available | Elixir</title>
      <meta name="robots" content="noindex" />
      <Section tone="dark" spacing="none" className={styles.section} containerClassName={styles.inner} data-hero>
        <CareNetwork density={0.8} />
        <p className={styles.code}>Page not available</p>
        <h1 className={styles.title}>This page isn’t available yet</h1>
        <p className={styles.text}>
          There is no page at <code className={styles.path}>{pathname}</code> right now. It may still be in
          preparation. You can head back home or reach the team directly.
        </p>
        <div className={styles.actions}>
          <Button to="/" size="lg">
            Back to Home
          </Button>
          <Button to="/contact-us#contact" variant="ghost" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}

export default NotFound;
