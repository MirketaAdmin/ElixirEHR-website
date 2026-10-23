import { aePillars } from '../../../../data/aestheticPractices';
import Container from '../../../../components/layout/Container/Container';
import styles from './PillarsStrip.module.css';

/** Four numbered pillars under the hero on the primary-purple band. */
function PillarsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ol className={styles.list}>
          {aePillars.map((pillar, index) => (
            <li key={pillar.title} className={styles.card}>
              <p className={styles.label}>
                <img src={pillar.icon.src} alt="" width={pillar.icon.size[0]} height={pillar.icon.size[1]} />
                Pillar {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className={styles.title}>{pillar.title}</h2>
              <p className={styles.text}>{pillar.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  );
}

export default PillarsStrip;
