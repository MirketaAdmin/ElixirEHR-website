import { contactHero } from '../../data/contactUs';
import PageHero from '../../components/sections/PageHero/PageHero';
import DemoRequestSection from './sections/DemoRequestSection/DemoRequestSection';
import TestimonialSection from './sections/TestimonialSection/TestimonialSection';

function ContactUs() {
  return (
    <>
      <title>Contact Us | Elixir</title>
      <meta name="description" content={contactHero.description} />
      <PageHero {...contactHero} />
      <DemoRequestSection />
      <TestimonialSection />
    </>
  );
}

export default ContactUs;
