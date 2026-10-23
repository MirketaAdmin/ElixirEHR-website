import { sudHighlights } from '../../../../data/substanceUseDisorder';
import Container from '../../../../components/layout/Container/Container';
import styles from './HighlightsStrip.module.css';

/** Four promises under the hero: outlined dark cards on a near-black band. */
function HighlightsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {sudHighlights.map((item) => (
            <li key={item.title} className={styles.card}>
              <div className={styles.head}>
                <span className={styles.tile}>
                  <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
                </span>
                <h2 className={styles.title}>{item.title}</h2>
              </div>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default HighlightsStrip;
