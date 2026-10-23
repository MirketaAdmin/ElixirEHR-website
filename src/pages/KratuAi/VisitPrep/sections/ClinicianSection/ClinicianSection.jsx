import { visitPrepClinician } from '../../../../../data/visitPrep';
import Section from '../../../../../components/layout/Section/Section';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './ClinicianSection.module.css';

/** "What the Provider Sees Before the Exam Begins": the encounter chart mock-up beside the copy. */
function ClinicianSection() {
  const { eyebrow, title, description, checkIcon, points, mock } = visitPrepClinician;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="vp-clinician-title">
      <div className={styles.layout}>
        {/* Illustration of the encounter chart (static example data). */}
        <figure className={styles.mock}>
          <figcaption className={styles.mockHeader}>
            <span className={styles.location}>{mock.location}</span>
            <span className={styles.action}>
              <img src={mock.action.icon.src} alt="" width={mock.action.icon.size[0]} height={mock.action.icon.size[1]} />
              {mock.action.label}
            </span>
          </figcaption>
          <div className={styles.mockBody}>
            <div className={styles.patient}>
              <div>
                <p className={styles.patientName}>{mock.patient}</p>
                <p className={styles.patientMeta}>{mock.meta}</p>
              </div>
              <span className={styles.status}>{mock.status}</span>
            </div>
            <p className={styles.prioritiesTitle}>{mock.prioritiesTitle}</p>
            <ol className={styles.priorities}>
              {mock.priorities.map((priority) => (
                <li key={priority.title} className={styles[priority.tone]}>
                  <p className={styles.priorityHead}>
                    <span>{priority.title}</span>
                    <span className={styles.priorityStatus}>{priority.status}</span>
                  </p>
                  <p className={styles.priorityText}>{priority.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </figure>

        <div>
          <KrIntro id="vp-clinician-title" eyebrow={eyebrow} title={title} description={description} tone="dark" className={styles.intro} />
          <ul className={styles.points}>
            {points.map((point) => (
              <li key={point.title}>
                <span className={styles.check}>
                  <img src={checkIcon.src} alt="" width={checkIcon.size[0]} height={checkIcon.size[1]} />
                </span>
                <div>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <p className={styles.pointText}>{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default ClinicianSection;
