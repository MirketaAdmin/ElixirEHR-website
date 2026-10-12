import { cn } from '../../../../utils/cn';
import checkIcon from '../../../../assets/revenue-cycle-management/icon-check-circle.png';
import RichText from '../../../../components/ui/RichText/RichText';
import styles from './CheckList.module.css';

/**
 * Lime check-circle list used across the RCM sections. An item is a string, RichText segments,
 * or { content, bold } for the items the frame sets entirely in bold (their `strong` lead-in
 * phrase is darker). Type size, leading and gaps are set per section through `className`.
 */
function CheckList({ items, className }) {
  return (
    <ul className={cn(styles.list, className)}>
      {items.map((item, index) => {
        const { content, bold } = item?.content ? item : { content: item };
        return (
          <li key={index} className={cn(styles.item, bold && styles.bold)}>
            <img src={checkIcon} alt="" width="17" height="18" className={styles.icon} />
            <span>
              <RichText content={content} strongClassName={styles.strong} />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default CheckList;
