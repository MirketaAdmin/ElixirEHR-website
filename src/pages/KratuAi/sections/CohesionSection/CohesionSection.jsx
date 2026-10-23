import { kratuCohesion } from '../../../../data/kratuAi';
import Section from '../../../../components/layout/Section/Section';
import KrIntro from '../../components/KrIntro/KrIntro';
import styles from './CohesionSection.module.css';

/** "Why One AI Engine Beats Four Disconnected Point Tools": four translucent cards on the dark band. */
function CohesionSection() {
  const { eyebrow, title, description, cards } = kratuCohesion;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="kr-cohesion-title">
      <KrIntro
        id="kr-cohesion-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        align="center"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={card.icon.src} alt="" width={card.icon.size[0]} height={card.icon.size[1]} />
            </span>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default CohesionSection;
