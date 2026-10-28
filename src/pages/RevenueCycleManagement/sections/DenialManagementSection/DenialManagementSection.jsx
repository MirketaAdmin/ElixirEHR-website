import { appeals, denialManagement } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import warningIcon from '../../../../assets/revenue-cycle-management/icon-active-resolution.png';
import RcmBadge from '../../components/RcmBadge/RcmBadge';
import CheckList from '../../components/CheckList/CheckList';
import styles from './DenialManagementSection.module.css';

/** Denial management split plus the "Healthcare Appeals and Payer Follow-Up" steps (one band). */
function DenialManagementSection() {
  const { badge, titleLines, body, points } = denialManagement;

  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <div className={styles.denials}>
        <div className={styles.content}>
          <RcmBadge tone="lavender" icon={warningIcon} iconSize={[15, 14]} className={styles.badge}>
            {badge}
          </RcmBadge>
          <h2 className={styles.title}>
            {titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.body}>{body}</p>
          <CheckList items={points} className={styles.points} />
        </div>
        <img src={denialManagement.image.src} alt={denialManagement.image.alt} width="552" height="468" className={styles.media} />
      </div>

      <hr className={styles.divider} />

      <h2 className={styles.appealsTitle}>{appeals.title}</h2>
      <p className={styles.appealsText}>{appeals.description}</p>
      <ol className={styles.steps}>
        {appeals.steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepText}>
              {step.lines.map((line) => (
                <span key={line} className={styles.line}>
                  {line}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ol>
      <p className={styles.footnote}>{appeals.footnote}</p>
    </Section>
  );
}

export default DenialManagementSection;
