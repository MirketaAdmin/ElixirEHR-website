import { cn } from '../../../../utils/cn';
import styles from './ShCards.module.css';

/**
 * The frame's three-column card grid: a 40px icon disc (lavender, lime or red per item `tone`), a
 * title and text. `variant` white (raised white cards) | tinted (flat surface cards).
 */
function ShCards({ items, variant = 'white', className }) {
  return (
    <ul className={cn(styles.grid, styles[variant], className)}>
      {items.map((item) => (
        <li key={item.title} className={styles.card}>
          <span className={cn(styles.disc, styles[item.tone])}>
            <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
          </span>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default ShCards;
