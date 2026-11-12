// Insights (Resources) section: shared hero, category navigation, sidebar and page copy, reproduced
// from the Figma Insights frames. The resources themselves are posts in src/posts/<type>/.

import heroCard from '../assets/insights/hero-card-clinician.webp';
import allResourcesHeroCard from '../assets/insights/all-resources-hero.webp';

export const insightsHero = {
  currentPage: 'Resources',
  titleLines: ['Knowledge for the', 'Modern Clinician'],
  description:
    'Explore our curated library of research, tools, and insights designed to elevate healthcare delivery through precision intelligence.',
  searchPlaceholder: 'Search resources, topics, or keywords...',
  image: {
    src: heroCard,
    alt: 'Clinician using a tablet beside patient dashboards on two monitors in a busy clinic',
  },
};

// Category navigation, in the frame's order. Newsletter and Illustrations have no Figma frame;
// both have their own page in the shared Insights layout.
export const insightsNav = [
  { label: 'All Resources', to: '/insights/' },
  { label: 'Blog', to: '/blog/' },
  { label: 'E-Book', to: '/guides-ebooks/' },
  { label: 'Benchmark Surveys', to: '/benchmark-surveys/' },
  { label: 'Release Notes', to: '/release-notes/' },
  { label: 'Newsletter', to: '/newsletter/' },
  { label: 'Webinars', to: '/webinars-podcasts/' },
  { label: 'Illustrations', to: '/insights/illustrations/' },
  { label: 'Videos', to: '/feature-videos/' },
];

// "The Weekly Briefing" sign-up (Insights sidebars): a Salesforce Web-to-Lead form with the Elixir
// snippet's two fields. `key` is the field's key in data/webToLead.js (Salesforce name and length).
export const weeklyBriefing = {
  title: 'The Weekly Briefing',
  text: [
    'Smarter Clinical Insights. Better Patient Care',
    'Get the Latest in Healthcare AI and Technology.',
  ],
  fields: [
    { key: 'firstName', label: 'First Name', placeholder: 'First Name', autoComplete: 'given-name' },
    { key: 'email', label: 'Email Address', placeholder: 'Email Address', type: 'email', autoComplete: 'email' },
  ],
  submitLabel: 'Subscribe',
};

// Sidebar category lists with real labels in the frames; counts are computed from the posts.
// (The Blog frame's categories are "Category Here" placeholders, so the Blog sidebar lists the
// categories found on blog posts instead.)
export const webinarCategories = [
  'Clinical AI',
  'EHR Optimization',
  'Revenue Cycle (RCM)',
  'Data Privacy & Security',
  'Patient Engagement',
];

export const videoCategories = [
  'EHR Optimization',
  'Revenue Cycle (RCM)',
  'Data Privacy & Security',
  'Patient Engagement',
];

// Illustrations sidebar: the same five categories as the Webinars frame.
export const illustrationCategories = webinarCategories;

export const insightsPages = {
  all: { title: 'Latest Insights', documentTitle: 'Resources' },
  blog: { title: 'Blogs for Clinical Excellence', documentTitle: 'Blog', categoriesTitle: 'Blogs Categories', allLabel: 'All Blogs' },
  ebook: { title: 'Clinical E-Books & Guides', documentTitle: 'E-Books' },
  surveys: { title: 'Benchmark Surveys', documentTitle: 'Benchmark Surveys' },
  releaseNotes: { title: 'Release Notes', documentTitle: 'Release Notes', categoriesTitle: 'Version History' },
  webinars: {
    title: 'Elixir Webinar Series',
    documentTitle: 'Webinars',
    categoriesTitle: 'Categories',
    onDemandTitle: 'Recent On-Demand Webinars',
    // Shown while no webinar is published (copy as supplied); the CTA points at the existing videos.
    empty: {
      title: 'Upcoming Webinars',
      text: 'Stay tuned for upcoming webinars, expert insights, and live sessions from our healthcare technology team.',
      cta: { label: 'Watch Feature Videos', to: '/feature-videos/' },
    },
  },
  // Heading and intro from the approved Website Architecture sheet (On-Page: Newsletter, /newsletter/).
  newsletter: {
    title: 'ElixirEHR Newsletter',
    documentTitle: 'Newsletter',
    intro: 'Get healthcare technology insights, product news and useful resources from ElixirEHR delivered to your inbox.',
  },
  illustrations: { title: 'Illustrations', documentTitle: 'Illustrations', categoriesTitle: 'Categories' },
  videos: { title: 'Videos', documentTitle: 'Videos', categoriesTitle: 'Categories', allLabel: 'All' },
};

// All Resources ("Latest Insights"): the newest e-book, the next live webinar and the newest video
// lead the page; every other resource follows in a mixed feed. Tags and link labels for Article,
// Webinar and Release are the frame's; the other types reuse the labels of their own pages.
export const allResources = {
  // The All Resources hero reuses the Contact Us hero copy with its own photo (Insights frame).
  heroImage: {
    src: allResourcesHeroCard,
    alt: 'Clinician reviewing a tablet beside dashboards on two monitors',
  },
  liveLabel: 'Live Webinar',
  featuredVideoLabel: 'Featured Video',
  pdfLabel: 'PDF Available',
  loadMoreLabel: 'Load More Resources',
  feedTypes: {
    blog: { tag: 'Blog', action: 'Read More', icon: 'arrowRight' },
    webinars: { tag: 'Webinar', action: 'Watch Webinar', icon: 'play' },
    'release-note': { tag: 'Release', action: 'Read Whitepaper', icon: 'download' },
    'e-book': { tag: 'E-Book', action: 'Read More', icon: 'arrowRight' },
    'benchmark-survey': { tag: 'Benchmark Survey', action: 'Read More', icon: 'arrowRight' },
    video: { tag: 'Video', action: 'Watch Video', icon: 'arrowRight' },
  },
};
