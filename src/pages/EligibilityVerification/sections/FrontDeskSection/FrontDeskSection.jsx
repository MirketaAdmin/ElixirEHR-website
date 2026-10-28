import { frontDesk } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import EvCheckList from '../../components/EvCheckList/EvCheckList';
import styles from './FrontDeskSection.module.css';

function FrontDeskSection() {
  const { title, paragraphs, points } = frontDesk;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <img src={frontDesk.image.src} alt={frontDesk.image.alt} width="461" height="461" className={styles.media} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.body}>
            <RichText content={paragraph} emphasisClassName={styles.emphasis} />
          </p>
        ))}
        <EvCheckList items={points} className={styles.points} />
      </div>
    </Section>
  );
}

export default FrontDeskSection;
