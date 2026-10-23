import { ccIntake } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import CcIntro from '../../components/CcIntro/CcIntro';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import styles from './IntakeSection.module.css';

/** "One Patient Intake Workflow": the workflow feature card (with its checklist) and four cards. */
function IntakeSection() {
  const { chip, title, description, feature, cards } = ccIntake;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="cc-intake-title">
      <CcIntro id="cc-intake-title" chip={chip} title={title} description={description} className={styles.intro} />
      <div className={styles.grid}>
        <FeatureCard {...feature} className={styles.feature}>
          <ol className={styles.steps}>
            {feature.steps.map((step, index) => (
              <li key={step.label} className={styles[step.state]}>
                <span className={styles.stepMark} aria-hidden="true">
                  {step.state === 'done' ? '✓' : index + 1}
                </span>
                <span className={styles.stepLabel}>{step.label}</span>
                <span className={styles.stepStatus}>{step.status}</span>
              </li>
            ))}
          </ol>
        </FeatureCard>
        {cards.map((card) => (
          <FeatureCard key={card.title} {...card} />
        ))}
      </div>
    </Section>
  );
}

export default IntakeSection;
