import { ccAgent } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import CcIntro from '../../components/CcIntro/CcIntro';
import styles from './AgentSection.module.css';

/** "What Your Agents See When the Phone Rings": the generic tool beside the Elixir agent view. */
function AgentSection() {
  const { chip, title, description, cards } = ccAgent;

  return (
    <Section
      id="agent-experience"
      tone="white"
      spacing="none"
      className={styles.section}
      aria-labelledby="cc-agent-title"
    >
      <CcIntro id="cc-agent-title" chip={chip} title={title} description={description} className={styles.intro} />
      <div className={styles.grid}>
        {cards.map((card) => (
          <article key={card.title} className={cn(styles.card, styles[card.tone])}>
            <p className={styles.badge}>
              <img src={card.badge.icon} alt="" width={card.badge.size[0]} height={card.badge.size[1]} />
              {card.badge.label}
            </p>
            <h3 className={styles.title}>{card.title}</h3>
            <p className={styles.text}>{card.text}</p>
            <ul className={styles.items}>
              {card.items.map((item) => (
                <li key={item.label}>
                  <span className={styles.mark}>
                    <img src={card.mark.src} alt="" width={card.mark.size[0]} height={card.mark.size[1]} />
                  </span>
                  <p>
                    <strong>{item.label}</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default AgentSection;
