import { cn } from '../../../../utils/cn';
import MockCard from '../../components/MockCard/MockCard';
import chatIcon from '../../../../assets/kratu-ai/mock-chat.png';
import styles from './VisitPrepMock.module.css';

/** Visit Prep mock-up: the SMS check-in conversation and the agenda sent to the chart. */
function VisitPrepMock({ mock }) {
  return (
    <MockCard icon={{ src: chatIcon, size: [13, 13] }} title={mock.title} badge={mock.badge}>
      <ol className={styles.messages}>
        {mock.messages.map((message) => (
          <li key={message.text} className={cn(styles.message, styles[message.from])}>
            {message.text}
          </li>
        ))}
      </ol>
      <div className={styles.agenda}>
        <p className={styles.agendaTitle}>{mock.agendaTitle}</p>
        <ul className={styles.tags}>
          {mock.agenda.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </MockCard>
  );
}

export default VisitPrepMock;
