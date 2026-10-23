import { opRevenue } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import OpIntro from '../../components/OpIntro/OpIntro';
import OpCardGrid from '../../components/OpCardGrid/OpCardGrid';
import styles from './RevenueSection.module.css';

/** Revenue — the intro and a three-column card grid. */
function RevenueSection() {
  const { eyebrow, title, description, items } = opRevenue;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="op-revenuesection-title">
      <OpIntro
        id="op-revenuesection-title"
        accent="yellow"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <OpCardGrid items={items} tone="light" className={styles.grid} />
    </Section>
  );
}

export default RevenueSection;
