import { cn } from '../../../../utils/cn';
import styles from './OpCardGrid.module.css';

/**
 * The frame's three-column card grid. Each item has a 40px round icon tile (`tile`) or an icon
 * label (`label`), a title and text. `tone` light | white | dark sets the card surface; an item
 * may narrow its text (`textWidth`) where the frame breaks it earlier.
 */
function OpCardGrid({ items, tone = 'light', className }) {
  return (
    <ul className={cn(styles.grid, styles[tone], className)}>
      {items.map((item) => (
        <li key={item.title} className={styles.card}>
          {item.tile && <img src={item.tile} alt="" width="40" height="40" className={styles.tile} />}
          {item.label && (
            <p className={cn(styles.label, item.labelTone && styles[item.labelTone])}>
              {item.icon && (
                <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
              )}
              <span>{item.label}</span>
              {item.cornerIcon && (
                <img
                  src={item.cornerIcon.src}
                  alt=""
                  width={item.cornerIcon.size[0]}
                  height={item.cornerIcon.size[1]}
                  className={styles.corner}
                />
              )}
            </p>
          )}
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text} style={item.textWidth ? { '--op-text-width': `${item.textWidth}px` } : undefined}>
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default OpCardGrid;
