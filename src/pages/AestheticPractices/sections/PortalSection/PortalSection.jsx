import { aePortal } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import AeIntro from '../../components/AeIntro/AeIntro';
import AeCards from '../../components/AeCards/AeCards';
import styles from './PortalSection.module.css';

/** "Patient Portal and Secure Communication" — six cards. */
function PortalSection() {
  const { eyebrow, title, description, items } = aePortal;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="ae-portal-title">
      <AeIntro
        id="ae-portal-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <AeCards items={items} variant="plain" className={styles.grid} />
    </Section>
  );
}

export default PortalSection;
