import { shCare } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import ShIntro from '../../components/ShIntro/ShIntro';
import ShCards from '../../components/ShCards/ShCards';
import ShNote from '../../components/ShNote/ShNote';
import styles from './CareSection.module.css';

/** "Assessments, Cases and Care Plans" — six cards and the suicide-prevention note. */
function CareSection() {
  const { eyebrow, title, description, items, note } = shCare;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sh-care-title">
      <ShIntro
        id="sh-care-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ShCards items={items} variant="tinted" className={styles.grid} />
      <ShNote note={note} className={styles.note} />
    </Section>
  );
}

export default CareSection;
