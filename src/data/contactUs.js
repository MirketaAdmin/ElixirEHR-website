// Contact Us page content — copy reproduced exactly from the Figma "Contact Us" frame.
// The form itself (fields, placeholders, submission) is the shared one in data/contact.js.

import heroCard from '../assets/contact-us/hero-card.webp';
import demoPhoto from '../assets/contact-us/demo-laptop-team.webp';
import secureDataIcon from '../assets/contact-us/icon-secure-data.png';
import seamlessIntegrationIcon from '../assets/contact-us/icon-seamless-integration.png';
import testimonialPhoto from '../assets/contact-us/testimonial-dr-jen-jhone.png';

export const contactHero = {
  // The frame's breadcrumb reads "Take A Test Drive"; reproduced as designed.
  currentPage: 'Take A Test Drive',
  titleLines: ['Experience the Future of', 'Healthcare Management'],
  description: "Transform Your Workflow with Elixir's Comprehensive EHR Solutions",
  // Same buttons and destinations as the About Us hero.
  primaryCta: { label: 'Take A Test Drive', to: '/request-demo/' },
  secondaryCta: { label: 'Explore Capabilities', to: '/why-elixir/' },
  image: {
    src: heroCard,
    alt: 'Clinician reviewing a tablet in a bright hospital corridor',
  },
  badge: { title: 'AI Insights Active', subtitle: 'Real-time analysis' },
};

export const demoRequest = {
  title: 'Request A Demo',
  description: 'Register here to see the entire demo of our clinical AI features and next-gen patient management.',
  media: {
    // Photo from the supplied Figma export (528×295, inside the white frame). The corner under the AI
    // Insight card is covered by the page's own card.
    src: demoPhoto,
    alt: 'Laptop showing an Elixir patient dashboard on a clinic desk while two clinicians review a tablet',
  },
  insight: {
    label: 'AI Insight',
    text: 'Documentation accuracy improved by 42% in pilot studies.',
  },
  whyTitle: 'Why leading clinics choose Kratu AI',
  reasons: [
    {
      title: 'Secure Data',
      description: 'HIPAA compliant architecture for ultimate patient privacy.',
      icon: secureDataIcon,
      iconSize: [24, 30],
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with existing Salesforce and legacy EHR systems effortlessly.',
      icon: seamlessIntegrationIcon,
      iconSize: [36, 35],
    },
  ],
};

// The approved Home testimonial (data/home.js), with the frame's typographic apostrophes and its
// own portrait.
export const contactTestimonial = {
  quote:
    '"Elixir’s AI summarization has saved our clinicians over 10 hours a week on documentation alone. It’s the most intuitive EHR we’ve ever used."',
  name: 'Dr. Jen Jhone',
  role: 'Clinical Director, Metro Health',
  photo: testimonialPhoto,
};
