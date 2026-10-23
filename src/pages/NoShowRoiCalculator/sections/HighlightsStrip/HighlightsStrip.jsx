import { roiStrip } from '../../../../data/noShowRoiCalculator';
import Container from '../../../../components/layout/Container/Container';
import styles from './HighlightsStrip.module.css';

/** Four principles on the Deep Purple band under the hero, split by hairline dividers. */
function HighlightsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {roiStrip.map((item) => (
            <li key={item.title} className={styles.item}>
              <h2 className={styles.title}>{item.title}</h2>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default HighlightsStrip;
