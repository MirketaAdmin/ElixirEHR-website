import { spGrowth } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import SpIntro from '../../components/SpIntro/SpIntro';
import SpTiles from '../../components/SpTiles/SpTiles';
import styles from './GrowthSection.module.css';

/** "What Happens When Your Practice Grows" — six numbered cards. */
function GrowthSection() {
  const { eyebrow, title, description, items } = spGrowth;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sp-growth-title">
      <SpIntro id="sp-growth-title" eyebrow={eyebrow} title={title} description={description} />
      <SpTiles items={items} lead="number" className={styles.grid} />
    </Section>
  );
}

export default GrowthSection;
