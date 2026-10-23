import { raVendor } from '../../../../data/responsibleAi';
import Section from '../../../../components/layout/Section/Section';
import RaIntro from '../../components/RaIntro/RaIntro';
import styles from './VendorSection.module.css';

/** "Questions to ask any healthcare AI vendor, including us" — eight evaluation points. */
function VendorSection() {
  const { id, chip, title, description, questions } = raVendor;

  return (
    <Section id={id} tone="surface" spacing="none" className={styles.section} aria-labelledby="ra-vendor-title">
      <RaIntro id="ra-vendor-title" chip={chip} title={title} description={description} className={styles.intro} />
      <ol className={styles.grid}>
        {questions.map((item, index) => (
          <li key={item.question} className={styles.card}>
            <p className={styles.head}>
              <span className={styles.badge}>Evaluation Point {String(index + 1).padStart(2, '0')}</span>
              <span className={styles.category}>{item.category}</span>
            </p>
            <h3 className={styles.question}>{item.question}</h3>
            <p className={styles.guidance}>{item.guidance}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default VendorSection;
