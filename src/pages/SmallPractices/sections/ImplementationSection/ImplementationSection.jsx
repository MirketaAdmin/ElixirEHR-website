import { spImplementation } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import SpIntro from '../../components/SpIntro/SpIntro';
import styles from './ImplementationSection.module.css';

/** "Dedicated Implementation" — four timed steps and the vendor-questions panel. */
function ImplementationSection() {
  const { eyebrow, title, description, steps, questions } = spImplementation;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sp-implementation-title">
      <SpIntro id="sp-implementation-title" eyebrow={eyebrow} title={title} description={description} />
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <div className={styles.head}>
              <span className={styles.chip}>Step {String(index + 1).padStart(2, '0')}</span>
              <span className={styles.when}>{step.when}</span>
            </div>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
            <span className={styles.bar} aria-hidden="true" />
          </li>
        ))}
      </ol>
      <div className={styles.panel}>
        <span className={styles.disc}>
          <img src={questions.icon.src} alt="" width={questions.icon.size[0]} height={questions.icon.size[1]} />
        </span>
        <div>
          <h3 className={styles.panelTitle}>{questions.title}</h3>
          <ul className={styles.items}>
            {questions.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default ImplementationSection;
