import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../../../../components/sections/CtaBanner/CtaBanner';
import styles from './ComplianceCta.module.css';

/**
 * Closing band of the Compliance & Security pages: the shared CtaBanner plus a "Related:" row.
 * A related entry without `to` (page not built yet) renders as plain text.
 */
function ComplianceCta({ related, ...banner }) {
  return (
    <CtaBanner {...banner} className={styles.band} secondaryCtaClassName={styles.secondary}>
      <p className={styles.related}>
        Related:{' '}
        {related.map((link, index) => (
          <Fragment key={link.label}>
            {index > 0 && <span aria-hidden="true"> · </span>}
            {link.to ? (
              <Link to={link.to} className={styles.link}>
                {link.label}
              </Link>
            ) : (
              <span className={styles.pending}>{link.label}</span>
            )}
          </Fragment>
        ))}
      </p>
    </CtaBanner>
  );
}

export default ComplianceCta;
