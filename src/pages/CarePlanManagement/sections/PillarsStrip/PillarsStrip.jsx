import { cpPillars } from '../../../../data/carePlanManagement';
import Container from '../../../../components/layout/Container/Container';
import styles from './PillarsStrip.module.css';

/** Four pillars under the hero, separated by hairlines, on the primary-purple band. */
function PillarsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {cpPillars.map((pillar) => (
            <li key={pillar.title}>
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
