import { contactHero } from '../../data/contactUs';
import PageHero from '../../components/sections/PageHero/PageHero';
import DemoRequestSection from './sections/DemoRequestSection/DemoRequestSection';
import TestimonialSection from './sections/TestimonialSection/TestimonialSection';
import PageSeo from '../../components/seo/PageSeo/PageSeo';

function ContactUs() {
  return (
    <>
      <PageSeo path="/contact-us" />
      <PageHero {...contactHero} />
      <DemoRequestSection />
      <TestimonialSection />
    </>
  );
}

export default ContactUs;
