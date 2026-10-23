import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ccPrograms } from '../../../../data/careCoordination';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import CcRows from '../../components/CcRows/CcRows';
import styles from './ProgramsSection.module.css';

/** "When the Level of Care Changes, the Record Should Not Restart" — four rows and two links. */
function ProgramsSection() {
  const { eyebrow, title, description, items, explore } = ccPrograms;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="cc-programs-title">
      <BhIntro id="cc-programs-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <CcRows items={items} className={styles.rows} />
      <p className={styles.explore}>
        <span>{explore.label}</span>
        {explore.links.map((link, index) => (
          <Fragment key={link.to}>
            {index > 0 && (
              <span aria-hidden="true" className={styles.dot}>
                ·
              </span>
            )}
            <Link to={link.to} className={styles.link}>
              {link.label}
              <img src={explore.icon.src} alt="" width={explore.icon.size[0]} height={explore.icon.size[1]} />
            </Link>
          </Fragment>
        ))}
      </p>
    </Section>
  );
}

export default ProgramsSection;
