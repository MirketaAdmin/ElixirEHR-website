import styles from './SectionHeading.module.css';

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}) {
  return (
    <div className={`${styles.heading} ${styles[align]} ${styles[tone]} ${className}`}>
      {eyebrow && <p className={`${styles.eyebrow} eyebrow`}>{eyebrow}</p>}
      <h2 className={`${styles.title} headline-lg`}>{title}</h2>
      {description && <p className={`${styles.description} body-lg`}>{description}</p>}
    </div>
  );
}

export default SectionHeading;
