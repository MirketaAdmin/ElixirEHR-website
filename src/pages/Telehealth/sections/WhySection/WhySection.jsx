import { thWhy } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import ThIntro from '../../components/ThIntro/ThIntro';
import styles from './WhySection.module.css';

/** "Why Choose Elixir for Telehealth" — eight capability cards. */
function WhySection() {
  const { eyebrow, title, description, items } = thWhy;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="th-why-title">
      <ThIntro
        id="th-why-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        layout="stacked"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <p className={styles.label}>Capability {String(index + 1).padStart(2, '0')}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default WhySection;
