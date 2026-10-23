import { noShowMeasurement } from '../../../../data/patientNoShowPrediction';
import Section from '../../../../components/layout/Section/Section';
import SectionIntro from '../../components/SectionIntro/SectionIntro';
import styles from './MeasurementSection.module.css';

/** "How to measure accuracy": six "Ask for" cards, then what Elixir will not publish. */
function MeasurementSection() {
  const { chip, title, description, tag, items, notPublished } = noShowMeasurement;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="ns-measurement-title">
      <SectionIntro
        id="ns-measurement-title"
        chip={chip}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <p className={styles.tag}>{tag}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>{notPublished.title}</h3>
        <ul className={styles.panelList}>
          {notPublished.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default MeasurementSection;
