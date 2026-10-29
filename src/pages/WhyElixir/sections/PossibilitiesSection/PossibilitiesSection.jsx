import { possibilities } from '../../../../data/whyElixir';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import styles from './PossibilitiesSection.module.css';

function PossibilitiesSection() {
  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <p className={styles.eyebrow}>{possibilities.eyebrow}</p>
      <h2 className={cn('text-headline-lg', styles.title)}>{possibilities.title}</h2>
      <ul className={styles.grid}>
        {possibilities.features.map((feature) => (
          <li key={feature.title}>
            <img
              src={feature.icon}
              alt=""
              width={feature.iconSize[0]}
              height={feature.iconSize[1]}
              className={styles.icon}
            />
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default PossibilitiesSection;
