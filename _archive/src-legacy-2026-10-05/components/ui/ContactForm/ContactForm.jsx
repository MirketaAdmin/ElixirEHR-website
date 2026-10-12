import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';

function ContactForm() {
  // No backend endpoint exists yet — prevent the native GET submission/reload.
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <FormField id="firstName" label="First Name" placeholder="John" autoComplete="given-name" />
        <FormField id="lastName" label="Last Name" placeholder="Doe" autoComplete="family-name" />
      </div>
      <div className={styles.row}>
        <FormField
          id="workEmail"
          label="Work Email"
          type="email"
          placeholder="john@hospital.com"
          autoComplete="email"
          required
        />
        <FormField
          id="mobileNumber"
          label="Mobile Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          autoComplete="tel"
        />
      </div>
      <FormField
        id="facility"
        label="Healthcare Facility / Company"
        placeholder="Metropolis Medical Center"
      />
      <FormField
        as="textarea"
        id="needs"
        label="Tell us about your needs"
        placeholder="How can Elixir AI help your clinical team?"
      />
      <Button type="submit" variant="tertiary" className={styles.submit}>
        Submit Request →
      </Button>
      <p className={`${styles.privacy} label-sm`}>
        By submitting, you agree to our <a href="/company/privacy-policy">Privacy Policy</a>.
      </p>
    </form>
  );
}

export default ContactForm;
