import { ccPillars } from '../../../../data/careCoordination';
import Container from '../../../../components/layout/Container/Container';
import styles from './PillarsStrip.module.css';

/** Four promises under the hero: outlined dark cards with an icon tile, a lime label and a title. */
function PillarsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {ccPillars.map((pillar) => (
            <li key={pillar.title} className={styles.card}>
              <span className={styles.tile}>
                <img src={pillar.icon.src} alt="" width={pillar.icon.size[0]} height={pillar.icon.size[1]} />
              </span>
              <p className={styles.label}>{pillar.label}</p>
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
