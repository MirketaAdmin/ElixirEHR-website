import { noShowSpecialty } from '../../../../data/patientNoShowPrediction';
import Section from '../../../../components/layout/Section/Section';
import SectionIntro from '../../components/SectionIntro/SectionIntro';
import styles from './SpecialtySection.module.css';

/** "No-show prediction for behavioral health and addiction treatment": six dark specialty cards. */
function SpecialtySection() {
  const { chip, title, description, items } = noShowSpecialty;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ns-specialty-title">
      <SectionIntro
        id="ns-specialty-title"
        chip={chip}
        chipTone="tint"
        title={title}
        titleTone="dark"
        description={description}
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default SpecialtySection;
