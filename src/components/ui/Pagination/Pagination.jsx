import { cn } from '../../../utils/cn';
import Icon from '../Icon/Icon';
import { getPageItems } from './getPageItems';
import styles from './Pagination.module.css';

/**
 * Page controls (‹ 1 2 3 … 12 ›) shared by the Press Releases and Insights listings.
 * `label` names the navigation landmark for assistive tech.
 */
function Pagination({ page, totalPages, onChange, label = 'Pages' }) {
  const items = getPageItems(page, totalPages);

  return (
    <nav aria-label={label} className={styles.pagination}>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <Icon name="chevronLeft" size={20} />
      </button>
      <ol className={styles.pages}>
        {items.map((item) =>
          typeof item === 'number' ? (
            <li key={item}>
              <button
                type="button"
                className={cn(styles.page, item === page && styles.current)}
                onClick={() => onChange(item)}
                aria-current={item === page ? 'page' : undefined}
                aria-label={`Page ${item}`}
              >
                {item}
              </button>
            </li>
          ) : (
            <li key={item} className={styles.gap} aria-hidden="true">
              ...
            </li>
          ),
        )}
      </ol>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
      >
        <Icon name="chevronRight" size={20} />
      </button>
    </nav>
  );
}

export default Pagination;
