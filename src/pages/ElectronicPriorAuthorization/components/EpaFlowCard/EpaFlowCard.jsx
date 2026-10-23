import styles from './EpaFlowCard.module.css';

/** The clearinghouse row's "EDI 278 Flow" card: two numbered steps (purple, then lime). */
function EpaFlowCard({ label, steps }) {
  return (
    <div className={styles.card}>
      <p className={styles.label}>{label}</p>
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <p className={styles.head}>
              <span className={styles.number} aria-hidden="true">
                {index + 1}
              </span>
              {step.title}
            </p>
            <p className={styles.text}>{step.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default EpaFlowCard;
