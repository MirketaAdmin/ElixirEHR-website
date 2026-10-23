import { sudClinical } from '../../../../data/substanceUseDisorder';
import Section from '../../../../components/layout/Section/Section';
import SudIntro from '../../components/SudIntro/SudIntro';
import Part2Cards from '../../components/Part2Cards/Part2Cards';
import styles from './ClinicalSection.module.css';

/**
 * "Clinical Documentation Across Residential, Outpatient and Withdrawal Management" (dark). The
 * frame repeats the six Part 2 cards here, on a tighter grid, followed by the withdrawal note.
 */
function ClinicalSection() {
  const { eyebrow, title, description, note } = sudClinical;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="sud-clinical-title">
      <SudIntro
        id="sud-clinical-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        className={styles.intro}
      />
      <Part2Cards className={styles.cards} />
      <p className={styles.note}>
        <span>{note}</span>
      </p>
    </Section>
  );
}

export default ClinicalSection;
