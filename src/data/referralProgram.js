// Referral Program page content — copy reproduced exactly from the Figma "Referral Program" frame.
// The frame states no reward amounts, eligibility rules or terms; none are added here.
// Images are 1× crops of the frame export (no source files were supplied).

import heroCard from '../assets/referral-program/hero-card.png';
import referLeadIcon from '../assets/referral-program/icon-refer-lead.png';
import closeDealIcon from '../assets/referral-program/icon-close-deal.png';
import earnIncentivesIcon from '../assets/referral-program/icon-earn-incentives.png';
import marketingResourcesIcon from '../assets/referral-program/icon-marketing-resources.png';
import referralIncentivesIcon from '../assets/referral-program/icon-referral-incentives.png';
import elixirEliteIcon from '../assets/referral-program/icon-elixir-elite.png';

export const referralHero = {
  currentPage: 'Referral Program',
  titleLines: ['Join our', 'Referral Program'],
  description:
    'Use your voice to help outsmart the future of healthcare. Bring creativity, efficiency, and business intelligence in the healthcare industry, and earn revenue while doing it.',
  // No destinations are given in the frame. There is no referral form or portal yet, so "Send your
  // Referral" opens the page's own contact form and "Learn Benefits" the "Why join" section.
  primaryCta: { label: 'Send your Referral', href: '#contact' },
  secondaryCta: { label: 'Learn Benefits', href: '#referral-benefits' },
  image: {
    src: heroCard,
    alt: 'Three colleagues in a meeting room reviewing an Elixir AI dashboard on a wall screen',
  },
};

export const referralSteps = {
  eyebrow: 'Referral Program',
  title: 'How it works?',
  description:
    "Elixir Referral Program is a reward based program for all Elixir partners to participate in the growth of Elixir. Simply refer users who may benefit from using Elixir, and you'll be rewarded with industry leading commission, support, and resources.",
  items: [
    {
      title: '1. Refer a Lead',
      description:
        'Identify a healthcare facility or provider who needs next-gen AI implementation and share their details through our secure portal.',
      icon: referLeadIcon,
    },
    {
      title: '2. We Close the Deal',
      description:
        'Our specialist clinical sales team handles the demo, technical assessment, and contract negotiations to ensure success.',
      icon: closeDealIcon,
    },
    {
      title: '3. Earn Incentives',
      description:
        'Receive your reward immediately upon successful implementation. Enjoy uncapped earning potential as an Elixir Elite partner.',
      icon: earnIncentivesIcon,
    },
  ],
};

export const referralBenefits = {
  title: 'Why join the Referral Program?',
  items: [
    {
      title: 'Marketing Resources',
      description:
        'Receive high-conversion marketing assets, clinical case studies, and co-branded collateral to assist you in closing the deal efficiently.',
      icon: marketingResourcesIcon,
    },
    {
      title: 'Referral Incentives',
      description:
        'Our competitive payout structure ensures your expertise is valued. Refer your contact to us and get rewarded with industry-leading bonuses.',
      icon: referralIncentivesIcon,
    },
    {
      title: 'Elixir Elite',
      description:
        "Proudly say that you are a part of Elixir's elite referral network. Gain access to exclusive partner events and early product roadmap previews.",
      icon: elixirEliteIcon,
    },
  ],
};

export const referralCtaBand = {
  // Line break follows the Figma frame. The description is the EHR band's copy, as in the frame.
  title: ['Ready to get Started with your', 'Elixir Implementation?'],
  description:
    'Contact us for a Demo today and we will help you identify the Right Solution for your Healthcare Practice. Our clinical team is ready to support your transition.',
  cta: { label: 'Contact Us Now', to: '/contact-us' },
};
