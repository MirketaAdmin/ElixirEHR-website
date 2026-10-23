import { noShowPosition } from '../../../../data/patientNoShowPrediction';
import Section from '../../../../components/layout/Section/Section';
import SectionIntro from '../../components/SectionIntro/SectionIntro';
import styles from './PositionSection.module.css';

/** "Why we don't recommend overbooking": the position on the left, the two arguments and the alternative on the right. */
function PositionSection() {
  const { chip, title, description, arguments: points, statement } = noShowPosition;

  return (
    <Section tone="dark" spacing="none" className={styles.section} containerClassName={styles.layout}>
      <SectionIntro
        id="ns-position-title"
        chip={chip}
        chipTone="dark"
        title={title}
        titleTone="light"
        description={description}
        className={styles.intro}
      />
      <div className={styles.right}>
        {points.map((point) => (
          <article key={point.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{point.title}</h3>
            <p className={styles.cardText}>{point.text}</p>
          </article>
        ))}
        <p className={styles.statement}>{statement}</p>
      </div>
    </Section>
  );
}

export default PositionSection;
