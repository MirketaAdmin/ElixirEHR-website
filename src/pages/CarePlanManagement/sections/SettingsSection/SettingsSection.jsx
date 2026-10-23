import { cpSettings } from '../../../../data/carePlanManagement';
import Section from '../../../../components/layout/Section/Section';
import styles from './SettingsSection.module.css';

/** "Care plan management software for every US care setting" — the care settings as labels. */
function SettingsSection() {
  const { title, description, items } = cpSettings;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="cp-settings-title">
      <h2 id="cp-settings-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Section>
  );
}

export default SettingsSection;
