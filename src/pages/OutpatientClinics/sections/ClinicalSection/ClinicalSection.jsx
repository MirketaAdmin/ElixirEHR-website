import { opClinical } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import OpIntro from '../../components/OpIntro/OpIntro';
import OpCardGrid from '../../components/OpCardGrid/OpCardGrid';
import styles from './ClinicalSection.module.css';

/** Clinical — the intro and a three-column card grid. */
function ClinicalSection() {
  const { eyebrow, title, description, items } = opClinical;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="op-clinicalsection-title">
      <OpIntro
        id="op-clinicalsection-title"
        accent="yellow"
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <OpCardGrid items={items} tone="light" className={styles.grid} />
    </Section>
  );
}

export default ClinicalSection;
