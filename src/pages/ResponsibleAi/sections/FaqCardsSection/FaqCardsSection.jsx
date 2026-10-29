import { raFaq } from '../../../../data/responsibleAi';
import Section from '../../../../components/layout/Section/Section';
import RaIntro from '../../components/RaIntro/RaIntro';
import styles from './FaqCardsSection.module.css';

/**
 * FAQ as this frame draws it: the page's "Answers" chip and left-aligned title, then every answer
 * open in white cards with a lime left edge — the first half of the questions down the left
 * column, the rest down the right (each column stacks at its own pace).
 */
function FaqCardsSection() {
  const { chip, title, description, items } = raFaq;
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ra-faq-title">
      <RaIntro id="ra-faq-title" chip={chip} title={title} description={description} className={styles.intro} />
      <div className={styles.columns}>
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
