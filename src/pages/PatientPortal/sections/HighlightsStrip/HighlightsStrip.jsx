import { patientPortalHighlights } from '../../../../data/patientPortal';
import { cn } from '../../../../utils/cn';
import styles from './HighlightsStrip.module.css';

/** The gradient band under the hero: four translucent cards, wider than the content column. */
function HighlightsStrip() {
  return (
    <section className={styles.strip} aria-label="Patient portal highlights">
      <ul className={styles.grid}>
        {patientPortalHighlights.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={item.icon} alt="" width="24" height="24" />
            </span>
            <h2 className={cn(styles.title, item.accent && styles.accent)}>{item.title}</h2>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HighlightsStrip;
