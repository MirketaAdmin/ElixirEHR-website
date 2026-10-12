import { evvExplore } from '../../../../data/electronicVisitVerification';
import Section from '../../../../components/layout/Section/Section';
import Button from '../../../../components/ui/Button/Button';
import { cn } from '../../../../utils/cn';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './ExploreSection.module.css';

/** "Go deeper": the two EVV topic pages (target of the hero's "Explore EVV in Elixir" CTA). */
function ExploreSection() {
  const { eyebrow, title, description, items } = evvExplore;

  return (
    <Section id="explore-evv" spacing="none" className={styles.section} aria-labelledby="evv-explore">
      <EyebrowHeading id="evv-explore" eyebrow={eyebrow} title={title} align="center" className={styles.heading} />
      <p className={styles.description}>{description}</p>

      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title} className={cn(styles.card, styles[item.accent])}>
            <p className={styles.label}>{item.label}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <ul className={styles.points}>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Button variant="tertiary" size="sm" to={item.link.to} className={styles.button}>
              {item.link.label}
              <span aria-hidden="true">→</span>
            </Button>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default ExploreSection;
