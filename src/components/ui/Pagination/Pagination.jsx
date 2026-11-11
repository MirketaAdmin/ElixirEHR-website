import { cn } from '../../../utils/cn';
import Icon from '../Icon/Icon';
import { getPageItems } from './getPageItems';
import styles from './Pagination.module.css';

// `?page=N` for page N; page 1 is the listing's own URL ("./" from any "?page=" URL of it).
const hrefFor = (target) => (target <= 1 ? './' : `?page=${target}`);

/**
 * Page controls (‹ 1 2 3 … 12 ›) shared by the Press Releases and Insights listings.
 * `label` names the navigation landmark for assistive tech.
 * With `linked`, every control is a real link (`?page=N`) so search engines can reach the cards on
 * later pages; a plain click still changes the page in place (no reload). Without it, buttons.
 */
function Pagination({ page, totalPages, onChange, label = 'Pages', linked = false }) {
  const items = getPageItems(page, totalPages);

  // A link that changes the page in place on a plain click (modified clicks open normally).
  // A plain function (not a component defined in render), so controls are not remounted.
  const control = ({ target, disabled, className, children, ...rest }) => {
    if (!linked) {
      return (
        <button type="button" className={className} onClick={() => onChange(target)} disabled={disabled} {...rest}>
          {children}
        </button>
      );
    }
    if (disabled) {
      return (
        <span className={className} aria-disabled="true" {...rest}>
          {children}
        </span>
      );
    }
    return (
      <a
        href={hrefFor(target)}
        className={className}
        onClick={(event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
          event.preventDefault();
          onChange(target);
        }}
        {...rest}
      >
        {children}
      </a>
    );
  };

  return (
    <nav aria-label={label} className={styles.pagination}>
      {control({ target: page - 1, disabled: page <= 1, className: styles.arrow, 'aria-label': 'Previous page', children: <Icon name="chevronLeft" size={20} /> })}
      <ol className={styles.pages}>
        {items.map((item) =>
          typeof item === 'number' ? (
            <li key={item}>
              {control({
                target: item,
                className: cn(styles.page, item === page && styles.current),
                'aria-current': item === page ? 'page' : undefined,
                'aria-label': `Page ${item}`,
                children: item,
              })}
            </li>
          ) : (
            <li key={item} className={styles.gap} aria-hidden="true">
              ...
            </li>
          ),
        )}
      </ol>
      {control({ target: page + 1, disabled: page >= totalPages, className: styles.arrow, 'aria-label': 'Next page', children: <Icon name="chevronRight" size={20} /> })}
    </nav>
  );
}

export default Pagination;
