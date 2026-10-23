import { Link } from 'react-router-dom';
import { careerPositions } from '../../../data/career';
import Section from '../../../components/layout/Section/Section';
import locationIcon from '../../../assets/career/icon-location.png';
import { getJobPath, jobOpenings } from '../data/jobOpenings';
import styles from './JobOpenings.module.css';

/**
 * "View & Apply": opens the job's posting when it has one (`detail`); until then the button is shown
 * as drawn but is not interactive (and hidden from assistive tech, since it leads nowhere).
 */
function ViewApplyLink({ job }) {
  if (job.detail) {
    return (
      <Link to={getJobPath(job)} className={styles.apply}>
        View &amp; Apply<span className="visually-hidden">: {job.title}</span>
      </Link>
    );
  }
  return (
    <span className={styles.apply} aria-hidden="true">
      View &amp; Apply
    </span>
  );
}

/** "Open Positions" on /career: one card per job (department pill, title, location, button). */
function JobOpenings() {
  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="career-positions-title">
      <h2 id="career-positions-title" className={styles.heading}>
        {careerPositions.title}
      </h2>
      <ul className={styles.grid}>
        {jobOpenings.map((job) => (
          <li key={job.slug} className={styles.card}>
            <p className={styles.department}>{job.department}</p>
            <h3 className={styles.title}>{job.detail ? <Link to={getJobPath(job)}>{job.title}</Link> : job.title}</h3>
            <p className={styles.location}>
              <img src={locationIcon} alt="" width="14" height="17" />
              {job.location}
            </p>
            <ViewApplyLink job={job} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default JobOpenings;
