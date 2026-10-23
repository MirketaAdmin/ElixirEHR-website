import { opTelehealth } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import checkIcon from '../../../../assets/outpatient-clinics/icon-check.png';
import OpIntro from '../../components/OpIntro/OpIntro';
import styles from './TelehealthSection.module.css';

/** "Telehealth for Outpatient Clinics" — four rule cards and "What this means for your clinic". */
function TelehealthSection() {
  const { eyebrow, title, description, cards, means } = opTelehealth;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="op-telehealth-title">
      <OpIntro id="op-telehealth-title" accent="yellow" eyebrow={eyebrow} title={title} description={description} />
      <ul className={styles.cards}>
        {cards.map((card) => (
          <li key={card.title} className={cn(styles.card, styles[card.tone])}>
            <div className={styles.head}>
              <span className={styles.chip}>{card.chip}</span>
              <span className={styles.when} style={card.whenWidth ? { '--when-width': `${card.whenWidth}px` } : undefined}>
                {card.when}
              </span>
            </div>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.means}>
        <h3 className={styles.meansTitle}>{means.title}</h3>
        <p className={styles.lead}>{means.lead}</p>
        <ul className={styles.items}>
          {means.items.map((item) => (
            <li key={item}>
              <img src={checkIcon} alt="" width="17" height="13" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default TelehealthSection;
