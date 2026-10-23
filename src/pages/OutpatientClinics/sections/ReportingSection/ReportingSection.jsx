import { opReporting } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import OpIntro from '../../components/OpIntro/OpIntro';
import OpCardGrid from '../../components/OpCardGrid/OpCardGrid';
import styles from './ReportingSection.module.css';

/** Reporting — the intro and a three-column card grid. */
function ReportingSection() {
  const { eyebrow, title, description, items } = opReporting;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="op-reportingsection-title">
      <OpIntro
        id="op-reportingsection-title"
        accent="yellow"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <OpCardGrid items={items} tone="white" className={styles.grid} />
    </Section>
  );
}

export default ReportingSection;
