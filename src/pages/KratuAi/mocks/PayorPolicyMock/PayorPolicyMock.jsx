import { cn } from '../../../../utils/cn';
import MockCard from '../../components/MockCard/MockCard';
import documentIcon from '../../../../assets/kratu-ai/mock-document.png';
import styles from './PayorPolicyMock.module.css';

const marks = { pass: '✓', warn: '!' };

/** Payor Policy Intelligence mock-up: the pre-claim score, rule checks and the suggested fix. */
function PayorPolicyMock({ mock }) {
  return (
    <MockCard
      icon={{ src: documentIcon, size: [13, 15] }}
      title={mock.title}
      badge={mock.badge}
      tone="teal"
      badgeTone="sky"
      bodyClassName={styles.body}
    >
      <div className={styles.summary}>
        <p className={styles.score}>
          <span className={styles.scoreValue}>{mock.score.value}</span>
          <span className={styles.scoreLabel}>{mock.score.label}</span>
        </p>
        <div>
          <p className={styles.summaryTitle}>{mock.summaryTitle}</p>
          <p className={styles.summaryText}>{mock.summaryText}</p>
        </div>
      </div>
      <ul className={styles.checks}>
        {mock.checks.map((check) => (
          <li key={check.text} className={cn(styles.check, styles[check.status])}>
            <span className={styles.mark} aria-hidden="true">
              {marks[check.status]}
            </span>
            {check.text}
          </li>
        ))}
      </ul>
      <p className={styles.resolution}>
        <strong>{mock.resolution.label}</strong> {mock.resolution.text}
      </p>
    </MockCard>
  );
}

export default PayorPolicyMock;
