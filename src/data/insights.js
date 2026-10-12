// Insights (Resources) section: shared hero, category navigation, sidebar and page copy, reproduced
// from the Figma Insights frames. The resources themselves are posts in src/posts/<type>/.

import heroCard from '../assets/insights/hero-card.png';

export const insightsHero = {
  currentPage: 'Resources',
  titleLines: ['Knowledge for the', 'Modern Clinician'],
  description:
    'Explore our curated library of research, tools, and insights designed to elevate healthcare delivery through precision intelligence.',
  searchPlaceholder: 'Search resources, topics, or keywords...',
  image: {
    src: heroCard,
    alt: 'Smiling clinicians in white coats and scrubs gathered around a tablet',
  },
};

// Category navigation, in the frame's order. Newsletter and Illustrations have no Figma yet: they
// link to their planned routes, which redirect home until those pages are built.
export const insightsNav = [
  { label: 'All Resources', to: '/insights' },
  { label: 'Blog', to: '/blog' },
  { label: 'E-Book', to: '/insights/e-book' },
  { label: 'Benchmark Surveys', to: '/insights/benchmark-surveys' },
  { label: 'Release Notes', to: '/insights/release-notes' },
  { label: 'Newsletter', to: '/insights/newsletter' },
  { label: 'Webinars', to: '/insights/webinars' },
  { label: 'Illustrations', to: '/insights/illustrations' },
  { label: 'Videos', to: '/insights/videos' },
];

export const weeklyBriefing = {
  title: 'The Weekly Briefing',
  text: 'Clinical AI insights delivered every Tuesday.',
  placeholder: 'Email Address',
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
  },
  videos: { title: 'Videos', documentTitle: 'Videos', categoriesTitle: 'Categories', allLabel: 'All' },
};

// All Resources ("Latest Insights"): the newest e-book, the next live webinar and the newest video
// lead the page; every other resource follows in a mixed feed. Tags and link labels for Article,
// Webinar and Release are the frame's; the other types reuse the labels of their own pages.
export const allResources = {
  liveLabel: 'Live Webinar',
  featuredVideoLabel: 'Featured Video',
  pdfLabel: 'PDF Available',
  loadMoreLabel: 'Load More Resources',
  feedTypes: {
    blog: { tag: 'Article', action: 'Read More', icon: 'arrowRight' },
    webinars: { tag: 'Webinar', action: 'Watch Webinar', icon: 'play' },
    'release-note': { tag: 'Release', action: 'Read Whitepaper', icon: 'download' },
    'e-book': { tag: 'E-Book', action: 'Read More', icon: 'arrowRight' },
    'benchmark-survey': { tag: 'Benchmark Survey', action: 'Read More', icon: 'arrowRight' },
    video: { tag: 'Video', action: 'Watch Video', icon: 'arrowRight' },
  },
};
