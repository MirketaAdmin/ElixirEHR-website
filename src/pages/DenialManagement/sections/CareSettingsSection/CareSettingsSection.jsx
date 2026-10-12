import { dmCareSettings } from '../../../../data/denialManagement';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import DmSectionHeading from '../../components/DmSectionHeading/DmSectionHeading';
import styles from './CareSettingsSection.module.css';

function CareSettingsSection() {
  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <DmSectionHeading
        title={dmCareSettings.title}
        description={dmCareSettings.description}
        className={styles.heading}
      />
      <ul className={styles.pills}>
        {dmCareSettings.settings.map((setting) => (
          <li key={setting.label} className={cn(styles.pill, setting.highlighted && styles.highlighted)}>
            <img src={setting.icon.src} alt="" width={setting.icon.width} height={setting.icon.height} />
            {setting.label}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default CareSettingsSection;
