import { ppAudit } from '../../../../../data/payorPolicy';
import Section from '../../../../../components/layout/Section/Section';
import PpIntro from '../../components/PpIntro/PpIntro';
import styles from './AuditSection.module.css';

/** "Every value traceable to the policy page it came from" (dark) — four audit guarantees. */
function AuditSection() {
  const { eyebrow, title, description, items } = ppAudit;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="pp-audit-title">
      <PpIntro
        id="pp-audit-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
        tone="dark"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default AuditSection;
