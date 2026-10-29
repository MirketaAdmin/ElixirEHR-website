import { vbEvidence } from '../../../../data/valueBasedCare';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import RichText from '../../../../components/ui/RichText/RichText';
import VbIntro from '../../components/VbIntro/VbIntro';
import styles from './EvidenceSection.module.css';

/** "What Actually Moves Follow-Up…": two finding cards with a headline figure, then the takeaway note. */
function EvidenceSection() {
  const { eyebrow, title, description, findings, note } = vbEvidence;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="vb-evidence">
      <VbIntro id="vb-evidence" eyebrow={eyebrow} title={title} description={description} />
      <ul className={styles.grid}>
        {findings.map((finding) => (
          <li key={finding.stat} className={styles.card}>
            <p className={cn(styles.stat, styles[finding.tone])}>{finding.stat}</p>
            <h3 className={styles.title}>{finding.title}</h3>
            <div className={styles.copy}>
              {finding.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className={styles.source}>{finding.source}</p>
          </li>
        ))}
      </ul>
      <p className={styles.note}>
        <Icon name="lightbulb" size={20} className={styles.noteIcon} />
        <span>
          <RichText content={note} linkClassName={styles.link} />
        </span>
      </p>
    </Section>
  );
}

export default EvidenceSection;
