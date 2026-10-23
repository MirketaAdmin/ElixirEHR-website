import { cpPlatform } from '../../../../data/carePlanManagement';
import Section from '../../../../components/layout/Section/Section';
import styles from './PlatformSection.module.css';

/** "Built on Salesforce, ready for US care teams" (dark) — four points on lime top rules. */
function PlatformSection() {
  const { title, description, items } = cpPlatform;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="cp-platform-title">
      <h2 id="cp-platform-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.item}>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default PlatformSection;
