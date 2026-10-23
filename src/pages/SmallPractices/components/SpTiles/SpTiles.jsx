import { cn } from '../../../../utils/cn';
import styles from './SpTiles.module.css';

/**
 * The frame's three-column grid of small rounded cards. `lead` sets what sits above or beside
 * each title: 'circle' (a 44px lavender icon disc above), 'inline' (the icon left of the title)
 * or 'number' (a numbered disc above, 01–06). An item's `textWidth` (px) matches one card's
 * line breaks to the frame where the shared width cannot.
 */
function SpTiles({ items, lead = 'circle', className }) {
  return (
    <ul className={cn(styles.grid, styles[`${lead}Lead`], className)}>
      {items.map((item, index) => (
        <li key={item.title} className={styles.card}>
          {lead === 'circle' && (
            <span className={styles.disc}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </span>
          )}
          {lead === 'number' && (
            <span className={styles.number} aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
          <h3 className={styles.title}>
            {lead === 'inline' && (
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            )}
            <span>{item.title}</span>
          </h3>
          <p className={styles.text} style={item.textWidth && { '--sp-text-width': `${item.textWidth}px` }}>
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default SpTiles;
