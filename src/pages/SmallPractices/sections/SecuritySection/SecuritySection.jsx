import { spSecurity } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import SpIntro from '../../components/SpIntro/SpIntro';
import styles from './SecuritySection.module.css';

/** "Security and HIPAA in a Practice With No IT Staff" (dark) — who is responsible for what. */
function SecuritySection() {
  const { eyebrow, title, description, cards, source } = spSecurity;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="sp-security-title">
      <SpIntro id="sp-security-title" eyebrow={eyebrow} title={title} description={description} tone="dark" strong />
      <ul className={styles.cards}>
        {cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <p className={cn(styles.label, card.labelTone && styles[card.labelTone])}>
              <img src={card.icon.src} alt="" width={card.icon.size[0]} height={card.icon.size[1]} />
              {card.label}
            </p>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </li>
        ))}
      </ul>
      <p className={styles.source}>
        {source} <span aria-hidden="true">&darr;</span>
      </p>
    </Section>
  );
}

export default SecuritySection;
