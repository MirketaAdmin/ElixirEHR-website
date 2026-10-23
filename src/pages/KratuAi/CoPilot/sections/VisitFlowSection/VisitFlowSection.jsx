import { coPilotVisitFlow } from '../../../../../data/coPilot';
import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './VisitFlowSection.module.css';

/** Feature 01 — "Co-Pilot Visit Flow": six steps, the legend and the (empty) image frame. */
function VisitFlowSection() {
  const { id, eyebrow, title, description, steps, legend, imageAlt } = coPilotVisitFlow;

  return (
    <Section id={id} tone="white" spacing="none" className={styles.section} aria-labelledby="cp-visit-flow-title">
      <KrIntro id="cp-visit-flow-title" eyebrow={eyebrow} title={title} description={description} tone="feature" className={styles.intro} />
      <ol className={styles.grid}>
        {steps.map((step, index) => (
          <li key={step.title} className={cn(styles.card, styles[step.tone])}>
            <p className={styles.head}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <span className={styles.tag}>{step.tag}</span>
            </p>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
      <ul className={styles.legend}>
        {legend.map((item) => (
          <li key={item.label} className={styles[item.tone]}>
            {item.label}
          </li>
        ))}
      </ul>
      <div className={styles.frame}>
        <div className={styles.placeholder} role="img" aria-label={imageAlt} />
      </div>
    </Section>
  );
}

export default VisitFlowSection;
