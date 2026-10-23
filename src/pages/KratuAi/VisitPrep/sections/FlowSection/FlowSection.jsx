import { visitPrepFlow } from '../../../../../data/visitPrep';
import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './FlowSection.module.css';

/** "How the Pre-Visit Questionnaire Works": six numbered steps and the colour legend. */
function FlowSection() {
  const { eyebrow, title, description, steps, legend } = visitPrepFlow;

  return (
    <Section id="clinical-flow" tone="surface" spacing="none" className={styles.section} aria-labelledby="vp-flow-title">
      <KrIntro
        id="vp-flow-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="lime"
        align="center"
        className={styles.intro}
      />
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
    </Section>
  );
}

export default FlowSection;
