import { evvModels } from '../../../../data/electronicVisitVerification';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import EvvSource from '../../components/EvvSource/EvvSource';
import styles from './ModelsSection.module.css';

function ModelsSection() {
  const { eyebrow, title, description, items, callout, source, sourceNote } = evvModels;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="evv-models">
      <EyebrowHeading id="evv-models" eyebrow={eyebrow} title={title} />
      <p className={styles.description}>{description}</p>

      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <p className={styles.ask}>
              <strong className={styles.askLabel}>Ask:</strong> {item.ask}
            </p>
          </li>
        ))}
      </ul>

      <div className={styles.callout}>
        <img src={callout.icon} alt="" width="24" height="24" className={styles.calloutIcon} />
        <p className={styles.calloutText}>{callout.text}</p>
      </div>

      <EvvSource source={source} note={sourceNote} className={styles.source} />
    </Section>
  );
}

export default ModelsSection;
