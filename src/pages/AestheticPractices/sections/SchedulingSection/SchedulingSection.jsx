import { aeScheduling } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import AeIntro from '../../components/AeIntro/AeIntro';
import AeCards from '../../components/AeCards/AeCards';
import styles from './SchedulingSection.module.css';

/** "Smart Scheduling for Providers, Rooms and Devices" — six cards with lavender icon discs. */
function SchedulingSection() {
  const { eyebrow, title, description, items } = aeScheduling;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ae-scheduling-title">
      <AeIntro id="ae-scheduling-title" eyebrow={eyebrow} title={title} description={description} />
      <AeCards items={items} variant="disc" className={styles.grid} />
    </Section>
  );
}

export default SchedulingSection;
