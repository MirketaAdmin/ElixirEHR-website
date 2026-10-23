import { ccIntegrations } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import CcIntro from '../../components/CcIntro/CcIntro';
import styles from './IntegrationsSection.module.css';

/** "Telephony, Marketing, & Healthcare Integrations": four groups of integration names. */
function IntegrationsSection() {
  const { chip, title, description, groups } = ccIntegrations;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="cc-integrations-title">
      <CcIntro
        id="cc-integrations-title"
        chip={chip}
        title={title}
        description={description}
        className={styles.intro}
      />
      <div className={styles.grid}>
        {groups.map((group) => (
          <div key={group.title} className={styles.card}>
            <h3 className={styles.title}>
              <img src={group.icon.src} alt="" width={group.icon.size[0]} height={group.icon.size[1]} />
              {group.title}
            </h3>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default IntegrationsSection;
