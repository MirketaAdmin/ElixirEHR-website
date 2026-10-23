import { ccBehavioral } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import CcIntro from '../../components/CcIntro/CcIntro';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import styles from './BehavioralSection.module.css';

/** "Behavioral Health Contact Center: Crisis Protocols & Part 2": four edge-accented cards. */
function BehavioralSection() {
  const { chip, title, description, cards } = ccBehavioral;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="cc-behavioral-title">
      <CcIntro id="cc-behavioral-title" chip={chip} title={title} description={description} className={styles.intro} />
      <div className={styles.grid}>
        {cards.map((card) => (
          <FeatureCard key={card.title} {...card} className={styles.card} />
        ))}
      </div>
    </Section>
  );
}

export default BehavioralSection;
