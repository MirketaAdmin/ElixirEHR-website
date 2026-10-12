import { intakeFeatures } from '../../../../data/treatmentCenterSolutions';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import IconFeatureGrid from '../../components/IconFeatureGrid/IconFeatureGrid';
import styles from './IntakeFeaturesSection.module.css';

function IntakeFeaturesSection() {
  return (
    <Section tone="dark" spacing="none" className={styles.section}>
      <h2 className={styles.title}>
        <RichText content={intakeFeatures.title} emphasisClassName={styles.accent} />
      </h2>
      <IconFeatureGrid items={intakeFeatures.items} tone="dark" className={styles.grid} />
    </Section>
  );
}

export default IntakeFeaturesSection;
