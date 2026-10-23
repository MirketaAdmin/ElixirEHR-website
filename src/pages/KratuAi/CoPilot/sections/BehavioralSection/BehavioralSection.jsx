import { coPilotBehavioral } from '../../../../../data/coPilot';
import Section from '../../../../../components/layout/Section/Section';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './BehavioralSection.module.css';

/** "Kratu Co-Pilot for behavioral health documentation" — copy ahead of the FAQ (same band colour). */
function BehavioralSection() {
  const { eyebrow, title, paragraphs, note } = coPilotBehavioral;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="cp-behavioral-title">
      <KrIntro id="cp-behavioral-title" eyebrow={eyebrow} title={title} tone="feature" className={styles.intro} />
      <div className={styles.copy}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className={styles.note}>{note}</p>
    </Section>
  );
}

export default BehavioralSection;
