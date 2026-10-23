import { cn } from '../../../../utils/cn';
import styles from './NoteCard.module.css';

/**
 * White card with a 5px coloured leading edge, a caps title and indented "label: text" items
 * (the operating assumptions; what the calculator does and does not count).
 * tone: 'lime' | 'lavender' (edge colour). titleTone: 'purple' | 'red'.
 */
function NoteCard({ title, items, tone = 'lavender', titleTone = 'purple', className }) {
  return (
    <div className={cn(styles.card, styles[tone], className)}>
      <h3 className={cn(styles.title, styles[titleTone])}>{title}</h3>
      <ul className={styles.items}>
        {items.map((item) => (
          <li key={item.label}>
            <strong>{item.label}</strong> {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteCard;
