import { cn } from '../../../../utils/cn';
import shieldOutlineIcon from '../../../../assets/responsible-ai/icon-shield-outline.png';
import styles from './RaEnforced.module.css';

/**
 * The "How it is enforced" box: a header (with the optional "Enforcement architecture" chip), the
 * mechanism and the agents it applies to. tone: 'purple' (clinical) | 'teal' (revenue).
 */
function RaEnforced({ text, appliesTo, chip, tone = 'purple', className }) {
  return (
    <div className={cn(styles.box, styles[tone], className)}>
      <p className={styles.head}>
        <span className={styles.label}>
          <img src={shieldOutlineIcon} alt="" width="13" height="15" />
          How it is enforced
        </span>
        {chip && <span className={styles.chip}>{chip}</span>}
      </p>
      <p className={styles.text}>{text}</p>
      <p className={styles.applies}>Applies to: {appliesTo}</p>
    </div>
  );
}

export default RaEnforced;
