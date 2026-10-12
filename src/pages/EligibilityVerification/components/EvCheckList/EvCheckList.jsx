import { cn } from '../../../../utils/cn';
import checkIcon from '../../../../assets/eligibility-verification/icon-check-filled.png';
import checkIconDark from '../../../../assets/eligibility-verification/icon-check-filled-dark.png';
import styles from './EvCheckList.module.css';

/**
 * Filled lime check list used by the Eligibility Verification splits.
 * variant: display (white tick, Montserrat labels) | body (dark tick, Roboto labels)
 */
function EvCheckList({ items, variant = 'display', className }) {
  const icon = variant === 'body' ? checkIconDark : checkIcon;

  return (
    <ul className={cn(styles.list, styles[variant], className)}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <img src={icon} alt="" width="24" height="24" className={styles.icon} />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default EvCheckList;
