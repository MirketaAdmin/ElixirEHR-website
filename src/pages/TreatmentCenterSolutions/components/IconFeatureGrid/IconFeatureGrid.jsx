import { cn } from '../../../../utils/cn';
import styles from './IconFeatureGrid.module.css';

/**
 * Icon + label + short yellow bar grid used by three Treatment Center Solutions bands.
 * tone: dark (white labels) | light (purple labels). Column count and width come from `className`.
 */
function IconFeatureGrid({ items, tone = 'dark', className }) {
  return (
    <ul className={cn(styles.grid, styles[tone], className)}>
      {items.map((item) => (
        <li key={item.label} className={styles.item}>
          <img src={item.icon} alt="" width={item.iconSize[0]} height={item.iconSize[1]} />
          <span className={styles.label}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default IconFeatureGrid;
