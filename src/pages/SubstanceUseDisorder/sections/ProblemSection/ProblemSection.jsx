import { sudProblem } from '../../../../data/substanceUseDisorder';
import Section from '../../../../components/layout/Section/Section';
import SudIntro from '../../components/SudIntro/SudIntro';
import styles from './ProblemSection.module.css';

/** "Running ASAM 3rd and 4th Edition Side by Side" — title and callout left, copy right. */
function ProblemSection() {
  const { eyebrow, title, callout, paragraphs } = sudProblem;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sud-problem-title">
      <div className={styles.layout}>
        <div>
          <SudIntro id="sud-problem-title" eyebrow={eyebrow} title={title} className={styles.intro} />
          <p className={styles.callout}>{callout}</p>
        </div>
        <div className={styles.copy}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ProblemSection;
