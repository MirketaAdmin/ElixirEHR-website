// Patient EHI Export page (/onc-certification/patient-ehi-export) — a child page of ONC
// Certification. The frame is the hero only; its button opens the supplied export guide (PDF).
import heroMedia from '../assets/patient-ehi-export/hero-media.png';
import exportGuide from '../assets/patient-ehi-export/Patient-EHI-Export.pdf';

export const ehiHero = {
  currentPage: 'Patient EHI Export',
  titleLines: ['Patient EHI Export'],
  titleAccent: [],
  primaryCta: { label: 'EHI Data Export Guide (b)(10)', href: exportGuide, arrow: false },
  media: {
    src: heroMedia,
    alt: 'Patient health records moving securely from a hospital to a patient through a verified, locked connection',
  },
};

// Page description for search results (the frame has no visible description).
export const ehiMetaDescription =
  'How to export a single patient’s or a patient population’s electronic health information from Elixir EHR — the EHI Data Export Guide (b)(10).';
