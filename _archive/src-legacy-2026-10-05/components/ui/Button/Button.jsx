import styles from './Button.module.css';

function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}

export default Button;
