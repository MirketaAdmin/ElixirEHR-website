import { Fragment } from 'react';
import { noShowProblem } from '../../../../data/patientNoShowPrediction';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import SectionIntro from '../../components/SectionIntro/SectionIntro';
import styles from './ProblemSection.module.css';

/** "The problem": heading, pull quote and the study benchmark card beside the cited explanation. */
function ProblemSection() {
  const { chip, title, quote, stat, paragraphs, source } = noShowProblem;

  return (
    <Section tone="white" spacing="none" className={styles.section} containerClassName={styles.layout}>
      <div className={styles.left}>
        <SectionIntro id="ns-problem-title" chip={chip} chipTone="outlined" title={title} className={styles.intro} />
        <blockquote className={styles.quote}>
          <p>{quote}</p>
        </blockquote>
        <div className={styles.stat}>
          <p className={styles.statLabel}>{stat.label}</p>
          <p className={styles.statValue}>
            {stat.value}
            <span className={styles.statCaption}>{stat.caption}</span>
          </p>
          <p className={styles.statDetails}>
            {stat.details.map((detail, index) => (
              <Fragment key={detail.label}>
                {index > 0 && (
                  <span className={styles.dot} aria-hidden="true">
                    ·
                  </span>
                )}
                <span className={detail.accent ? styles.accent : undefined}>
                  {detail.label}
                  {detail.value && <strong> {detail.value}</strong>}
                </span>
              </Fragment>
            ))}
          </p>
        </div>
      </div>

      <div className={styles.right}>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            <RichText content={paragraph} emphasisClassName={styles.highlight} />
          </p>
        ))}
        <p className={styles.source}>
          <RichText content={source} linkClassName={styles.sourceLink} />
        </p>
      </div>
    </Section>
  );
}

export default ProblemSection;
