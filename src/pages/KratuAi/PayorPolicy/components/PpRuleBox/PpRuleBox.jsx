import { cn } from '../../../../../utils/cn';
import styles from './PpRuleBox.module.css';

/** White panel on a lime left edge: a caps purple title over a short list of fixed rules. */
function PpRuleBox({ title, items, className }) {
  return (
    <div className={cn(styles.box, className)}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.items}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default PpRuleBox;
