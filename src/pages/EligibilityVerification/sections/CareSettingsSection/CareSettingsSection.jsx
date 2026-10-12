import { careSettings } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import styles from './CareSettingsSection.module.css';

function CareSettingsSection() {
  const { title, description, settings } = careSettings;

  return (
    <Section tone="white" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.settings}>
        {settings.map((setting) => (
          <li key={setting.label} className={styles.setting}>
            <span className={styles.icon}>
              <img src={setting.icon} alt="" width={setting.iconSize[0]} height={setting.iconSize[1]} />
            </span>
            {setting.label}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default CareSettingsSection;
