import { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { resources } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import SectionHeading from '../../../../components/ui/SectionHeading/SectionHeading';
import userIcon from '../../../../assets/icons/meta-user.png';
import calendarIcon from '../../../../assets/icons/meta-calendar.png';
import styles from './ResourcesSection.module.css';

/** The one resource card, used by every category (only the data changes). */
function ResourceCard({ item }) {
  return (
    <li className={styles.card}>
      <div className={styles.media}>
        <img src={item.image} alt="" width="361" height="224" className={styles.image} />
        <span className={styles.tag}>{item.tag}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          <span className={styles.metaItem}>
            <img src={userIcon} alt="" width="12" height="13" />
            {item.author}
          </span>
          <span className={styles.metaItem}>
            <img src={calendarIcon} alt="" width="13" height="14" />
            {item.date}
          </span>
        </p>
        <h3 className={styles.title}>{item.title}</h3>
        <Link to={item.link.to} className={styles.link}>
          {item.link.label}
          <img src={item.link.icon} alt="" width={item.link.iconSize[0]} height={item.link.iconSize[1]} />
        </Link>
      </div>
    </li>
  );
}

/** Knowledge Base: category tabs (Blog first, as in the frame) switching the card grid. */
function ResourcesSection() {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const { categories } = resources;
  const tabId = (index) => `${baseId}-tab-${index}`;

  function handleKeyDown(event) {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[event.key];
    let next;
    if (step) next = (active + step + categories.length) % categories.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = categories.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById(tabId(next))?.focus();
  }

  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <SectionHeading
        eyebrow={resources.eyebrow}
        title={resources.title}
        align="center"
        className={styles.heading}
      />

      <div className={styles.categories} role="tablist" aria-label="Resource categories">
        {categories.map((category, index) => (
          <button
            key={category.label}
            type="button"
            role="tab"
            id={tabId(index)}
            aria-selected={index === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={handleKeyDown}
            className={cn(styles.category, index === active && styles.active)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={tabId(active)}>
        {/* Keyed by category so the new cards fade in when the tab changes. */}
        <ul key={active} className={styles.grid}>
          {categories[active].items.map((item) => (
            <ResourceCard key={item.title} item={item} />
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default ResourcesSection;
