import { ccPartners } from '../../../../data/careCoordination';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import CcRows from '../../components/CcRows/CcRows';
import styles from './PartnersSection.module.css';

/** "Sending, Receiving, and Knowing It Arrived" — five rows on the shared row design. */
function PartnersSection() {
  const { eyebrow, title, description, items } = ccPartners;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="cc-partners-title">
      <BhIntro id="cc-partners-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <CcRows items={items} className={styles.rows} />
    </Section>
  );
}

export default PartnersSection;
