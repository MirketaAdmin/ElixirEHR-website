import { aeFaq } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import styles from './FaqCardsSection.module.css';

/**
 * FAQ as this frame draws it: a small "Questions" eyebrow, left-aligned title and intro, then every
 * answer open in white cards with a lime top edge — the first half of the questions down the left
 * column, the rest down the right (each column stacks at its own pace).
 */
function FaqCardsSection() {
  const { eyebrow, title, description, items } = aeFaq;
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ae-faq-title">
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id="ae-faq-title" className={styles.title}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.grid}>
        {columns.map((column, index) => (
          <ul key={index} className={styles.list}>
            {column.map((item) => (
              <li key={item.question} className={styles.card}>
                <h3 className={styles.question}>{item.question}</h3>
                <p className={styles.answer}>{item.answer}</p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Section>
  );
}

export default FaqCardsSection;
