import { mhCrisis } from '../../../../data/mentalHealth';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './CrisisSection.module.css';

/** "Crisis Services, Safety Planning and Post-Discharge Follow-Up" — five rows with right badges. */
function CrisisSection() {
  const { eyebrow, title, description, items } = mhCrisis;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="mh-crisis-title">
      <BhIntro
        id="mh-crisis-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={styles.row}>
            <div className={styles.body}>
              <div className={styles.head}>
                <span
                  className={cn(styles.chip, styles[item.chipTone])}
                  style={item.chipWidth ? { width: `${item.chipWidth}px` } : undefined}
                >
                  {item.chip}
                </span>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
              <p className={styles.text}>{item.text}</p>
            </div>
            <p className={cn(styles.badge, styles[`badge-${item.badge.tone}`], item.badge.icon && styles.badgeIcon)}>
              {item.badge.icon && (
                <img src={item.badge.icon.src} alt="" width={item.badge.icon.size[0]} height={item.badge.icon.size[1]} />
              )}
              {item.badge.label}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default CrisisSection;
