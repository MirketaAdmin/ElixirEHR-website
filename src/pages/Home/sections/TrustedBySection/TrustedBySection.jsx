import { trustedBy } from '../../../../data/home';
import Container from '../../../../components/layout/Container/Container';
import Marquee from '../../../../components/ui/Marquee/Marquee';
import styles from './TrustedBySection.module.css';

function TrustedBySection() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{trustedBy.title}</h2>
        <Marquee duration={trustedBy.marqueeDuration} label="Clinics using Elixir" className={styles.logos}>
          {trustedBy.logos.map((logo) => (
            <img key={logo.name} src={logo.src} alt={logo.name} width={logo.width} height={logo.height} />
          ))}
        </Marquee>
      </Container>
    </section>
  );
}

export default TrustedBySection;
