import { pcScrubbing } from '../../../../data/claimPreparation';
import Section from '../../../../components/layout/Section/Section';
import PcSplit from '../../components/PcSplit/PcSplit';
import styles from './ScrubbingSection.module.css';

function ScrubbingSection() {
  const { title, description, rules, frame } = pcScrubbing;

  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <PcSplit frame={frame} className={styles.split}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <ul className={styles.rules}>
          {rules.map((rule) => (
            <li key={rule.title} className={styles.rule}>
              <h3 className={styles.ruleTitle}>{rule.title}</h3>
              <p className={styles.ruleText}>{rule.text}</p>
            </li>
          ))}
        </ul>
      </PcSplit>
    </Section>
  );
}

export default ScrubbingSection;
