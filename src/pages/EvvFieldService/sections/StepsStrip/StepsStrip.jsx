import { fsSteps } from '../../../../data/evvFieldService';
import Container from '../../../../components/layout/Container/Container';
import styles from './StepsStrip.module.css';

/** Gradient strip of the six workflow steps under the hero. */
function StepsStrip() {
  return (
    <section className={styles.section} aria-label="EVV workflow steps">
      <Container>
        <ol className={styles.steps}>
          {fsSteps.map((step, index) => (
            <li key={step} className={styles.step}>
              <span className={styles.label}>Step {String(index + 1).padStart(2, '0')}</span>
              <span className={styles.title}>{step}</span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default StepsStrip;
