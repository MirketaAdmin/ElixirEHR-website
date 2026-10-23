import { ppScoring } from '../../../../../data/payorPolicy';
import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import PpIntro from '../../components/PpIntro/PpIntro';
import PpRuleBox from '../../components/PpRuleBox/PpRuleBox';
import styles from './ScoringSection.module.css';

/** "Deterministic checks and probabilistic risk scoring, kept separate" — two lists and the rule over both. */
function ScoringSection() {
  const { eyebrow, title, description, groups, rules } = ppScoring;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="pp-scoring-title">
      <PpIntro
        id="pp-scoring-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
        className={styles.intro}
      />
      <div className={styles.grid}>
        {groups.map((group) => (
          <div key={group.title} className={cn(styles.card, styles[group.tone])}>
            <h3 className={styles.title}>{group.title}</h3>
            <p className={styles.note}>{group.note}</p>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <PpRuleBox {...rules} className={styles.rules} />
    </Section>
  );
}

export default ScoringSection;
