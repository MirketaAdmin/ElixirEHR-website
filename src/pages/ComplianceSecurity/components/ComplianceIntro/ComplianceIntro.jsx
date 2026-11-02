import { cn } from '../../../../utils/cn';
import styles from './ComplianceIntro.module.css';

/**
 * Section opener of the Compliance & Security pages: caps eyebrow, H2 and an optional intro.
 * tone: 'light' (purple eyebrow and title) | 'dark' (lime eyebrow, white title, on purple).
 */
function ComplianceIntro({ id, eyebrow, title, description, tone = 'light' }) {
  return (
    <div className={cn(styles.intro, styles[tone])}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}

export default ComplianceIntro;
