import Container from '../../layout/Container/Container';
import LogoStrip from '../../ui/LogoStrip/LogoStrip';
import { trustedLogos } from '../../../data/trustedLogos';
import styles from './TrustedBySection.module.css';

function TrustedBySection() {
  return (
    <section className={styles.section}>
      <Container>
        <p className={`${styles.heading} headline-sm`}>
          Trusted by more than 1,200 Clinics Worldwide
        </p>
        <LogoStrip logos={trustedLogos} />
      </Container>
    </section>
  );
}

export default TrustedBySection;
