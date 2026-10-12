import { salesforceEhr } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import EvCheckList from '../../components/EvCheckList/EvCheckList';
import styles from './SalesforceEhrSection.module.css';

function SalesforceEhrSection() {
  const { titleLines, body, points, image } = salesforceEhr;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h2>
        <p className={styles.body}>{body}</p>
        <EvCheckList items={points} variant="body" className={styles.points} />
      </div>
      <div className={styles.media}>
        <img src={image.src} alt={image.alt} width="298" height="464" className={styles.image} />
      </div>
    </Section>
  );
}

export default SalesforceEhrSection;
