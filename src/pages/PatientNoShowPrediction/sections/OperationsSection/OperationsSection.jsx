import { Link } from 'react-router-dom';
import { noShowOperations } from '../../../../data/patientNoShowPrediction';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import RichText from '../../../../components/ui/RichText/RichText';
import SectionIntro from '../../components/SectionIntro/SectionIntro';
import styles from './OperationsSection.module.css';

/** "What your team does with a high-risk appointment": one card per risk band, then the outreach note. */
function OperationsSection() {
  const { chip, title, description, bands, note } = noShowOperations;

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="ns-operations-title">
      <SectionIntro
        id="ns-operations-title"
        chip={chip}
        chipTone="tint"
        title={title}
        description={description}
        className={styles.intro}
      />
      <ol className={styles.bands}>
        {bands.map((item) => (
          <li key={item.band} className={cn(styles.card, styles[item.tone])}>
            <p className={styles.pill}>{item.band}</p>
            <div className={styles.body}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>
                <RichText content={item.text} strongClassName={styles.strong} linkClassName={styles.link} />
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className={styles.note}>
        <img src={note.icon} alt="" width="15" height="15" />
        <span>
          {note.before}
          {note.link.to ? (
            <Link to={note.link.to} className={styles.noteLink}>
              {note.link.label}
            </Link>
          ) : (
            <span className={styles.noteLink}>{note.link.label}</span>
          )}
          {note.after}
        </span>
      </p>
    </Section>
  );
}

export default OperationsSection;
