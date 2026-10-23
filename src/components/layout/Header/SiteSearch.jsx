import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mainNav } from '../../../data/navigation';
import { footerColumns } from '../../../data/footer';
import { cn } from '../../../utils/cn';
import Icon from '../../ui/Icon/Icon';
import styles from './SiteSearch.module.css';

// Footer links whose pages are not built yet (Support Center, Documentation…) are left out: search
// only offers pages that exist.
const PLANNED = new Set(['/resources/support-center', '/resources/documentation', '/resources/developer-api', '/company/partners']);

/** Every linked page in the navigation tree (plus the footer's links), with its trail, once per URL. */
function buildIndex() {
  const pages = new Map();
  const walk = (items, trail) => {
    items.forEach((item) => {
      if (item.to && !pages.has(item.to)) pages.set(item.to, { label: item.label, to: item.to, trail });
      if (item.children) walk(item.children, [...trail, item.label]);
    });
  };
  walk(mainNav, []);
  footerColumns.forEach((column) =>
    column.links.forEach((link) => {
      if (!pages.has(link.to) && !PLANNED.has(link.to)) {
        pages.set(link.to, { label: link.label, to: link.to, trail: [column.title] });
      }
    }),
  );
  return [...pages.values()];
}

/**
 * The header's site search: a modal dialog (native <dialog>, so focus is trapped and Escape
 * closes it) that filters the site's pages as you type. Arrow keys move through the results and
 * Enter opens one. It searches page names and their menu trail; there is no full-text index.
 */
function SiteSearch({ open, onClose }) {
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const listId = useId();
  const navigate = useNavigate();
  const index = useMemo(buildIndex, []);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return index.slice(0, 8);
    return index
      .map((page) => {
        const label = page.label.toLowerCase();
        const haystack = `${label} ${page.trail.join(' ').toLowerCase()}`;
        if (!terms.every((term) => haystack.includes(term))) return null;
        const score = terms.reduce((sum, term) => sum + (label.startsWith(term) ? 3 : label.includes(term) ? 2 : 1), 0);
        return { page, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map(({ page }) => page);
  }, [index, query]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      setQuery('');
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function go(page) {
    onClose();
    navigate(page.to);
  }

  function onKeyDown(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const step = event.key === 'ArrowDown' ? 1 : -1;
      setActive((current) => (current + step + results.length) % Math.max(results.length, 1));
    } else if (event.key === 'Enter' && results[active]) {
      event.preventDefault();
      go(results[active]);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label="Search the site"
      onClose={onClose}
      onClick={(event) => event.target === dialogRef.current && onClose()}
    >
      <div className={styles.box}>
        <div className={styles.field}>
          <Icon name="search" size={22} />
          <input
            ref={inputRef}
            type="search"
            className={styles.input}
            placeholder="Search pages — e.g. telehealth, billing, EVV"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={results[active] ? `${listId}-${active}` : undefined}
            aria-label="Search pages"
          />
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close search">
            <Icon name="close" size={22} />
          </button>
        </div>
        <ul id={listId} role="listbox" className={styles.results} aria-label="Pages">
          {results.map((page, index) => (
            <li
              key={page.to}
              id={`${listId}-${index}`}
              role="option"
              aria-selected={index === active}
              className={cn(styles.result, index === active && styles.active)}
              onPointerEnter={() => setActive(index)}
              onClick={() => go(page)}
            >
              <span className={styles.label}>{page.label}</span>
              {page.trail.length > 0 && <span className={styles.trail}>{page.trail.join(' › ')}</span>}
            </li>
          ))}
        </ul>
        {results.length === 0 && (
          <p className={styles.empty} role="status">
            No pages match “{query}”.
          </p>
        )}
      </div>
    </dialog>
  );
}

export default SiteSearch;
