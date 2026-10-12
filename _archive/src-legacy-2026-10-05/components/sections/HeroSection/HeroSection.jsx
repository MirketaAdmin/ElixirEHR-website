import Container from '../../layout/Container/Container';
import Button from '../../ui/Button/Button';
import styles from './HeroSection.module.css';
import heroDashboard from '../../../assets/home/hero/elixir-ehr-dashboard-laptop.png';

function SparkleIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8 2l1.6 4.4L14 8l-4.4 1.6L8 14l-1.6-4.4L2 8l4.4-1.6L8 2z"
        fill="currentColor"
      />
      <path
        d="M17 12l1 2.8L20.8 16 18 17l-1 2.8-1-2.8L13.2 16 16 14.8 17 12z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <h1 className={`${styles.headline} display-lg`}>
            The AI-Powered <span className={styles.accent}>EHR</span> Built for Modern Healthcare
            Teams
          </h1>
          <p className={`${styles.subhead} body-lg`}>
            Automate clinical documentation, predict claim denials, and streamline patient care
            with AI-powered clinical workflows that actually learn from your practice.
          </p>
          <div className={styles.ctaRow}>
            <Button as="a" href="/product-tour" variant="ghost">
              Watch Product Tour
            </Button>
            <Button as="a" href="/demo" variant="primary">
              Request a Demo
            </Button>
          </div>
        </div>

        <div className={styles.visual}>
          <img
            src={heroDashboard}
            alt="Elixir EHR dashboard showing patient overview and AI-driven clinical predictions on a laptop"
            className={styles.image}
            width={550}
            height={300}
            loading="eager"
          />
          <div className={styles.statBadge}>
            <div className={styles.statHeader}>
              <SparkleIcon className={styles.statIcon} />
              <span className={`${styles.statEyebrow} label-md`}>AI Insight</span>
            </div>
            <p className={`${styles.statText} body-md`}>
              Documentation accuracy improved by 42%.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
