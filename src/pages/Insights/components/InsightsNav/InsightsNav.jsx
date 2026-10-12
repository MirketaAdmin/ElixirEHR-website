import { NavLink } from 'react-router-dom';
import { insightsNav } from '../../../../data/insights';
import { cn } from '../../../../utils/cn';
import styles from './InsightsNav.module.css';

/** The Insights category bar (All Resources … Videos); the current category is the filled pill. */
function InsightsNav() {
  return (
    <nav aria-label="Insights categories" className={styles.bar}>
      <ul className={styles.list}>
        {insightsNav.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} end className={({ isActive }) => cn(styles.link, isActive && styles.active)}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default InsightsNav;
