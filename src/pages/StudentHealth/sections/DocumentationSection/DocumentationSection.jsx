import { shDocumentation } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import ShIntro from '../../components/ShIntro/ShIntro';
import { cn } from '../../../../utils/cn';
import styles from './DocumentationSection.module.css';

/** "Service Documentation That Becomes a Claim" — five tagged rule rows. An item's `copyWidth` matches its line breaks to the frame. */
function DocumentationSection() {
  const { eyebrow, title, description, items } = shDocumentation;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sh-documentation-title">
      <ShIntro id="sh-documentation-title" eyebrow={eyebrow} title={title} description={description} />
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={styles.row}>
            <span className={cn(styles.tag, styles[item.tone])}>{item.tag}</span>
            <div className={styles.copy} style={item.copyWidth && { '--sh-copy-width': `${item.copyWidth}px` }}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
            <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default DocumentationSection;
