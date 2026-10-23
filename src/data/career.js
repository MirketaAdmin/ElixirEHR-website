// Career page content — copy reproduced exactly from the Figma "Career" frame.
// Images are 1× crops of the frame export (no source files were supplied).

import heroCard from '../assets/career/hero-card.png';
import compensationIcon from '../assets/career/icon-compensation.png';
import funAtWorkIcon from '../assets/career/icon-fun-at-work.png';
import learningIcon from '../assets/career/icon-learning.png';
import growthIcon from '../assets/career/icon-growth.png';
import transparencyIcon from '../assets/career/icon-transparency.png';

export const careerHero = {
  currentPage: 'Career',
  titleLines: ['Career Opportunities', 'at Elixir'],
  description: 'Empowering health systems through precision intelligence. Join our team of visionaries.',
  image: {
    src: heroCard,
    alt: 'Colleagues gathered around a desk reviewing a careers page on a monitor in the Elixir AI office',
  },
};

export const careerCulture = {
  eyebrow: 'Clinical excellence meets AI innovation.',
  title: 'Come work with us',
  description:
    'We believe in hiring the top talent, nurturing them and providing them a supporting environment so they can achieve their full potential.',
  items: [
    {
      title: 'Compensation',
      description:
        'We offer competitive packages and reward programs because we understand that it is important to reward our people for the value they bring to our clients and us.',
      icon: compensationIcon,
    },
    {
      title: 'Fun @ work',
      description:
        'We understand that happy employees lead to happy customers so we celebrate small wins, go on team outings, and plan outdoor events to keep our team rejuvenated.',
      icon: funAtWorkIcon,
    },
    {
      title: 'Learning & development',
      description:
        'We ensure that our employees continuously expand their personal and professional competencies through programs intended to inspire and transform.',
      icon: learningIcon,
    },
    {
      title: 'Growth Opportunities',
      description:
        'We craft a career plan for each employee and extend guidance and development programs to bring out the best out of our people.',
      icon: growthIcon,
    },
  ],
  // The wide Deep Purple card beside "Growth Opportunities".
  highlight: {
    title: 'Transparency',
    description:
      'We provide a transparent and honest working environment because we believe that transparency drives team performance, task ownership, accountability, and better communication.',
    icon: transparencyIcon,
  },
};

export const careerPositions = {
  title: 'Open Positions',
  // The jobs themselves live in pages/Career/data/jobOpenings.js (cards and posting pages).
};
