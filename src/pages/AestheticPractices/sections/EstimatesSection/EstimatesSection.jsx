import { aeEstimates } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import AeIntro from '../../components/AeIntro/AeIntro';
import styles from './EstimatesSection.module.css';

/** "Good Faith Estimates: Why a Price Question Starts a Clock" — lead, rule, the trigger callout and Elixir's part. */
function EstimatesSection() {
  const { eyebrow, title, lead, paragraphs, callout } = aeEstimates;
  const [before, after] = paragraphs;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ae-estimates-title">
      <AeIntro id="ae-estimates-title" eyebrow={eyebrow} title={title} description={lead} className={styles.intro} />
      <p className={styles.text}>{before}</p>
      <p className={styles.callout}>
        <img src={callout.icon.src} alt="" width={callout.icon.size[0]} height={callout.icon.size[1]} />
        <span>{callout.text}</span>
      </p>
      <p className={styles.text}>{after}</p>
    </Section>
  );
}

export default EstimatesSection;
