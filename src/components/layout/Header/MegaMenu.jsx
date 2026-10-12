import { cn } from '../../../utils/cn';
import NavItemLabel from './NavItemLabel';
import styles from './MegaMenu.module.css';

/** Levels 3 and 4: an indented list under a column heading (recursive). */
function NestedList({ items, depth, onNavigate }) {
  return (
    <ul className={cn(styles.list, depth > 3 && styles.deepList)}>
      {items.map((item) => (
        <li key={item.label}>
          <NavItemLabel
            item={item}
            className={styles.link}
            activeClassName={styles.active}
            pendingClassName={styles.pending}
            onNavigate={onNavigate}
          />
          {item.children && <NestedList items={item.children} depth={depth + 1} onNavigate={onNavigate} />}
        </li>
      ))}
    </ul>
  );
}

/**
 * The panel under a top-level nav item. `mega` lays the Level 2 items out as columns (each with
 * its Level 3/4 children); `dropdown` is a single short list under the trigger.
 */
function MegaMenu({ item, id, labelledBy, onNavigate }) {
  const isDropdown = item.layout === 'dropdown';

  return (
    <div id={id} aria-labelledby={labelledBy} className={cn(styles.panel, isDropdown ? styles.dropdown : styles.mega)}>
      {isDropdown ? (
        <NestedList items={item.children} depth={2} onNavigate={onNavigate} />
      ) : (
        <ul className={styles.groups}>
          {item.children.map((group) => (
            <li key={group.label} className={styles.group}>
              <NavItemLabel
                item={group}
                className={styles.groupTitle}
                activeClassName={styles.active}
                pendingClassName={styles.pending}
                onNavigate={onNavigate}
              />
              {group.children && <NestedList items={group.children} depth={3} onNavigate={onNavigate} />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MegaMenu;
