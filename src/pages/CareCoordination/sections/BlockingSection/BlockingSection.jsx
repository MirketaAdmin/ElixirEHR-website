import { ccBlocking } from '../../../../data/careCoordination';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './BlockingSection.module.css';

/** "Information Blocking: You May Be an Actor" — title and callout left, the explanation right. */
function BlockingSection() {
  const { eyebrow, title, callout, paragraphs } = ccBlocking;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="cc-blocking-title">
      <div className={styles.layout}>
        <div>
          <BhIntro id="cc-blocking-title" eyebrow={eyebrow} title={title} className={styles.intro} />
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

export default BlockingSection;
