// Press Releases listing page copy and card badge colours. The releases themselves are posts:
// src/posts/press-release/<slug>.js (see src/posts/index.js).

import pressHeroCard from '../assets/press-releases/hero-card.png';

// Badge colour per category, as drawn in the frame. Unlisted categories use the lime badge.
export const categoryTones = {
  'Strategic Partnership': 'purple',
  'Platform Update': 'yellow',
  'Report Release': 'lime',
};

// Listing page copy (Figma "Press Release" frame).
export const pressReleasesHero = {
  currentPage: 'Press Release',
  titleLines: ['Elixir News &', 'Press Releases'],
  description: 'Discover the Latest Innovations, Partnerships, and Milestones in Healthcare Technology',
  // Same CTA and destination as the Why Elixir hero.
  primaryCta: { label: 'Explore Our Platform', to: '/platform' },
  image: {
    src: pressHeroCard,
    alt: 'Four clinicians reviewing data together on a laptop and a tablet',
  },
};
