import { vbPillars } from '../../../../data/valueBasedCare';
import Container from '../../../../components/layout/Container/Container';
import styles from './PillarsStrip.module.css';

/** Four promises under the hero: white cards with a tinted icon disc, a title and a line of copy. */
function PillarsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {vbPillars.map((pillar) => (
            <li key={pillar.title} className={styles.card}>
              <img src={pillar.icon} alt="" width="40" height="40" />
              <h2 className={styles.title}>{pillar.title}</h2>
              <p className={styles.text}>{pillar.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default PillarsStrip;
