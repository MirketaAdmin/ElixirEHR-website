import { fsWhyNative } from '../../../../data/evvFieldService';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './WhyNativeSection.module.css';

function WhyNativeSection() {
  const { eyebrow, title, items } = fsWhyNative;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="fs-why-native">
      <EyebrowHeading id="fs-why-native" eyebrow={eyebrow} title={title} className={styles.heading} />

      <ol className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.number} aria-hidden="true">
              {index + 1}
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default WhyNativeSection;
