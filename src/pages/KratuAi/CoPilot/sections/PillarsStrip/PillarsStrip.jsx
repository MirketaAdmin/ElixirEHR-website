import { coPilotPillars } from '../../../../../data/coPilot';
import Container from '../../../../../components/layout/Container/Container';
import { cn } from '../../../../../utils/cn';
import styles from './PillarsStrip.module.css';

/** Four principles under the hero, each card on a coloured leading edge. */
function PillarsStrip() {
  return (
    <div className={styles.band}>
      <Container>
        <ul className={styles.list}>
          {coPilotPillars.map((pillar) => (
            <li key={pillar.title} className={cn(styles.card, styles[pillar.tone])}>
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
