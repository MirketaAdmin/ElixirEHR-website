import Container from '../../layout/Container/Container';
import Button from '../../ui/Button/Button';
import exploreSolutionIcon from '../../../assets/home/cta/explore-solution-icon.png';
import personalizedDemoIcon from '../../../assets/home/cta/personalized-demo-icon.png';
import styles from './ConversionCTASection.module.css';

function ConversionCTASection() {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.card + ' ' + styles.dark}>
          <span className={styles.icon}>
            <img src={exploreSolutionIcon} alt="" width={28} height={28} />
          </span>
          <h3 className={`${styles.title} headline-md`}>Explore our AI-powered solution</h3>
          <p className={`${styles.description} body-md`}>
            Discover how our clinical-grade AI engine can transform your patient experience and
            operational efficiency.
          </p>
          <Button as="a" href="/platform" variant="tertiary" className={styles.cta}>
            How Elixir Works
          </Button>
        </div>

        <div className={styles.card + ' ' + styles.light}>
          <span className={styles.icon}>
            <img src={personalizedDemoIcon} alt="" width={28} height={28} />
          </span>
          <h3 className={`${styles.title} headline-md`}>Get a personalized Elixir demo</h3>
          <p className={`${styles.description} body-md`}>
            Ready to see Elixir in action? Book a session with our specialists to see a tailored
            walkthrough for your specific clinical needs.
          </p>
          <Button as="a" href="/demo" variant="outline" className={styles.cta}>
            Schedule a demo today
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default ConversionCTASection;
