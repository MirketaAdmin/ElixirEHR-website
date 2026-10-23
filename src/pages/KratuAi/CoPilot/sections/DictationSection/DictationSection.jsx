import { coPilotDictation } from '../../../../../data/coPilot';
import Section from '../../../../../components/layout/Section/Section';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './DictationSection.module.css';

/** Feature 03 — "Scribe for template forms": a dictated sentence parsed into six template fields. */
function DictationSection() {
  const { id, eyebrow, title, description, mock } = coPilotDictation;
  const { stream, checkIcon, fields, note } = mock;

  return (
    <Section id={id} tone="white" spacing="none" className={styles.section} aria-labelledby="cp-dictation-title">
      <KrIntro id="cp-dictation-title" eyebrow={eyebrow} title={title} description={description} align="center" className={styles.intro} />

      {/* Illustration with example data; the "Commit" action is not a control. */}
      <figure className={styles.mock} aria-label={mock.label}>
        <div className={styles.stream}>
          <div className={styles.streamHead}>
            <span className={styles.mic}>
              <img src={stream.icon.src} alt="" width={stream.icon.size[0]} height={stream.icon.size[1]} />
            </span>
            <span className={styles.streamCopy}>
              <span className={styles.streamTitle}>{stream.title}</span>
              <span className={styles.streamMeta}>{stream.meta}</span>
            </span>
            <span className={styles.badge}>{stream.badge}</span>
          </div>
          <blockquote className={styles.quote}>{stream.quote}</blockquote>
        </div>

        <ul className={styles.fields}>
          {fields.map((field) => (
            <li key={field.label} className={styles.field}>
              <span className={styles.fieldLabel}>
                {field.label}
                <img src={checkIcon.src} alt="" width={checkIcon.size[0]} height={checkIcon.size[1]} />
              </span>
              <span className={styles.fieldValue}>{field.value}</span>
            </li>
          ))}
        </ul>

        <figcaption className={styles.footer}>
          <span className={styles.note}>
            <img src={note.icon.src} alt="" width={note.icon.size[0]} height={note.icon.size[1]} />
            {note.text}
          </span>
          <span className={styles.action}>{mock.action}</span>
        </figcaption>
      </figure>
    </Section>
  );
}

export default DictationSection;
