import { useRef, useState } from 'react';
import styles from './DateField.module.css';

const US_DATE = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

/** "01/30/2025" → "2025-01-30"; '' for empty; null for an invalid date. */
function toIso(text) {
  const trimmed = text.trim();
  if (!trimmed) return '';
  const match = US_DATE.exec(trimmed);
  if (!match) return null;
  const [, month, day, year] = match.map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return null;
  return date.toISOString().slice(0, 10);
}

/** "2025-01-30" → "01/30/2025". */
function toUs(iso) {
  if (!iso) return '';
  const [year, month, day] = iso.split('-');
  return `${month}/${day}/${year}`;
}

/**
 * Date pill that always reads mm/dd/yyyy (as in the frame), whatever the browser locale.
 * Visitors can type the date, or click to open the browser's native date picker.
 * `onChange` receives an ISO date ('' when cleared); invalid input blocks form submission.
 */
function DateField({ label, value, onChange }) {
  const [text, setText] = useState(toUs(value));
  const pickerRef = useRef(null);

  function handleText(event) {
    const next = event.target.value;
    setText(next);
    const iso = toIso(next);
    event.target.setCustomValidity(iso === null ? 'Enter a date as mm/dd/yyyy.' : '');
    if (iso !== null) onChange(iso);
  }

  function handlePicked(event) {
    const iso = event.target.value;
    setText(toUs(iso));
    onChange(iso);
  }

  return (
    <span className={styles.field}>
      <input
        type="text"
        inputMode="numeric"
        value={text}
        onChange={handleText}
        onClick={() => pickerRef.current?.showPicker?.()}
        placeholder="mm/dd/yyyy"
        aria-label={`${label} (mm/dd/yyyy)`}
        className={styles.input}
      />
      <input
        ref={pickerRef}
        type="date"
        value={value}
        onChange={handlePicked}
        tabIndex={-1}
        aria-hidden="true"
        className={styles.picker}
      />
    </span>
  );
}

export default DateField;
