import { sudCompliance } from '../../../../data/substanceUseDisorder';
import Section from '../../../../components/layout/Section/Section';
import SudIntro from '../../components/SudIntro/SudIntro';
import Part2Cards from '../../components/Part2Cards/Part2Cards';
import styles from './ComplianceSection.module.css';

/** "42 CFR Part 2 Compliance Built Into the Record, Not Bolted On" (dark). */
function ComplianceSection() {
  const { eyebrow, title, description, note } = sudCompliance;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="sud-compliance-title">
      <SudIntro
        id="sud-compliance-title"
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

export default ComplianceSection;
