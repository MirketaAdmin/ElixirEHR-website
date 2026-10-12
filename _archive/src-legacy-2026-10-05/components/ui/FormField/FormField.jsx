import styles from './FormField.module.css';

function FormField({ as = 'input', label, id, error, className = '', ...rest }) {
  const Tag = as;
  const inputClasses = [
    styles.input,
    as === 'textarea' ? styles.textarea : '',
    error ? styles.inputError : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`${styles.field} ${className}`}>
      <label htmlFor={id} className={`${styles.label} label-sm`}>
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        className={inputClasses}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className={`${styles.errorMessage} label-sm`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;
