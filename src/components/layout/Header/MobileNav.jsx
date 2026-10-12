import { useId, useState } from 'react';
import { cn } from '../../../utils/cn';
import { mainNav, demoCta } from '../../../data/navigation';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import NavItemLabel from './NavItemLabel';
import styles from './MobileNav.module.css';

/**
 * One accordion row (recursive, Levels 1–4). An item with children gets a toggle button
 * (aria-expanded / aria-controls); when the item also has a page, its label stays a link and the
 * chevron is a separate button.
 */
function MobileNavItem({ item, depth, onNavigate }) {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const hasChildren = Boolean(item.children?.length);
  const rowClass = cn(styles.row, styles[`level${depth}`]);

  if (!hasChildren) {
    return (
      <li>
        <NavItemLabel
          item={item}
          className={cn(rowClass, styles.label)}
          activeClassName={styles.active}
          onNavigate={onNavigate}
        />
      </li>
    );
  }

  const chevron = (
    <Icon name="expandMore" size={24} className={cn(styles.chevron, expanded && styles.chevronOpen)} />
  );

  return (
    <li>
      {item.to ? (
        <div className={rowClass}>
          <NavItemLabel item={item} className={styles.label} activeClassName={styles.active} onNavigate={onNavigate} />
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={expanded}
            aria-controls={panelId}
            aria-label={`${item.label} submenu`}
            onClick={() => setExpanded((value) => !value)}
          >
            {chevron}
          </button>
        </div>
      ) : (
        <button
          type="button"
          className={cn(rowClass, styles.rowButton)}
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((value) => !value)}
        >
          <span className={styles.label}>{item.label}</span>
          {chevron}
        </button>
      )}
      <ul id={panelId} hidden={!expanded} className={styles.sublist}>
        {item.children.map((child) => (
          <MobileNavItem key={child.label} item={child} depth={depth + 1} onNavigate={onNavigate} />
        ))}
      </ul>
    </li>
  );
}

/** Mobile/tablet navigation (< 1200px): an accordion panel under the sticky header bar. */
function MobileNav({ id, onNavigate }) {
  return (
    <nav id={id} aria-label="Primary" className={styles.panel}>
      <ul className={styles.list}>
        {mainNav.map((item) => (
          <MobileNavItem key={item.label} item={item} depth={1} onNavigate={onNavigate} />
        ))}
      </ul>
      <Button to={demoCta.to} size="md" className={styles.cta} onClick={onNavigate}>
        {demoCta.label}
      </Button>
    </nav>
  );
}

export default MobileNav;
