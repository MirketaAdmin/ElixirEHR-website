import { vbModels } from '../../../../data/valueBasedCare';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import VbIntro from '../../components/VbIntro/VbIntro';
import styles from './ModelsSection.module.css';

/** "The Value-Based Models You Might Already Be In": six cards, the last one highlighted. */
function ModelsSection() {
  const { eyebrow, title, description, cards } = vbModels;

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="vb-models">
      <VbIntro id="vb-models" eyebrow={eyebrow} title={title} description={description} />
      <ul className={styles.grid}>
        {cards.map((card) => (
          <li key={card.title} className={cn(styles.card, card.highlight && styles.highlight)}>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ModelsSection;
