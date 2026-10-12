import { cn } from '../../../../utils/cn';
import styles from './PcCheckList.module.css';

/**
 * Icon list used across the frame. Items are strings or { lead, text } (bold lead-in followed by
 * text); each item may carry its own `icon` (an { src, width, height }) instead of the list's.
 */
function PcCheckList({ items, icon, className }) {
  return (
    <ul className={cn(styles.list, className)}>
      {items.map((item) => {
        const { lead, text, icon: itemIcon } = typeof item === 'string' ? { text: item } : item;
        const image = itemIcon ?? icon;
        return (
          <li key={lead ?? text} className={styles.item}>
            <span className={styles.icon}>
              <img src={image.src} alt="" width={image.width} height={image.height} />
            </span>
            <span>
              {lead && <strong className={styles.lead}>{lead}</strong>}
              {lead && ' '}
              {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default PcCheckList;
