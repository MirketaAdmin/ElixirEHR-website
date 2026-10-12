import styles from './Breadcrumb.module.css';

function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={`${styles.list} label-md`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className={styles.item}>
              {isLast || !item.href ? (
                <span aria-current={isLast ? 'page' : undefined} className={styles.current}>
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              )}
              {!isLast && (
                <span className={styles.separator} aria-hidden="true">
                  &gt;
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
