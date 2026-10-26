import { useId, useState } from 'react';
import { cn } from '../../../utils/cn';
import { mainNav, demoCta, groupIcons } from '../../../data/navigation';
import Button from '../../ui/Button/Button';
import Icon from '../../ui/Icon/Icon';
import NavItemLabel from './NavItemLabel';
import styles from './MobileNav.module.css';

/** A group's entries: plain links, and sections as a caps heading over their own pages. */
function GroupEntries({ items, onNavigate, depth = 0 }) {
  return items.map((item) =>
    item.children ? (
      <div key={item.label} className={cn(styles.section, depth > 0 && styles.nested)}>
        <NavItemLabel
          item={item}
          className={depth > 0 ? styles.link : styles.sectionHeading}
          activeClassName={styles.active}
          pendingClassName={styles.pending}
          onNavigate={onNavigate}
        />
        <GroupEntries items={item.children} onNavigate={onNavigate} depth={depth + 1} />
      </div>
    ) : (
      <NavItemLabel
        key={item.label}
        item={item}
        className={styles.link}
        activeClassName={styles.active}
        pendingClassName={styles.pending}
        onNavigate={onNavigate}
      />
    ),
  );
}

/** One top-level group: a bordered card whose header toggles its entries. */
function MobileGroup({ group, onNavigate }) {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const { icon, tone } = groupIcons[group.label] ?? {};
  return (
    <div className={styles.group} data-tone={tone}>
      <button
        type="button"
        className={styles.groupButton}
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((value) => !value)}
      >
        <span className={styles.groupLabel}>
          {icon && <Icon name={icon} size={16} className={styles.groupIcon} />}
          {group.label}
        </span>
        <Icon name="expandMore" size={18} className={cn(styles.chevron, expanded && styles.chevronOpen)} />
      </button>
      <div id={panelId} hidden={!expanded} className={styles.groupBody}>
        <GroupEntries items={group.children} onNavigate={onNavigate} />
      </div>
    </div>
  );
}

/** Mobile/tablet navigation (< 1200px): the reference's drawer under the sticky header bar (Home is the logo). */
function MobileNav({ id, onNavigate }) {
  return (
    <nav id={id} aria-label="Primary" className={styles.panel}>
      <div className={styles.stack}>
        {mainNav.map((group) => (
          <MobileGroup key={group.label} group={group} onNavigate={onNavigate} />
        ))}
        <Button to={demoCta.to} size="md" className={styles.cta} onClick={onNavigate}>
          {demoCta.label}
        </Button>
      </div>
    </nav>
  );
}

export default MobileNav;
