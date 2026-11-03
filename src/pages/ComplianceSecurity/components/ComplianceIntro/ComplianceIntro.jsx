import { cn } from '../../../../utils/cn';
import RichText from '../../../../components/ui/RichText/RichText';
import styles from './ComplianceIntro.module.css';

/**
 * Section opener of the Compliance & Security pages: caps eyebrow, H2 and an optional intro (plain or
 * rich text). tone: 'light' (purple eyebrow and title) | 'dark' (lime eyebrow, white title, on purple).
 */
function ComplianceIntro({ id, eyebrow, title, description, tone = 'light' }) {
  return (
    <div className={cn(styles.intro, styles[tone])}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && (
        <p className={styles.description}>
          <RichText content={description} codeClassName={styles.code} />
        </p>
      )}
    </div>
  );
}

export default ComplianceIntro;
