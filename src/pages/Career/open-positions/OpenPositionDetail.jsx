import { Link, Navigate, useParams } from 'react-router-dom';
import Container from '../../../components/layout/Container/Container';
import Section from '../../../components/layout/Section/Section';
import Icon from '../../../components/ui/Icon/Icon';
import { useShareActions } from '../../../components/posts/PostShare/useShareActions';
import { getJobOpening } from '../data/jobOpenings';
import locationIcon from '../../../assets/icons/post-location.png';
import briefcaseIcon from '../../../assets/career/icon-briefcase.png';
import levelIcon from '../../../assets/career/icon-level.png';
import aboutIcon from '../../../assets/career/icon-about.png';
import responsibilitiesIcon from '../../../assets/career/icon-responsibilities.png';
import requirementsIcon from '../../../assets/career/icon-requirements.png';
import checkIcon from '../../../assets/career/icon-check.png';
import shareIcon from '../../../assets/career/icon-share.png';
import linkIcon from '../../../assets/career/icon-link.png';
import mailIcon from '../../../assets/career/icon-mail.png';
import styles from './OpenPositionDetail.module.css';

const postedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

function BlockHeading({ id, icon, children }) {
  return (
    <h2 id={id} className={styles.blockTitle}>
      <span className={styles.blockIcon}>
        <img src={icon} alt="" width="24" height="24" />
      </span>
      {children}
    </h2>
  );
}

/** "Apply Now": the job's application URL when set; until then shown as drawn but not interactive. */
function ApplyButton({ job }) {
  if (job.applyUrl) {
    return (
      <a href={job.applyUrl} className={styles.apply}>
        Apply Now<span className="visually-hidden">: {job.title}</span>
      </a>
    );
  }
  return (
    <span className={styles.apply} aria-hidden="true">
      Apply Now
    </span>
  );
}

/** "Share this role": share sheet (or copy), copy link, and email. */
function ShareRole({ title }) {
  const { status, share, copyLink } = useShareActions(title);
  const mailto = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(window.location.href)}`;

  return (
    <div className={styles.share}>
      <p className={styles.shareLabel}>Share this role</p>
      <div className={styles.shareButtons}>
        <button type="button" onClick={share} className={styles.shareButton} aria-label="Share this role">
          <img src={shareIcon} alt="" width="22" height="22" />
        </button>
        <button type="button" onClick={copyLink} className={styles.shareButton} aria-label="Copy link">
          <img src={linkIcon} alt="" width="22" height="12" />
        </button>
        <a href={mailto} className={styles.shareButton} aria-label="Share by email">
          <img src={mailIcon} alt="" width="22" height="18" />
        </a>
      </div>
      <p role="status" className="visually-hidden">
        {status}
      </p>
    </div>
  );
}

/** /career/open-positions/:jobSlug — one job posting (Figma "Open Positions / Job Posting" frame). */
function OpenPositionDetail() {
  const { jobSlug } = useParams();
  const job = getJobOpening(jobSlug);

  // Unknown slugs (or jobs without a posting) follow the app's not-found behaviour.
  if (!job) return <Navigate to="/" replace />;

  const { detail } = job;
  const pills = [
    { key: 'type', icon: briefcaseIcon, size: [20, 20], text: detail.employmentType },
    { key: 'location', icon: locationIcon, size: [16, 20], text: detail.location },
    { key: 'level', icon: levelIcon, size: [20, 19], text: detail.level },
  ];
  const facts = [
    ['Location', detail.facts.location],
    ['Department', detail.facts.department],
    ['Salary Range', detail.facts.salaryRange],
    ['Posted Date', <time key="date" dateTime={detail.facts.postedDate}>{postedDate.format(new Date(detail.facts.postedDate))}</time>],
  ];

  return (
    <>
      <title>{`${job.title} | Careers | Elixir`}</title>
      <meta name="description" content={detail.about.replace(/\n/g, ' ')} />

      <section className={styles.hero} data-header-overlap>
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-hidden="true" className={styles.separator}>
                <Icon name="chevronRight" size={20} />
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li aria-hidden="true" className={styles.separator}>
                <Icon name="chevronRight" size={20} />
              </li>
              <li aria-current="page" className={styles.current}>
                {job.title}
              </li>
            </ol>
          </nav>
          <h1 className={styles.title}>{job.title}</h1>
          <ul className={styles.pills}>
            {pills.map((pill) => (
              <li key={pill.key} className={styles.pill}>
                <img src={pill.icon} alt="" width={pill.size[0]} height={pill.size[1]} />
                {pill.text}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section tone="white" spacing="none" className={styles.body} containerClassName={styles.layout}>
        <div className={styles.main}>
          <section aria-labelledby="job-about">
            <BlockHeading id="job-about" icon={aboutIcon}>
              About the Role
            </BlockHeading>
            <p className={styles.about}>{detail.about}</p>
          </section>

          <section aria-labelledby="job-responsibilities" className={styles.block}>
            <BlockHeading id="job-responsibilities" icon={responsibilitiesIcon}>
              Responsibilities
            </BlockHeading>
            <ul className={styles.checklist}>
              {detail.responsibilities.map((item) => (
                <li key={item}>
                  <img src={checkIcon} alt="" width="22" height="22" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="job-requirements" className={styles.block}>
            <BlockHeading id="job-requirements" icon={requirementsIcon}>
              Requirements
            </BlockHeading>
            <ol className={styles.requirements}>
              {detail.requirements.map((item, index) => (
                <li key={item}>
                  <span className={styles.number} aria-hidden="true">
                    {index + 1}
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className={styles.aside} aria-label="Job facts">
          <ApplyButton job={job} />
          <h2 className={styles.factsTitle}>Job Facts</h2>
          <dl className={styles.facts}>
            {facts.map(([label, value]) => (
              <div key={label} className={styles.fact}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <ShareRole title={job.title} />
        </aside>
      </Section>
    </>
  );
}

export default OpenPositionDetail;
