import { cn } from '../../../../utils/cn';
import MockCard from '../../components/MockCard/MockCard';
import dollarIcon from '../../../../assets/kratu-ai/mock-dollar.png';
import styles from './ArAgentMock.module.css';

/** A/R Agent mock-up: the risk-scored worklist and a drafted appeal packet. */
function ArAgentMock({ mock }) {
  return (
    <MockCard
      icon={{ src: dollarIcon, size: [9, 15] }}
      title={mock.title}
      badge={mock.badge}
      tone="bronze"
      badgeTone="yellow"
      bodyClassName={styles.body}
    >
      <table className={styles.table}>
        <thead>
          <tr>
            {mock.columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mock.rows.map((row) => (
            <tr key={row.id}>
              <th scope="row">{row.id}</th>
              <td>{row.payer}</td>
              <td>{row.balance}</td>
              <td>
                <span className={cn(styles.risk, styles[row.tone])}>{row.risk}</span>
              </td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.appeal}>
        <p className={styles.appealTitle}>{mock.appeal.title}</p>
        <p className={styles.appealText}>{mock.appeal.text}</p>
      </div>
    </MockCard>
  );
}

export default ArAgentMock;
