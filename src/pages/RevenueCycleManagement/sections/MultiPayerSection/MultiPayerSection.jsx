import { multiPayer, revenueCycleTeams } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import CheckList from '../../components/CheckList/CheckList';
import ImagePlaceholder from '../../../../components/ui/ImagePlaceholder/ImagePlaceholder';
import styles from './MultiPayerSection.module.css';

/** Multi-payer / multi-NPI split plus the "Built for Revenue Cycle Teams" grid (one band). */
function MultiPayerSection() {
  return (
    <Section tone="white" spacing="none" className={styles.section}>
      <div className={styles.split}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {multiPayer.titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.body}>{multiPayer.body}</p>
          <CheckList items={multiPayer.points} className={styles.points} />
        </div>
        <ImagePlaceholder className={styles.media} />
      </div>

      <h2 className={styles.teamsTitle}>{revenueCycleTeams.title}</h2>
      <p className={styles.teamsText}>{revenueCycleTeams.description}</p>
      <ul className={styles.teams}>
        {revenueCycleTeams.teams.map((team) => (
          <li key={team.title} className={styles.team}>
            <h3 className={styles.teamTitle}>{team.title}</h3>
            <p className={styles.teamText}>{team.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default MultiPayerSection;
