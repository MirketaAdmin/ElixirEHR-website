import { cmaFaq } from '../../../../data/caregiverMobileApp';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './FaqCardsSection.module.css';

/**
 * FAQ as the frame draws it on this page: left-aligned title, then every answer open in grey
 * cards. The first half of the questions fills the left column and the second half the right,
 * row by row (so each row's cards start level).
 */
function FaqCardsSection() {
  const { title, items } = cmaFaq;
  const half = Math.ceil(items.length / 2);
  const ordered = items.slice(0, half).flatMap((item, index) => [item, items[half + index]]).filter(Boolean);

  return (
    <Section spacing="none" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.grid}>
        {ordered.map((item) => (
          <li key={item.question} className={styles.card}>
            <h3 className={styles.question}>
              <Icon name="help" size={20} className={styles.icon} />
              {item.question}
            </h3>
            <p className={styles.answer}>{item.answer}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default FaqCardsSection;
