import { fsConnected } from '../../../../data/evvFieldService';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './ConnectedSection.module.css';

function ConnectedSection() {
  const { eyebrow, title, description, items, banner } = fsConnected;

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="fs-connected">
      <EyebrowHeading id="fs-connected" eyebrow={eyebrow} title={title} className={styles.heading} />
      <p className={styles.description}>{description}</p>

      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>

      <p className={styles.banner}>{banner}</p>
    </Section>
  );
}

export default ConnectedSection;
