import { ppConfidence } from '../../../../../data/payorPolicy';
import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import PpIntro from '../../components/PpIntro/PpIntro';
import PpRuleBox from '../../components/PpRuleBox/PpRuleBox';
import styles from './ConfidenceSection.module.css';

/** "Where a person stays in the loop…" — the three confidence routes and the two fixed rules. */
function ConfidenceSection() {
  const { eyebrow, title, description, levels, rules } = ppConfidence;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="pp-confidence-title">
      <PpIntro
        id="pp-confidence-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {levels.map((level) => (
          <li key={level.label} className={cn(styles.card, styles[level.tone])}>
            <p className={styles.label}>
              <img src={level.icon.src} alt="" width={level.icon.size[0]} height={level.icon.size[1]} />
              {level.label}
            </p>
            <div className={styles.body}>
              <h3 className={styles.title}>{level.title}</h3>
              <p className={styles.text}>{level.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <PpRuleBox {...rules} className={styles.rules} />
    </Section>
  );
}

export default ConfidenceSection;
