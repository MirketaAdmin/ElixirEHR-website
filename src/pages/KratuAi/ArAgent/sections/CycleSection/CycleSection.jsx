import { arCycle } from '../../../../../data/arAgent';
import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import styles from './CycleSection.module.css';

/** "Kratu AI prepares the work. Your team decides." — the three phases with their numbered steps. */
function CycleSection() {
  const { chip, title, description, phases } = arCycle;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ar-cycle-title">
      <p className={styles.chip}>{chip}</p>
      <h2 id="ar-cycle-title" className={styles.heading}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.phases}>
        {phases.map((phase) => (
          <section key={phase.title} className={cn(styles.phase, styles[phase.tone])} aria-label={phase.title}>
            <div className={styles.phaseHead}>
              <h3 className={styles.phaseTitle}>{phase.title}</h3>
              <p className={styles.note}>{phase.note}</p>
            </div>
            <ol className={styles.steps} style={{ '--steps': phase.steps.length }}>
              {phase.steps.map((step, index) => (
                <li key={`${step.title}-${index}`} className={cn(styles.step, step.team && styles.team)}>
                  <p className={styles.label}>Step {String(index + 1).padStart(2, '0')}</p>
                  <h4 className={styles.title}>{step.title}</h4>
                  <p className={styles.text}>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </Section>
  );
}

export default CycleSection;
