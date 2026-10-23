import { cpFeatures } from '../../../../data/carePlanManagement';
import Section from '../../../../components/layout/Section/Section';
import styles from './FeaturesSection.module.css';

/** "Care plan software features for US healthcare providers" — twelve feature cards. */
function FeaturesSection() {
  const { title, description, items } = cpFeatures;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="cp-features-title">
      <h2 id="cp-features-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default FeaturesSection;
