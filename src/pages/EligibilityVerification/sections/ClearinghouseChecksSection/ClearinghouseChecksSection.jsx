import { clearinghouseChecks } from '../../../../data/eligibilityVerification';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import EvCheckList from '../../components/EvCheckList/EvCheckList';
import styles from './ClearinghouseChecksSection.module.css';

function ClearinghouseChecksSection() {
  const { titleLines, body, points } = clearinghouseChecks;

  return (
    <Section tone="white" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <img src={clearinghouseChecks.image.src} alt={clearinghouseChecks.image.alt} width="552" height="406" className={styles.media} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h2>
        <p className={styles.body}>
          <RichText content={body} emphasisClassName={styles.emphasis} />
        </p>
        <EvCheckList items={points} variant="body" className={styles.points} />
      </div>
    </Section>
  );
}

export default ClearinghouseChecksSection;
