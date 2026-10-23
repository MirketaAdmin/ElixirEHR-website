import { coPilotControl } from '../../../../../data/coPilot';
import Section from '../../../../../components/layout/Section/Section';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './ControlSection.module.css';

/** "Clinical control" — three specialty capabilities beside a Mental Status Exam template mock-up. */
function ControlSection() {
  const { eyebrow, title, description, items, template } = coPilotControl;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="cp-control-title">
      <div className={styles.layout}>
        <div>
          <KrIntro id="cp-control-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
          <ul className={styles.items}>
            {items.map((item) => (
              <li key={item.title} className={styles.item}>
                <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Illustration of a specialty template with example data. */}
        <figure className={styles.template} aria-label={template.label}>
          <div className={styles.templateHead}>
            <span className={styles.templateTitle}>{template.title}</span>
            <span className={styles.badge}>{template.badge}</span>
          </div>
          <ul className={styles.blocks}>
            {template.blocks.map((block) => (
              <li key={block.title} className={styles.block}>
                <span className={styles.blockTitle}>{block.title}</span>
                <span className={styles.blockText}>{block.text}</span>
              </li>
            ))}
          </ul>
          <figcaption className={styles.templateFooter}>
            <span>{template.source}</span>
            <strong>{template.status}</strong>
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}

export default ControlSection;
