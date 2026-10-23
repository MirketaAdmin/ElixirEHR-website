import { roiBenchmark } from '../../../../data/noShowRoiCalculator';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import RoiIntro from '../../components/RoiIntro/RoiIntro';
import styles from './BenchmarkSection.module.css';

/** "What Is a Normal Patient No-Show Rate?": the benchmark lead beside the study notes. */
function BenchmarkSection() {
  const { eyebrow, title, lead, paragraphs, source } = roiBenchmark;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="roi-benchmark-title">
      <div className={styles.layout}>
        <div>
          <RoiIntro id="roi-benchmark-title" eyebrow={eyebrow} title={title} className={styles.intro} />
          <p className={styles.lead}>{lead}</p>
        </div>
        <div>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              <RichText content={paragraph} />
            </p>
          ))}
          <p className={styles.source}>
            <RichText content={source} />
          </p>
        </div>
      </div>
    </Section>
  );
}

export default BenchmarkSection;
