import { ppProblem } from '../../../../../data/payorPolicy';
import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import PpIntro from '../../components/PpIntro/PpIntro';
import styles from './ProblemSection.module.css';

/** "Why claims get denied…" — the problem, the three stages that answer it, and the summary line. */
function ProblemSection() {
  const { id, eyebrow, title, description, stages, quote } = ppProblem;

  return (
    <Section id={id} tone="surface" spacing="none" className={styles.section} aria-labelledby="pp-problem-title">
      <PpIntro id="pp-problem-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <ul className={styles.grid}>
        {stages.map((stage) => (
          <li key={stage.label} className={cn(styles.card, styles[stage.tone])}>
            <p className={styles.label}>{stage.label}</p>
            <h3 className={styles.title}>{stage.title}</h3>
            <p className={styles.text}>{stage.text}</p>
            <a href={stage.link.href} className={styles.link}>
              {stage.link.label} <span aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.quote}>{quote}</p>
    </Section>
  );
}

export default ProblemSection;
