import styles from './Badge.module.css';

function Badge({ variant = 'secondary', className = '', children }) {
  return <span className={`${styles.badge} ${styles[variant]} ${className}`}>{children}</span>;
}

export default Badge;
