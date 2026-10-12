import { salesforcePlatform } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import styles from './SalesforcePlatformSection.module.css';

function SalesforcePlatformSection() {
  const { title, description, features, disclaimer } = salesforcePlatform;

  return (
    <Section tone="dark" spacing="none" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {features.map((feature) => (
          <li key={feature.title} className={cn(styles.card, styles[feature.accent])}>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardText}>{feature.description}</p>
          </li>
        ))}
      </ul>
      <p className={styles.disclaimer}>{disclaimer}</p>
    </Section>
  );
}

export default SalesforcePlatformSection;
