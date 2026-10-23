import { ccCensus } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import CcIntro from '../../components/CcIntro/CcIntro';
import styles from './CensusSection.module.css';

/** "Intelligent Census & Real-Time Capacity Tracking": intro and the illustrative census board. */
function CensusSection() {
  const { chip, title, description, board } = ccCensus;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="cc-census-title">
      <CcIntro id="cc-census-title" chip={chip} title={title} description={description} tone="dark" className={styles.intro} />
      <div className={styles.board}>
        <div className={styles.head}>
          <div>
            <h3 className={styles.boardTitle}>{board.title}</h3>
            <p className={styles.subtitle}>{board.subtitle}</p>
          </div>
          <ul className={styles.legend}>
            {board.legend.map((item) => (
              <li key={item.label} className={styles[item.tone]}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.beds}>
          {board.beds.map((bed) => (
            <li key={bed.id} className={styles.bed}>
              <p className={styles.bedHead}>
                <span className={styles.bedId}>{bed.id}</span>
                <span className={cn(styles.status, styles[bed.tone])}>{bed.status}</span>
              </p>
              <p className={styles.unit}>{bed.unit}</p>
              <p className={styles.note}>{bed.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default CensusSection;
