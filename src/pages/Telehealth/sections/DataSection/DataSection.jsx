import { thData } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import ThSplit from '../../components/ThSplit/ThSplit';
import styles from './DataSection.module.css';

/** "Seamless Patient Data Collection Before and During the Visit" — four visit phases. */
function DataSection() {
  const { eyebrow, title, description, note, items } = thData;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="th-data-title">
      <ThSplit id="th-data-title" eyebrow={eyebrow} title={title} description={description} note={note}>
        {items.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.head}>
              <p className={styles.label}>{item.label}</p>
              <p className={styles.tag}>{item.tag}</p>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </ThSplit>
    </Section>
  );
}

export default DataSection;
