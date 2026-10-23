import { mhTelehealth } from '../../../../data/mentalHealth';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './TelehealthSection.module.css';

/** "Telehealth for Mental Health" — one white panel with the two rule periods side by side. */
function TelehealthSection() {
  const { eyebrow, title, intro, periods, permanent, sources } = mhTelehealth;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="mh-telehealth-title">
      <BhIntro id="mh-telehealth-title" eyebrow={eyebrow} title={title} className={styles.intro} />
      <div className={styles.panel}>
        <p className={styles.lead}>{intro}</p>
        <div className={styles.periods}>
          {periods.map((period) => (
            <div key={period.title} className={styles.period}>
              <h3 className={cn(styles.periodTitle, styles[period.tone])}>{period.title}</h3>
              <p className={styles.periodText}>{period.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.lead}>{permanent}</p>
        <p className={styles.sources}>{sources}</p>
      </div>
    </Section>
  );
}

export default TelehealthSection;
