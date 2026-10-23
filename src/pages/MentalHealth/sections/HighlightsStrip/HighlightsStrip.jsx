import { mhHighlights } from '../../../../data/mentalHealth';
import Container from '../../../../components/layout/Container/Container';
import styles from './HighlightsStrip.module.css';

/**
 * Four promises under the hero: dark cards with a lime icon beside each title. Each text keeps
 * its frame width (`textWidth`), which differs per card.
 */
function HighlightsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {mhHighlights.map((item) => (
            <li key={item.title} className={styles.card}>
              <div className={styles.head}>
                <span className={styles.icon}>
                  <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
                </span>
                <h2 className={styles.title}>{item.title}</h2>
              </div>
              <p className={styles.text} style={{ '--text-width': `${item.textWidth}px` }}>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default HighlightsStrip;
