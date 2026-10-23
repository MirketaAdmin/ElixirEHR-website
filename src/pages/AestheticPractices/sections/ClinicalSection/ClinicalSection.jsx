import { aeClinical } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import AeIntro from '../../components/AeIntro/AeIntro';
import AeCards from '../../components/AeCards/AeCards';
import styles from './ClinicalSection.module.css';

/** "A Complete EHR for Aesthetic Procedures" — six numbered cards. */
function ClinicalSection() {
  const { eyebrow, title, description, items } = aeClinical;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="ae-clinical-title">
      <AeIntro id="ae-clinical-title" eyebrow={eyebrow} title={title} description={description} />
      <AeCards items={items} variant="numbered" className={styles.grid} />
    </Section>
  );
}

export default ClinicalSection;
