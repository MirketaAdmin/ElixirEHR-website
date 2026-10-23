import { bhPillars } from '../../../../data/behavioralHealth';
import Container from '../../../../components/layout/Container/Container';
import styles from './PillarsStrip.module.css';

/** Four promises under the hero: dark cards with yellow icon tiles and titles. */
function PillarsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {bhPillars.map((pillar) => (
            <li key={pillar.title} className={styles.card}>
              <span className={styles.tile}>
                <img src={pillar.icon.src} alt="" width={pillar.icon.size[0]} height={pillar.icon.size[1]} />
              </span>
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
