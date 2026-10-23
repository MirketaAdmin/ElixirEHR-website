import { opInterop } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import OpIntro from '../../components/OpIntro/OpIntro';
import OpCardGrid from '../../components/OpCardGrid/OpCardGrid';
import styles from './InteropSection.module.css';

/** Interop — the intro and a three-column card grid. */
function InteropSection() {
  const { eyebrow, title, description, items } = opInterop;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="op-interopsection-title">
      <OpIntro
        id="op-interopsection-title"
        accent="lime"
        eyebrow={eyebrow}
        title={title}
        description={description} tone="dark"
        className={styles.intro}
      />
      <OpCardGrid items={items} tone="dark" className={styles.grid} />
    </Section>
  );
}

export default InteropSection;
