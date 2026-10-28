import { evvFaq } from '../../../../data/electronicVisitVerification';
import Section from '../../../../components/layout/Section/Section';
import styles from './FaqCardsSection.module.css';

/** FAQ as the frame draws it on this page: left-aligned title, then every answer open in two columns of cards. */
function FaqCardsSection() {
  const { title, description, items } = evvFaq;

  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.question} className={styles.card}>
            <h3 className={styles.question}>{item.question}</h3>
            <p className={styles.answer}>{item.answer}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default FaqCardsSection;
