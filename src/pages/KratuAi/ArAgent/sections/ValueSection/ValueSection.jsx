import { arValue } from '../../../../../data/arAgent';
import Section from '../../../../../components/layout/Section/Section';
import Icon from '../../../../../components/ui/Icon/Icon';
import styles from './ValueSection.module.css';

/** "Your next denial is often predictable" — four outcome cards on lime top edges. */
function ValueSection() {
  const { title, description, items } = arValue;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ar-value-title">
      <h2 id="ar-value-title" className={styles.heading}>
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <a href={item.link.href} className={styles.link}>
              {item.link.label}
              <Icon name="chevronRight" size={12} />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ValueSection;
