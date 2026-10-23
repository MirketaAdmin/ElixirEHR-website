import { ccCompliance } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import CcIntro from '../../components/CcIntro/CcIntro';
import styles from './ComplianceSection.module.css';

/** "Consent, Recording, and Language Access": six rule cards and the "will not claim" panel. */
function ComplianceSection() {
  const { chip, chipIcon, title, description, cards, notClaim } = ccCompliance;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="cc-compliance-title">
      <CcIntro
        id="cc-compliance-title"
        chip={chip}
        chipIcon={chipIcon}
        title={title}
        description={description}
        tone="dark"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <p className={styles.label}>{card.label}</p>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>
          <img src={notClaim.icon.src} alt="" width={notClaim.icon.size[0]} height={notClaim.icon.size[1]} />
          {notClaim.title}
        </h3>
        <ul className={styles.claims}>
          {notClaim.items.map((item) => (
            <li key={item.label}>
              <strong>{item.label}</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default ComplianceSection;
