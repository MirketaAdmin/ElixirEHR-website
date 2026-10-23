import { ccStrip } from '../../../../data/contactCenter';
import Container from '../../../../components/layout/Container/Container';
import { cn } from '../../../../utils/cn';
import styles from './HighlightsStrip.module.css';

/** Four highlights on a full-width rounded band under the hero, split by hairline dividers. */
function HighlightsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {ccStrip.map((item) => (
            <li key={item.title} className={styles.item}>
              <span className={cn(styles.tile, styles[item.tone])}>
                <img src={item.icon} alt="" width={item.iconSize[0]} height={item.iconSize[1]} />
              </span>
              <div>
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.text}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default HighlightsStrip;
