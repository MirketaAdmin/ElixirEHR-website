import { sudAdmissions } from '../../../../data/substanceUseDisorder';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import SudIntro from '../../components/SudIntro/SudIntro';
import styles from './AdmissionsSection.module.css';

/** "Intake, Admissions and Referral Management" — six white rows with a chip and a right pill. */
function AdmissionsSection() {
  const { eyebrow, title, description, items } = sudAdmissions;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sud-admissions-title">
      <SudIntro id="sud-admissions-title" eyebrow={eyebrow} title={title} description={description} />
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={styles.row}>
            <div className={styles.body}>
              <h3 className={styles.title}>
                <span className={cn(styles.chip, styles[item.tone])}>{item.chip}</span>
                {item.title}
              </h3>
              <p className={styles.text}>{item.text}</p>
            </div>
            <p className={styles.pill}>{item.pill}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default AdmissionsSection;
