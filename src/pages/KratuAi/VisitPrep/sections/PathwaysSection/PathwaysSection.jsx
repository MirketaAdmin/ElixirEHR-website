import { visitPrepPathways } from '../../../../../data/visitPrep';
import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './PathwaysSection.module.css';

/** "New Patient vs. Returning Patient Flows": the two intake paths side by side. */
function PathwaysSection() {
  const { eyebrow, title, description, flows } = visitPrepPathways;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="vp-pathways-title">
      <KrIntro
        id="vp-pathways-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="lime"
        align="center"
        className={styles.intro}
      />
      <div className={styles.grid}>
        {flows.map((flow) => (
          <article key={flow.title} className={styles.card}>
            <div className={cn(styles.header, styles[flow.tone])}>
              <h3 className={styles.title}>{flow.title}</h3>
              <p className={styles.subtitle}>{flow.subtitle}</p>
              {flow.badge && <span className={styles.badge}>{flow.badge}</span>}
            </div>
            <ol className={styles.steps}>
              {flow.steps.map((step) => (
                <li key={step.label}>
                  <span className={styles.circle} aria-hidden="true" />
                  <p>
                    <strong>{step.label}</strong> {step.text}
                    {step.pill && <span className={cn(styles.pill, styles[step.pill.tone])}>{step.pill.label}</span>}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default PathwaysSection;
