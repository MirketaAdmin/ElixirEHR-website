import { sudAssessment } from '../../../../data/substanceUseDisorder';
import Section from '../../../../components/layout/Section/Section';
import SudIntro from '../../components/SudIntro/SudIntro';
import styles from './AssessmentSection.module.css';

/** "Level-of-Care Assessment, Placement and Medical Necessity Documentation". */
function AssessmentSection() {
  const { eyebrow, title, description, dimensions, platform } = sudAssessment;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sud-assessment-title">
      <SudIntro id="sud-assessment-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <ol className={styles.grid}>
        {dimensions.map((dimension, index) => (
          <li key={dimension.title} className={styles.card}>
            <div className={styles.head}>
              <span className={styles.chip}>Dimension {index + 1}</span>
              <img src={dimension.icon.src} alt="" width={dimension.icon.size[0]} height={dimension.icon.size[1]} />
            </div>
            <h3 className={styles.title}>{dimension.title}</h3>
            <p className={styles.text}>{dimension.text}</p>
          </li>
        ))}
      </ol>
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>{platform.title}</h3>
        <ul className={styles.items}>
          {platform.items.map((item) => (
            <li key={item.label}>
              <img src={platform.icon.src} alt="" width={platform.icon.size[0]} height={platform.icon.size[1]} />
              <strong>{item.label}</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default AssessmentSection;
