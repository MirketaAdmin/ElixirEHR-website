import { dmChallenge } from '../../../../data/denialManagement';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import Button from '../../../../components/ui/Button/Button';
import Icon from '../../../../components/ui/Icon/Icon';
import arrowIcon from '../../../../assets/denial-management/icon-arrow-right-white.png';
import styles from './ChallengeSection.module.css';

function ChallengeSection() {
  const { badge, title, paragraph, quote, cta, stats, cost, footnote } = dmChallenge;

  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div className={styles.content}>
        <p className={styles.badge}>
          <img src={badge.icon} alt="" width="13" height="12" />
          {badge.label}
        </p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.paragraph}>{paragraph}</p>
        <blockquote className={styles.quote}>
          <p>{quote}</p>
        </blockquote>
        <Button to={cta.to} variant="tertiary" className={styles.cta}>
          {cta.label}
          <img src={arrowIcon} alt="" width="11" height="12" />
        </Button>
      </div>

      <div className={styles.stats}>
        <ul className={styles.pair}>
          {stats.map((stat) => (
            <li key={stat.value} className={cn(styles.stat, styles[stat.tone])}>
              <div className={styles.statTop}>
                <p className={styles.statLabel}>{stat.label}</p>
                <span className={styles.statIcon}>
                  <Icon name={stat.icon} size={20} />
                </span>
              </div>
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.statText}>{stat.text}</p>
            </li>
          ))}
        </ul>
        <div className={styles.cost}>
          <span className={styles.costIcon}>
            <img src={cost.icon} alt="" width="28" height="27" />
          </span>
          <div>
            <p className={styles.costLabel}>{cost.label}</p>
            <p className={styles.costValue}>{cost.value}</p>
            <p className={styles.costText}>{cost.text}</p>
          </div>
        </div>
        <p className={styles.footnote}>{footnote}</p>
      </div>
    </Section>
  );
}

export default ChallengeSection;
