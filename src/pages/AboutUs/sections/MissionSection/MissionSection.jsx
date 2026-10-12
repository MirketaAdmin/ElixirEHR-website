import { mission } from '../../../../data/about';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import styles from './MissionSection.module.css';

function MissionSection() {
  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div>
        <p className={styles.eyebrow}>{mission.eyebrow}</p>
        <h2 className={cn('text-headline-lg', styles.title)}>
          {mission.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className={styles.description}>{mission.description}</p>
        <ul className={styles.pillars}>
          {mission.pillars.map((pillar) => (
            <li key={pillar.title} className={styles.pillar}>
              <img src={pillar.icon} alt="" width={pillar.iconSize[0]} height={pillar.iconSize[1]} />
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDescription}>{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <figure className={styles.media}>
        <img src={mission.image.src} alt={mission.image.alt} width="536" height="536" className={styles.image} />
        <figcaption className={styles.caption}>
          <span className={styles.captionTitle}>{mission.image.title}</span>
          <span className={styles.captionText}>{mission.image.caption}</span>
        </figcaption>
      </figure>
    </Section>
  );
}

export default MissionSection;
