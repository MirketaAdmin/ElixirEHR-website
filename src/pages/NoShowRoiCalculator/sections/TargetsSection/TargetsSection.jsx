import { roiTargets } from '../../../../data/noShowRoiCalculator';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import RoiIntro from '../../components/RoiIntro/RoiIntro';
import styles from './TargetsSection.module.css';

/** "Choosing a Realistic No-Show Reduction Target": five operational plays, each with its tag. */
function TargetsSection() {
  const { eyebrow, title, description, rows } = roiTargets;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="roi-targets-title">
      <RoiIntro id="roi-targets-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <ul className={styles.rows}>
        {rows.map((row) => (
          <li key={row.title} className={cn(styles.row, styles[row.tone])}>
            <span className={styles.tag}>{row.tag}</span>
            <div>
              <h3 className={styles.title}>{row.title}</h3>
              <p className={styles.text}>{row.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default TargetsSection;
