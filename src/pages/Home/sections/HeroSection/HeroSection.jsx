import { hero } from '../../../../data/home';
import Container from '../../../../components/layout/Container/Container';
import Button from '../../../../components/ui/Button/Button';
import Icon from '../../../../components/ui/Icon/Icon';
import laptopImage from '../../../../assets/home/hero/elixir-ehr-dashboard-laptop.png';
import sparkleIcon from '../../../../assets/icons/sparkle-dark.png';
import styles from './HeroSection.module.css';

function renderLine(line) {
  if (!line.startsWith(hero.titleAccent)) return line;
  return (
    <>
      <span className={styles.accent}>{hero.titleAccent}</span>
      {line.slice(hero.titleAccent.length)}
    </>
  );
}

function HeroSection() {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <h1 className={`text-display-lg ${styles.title}`}>
            {hero.titleLines.map((line) => (
              <span key={line} className={styles.line}>
                {renderLine(line)}
              </span>
            ))}
          </h1>
          <p className={styles.description}>{hero.description}</p>
          <div className={styles.actions}>
            <Button to={hero.secondaryCta.to} variant="ghost" size="xl" className={styles.tour}>
              <Icon name="playCircle" />
              {hero.secondaryCta.label}
            </Button>
            <Button to={hero.primaryCta.to} size="xl">
              {hero.primaryCta.label}
            </Button>
          </div>
        </div>

        <div className={styles.media}>
          <img
            src={laptopImage}
            alt="Elixir EHR dashboard on a laptop"
            width="518"
            height="283"
            className={styles.image}
          />
          <div className={styles.insight}>
            <img src={sparkleIcon} alt="" width="33" height="33" />
            <p className={styles.insightText}>
              <span className={styles.insightLabel}>{hero.insight.label}</span>
              {hero.insight.text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
