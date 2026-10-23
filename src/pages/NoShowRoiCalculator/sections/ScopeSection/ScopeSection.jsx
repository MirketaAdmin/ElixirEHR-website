import { roiScope } from '../../../../data/noShowRoiCalculator';
import Section from '../../../../components/layout/Section/Section';
import RoiIntro from '../../components/RoiIntro/RoiIntro';
import NoteCard from '../../components/NoteCard/NoteCard';
import styles from './ScopeSection.module.css';

/** "What the Calculator Does and Does Not Count": upside left out beside friction costs. */
function ScopeSection() {
  const { eyebrow, title, description, cards } = roiScope;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="roi-scope-title">
      <RoiIntro id="roi-scope-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <div className={styles.grid}>
        {cards.map((card) => (
          <NoteCard key={card.title} {...card} className={styles.card} />
        ))}
      </div>
    </Section>
  );
}

export default ScopeSection;
