import { shPillars } from '../../../../data/studentHealth';
import Container from '../../../../components/layout/Container/Container';
import styles from './PillarsStrip.module.css';

/** Four pillars under the hero on the primary-purple band. */
function PillarsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {shPillars.map((pillar) => (
            <li key={pillar.title}>
              <span className={styles.disc}>
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
