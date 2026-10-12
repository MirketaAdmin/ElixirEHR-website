import Container from '../../layout/Container/Container';
import TestimonialCard from '../../ui/TestimonialCard/TestimonialCard';
import { testimonials } from '../../../data/testimonials';
import styles from './TestimonialsSection.module.css';

function ArrowIcon({ direction }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === 'prev' ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <p className={`${styles.eyebrow} eyebrow`}>Testimonials</p>
            <h2 className={`${styles.title} headline-lg`}>How customers feel about Elixir</h2>
          </div>
          <div className={styles.arrows}>
            <button type="button" className={styles.arrowButton} aria-label="Previous testimonial">
              <ArrowIcon direction="prev" />
            </button>
            <button type="button" className={styles.arrowButton} aria-label="Next testimonial">
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              tone={index === 0 ? 'dark' : 'light'}
              {...testimonial}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsSection;
