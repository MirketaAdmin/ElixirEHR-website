import { visitPrepStrip } from '../../../../../data/visitPrep';
import Container from '../../../../../components/layout/Container/Container';
import { cn } from '../../../../../utils/cn';
import styles from './HighlightsStrip.module.css';

/** Four highlights under the hero, each on a coloured leading edge. */
function HighlightsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {visitPrepStrip.map((item) => (
            <li key={item.title} className={cn(styles.item, styles[item.tone])}>
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
