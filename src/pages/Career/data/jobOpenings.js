// Job openings: the cards on /career and the detail pages at /career/open-positions/:slug.
// Copy reproduced exactly from the Figma "Career" and "Open Positions / Job Posting" frames.
//
// Card fields: department (pill), title, location.
// `applyUrl`: where "Apply Now" goes. No application form, ATS link or careers address exists yet,
//   so the button renders as drawn but is not interactive until a URL is set.
// `detail`: the job posting. Only a job with a `detail` gets a page (and linked card); the frames
//   supply posting copy for the Senior Product Manager role only, so the other two have none.
//   Line breaks (\n) in `about`, `responsibilities` and `requirements` reproduce the frame's hard breaks.

export const jobOpenings = [
  {
    slug: 'senior-product-manager-ehr',
    department: 'Senior Product Manager',
    title: 'Senior Product Manager (EHR)',
    location: 'San Ramon, CA / Remote',
    applyUrl: null,
    detail: {
      // Hero pills (the posting shows "San Ramon, CA", without "/ Remote").
      employmentType: 'Full-time',
      location: 'San Ramon, CA',
      level: 'Senior Level',
      about:
        'At Elixir AI, we are redefining precision medicine through high-stakes clinical intelligence. As a Senior Product\nManager specializing in Electronic Health Records (EHR), you will be the visionary bridge between complex\nclinical data and actionable AI-driven insights. You will drive the roadmap for our core integration engine,\nensuring that clinicians have the right information at the exact moment of care.',
      responsibilities: [
        'Product Strategy: Define and execute the long-term vision for Elixir’s EHR ecosystem, aligning technical capabilities with clinician needs.',
        'Clinical Integration: Orchestrate deep-level integrations with major EHR vendors (Epic, Cerner, Athena) to minimize friction in clinical workflows.',
        'Cross-functional Leadership: Partner with engineering, clinical experts, and data scientists to build robust, scalable AI features.',
        'Market Analysis: Monitor the healthcare landscape for emerging regulations (HIPAA,\nHL7 FHIR) and technological shifts.',
      ],
      requirements: [
        '5+ years of Product Management experience in a high-growth tech environment.',
        'Extensive Healthcare/EHR domain knowledge, including HL7 and FHIR standards.',
        'Strong technical background with the ability to discuss API architecture and data models.',
        'Experience leading cross-functional teams\nusing Agile methodologies.',
      ],
      facts: {
        location: 'San Ramon, CA',
        department: 'Engineering/Product',
        salaryRange: '$185k - $240k',
        postedDate: '2024-10-24',
      },
    },
  },
  {
    slug: 'ai-engineering-lead',
    department: 'Engineering',
    title: 'AI Engineering Lead',
    location: 'Dublin, CA',
    applyUrl: null,
  },
  {
    slug: 'clinical-informatics-specialist',
    department: 'Clinical Excellence',
    title: 'Clinical Informatics Specialist',
    location: 'US Remote',
    applyUrl: null,
  },
];

/** Public URL of a job posting. */
export const getJobPath = (job) => `/career/open-positions/${job.slug}`;

/** The job with this slug, only if it has a posting (`detail`); otherwise null. */
export const getJobOpening = (slug) => jobOpenings.find((job) => job.slug === slug && job.detail) ?? null;
