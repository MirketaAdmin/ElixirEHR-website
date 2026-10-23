import { thPillars } from '../../../../data/telehealth';
import Container from '../../../../components/layout/Container/Container';
import styles from './PillarsStrip.module.css';

/** Four numbered pillars under the hero on the primary-purple band. */
function PillarsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ol className={styles.list}>
          {thPillars.map((pillar, index) => (
            <li key={pillar.title} className={styles.card}>
              <div className={styles.head}>
                <span className={styles.disc}>
                  <img src={pillar.icon.src} alt="" width={pillar.icon.size[0]} height={pillar.icon.size[1]} />
                </span>
                <span className={styles.label}>Pillar {String(index + 1).padStart(2, '0')}</span>
              </div>
              <h2 className={styles.title}>{pillar.title}</h2>
              <p className={styles.text} style={pillar.textWidth && { '--sp-text-width': `${pillar.textWidth}px` }}>
                {pillar.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </div>
  );
}

export default PillarsStrip;
