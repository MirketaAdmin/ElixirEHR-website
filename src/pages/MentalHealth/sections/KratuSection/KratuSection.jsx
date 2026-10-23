import { mhKratu } from '../../../../data/mentalHealth';
import Section from '../../../../components/layout/Section/Section';
import gavelIcon from '../../../../assets/mental-health/icon-ai-gavel.png';
import banIcon from '../../../../assets/mental-health/icon-ai-ban.png';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './KratuSection.module.css';

/** "KratuAI for Mental Health" — four white cards and the red "What AI does not do here" panel. */
function KratuSection() {
  const { eyebrow, title, description, items, limits } = mhKratu;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="mh-kratu-title">
      <BhIntro
        id="mh-kratu-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.title}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
              {item.title}
            </h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.limits}>
        <h3 className={styles.limitsTitle}>
          <img src={gavelIcon} alt="" width="18" height="20" />
          {limits.title}
        </h3>
        <ul className={styles.limitsList}>
          {limits.items.map((item) => (
            <li key={item}>
              <img src={banIcon} alt="" width="15" height="15" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default KratuSection;
