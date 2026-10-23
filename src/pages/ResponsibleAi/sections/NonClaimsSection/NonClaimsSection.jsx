import { raNonClaims } from '../../../../data/responsibleAi';
import Section from '../../../../components/layout/Section/Section';
import xIcon from '../../../../assets/responsible-ai/icon-x.png';
import RaIntro from '../../components/RaIntro/RaIntro';
import styles from './NonClaimsSection.module.css';

/** "What we do not claim" — four non-claims inside a red-edged frame. */
function NonClaimsSection() {
  const { chip, title, description, items } = raNonClaims;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="ra-nonclaims-title">
      <RaIntro
        id="ra-nonclaims-title"
        chip={chip}
        chipTone="red"
        title={title}
        description={description}
        align="center"
        className={styles.intro}
      />
      <ol className={styles.frame}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={xIcon} alt="" width="12" height="12" />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <p className={styles.label}>Non-claim {String(index + 1).padStart(2, '0')}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default NonClaimsSection;
