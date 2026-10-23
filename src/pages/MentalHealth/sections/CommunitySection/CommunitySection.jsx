import { mhCommunity } from '../../../../data/mentalHealth';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './CommunitySection.module.css';

/**
 * "Community Mental Health Programs" (dark) — six cards, each with a lime icon label. A card
 * may narrow its title (`titleWidth`) where the frame breaks it earlier.
 */
function CommunitySection() {
  const { eyebrow, title, description, items } = mhCommunity;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="mh-community-title">
      <BhIntro
        id="mh-community-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <p className={styles.label}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
              {item.label}
            </p>
            <h3 className={styles.title} style={item.titleWidth ? { '--title-width': `${item.titleWidth}px` } : undefined}>
              {item.title}
            </h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default CommunitySection;
