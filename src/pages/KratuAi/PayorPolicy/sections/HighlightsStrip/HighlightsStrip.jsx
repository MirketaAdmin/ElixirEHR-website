import { ppHighlights } from '../../../../../data/payorPolicy';
import Section from '../../../../../components/layout/Section/Section';
import styles from './HighlightsStrip.module.css';

/** The near-black strip under the hero: four promises, divided by hairlines. */
function HighlightsStrip() {
  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-label="Highlights">
      <ul className={styles.grid}>
        {ppHighlights.map((item) => (
          <li key={item.title} className={styles.item}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default HighlightsStrip;
