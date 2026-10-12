import { outcomesFeatures } from '../../../../data/treatmentCenterSolutions';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import IconFeatureGrid from '../../components/IconFeatureGrid/IconFeatureGrid';
import styles from './OutcomesFeaturesSection.module.css';

function OutcomesFeaturesSection() {
  return (
    <Section tone="white" spacing="none" className={styles.section}>
      <h2 className={styles.title}>
        <RichText content={outcomesFeatures.title} emphasisClassName={styles.accent} />
      </h2>
      <IconFeatureGrid items={outcomesFeatures.items} tone="dark" className={styles.grid} />
    </Section>
  );
}

export default OutcomesFeaturesSection;
