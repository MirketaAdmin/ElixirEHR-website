// Case Studies page: the Elixir video case studies on the Mirketa YouTube channel. Titles are the
// videos' own YouTube titles (fetched from YouTube's oEmbed endpoint), shown without the
// "Case Study" label the card already carries. Thumbnails are the videos' YouTube thumbnails,
// saved locally so the page makes no request to YouTube until a video is opened.

import granite from '../assets/case-studies/I13VpU2po9M.jpg';
import behavioralAdmissions from '../assets/case-studies/dtsbGxDkAfc.jpg';
import vitra from '../assets/case-studies/LP5hJ6cUTyk.jpg';
import upward from '../assets/case-studies/rUIt7Cht5QQ.jpg';
import oncohost from '../assets/case-studies/KFZbjCc1FAs.jpg';
import retreat from '../assets/case-studies/C1bUtN7LWaA.jpg';
import behavioralEhrRcm from '../assets/case-studies/lSRW38RWPgw.jpg';
import elderCare from '../assets/case-studies/Ltvr7lPTSf0.jpg';
import behavioralDc from '../assets/case-studies/m4ahoaRKZfI.jpg';

export const caseStudiesHero = {
  currentPage: 'Case Studies',
  titleLines: ['Elixir Case Studies', 'in Their Own Words'],
  titleAccent: 'in Their Own Words',
  description:
    'Video case studies from healthcare organizations running Elixir on Salesforce. Select a video to watch it here, without leaving the page.',
  primaryCta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'Browse all case studies', href: '#case-study-videos' },
};

export const caseStudiesList = {
  eyebrow: 'Video case studies',
  title: 'See Elixir at work with our customers',
  tag: 'Case Study',
  playLabel: 'Watch case study',
};

export const caseStudyVideos = [
  {
    id: 'I13VpU2po9M',
    title: 'How Granite Recovery Automated Patient Pre-Intake with Elixir Contact Center & KIPU EHR',
    thumbnail: granite,
  },
  {
    id: 'dtsbGxDkAfc',
    title: 'Scaling Behavioral Health Admissions - Lead Conversion & Less Documentation Within Health',
    thumbnail: behavioralAdmissions,
  },
  { id: 'LP5hJ6cUTyk', title: 'How Vitra Health Scaled Revenue Cycle Operations with Elixir RCM', thumbnail: vitra },
  { id: 'rUIt7Cht5QQ', title: 'How Elixir Accelerated Workflows by approx 35% for Upward Health', thumbnail: upward },
  { id: 'KFZbjCc1FAs', title: 'How Elixir Cut Claim Processing Time by 40% for OncoHost', thumbnail: oncohost },
  {
    id: 'C1bUtN7LWaA',
    title: 'How Retreat Transformed Patient Care with Elixir EHR on Salesforce Health Cloud',
    thumbnail: retreat,
  },
  { id: 'lSRW38RWPgw', title: 'EHR and RCM for a Behavioral Healthcare Provider', thumbnail: behavioralEhrRcm },
  {
    id: 'Ltvr7lPTSf0',
    title: 'How Elixir Transformed Elder Care with Salesforce EHR, Medical Billing & RCM',
    thumbnail: elderCare,
  },
  { id: 'm4ahoaRKZfI', title: 'EHR and Medical Billing for a Behavioral Healthcare Provider in DC', thumbnail: behavioralDc },
];
