import { opIntake } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import OpIntro from '../../components/OpIntro/OpIntro';
import styles from './IntakeSection.module.css';

/** "Patient Intake Management Across Every Touchpoint" — six white cards with a chip and icon. */
function IntakeSection() {
  const { eyebrow, title, description, items } = opIntake;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="op-intake-title">
      <OpIntro id="op-intake-title" eyebrow={eyebrow} title={title} description={description} />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <div className={styles.head}>
              <span className={styles.chip}>{item.chip}</span>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default IntakeSection;
