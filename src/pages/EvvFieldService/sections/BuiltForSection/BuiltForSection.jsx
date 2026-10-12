import { fsBuiltFor } from '../../../../data/evvFieldService';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './BuiltForSection.module.css';

function BuiltForSection() {
  const { eyebrow, title, description, items } = fsBuiltFor;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="fs-built-for">
      <EyebrowHeading id="fs-built-for" eyebrow={eyebrow} title={title} className={styles.heading} />
      <p className={styles.description}>{description}</p>

      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.mark} aria-hidden="true">
              {item.mark}
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default BuiltForSection;
