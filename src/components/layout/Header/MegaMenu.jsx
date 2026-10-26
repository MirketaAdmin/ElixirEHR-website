import { NavLink } from 'react-router-dom';
import { findNavItem, navDescriptions } from '../../../data/navigation';
import { cn } from '../../../utils/cn';
import Container from '../Container/Container';
import Icon from '../../ui/Icon/Icon';
import styles from './MegaMenu.module.css';

/**
 * A menu entry: a router link when the page exists (`to`), otherwise the same content as plain,
 * muted text (pages that are not built yet are listed but never linked).
 */
function Entry({ item, className, onNavigate, children }) {
  if (item?.to) {
    return (
      <NavLink
        to={item.to}
        end
        onClick={onNavigate}
        className={({ isActive }) => cn(className, isActive && styles.current)}
      >
        {children}
      </NavLink>
    );
  }
  return <span className={cn(className, styles.pending)}>{children}</span>;
}

/** Column heading: tone-coloured caps with an icon; links to the section's page when it has one. */
function Heading({ column, section, onNavigate, label = column.heading ?? section?.label }) {
  const headingClass = cn(styles.heading, column.titleHeading && styles.titleHeading);
  const content = (
    <>
      {column.icon && <Icon name={column.icon} size={14} />}
      {label}
    </>
  );
  return (
    <div className={styles.headingRow}>
      {section?.to ? (
        <Entry item={section} className={cn(headingClass, styles.headingLink)} onNavigate={onNavigate}>
          {content}
        </Entry>
      ) : (
        <p className={headingClass}>{content}</p>
      )}
      {column.note && <span className={styles.note}>{column.note}</span>}
    </div>
  );
}

/** Every entry under `item`, flattened in order, with its depth (1 = direct child). */
function descendants(item, depth = 1) {
  return (item.children ?? []).flatMap((child) => [{ item: child, depth }, ...descendants(child, depth + 1)]);
}

function MegaColumn({ column, groups, onNavigate }) {
  const find = (label) => findNavItem(groups, label);
  const section = column.section ? find(column.section) : null;
  const items = (column.items ?? section?.children.map((child) => child.label) ?? []).map((entry) =>
    typeof entry === 'string' ? { item: find(entry) } : { ...entry, item: find(entry.label) },
  );
  const heading = <Heading column={column} section={section} onNavigate={onNavigate} />;
  const intro = column.intro && <p className={styles.intro}>{column.intro}</p>;

  switch (column.type) {
    case 'featured':
      return (
        <>
          {heading}
          {intro}
          <div className={styles.stack}>
            {items.map(({ item, icon, tone }) => (
              <Entry key={item.label} item={item} className={styles.featured} onNavigate={onNavigate}>
                <span className={styles.iconTile} data-tone={tone}>
                  <Icon name={icon} size={16} />
                </span>
                <span>
                  <span className={styles.featuredTitle}>{item.label}</span>
                  <span className={styles.description}>{navDescriptions[item.label]}</span>
                </span>
              </Entry>
            ))}
          </div>
        </>
      );

    case 'sections':
      return (
        <div className={styles.sections}>
          {column.sections.map((entry) => {
            const sectionItem = find(entry.label);
            return (
              <div key={entry.label} data-tone={entry.tone}>
                <Heading column={entry} section={sectionItem} onNavigate={onNavigate} />
                <ul className={styles.list}>
                  {descendants(sectionItem).map(({ item, depth }) => (
                    <li key={item.label} style={{ '--depth': depth - 1 }}>
                      <Entry item={item} className={styles.arrowLink} onNavigate={onNavigate}>
                        <Icon name="chevronRight" size={12} className={styles.arrow} />
                        {item.label}
                      </Entry>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      );

    case 'banner':
      return (
        <div className={styles.banner}>
          <div>
            <span className={styles.badge}>
              <Icon name={column.icon} size={12} />
              {column.badge}
            </span>
            <p className={styles.bannerTitle}>{column.title}</p>
            <p className={styles.bannerText}>{column.text}</p>
          </div>
          <div className={styles.bannerFooter}>
            <span>{column.note}</span>
            <Entry item={column.link} className={styles.bannerLink} onNavigate={onNavigate}>
              {column.link.label} &rarr;
            </Entry>
          </div>
        </div>
      );

    case 'cards':
      return (
        <>
          {heading}
          {intro}
          <div className={styles.stack}>
            {items.map(({ item }) => (
              <Entry key={item.label} item={item} className={styles.card} onNavigate={onNavigate}>
                <span className={styles.cardTitle}>{item.label}</span>
                <span className={styles.description}>{navDescriptions[item.label]}</span>
              </Entry>
            ))}
          </div>
        </>
      );

    case 'rows':
      return (
        <>
          {heading}
          {intro}
          <ul className={cn(styles.rows, column.plain && styles.plainRows)}>
            {items.map(({ item }) => {
              const icon = column.icons?.[item.label];
              const rowClass = cn(styles.row, column.filled && styles.filledRow, column.plain && styles.plainRow);
              const text = (
                <span>
                  <span className={styles.rowTitle}>{item.label}</span>
                  {navDescriptions[item.label] && (
                    <span className={styles.description}>{navDescriptions[item.label]}</span>
                  )}
                </span>
              );
              return (
                <li key={item.label}>
                  {item.children ? (
                    // Its sub-pages make up the description line (links cannot nest).
                    <div className={rowClass}>
                      <span>
                        <Entry item={item} className={styles.rowTitle} onNavigate={onNavigate}>
                          {item.label}
                        </Entry>
                        <span className={styles.description}>
                          {item.children.map((child, index) => (
                            <span key={child.label}>
                              {index > 0 && ' & '}
                              <Entry item={child} className={styles.inlineLink} onNavigate={onNavigate}>
                                {child.label}
                              </Entry>
                            </span>
                          ))}
                        </span>
                      </span>
                    </div>
                  ) : (
                    <Entry item={item} className={rowClass} onNavigate={onNavigate}>
                      {icon && <Icon name={icon} size={14} className={styles.rowIcon} />}
                      {text}
                    </Entry>
                  )}
                </li>
              );
            })}
          </ul>
        </>
      );

    case 'links': {
      const cta = column.cta && find(column.cta.item);
      return (
        <>
          {heading}
          <ul className={styles.list}>
            {items.map(({ item }) => (
              <li key={item.label}>
                <Entry item={item} className={styles.plainLink} onNavigate={onNavigate}>
                  {item.label}
                </Entry>
              </li>
            ))}
          </ul>
          {cta && (
            <div className={styles.ctaCard}>
              <p className={styles.cardTitle}>{column.cta.title}</p>
              <p className={styles.description}>{column.cta.text}</p>
              <Entry item={cta} className={styles.ctaButton} onNavigate={onNavigate}>
                {cta.label}
              </Entry>
            </div>
          )}
        </>
      );
    }

    case 'tiles': {
      const sub = find(column.sub.section);
      return (
        <>
          {heading}
          <div className={styles.tiles}>
            {items.map(({ item }) => (
              <Entry key={item.label} item={item} className={styles.tile} onNavigate={onNavigate}>
                {item.label}
              </Entry>
            ))}
          </div>
          <div className={styles.subSection} data-tone={column.sub.tone}>
            <Heading column={column.sub} section={sub} onNavigate={onNavigate} />
            <div className={styles.inlineLinks}>
              {sub.children.map((child) => (
                <Entry key={child.label} item={child} className={styles.plainLink} onNavigate={onNavigate}>
                  {child.label}
                </Entry>
              ))}
            </div>
          </div>
        </>
      );
    }

    case 'grid':
      return (
        <>
          {heading}
          <div className={styles.grid}>
            {items.map(({ item }) => (
              <Entry key={item.label} item={item} className={styles.gridCard} onNavigate={onNavigate}>
                <span className={styles.cardTitle}>{item.label}</span>
                {navDescriptions[item.label] && (
                  <span className={styles.description}>{navDescriptions[item.label]}</span>
                )}
              </Entry>
            ))}
          </div>
        </>
      );

    default:
      return null;
  }
}

/**
 * One top-level item's mega panel (reference navbar): full width under the header, content on
 * the page container's 12-column grid. It stays mounted so it can fade and slide both in and out;
 * while closed it is `visibility: hidden`, so its links are neither visible nor focusable.
 */
function MegaMenu({ panel, id, labelledBy, open, onNavigate }) {
  return (
    <div id={id} role="region" aria-labelledby={labelledBy} className={cn(styles.panel, open && styles.open)}>
      <Container className={styles.inner}>
        {panel.columns.map((column, index) => (
          <div
            key={index}
            className={cn(styles.column, column.divider && styles.divider)}
            style={{ '--span': column.span }}
            data-tone={column.tone}
          >
            <MegaColumn column={column} groups={panel.groups} onNavigate={onNavigate} />
          </div>
        ))}
      </Container>
    </div>
  );
}

export default MegaMenu;
