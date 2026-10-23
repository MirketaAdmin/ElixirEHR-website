import { cn } from '../../../../utils/cn';
import styles from './CpCard.module.css';

/** The white, rounded mock-up card every feature band draws its product UI in. */
function CpCard({ className, children }) {
  return <div className={cn(styles.card, className)}>{children}</div>;
}

export default CpCard;
