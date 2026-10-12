import { rcmAiCapabilities } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import aiIcon from '../../../../assets/revenue-cycle-management/icon-predictive-intelligence.png';
import RcmBadge from '../../components/RcmBadge/RcmBadge';
import styles from './RcmAiCapabilitiesSection.module.css';

function RcmAiCapabilitiesSection() {
  const { badge, title, description, capabilities } = rcmAiCapabilities;

  return (
    <Section tone="dark" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <RcmBadge tone="lime" icon={aiIcon} iconSize={[16, 13]}>
        {badge}
      </RcmBadge>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {capabilities.map((capability) => (
          <li key={capability.title} className={cn(styles.card, styles[capability.accent])}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{capability.title}</h3>
              <span className={cn(styles.tag, capability.tagOverflow && styles.tagOverflow)}>
                {capability.tag}
              </span>
            </div>
            <p className={styles.cardText}>{capability.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default RcmAiCapabilitiesSection;
