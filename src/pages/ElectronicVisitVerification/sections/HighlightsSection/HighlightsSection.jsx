import { evvHighlights } from '../../../../data/electronicVisitVerification';
import Container from '../../../../components/layout/Container/Container';
import styles from './HighlightsSection.module.css';

/** Gradient strip of four key points under the hero. */
function HighlightsSection() {
  return (
    <section className={styles.section} aria-label="EVV at a glance">
      <Container>
        <ul className={styles.grid}>
          {evvHighlights.map((item) => (
            <li key={item.title}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default HighlightsSection;
