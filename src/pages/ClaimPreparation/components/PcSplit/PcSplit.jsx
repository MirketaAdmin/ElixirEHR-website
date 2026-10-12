import { cn } from '../../../../utils/cn';
import PcMediaFrame from '../PcMediaFrame/PcMediaFrame';
import styles from './PcSplit.module.css';

/**
 * Text column + image card, vertically centred against each other (`reverse` puts the card on
 * the left). The text column width is set by the section via `--pc-text-width`.
 */
function PcSplit({ frame, reverse = false, className, children }) {
  return (
    <div
      className={cn(styles.split, reverse && styles.reverse, className)}
      style={{ '--pc-frame-width': `${frame.width}px` }}
    >
      <div className={styles.text}>{children}</div>
      <PcMediaFrame {...frame} />
    </div>
  );
}

export default PcSplit;
