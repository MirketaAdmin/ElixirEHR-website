import { cn } from '../../../../utils/cn';
import styles from './CcRows.module.css';

/**
 * White rows with a chip in a 160px left column, then a title and its text (Programs and
 * Partners). A red row also turns its title red.
 */
function CcRows({ items, className }) {
  return (
    <ul className={cn(styles.list, className)}>
      {items.map((item) => (
        <li key={item.title} className={cn(styles.row, styles[item.tone])}>
          <span className={styles.chip}>{item.chip}</span>
          <div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CcRows;
