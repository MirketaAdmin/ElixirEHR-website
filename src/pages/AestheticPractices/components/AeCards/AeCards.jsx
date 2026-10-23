import { cn } from '../../../../utils/cn';
import styles from './AeCards.module.css';

/**
 * The frame's three-column card grid. `variant` disc (white card, icon on a lavender disc),
 * numbered (tinted card, lime "01" and a grey corner icon) or plain (tinted card, bare icon).
 * An item's `textWidth` (px) matches one card's line breaks to the frame.
 */
function AeCards({ items, variant = 'plain', className }) {
  return (
    <ul className={cn(styles.grid, styles[variant], className)}>
      {items.map((item, index) => (
        <li key={item.title} className={styles.card}>
          {variant === 'numbered' ? (
            <div className={styles.head}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </div>
          ) : (
            <span className={styles.icon}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </span>
          )}
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text} style={item.textWidth && { '--ae-text-width': `${item.textWidth}px` }}>
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default AeCards;
