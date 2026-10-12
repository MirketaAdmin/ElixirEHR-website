import { platformIntro } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import Button from '../../../../components/ui/Button/Button';
import Icon from '../../../../components/ui/Icon/Icon';
import watermark from '../../../../assets/home/platform-intro/elixir-watermark.png';
import wordmark from '../../../../assets/home/platform-intro/elixir-wordmark-purple.png';
import styles from './PlatformIntroSection.module.css';

function PlatformIntroSection() {
  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div className={styles.content}>
        <div className={styles.brand}>
          <img src={watermark} alt="" width="333" height="90" className={styles.watermark} />
          <img src={wordmark} alt="Elixir" width="141" height="53" />
        </div>
        <p className={styles.badge}>{platformIntro.badge}</p>
        <p className={styles.description}>{platformIntro.description}</p>
        <Button to={platformIntro.cta.to} variant="tertiary" size="lg" className={styles.cta}>
          {platformIntro.cta.label}
          <Icon name="arrowRight" />
        </Button>
      </div>

      <ul className={styles.cards}>
        {platformIntro.cards.map((card) => (
          <li key={card.title} className={cn(styles.card, styles[card.tone])}>
            <img src={card.icon} alt="" width={card.iconSize[0]} height={card.iconSize[1]} />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default PlatformIntroSection;
