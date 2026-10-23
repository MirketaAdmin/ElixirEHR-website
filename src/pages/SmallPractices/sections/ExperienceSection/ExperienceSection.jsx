import { spExperience } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import SpIntro from '../../components/SpIntro/SpIntro';
import SpTiles from '../../components/SpTiles/SpTiles';
import styles from './ExperienceSection.module.css';

/** "A Personalized Patient Experience at Every Touchpoint" — six cards, icon beside each title. */
function ExperienceSection() {
  const { eyebrow, title, description, items } = spExperience;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sp-experience-title">
      <SpIntro id="sp-experience-title" eyebrow={eyebrow} title={title} description={description} />
      <SpTiles items={items} lead="inline" className={styles.grid} />
    </Section>
  );
}

export default ExperienceSection;
