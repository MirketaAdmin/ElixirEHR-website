import { financialFeatures } from '../../../../data/treatmentCenterSolutions';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import IconFeatureGrid from '../../components/IconFeatureGrid/IconFeatureGrid';
import styles from './FinancialFeaturesSection.module.css';

function FinancialFeaturesSection() {
  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <h2 className={styles.title}>
        <RichText content={financialFeatures.title} emphasisClassName={styles.accent} />
      </h2>
      <IconFeatureGrid items={financialFeatures.items} tone="light" className={styles.grid} />
    </Section>
  );
}

export default FinancialFeaturesSection;
