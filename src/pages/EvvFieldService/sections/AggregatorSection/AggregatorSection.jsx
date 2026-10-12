import { fsAggregator } from '../../../../data/evvFieldService';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './AggregatorSection.module.css';

function AggregatorSection() {
  const { eyebrow, title, paragraphs, status } = fsAggregator;

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="fs-aggregator">
      <div className={styles.grid}>
        <div>
          <EyebrowHeading id="fs-aggregator" eyebrow={eyebrow} title={title} className={styles.heading} />
          <div className={styles.body}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>{status.title}</h3>
          <ul className={styles.statuses}>
            {status.items.map((item) => (
              <li key={item.title} className={styles.status}>
                <p className={styles.statusTitle}>{item.title}</p>
                <p className={styles.statusText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default AggregatorSection;
