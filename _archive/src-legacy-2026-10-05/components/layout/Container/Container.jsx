import styles from './Container.module.css';

function Container({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`${styles.container} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export default Container;
