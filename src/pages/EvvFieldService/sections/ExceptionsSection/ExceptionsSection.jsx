import { fsExceptions } from '../../../../data/evvFieldService';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './ExceptionsSection.module.css';

function ExceptionsSection() {
  const { eyebrow, title, description, items } = fsExceptions;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="fs-exceptions">
      <EyebrowHeading id="fs-exceptions" eyebrow={eyebrow} title={title} className={styles.heading} />
      <p className={styles.description}>{description}</p>

      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.iconTile}>
              <img src={item.icon} alt="" width="24" height="24" />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ExceptionsSection;
