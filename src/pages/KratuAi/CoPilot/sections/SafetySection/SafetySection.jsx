import { coPilotSafety } from '../../../../../data/coPilot';
import Section from '../../../../../components/layout/Section/Section';
import RichText from '../../../../../components/ui/RichText/RichText';
import { cn } from '../../../../../utils/cn';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './SafetySection.module.css';

/** "Clinical safety boundary" — what Kratu Co-Pilot drafts versus what only the clinician sends. */
function SafetySection() {
  const { eyebrow, title, description, checkIcon, items } = coPilotSafety;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="cp-safety-title">
      <KrIntro id="cp-safety-title" eyebrow={eyebrow} title={title} description={description} align="center" className={styles.intro} />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={cn(styles.tile, styles[item.icon.tone])}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>
              <RichText content={item.text} emphasisClassName={styles.emphasis} />
            </p>
            <p className={styles.guarantee}>
              <img src={checkIcon.src} alt="" width={checkIcon.size[0]} height={checkIcon.size[1]} />
              {item.guarantee}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default SafetySection;
