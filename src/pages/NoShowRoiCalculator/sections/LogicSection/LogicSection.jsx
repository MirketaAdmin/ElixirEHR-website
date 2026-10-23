import { roiLogic } from '../../../../data/noShowRoiCalculator';
import Section from '../../../../components/layout/Section/Section';
import RoiIntro from '../../components/RoiIntro/RoiIntro';
import NoteCard from '../../components/NoteCard/NoteCard';
import styles from './LogicSection.module.css';

/** "How This No-Show ROI Calculator Works": the formula listing and the four named assumptions. */
function LogicSection() {
  const { eyebrow, title, description, formulas, assumptions } = roiLogic;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="roi-logic-title">
      <RoiIntro id="roi-logic-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <dl className={styles.formulas}>
        {formulas.map((formula) => (
          <div key={formula.term}>
            <dt>{formula.term}</dt>
            <dd>
              <span className={styles.equals}>=</span> {formula.expression}
            </dd>
          </div>
        ))}
      </dl>
      <NoteCard title={assumptions.title} items={assumptions.items} tone="lime" className={styles.assumptions} />
    </Section>
  );
}

export default LogicSection;
