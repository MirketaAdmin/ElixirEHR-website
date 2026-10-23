import { bhMeasurable } from '../../../../data/behavioralHealth';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../components/BhIntro/BhIntro';
import styles from './MeasurableSection.module.css';

/** "Outcomes You Can Show a Payer, a Board and a State" — six surface cards with icon tiles. */
function MeasurableSection() {
  const { eyebrow, title, description, items } = bhMeasurable;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="bh-measurable-title">
      <BhIntro
        id="bh-measurable-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default MeasurableSection;
