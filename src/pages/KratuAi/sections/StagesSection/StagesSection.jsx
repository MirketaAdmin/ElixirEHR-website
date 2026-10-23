import { agentIds, kratuStages } from '../../../../data/kratuAi';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import { cn } from '../../../../utils/cn';
import KrIntro from '../../components/KrIntro/KrIntro';
import handoffCheck from '../../../../assets/kratu-ai/handoff-check.png';
import styles from './StagesSection.module.css';

/** "One AI Engine, Four Agents, One Patient Journey": the four stage cards and the handoff note. */
function StagesSection() {
  const { eyebrow, title, description, stages, handoff } = kratuStages;

  return (
    <Section id="four-agents" tone="surface" spacing="none" className={styles.section} aria-labelledby="kr-stages-title">
      <KrIntro id="kr-stages-title" eyebrow={eyebrow} title={title} description={description} align="center" className={styles.intro} />
      <ol className={styles.grid}>
        {stages.map((stage, index) => (
          <li key={stage.title} className={cn(styles.card, styles[stage.tone], stage.highlighted && styles.highlighted)}>
            <p className={styles.stage}>{stage.stage}</p>
            <h3 className={styles.title}>{stage.title}</h3>
            <p className={styles.text}>{stage.text}</p>
            <a href={`#${agentIds[index]}`} className={styles.link}>
              {stage.link}
              <Icon name="arrowRight" size={13} />
            </a>
          </li>
        ))}
      </ol>
      <p className={styles.handoff}>
        <span className={styles.check}>
          <img src={handoffCheck} alt="" width="8" height="9" />
        </span>
        {handoff}
      </p>
    </Section>
  );
}

export default StagesSection;
