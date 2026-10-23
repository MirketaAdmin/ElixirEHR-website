import { sudKratu } from '../../../../data/substanceUseDisorder';
import Section from '../../../../components/layout/Section/Section';
import SudIntro from '../../components/SudIntro/SudIntro';
import styles from './KratuSection.module.css';

/** "KratuAI for Substance Use Disorder Treatment" — six cards and the red-edged limits panel. */
function KratuSection() {
  const { eyebrow, title, description, items, limits } = sudKratu;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sud-kratu-title">
      <SudIntro id="sud-kratu-title" eyebrow={eyebrow} title={title} description={description} />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <p className={styles.label}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
              {item.label}
            </p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.limits}>
        <h3 className={styles.limitsTitle}>{limits.title}</h3>
        <ul className={styles.limitsList}>
          {limits.items.map((item) => (
            <li key={item}>
              <img src={limits.icon.src} alt="" width={limits.icon.size[0]} height={limits.icon.size[1]} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default KratuSection;
