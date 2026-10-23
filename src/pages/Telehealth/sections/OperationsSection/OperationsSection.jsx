import { thOperations } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import ThSplit from '../../components/ThSplit/ThSplit';
import styles from './OperationsSection.module.css';

/** "Higher Staff Productivity With In-Visit Workflows" — four ops-flow cards. */
function OperationsSection() {
  const { eyebrow, title, description, note, items } = thOperations;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="th-operations-title">
      <ThSplit
        id="th-operations-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        note={note}
        noteTone="green"
      >
        {items.map((item) => (
          <article key={item.title} className={styles.card}>
            <p className={styles.label}>{item.label}</p>
            <h3 className={styles.title}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
              {item.title}
            </h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </ThSplit>
    </Section>
  );
}

export default OperationsSection;
