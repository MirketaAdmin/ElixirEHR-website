import Icon from '../../../../components/ui/Icon/Icon';
import { cn } from '../../../../utils/cn';
import styles from './CategoryFilter.module.css';

/**
 * Sidebar filter card. `items` are { value, label, count? }; choosing one calls onChange(value)
 * (value null = everything). `variant`: 'list' (icons, lime active row — Blog) or 'counts'
 * (count pills — Videos, Webinars, Release Notes).
 */
function CategoryFilter({ title, items, value, onChange, variant = 'counts' }) {
  return (
    <section className={cn(styles.card, styles[variant])} aria-label={title}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.items}>
        {items.map((item) => {
          const active = item.value === value;
          return (
            <li key={item.label}>
              <button
                type="button"
                className={cn(styles.item, active && styles.active)}
                aria-pressed={active}
                onClick={() => onChange(item.value)}
              >
                {variant === 'list' && (
                  <Icon name={item.value === null ? 'grid' : 'document'} size={16} className={styles.icon} />
                )}
                <span className={styles.label}>{item.label}</span>
                {item.count !== undefined && <span className={styles.count}>{item.count}</span>}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default CategoryFilter;
