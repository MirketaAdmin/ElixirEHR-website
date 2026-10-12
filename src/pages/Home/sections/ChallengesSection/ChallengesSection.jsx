import { challenges } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import SectionHeading from '../../../../components/ui/SectionHeading/SectionHeading';
import styles from './ChallengesSection.module.css';

function ChallengesSection() {
  return (
    <Section spacing="none" className={styles.section}>
      <SectionHeading
        eyebrow={challenges.eyebrow}
        title={challenges.title}
        align="center"
        className={styles.heading}
      />
      <ul className={styles.grid}>
        {challenges.stats.map((stat) => (
          <li key={stat.value} className={cn(styles.card, styles[stat.accent])}>
            <span className={styles.icon}>
              <img src={stat.icon} alt="" width={stat.iconSize[0]} height={stat.iconSize[1]} />
            </span>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.description}>{stat.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ChallengesSection;
