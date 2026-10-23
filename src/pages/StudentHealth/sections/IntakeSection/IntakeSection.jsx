import { shIntake } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import ShIntro from '../../components/ShIntro/ShIntro';
import ShCards from '../../components/ShCards/ShCards';
import styles from './IntakeSection.module.css';

/** "Referrals and Forms That Arrive From Outside Your Walls" — six raised cards. */
function IntakeSection() {
  const { eyebrow, title, description, items } = shIntake;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sh-intake-title">
      <ShIntro
        id="sh-intake-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ShCards items={items} variant="white" className={styles.grid} />
    </Section>
  );
}

export default IntakeSection;
