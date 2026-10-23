import { shGap } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import ShIntro from '../../components/ShIntro/ShIntro';
import styles from './GapSection.module.css';

/** "The Gap Between Enrolled and Actually Billing" — the CYBHI funnel card beside the argument (the hero's second CTA lands here). */
function GapSection() {
  const { eyebrow, title, description, funnel, paragraphs, caveat } = shGap;

  return (
    <Section id="enrolled-gap" tone="white" spacing="none" className={styles.section} aria-labelledby="sh-gap-title">
      <ShIntro id="sh-gap-title" accent="gold" eyebrow={eyebrow} title={title} description={description} />
      <div className={styles.layout}>
        <figure className={styles.funnel}>
          <figcaption className={styles.head}>
            <span className={styles.funnelTitle}>{funnel.title}</span>
            <span className={styles.chip}>{funnel.chip}</span>
          </figcaption>
          <dl className={styles.stats}>
            {funnel.stats.map((stat) => (
              <div key={stat.value}>
                <dt className={styles.value}>{stat.value}</dt>
                <dd className={styles.statText}>{stat.text}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.legend}>
            <p className={styles.active}>
              {funnel.active.label} ({funnel.active.share})
            </p>
            <p className={styles.pending}>
              {funnel.pending.label} ({funnel.pending.share})
            </p>
          </div>
          <div className={styles.bar} aria-hidden="true">
            <span style={{ width: funnel.active.share }} />
          </div>
          <p className={styles.funnelNote}>{funnel.note}</p>
        </figure>
        <div>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.text}>
              {paragraph}
            </p>
          ))}
          <div className={styles.caveat}>
            <img src={caveat.icon.src} alt="" width={caveat.icon.size[0]} height={caveat.icon.size[1]} />
            <div>
              <h3 className={styles.caveatTitle}>{caveat.title}</h3>
              <p className={styles.caveatText}>{caveat.text}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default GapSection;
