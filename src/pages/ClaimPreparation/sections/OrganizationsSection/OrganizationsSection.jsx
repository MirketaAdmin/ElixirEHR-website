import { Link } from 'react-router-dom';
import { pcOrganizations } from '../../../../data/claimPreparation';
import Section from '../../../../components/layout/Section/Section';
import arrowIcon from '../../../../assets/claim-preparation/icon-arrow-yellow.png';
import styles from './OrganizationsSection.module.css';

function OrganizationsSection() {
  const { badge, title, cards } = pcOrganizations;

  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <p className={styles.badge}>{badge}</p>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <span className={styles.icon}>
              <img src={card.icon.src} alt="" width={card.icon.width} height={card.icon.height} />
            </span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
            <Link to={card.link.to} className={styles.link}>
              {card.link.label}
              <img src={arrowIcon} alt="" width="10" height="10" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default OrganizationsSection;
