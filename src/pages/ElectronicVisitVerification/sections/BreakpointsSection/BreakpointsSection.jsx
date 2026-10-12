import { evvBreakpoints } from '../../../../data/electronicVisitVerification';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './BreakpointsSection.module.css';

/** "The operational reality": five failure points, then the four milestones after a visit. */
function BreakpointsSection() {
  const { eyebrow, title, paragraphs, items, milestones } = evvBreakpoints;
  const lastStep = milestones.steps.length - 1;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="evv-breakpoints">
      <div className={styles.intro}>
        <EyebrowHeading id="evv-breakpoints" eyebrow={eyebrow} title={title} />
        <div className={styles.body}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.tag} className={styles.card}>
            <span className={styles.tag}>{item.tag}</span>
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.milestones}>
        <h3 className={styles.milestonesTitle}>{milestones.title}</h3>
        <ul className={styles.points}>
          {milestones.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <ol className={styles.flow} aria-label="From visit to billable claim">
          {milestones.steps.map((step, index) => (
            <li key={step} className={styles.stepItem}>
              <span className={index === lastStep ? styles.stepFinal : styles.step}>{step}</span>
              {index < lastStep && <Icon name="arrowRight" size={16} className={styles.arrow} />}
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export default BreakpointsSection;
