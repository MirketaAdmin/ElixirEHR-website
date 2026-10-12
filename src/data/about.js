// About Us page content — copy reproduced exactly from the Figma About Us frame.

import heroCard from '../assets/about/hero-card.png';
import cloudNativeIcon from '../assets/about/cloud-native-icon.png';
import aiDrivenIcon from '../assets/about/ai-driven-icon.png';
import missionImage from '../assets/about/mission-facility.png';
import rajeevKumarPhoto from '../assets/about/team/rajeev-kumar.png';
import maureenKumarPhoto from '../assets/about/team/maureen-m-kumar.png';
import ajayJalaliPhoto from '../assets/about/team/ajay-jalali.png';
import mattFalknerPhoto from '../assets/about/team/matt-falkner.png';
import clintCasselPhoto from '../assets/about/team/clint-cassel.png';
import neetaKumariPhoto from '../assets/about/team/neeta-kumari.png';
import meghnaGoelPhoto from '../assets/about/team/meghna-goel.png';

export const aboutHero = {
  currentPage: 'About Us',
  // Line breaks follow the Figma frame. The first line reads "Healthcar" in the Figma export.
  titleLines: ['Transforming Healthcar', 'Through Innovation'],
  description: 'Empowering Providers with Customizable, Efficient, and Patient-Centered Solutions',
  primaryCta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'Explore Capabilities', to: '/platform' },
  image: {
    src: heroCard,
    alt: 'Clinician using a tablet with holographic patient health data',
  },
  badge: { title: 'AI Insights Active', subtitle: 'Real-time analysis' },
};

export const ourStory = {
  eyebrow: 'Genesis',
  title: 'Our Story',
  // `founder` is highlighted inside the first paragraph.
  founder: 'Rajeev Kumar',
  paragraphs: [
    'Based in Dublin, California, Elixir was founded in 2019 by Rajeev Kumar, a laser-focused innovator who experienced the frustrations of healthcare providers firsthand when attempting to streamline processes with legacy EHR systems.',
    'Determined to remove the administrative burdens that drain time, energy, and enthusiasm from providers, Kumar envisioned a world where every clinician and patient can thrive through seamless technology.',
  ],
  quote: '"Removing the administrative friction from the human side of healing."',
  badge: { title: 'Est. 2019', subtitle: 'Dublin, California' },
};

export const mission = {
  eyebrow: 'The Mission',
  titleLines: ['Redefining Efficiency', 'in Patient-Centered', 'Care'],
  description:
    'When it comes to healthcare, efficiency can be the difference between serving more patients or burning out. Our cloud-based solutions are built for total control and complete customizability.',
  pillars: [
    {
      title: 'Cloud-Native',
      description: 'Fully secure, accessible, and scalable infrastructure for modern practices.',
      icon: cloudNativeIcon,
      iconSize: [30, 22],
    },
    {
      title: 'AI-Driven',
      description:
        'Intelligent automation that understands clinical context and reduces documentation time.',
      icon: aiDrivenIcon,
      iconSize: [26, 27],
    },
  ],
  image: {
    src: missionImage,
    alt: 'Futuristic healthcare facility with Elixir analytics displays',
    title: 'Empowering Facilities',
    caption: 'Maximize reimbursements and operational health with every click.',
  },
};

export const team = {
  eyebrow: 'OUR LEADERSHIP',
  title: 'Meet Our Core Team',
  // Order as in the Figma frame. "Clint Cassel — IT Analyst" appears twice in the design.
  members: [
    { name: 'Rajeev Kumar', role: 'CEO and CPO', photo: rajeevKumarPhoto },
    { name: 'Maureen M. Kumar', role: 'CFO', photo: maureenKumarPhoto },
    { name: 'Ajay Jalali', role: 'VP-Delivery & Operations', photo: ajayJalaliPhoto },
    { name: 'Matt Falkner', role: 'Sales Director', photo: mattFalknerPhoto },
    { name: 'Clint Cassel', role: 'IT Analyst', photo: clintCasselPhoto },
    { name: 'Neeta Kumari', role: 'Sr. Product Manager', photo: neetaKumariPhoto },
    { name: 'Meghna Goel', role: 'Sr. Tech Lead', photo: meghnaGoelPhoto },
    { name: 'Clint Cassel', role: 'IT Analyst', photo: clintCasselPhoto },
  ],
};

export const nextStep = {
  title: 'Take The next Step',
  description:
    'Ready To Change How You Handle Your Patients? Click Here To Be Future Ready With Elixir',
  cta: { label: 'Contact Us Now', href: '#contact' },
};
