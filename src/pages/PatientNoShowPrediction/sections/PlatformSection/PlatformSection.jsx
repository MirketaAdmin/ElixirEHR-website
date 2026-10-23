import { Link } from 'react-router-dom';
import { noShowPlatform } from '../../../../data/patientNoShowPrediction';
import Section from '../../../../components/layout/Section/Section';
import SectionIntro from '../../components/SectionIntro/SectionIntro';
import styles from './PlatformSection.module.css';

/** A product card: a router link when the page exists, otherwise a plain card (no page yet). */
function PlatformCard({ item }) {
  const body = (
    <>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.text}>{item.text}</p>
    </>
  );
  return item.to ? (
    <Link to={item.to} className={styles.card}>
      {body}
    </Link>
  ) : (
    <div className={styles.card}>{body}</div>
  );
}

/** "Where no-show prediction sits in the Elixir platform": six product cards. */
function PlatformSection() {
  const { chip, title, description, items } = noShowPlatform;

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="ns-platform-title">
      <SectionIntro
        id="ns-platform-title"
        chip={chip}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title}>
            <PlatformCard item={item} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default PlatformSection;
