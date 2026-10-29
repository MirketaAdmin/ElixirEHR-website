import { vbTransitions } from '../../../../data/valueBasedCare';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import VbIntro from '../../components/VbIntro/VbIntro';
import styles from './TransitionsSection.module.css';

/** "Closing the Loop…": five stacked rows, each a coloured tag beside a title and its explanation. */
function TransitionsSection() {
  const { eyebrow, title, description, steps } = vbTransitions;

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="vb-transitions">
      <VbIntro id="vb-transitions" eyebrow={eyebrow} title={title} description={description} />
      <ol className={styles.list}>
        {steps.map((step) => (
          <li key={step.tag} className={styles.row}>
            <span className={cn(styles.tag, styles[step.tone])}>{step.tag}</span>
            <div className={styles.body}>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default TransitionsSection;
