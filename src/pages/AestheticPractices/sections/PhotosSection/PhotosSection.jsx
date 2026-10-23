import { aePhotos } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import AeIntro from '../../components/AeIntro/AeIntro';
import styles from './PhotosSection.module.css';

/** "Before-and-After Photos Are Marketing Assets and PHI" (dark) — the hero's second CTA lands here. */
function PhotosSection() {
  const { eyebrow, title, description, enforcement, points, checklist, note } = aePhotos;

  return (
    <Section
      id="before-and-after"
      tone="dark"
      spacing="none"
      className={styles.section}
      aria-labelledby="ae-photos-title"
    >
      <AeIntro id="ae-photos-title" eyebrow={eyebrow} title={title} description={description} tone="dark" className={styles.intro} />
      <div className={styles.case}>
        <div className={styles.figure}>
          <p className={styles.figureLabel}>{enforcement.label}</p>
          <p className={styles.figureValue}>{enforcement.figure}</p>
        </div>
        <div className={styles.caseBody}>
          <h3 className={styles.caseTitle}>{enforcement.title}</h3>
          <p className={styles.caseText}>{enforcement.text}</p>
          <p className={styles.kicker}>{enforcement.kicker}</p>
        </div>
      </div>
      <div className={styles.columns}>
        <div className={styles.points}>
          {points.map((point) => (
            <div key={point.title}>
              <h3 className={styles.pointTitle}>{point.title}</h3>
              <p className={styles.pointText}>{point.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.checklist}>
          <p className={styles.checkLabel}>{checklist.label}</p>
          <h3 className={styles.checkTitle}>{checklist.title}</h3>
          <ol className={styles.checkList}>
            {checklist.items.map((item, index) => (
              <li key={item}>
                <span className={styles.checkNumber}>{index + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className={styles.checkNote}>{checklist.note}</p>
        </div>
      </div>
      <p className={styles.note}>
        <img src={note.icon.src} alt="" width={note.icon.size[0]} height={note.icon.size[1]} />
        <span>{note.text}</span>
      </p>
    </Section>
  );
}

export default PhotosSection;
