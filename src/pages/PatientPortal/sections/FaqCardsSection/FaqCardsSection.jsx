import { patientPortalFaq } from '../../../../data/patientPortal';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './FaqCardsSection.module.css';

/**
 * FAQ as this frame draws it: left-aligned title and description, then every answer open in Rose
 * White cards — the first half of the questions down the left column, the rest down the right,
 * row by row so each row's cards share a height.
 */
function FaqCardsSection() {
  const { title, description, items } = patientPortalFaq;
  const half = Math.ceil(items.length / 2);
  const ordered = items.slice(0, half).flatMap((item, index) => [item, items[half + index]]).filter(Boolean);

  return (
    <Section spacing="none" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {ordered.map((item) => (
          <li key={item.question} className={styles.card}>
            <h3 className={styles.question}>
              <Icon name="help" size={22} className={styles.icon} />
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
