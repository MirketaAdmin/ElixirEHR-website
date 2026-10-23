import { Link } from 'react-router-dom';
import { bhPaths } from '../../../../data/behavioralHealth';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import checkIcon from '../../../../assets/behavioral-health/icon-check-circle.png';
import arrowIcon from '../../../../assets/behavioral-health/icon-arrow-right.png';
import BhIntro from '../../components/BhIntro/BhIntro';
import styles from './PathsSection.module.css';

/** "Two paths" — the mental health and substance use disorder service lines side by side. */
function PathsSection() {
  const { id, eyebrow, title, description, lines } = bhPaths;

  return (
    <Section tone="white" spacing="none" id={id} className={styles.section} aria-labelledby="bh-paths-title">
      <BhIntro
        id="bh-paths-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        align="center"
        className={styles.intro}
      />
      <div className={styles.grid}>
        {lines.map((line) => {
          const linkContent = (
            <>
              {line.link.label}
              <img src={arrowIcon} alt="" width="13" height="12" />
            </>
          );

          return (
            <article key={line.title} className={cn(styles.card, styles[line.tone])}>
              <div className={styles.head}>
                <p className={styles.label}>{line.label}</p>
                <img src={line.icon.src} alt="" width={line.icon.size[0]} height={line.icon.size[1]} />
              </div>
              <h3 className={styles.title}>{line.title}</h3>
              <p className={styles.description}>{line.description}</p>
              <ul className={styles.list}>
                {line.items.map((item) => (
                  <li key={item}>
                    <img src={checkIcon} alt="" width="17" height="17" />
                    {item}
                  </li>
                ))}
              </ul>
              {line.link.to ? (
                <Link to={line.link.to} className={styles.link}>
                  {linkContent}
                </Link>
              ) : (
                <span className={styles.link}>{linkContent}</span>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export default PathsSection;
