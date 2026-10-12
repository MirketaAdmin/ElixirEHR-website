import { dmChallenge } from '../../../../data/denialManagement';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import Button from '../../../../components/ui/Button/Button';
import arrowIcon from '../../../../assets/denial-management/icon-arrow-right-white.png';
import styles from './ChallengeSection.module.css';

function ChallengeSection() {
  const { badge, title, paragraphs, cta, stats, cost, footnote } = dmChallenge;

  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div className={styles.content}>
        <p className={styles.badge}>
          <img src={badge.icon} alt="" width="13" height="12" />
          {badge.label}
        </p>
        <h2 className={styles.title}>{title}</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
        <Button to={cta.to} variant="tertiary" className={styles.cta}>
          {cta.label}
          <img src={arrowIcon} alt="" width="11" height="12" />
        </Button>
      </div>

      <div className={styles.stats}>
        <ul className={styles.pair}>
          {stats.map((stat) => (
            <li key={stat.value} className={styles.stat}>
              <div className={styles.statTop}>
                <p className={cn(styles.value, styles[stat.tone])}>{stat.value}</p>
                <span className={cn(styles.statIcon, styles[stat.tone])}>
                  <img src={stat.icon} alt="" />
                </span>
              </div>
              <p className={styles.statText}>{stat.text}</p>
            </li>
          ))}
        </ul>
        <div className={styles.cost}>
          <span className={styles.costIcon}>
            <img src={cost.icon} alt="" width="22" height="16" />
          </span>
          <p className={styles.costValue}>
            {cost.value}
            <span className={styles.costLabel}>{cost.label}</span>
          </p>
          <p className={styles.costText}>{cost.text}</p>
        </div>
        <p className={styles.footnote}>{footnote}</p>
      </div>
    </Section>
  );
}

export default ChallengeSection;
