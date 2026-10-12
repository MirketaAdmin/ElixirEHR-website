import { NavLink } from 'react-router-dom';
import { cn } from '../../../utils/cn';

/**
 * A navigation entry's label: a router link when the item has an existing route (`to`), otherwise
 * plain text (pages that are not built yet are listed but never linked to a placeholder URL).
 */
function NavItemLabel({ item, className, activeClassName, pendingClassName, onNavigate }) {
  if (item.to) {
    return (
      <NavLink
        to={item.to}
        end
        onClick={onNavigate}
        className={({ isActive }) => cn(className, isActive && activeClassName)}
      >
        {item.label}
      </NavLink>
    );
  }

  return <span className={cn(className, pendingClassName)}>{item.label}</span>;
}

export default NavItemLabel;
