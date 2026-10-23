import { ccTeam } from '../../../../data/careCoordination';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './TeamSection.module.css';

/** "One Record, Many Hands" — an indented intro and six numbered white cards. */
function TeamSection() {
  const { eyebrow, title, description, items } = ccTeam;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="cc-team-title">
      <BhIntro id="cc-team-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <ol className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <div className={styles.head}>
              <span className={styles.tile}>
                <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
              </span>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3
              className={styles.title}
              style={item.titleWidth ? { '--title-width': `${item.titleWidth}px` } : undefined}
            >
              {item.title}
            </h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default TeamSection;
