import { ppBoundaries } from '../../../../../data/payorPolicy';
import Section from '../../../../../components/layout/Section/Section';
import PpIntro from '../../components/PpIntro/PpIntro';
import styles from './BoundariesSection.module.css';

/** "What Payor Policy Intelligence does not do" — what is not included, and what happens instead. */
function BoundariesSection() {
  const { eyebrow, title, description, columns, rows } = ppBoundaries;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="pp-boundaries-title">
      <PpIntro id="pp-boundaries-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <div className={styles.frame}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([item, instead]) => (
              <tr key={item}>
                <th scope="row">{item}</th>
                <td>{instead}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export default BoundariesSection;
