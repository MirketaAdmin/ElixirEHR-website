// Contact Us page content — copy reproduced exactly from the Figma "Contact Us" frame.
// The form itself (fields, placeholders, submission) is the shared one in data/contact.js.

import heroCard from '../assets/contact-us/hero-card.png';
import dashboardLaptop from '../assets/contact-us/dashboard-laptop.png';
import secureDataIcon from '../assets/contact-us/icon-secure-data.png';
import seamlessIntegrationIcon from '../assets/contact-us/icon-seamless-integration.png';
import testimonialPhoto from '../assets/contact-us/testimonial-dr-jen-jhone.png';

export const contactHero = {
  // The frame's breadcrumb reads "Take A Test Drive"; reproduced as designed.
  currentPage: 'Take A Test Drive',
  titleLines: ['Experience the Future of', 'Healthcare Management'],
  description: "Transform Your Workflow with Elixir's Comprehensive EHR Solutions",
  // Same buttons and destinations as the About Us hero.
  primaryCta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'Explore Capabilities', to: '/platform' },
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
    src: dashboardLaptop,
    alt: 'Laptop showing the Elixir EHR patient dashboard on a clinic desk',
  },
  insight: {
    label: 'AI Insight',
    text: 'Documentation accuracy improved by 42% in pilot studies.',
  },
  whyTitle: 'Why leading clinics choose Elixir AI',
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
