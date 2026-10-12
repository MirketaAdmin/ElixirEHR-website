import { Link } from 'react-router-dom';
import { cn } from '../../../utils/cn';
import styles from './Button.module.css';

/**
 * Pill button from the design system.
 * variant: primary (lime) | secondary (yellow) | tertiary (purple) | outline | ghost (translucent on dark)
 * size:    sm 36px | md 48px | lg 56px | xl 58px | xxl 64px  (heights used in the Figma frames)
 * Renders a router <Link> when `to` is set, an <a> when `href` is set, otherwise a <button>.
 */
function Button({ variant = 'primary', size = 'md', to, href, className, children, ...rest }) {
  const classes = cn(styles.button, styles[variant], styles[size], className);

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
