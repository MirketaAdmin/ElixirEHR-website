// API Developer Portal (/onc-certification/api-developer-portal), under ONC Certification in Compliance &
// Security. Copy, endpoints, parameters, response shapes and status codes are verbatim from the supplied
// "API Developer Portal.html"; do not reword or "correct" them (the Coverage endpoint really is served at
// /Claim/, and no service base URL list belongs here — Elixir is not certified to (g)(10)).
// This page is the publicly accessible API documentation required by 45 CFR 170.404: it must stay
// ungated (no form, login or click-through before the content) and its URL must stay stable.
// Links: ONC Certification goes to the Elixir Certified Module page (certified criteria), as on the other
// Compliance & Security pages.

const oncCertification = '/onc-certification/elixir-certified-module/';
const instance = '{EHR Instance}';

// TechArticle structured data from the source page (PageSeo adds the canonical `url`).
// isAccessibleForFree is the machine-readable counterpart of the no-gate obligation.
export const apiSchema = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  name: 'Elixir API Developer Portal',
  headline: 'Elixir API Developer Portal: FHIR and C-CDA API Documentation',
  description:
    'Open business and technical documentation for the Elixir EHR API: OAuth 2.0 authentication, FHIR-formatted resource endpoints, the C-CDA all-data request, error handling and terms of use. Published under the API Condition of Certification at 45 CFR 170.404.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  audience: { '@type': 'Audience', audienceType: 'Software developers and integration engineers' },
  about: { '@type': 'SoftwareApplication', name: 'Elixir', applicationCategory: 'HealthApplication' },
  publisher: { '@type': 'Organization', name: 'Mirketa Inc' },
  isPartOf: { '@type': 'WebSite', name: 'Elixir', url: 'https://elixirehr.com/' },
};

export const apiHero = {
  currentPage: 'API Developer Portal',
  parentCrumb: { label: 'ONC Certification', to: oncCertification },
  pill: 'ONC Certification · API Documentation',
  titleLines: ['Elixir API Developer Portal:', 'FHIR and C-CDA API Documentation'],
  lede: [
    'The business and technical documentation for the Elixir EHR API: OAuth 2.0 authentication, FHIR-formatted resource endpoints, the C-CDA all-data request, error handling and terms of use. It is published openly because the certification program requires it, which means no registration, no form and no agreement before you read it.',
  ],
  primaryCta: { label: 'Start with authentication', href: '#auth' },
  secondaryCta: { label: 'What this API is, and is not', href: '#scope' },
  statementsLabel: 'How this documentation is published',
  statements: [
    {
      who: 'Why it is public',
      text: 'Developers of certified Health IT Modules are required to publish complete API documentation via a publicly accessible hyperlink, without preconditions or additional steps.',
    },
    {
      who: 'What it covers',
      text: 'Token generation, fourteen FHIR-formatted resource endpoints, the C-CDA all-data request, HTTP status codes and exception handling, and what you need on your side.',
    },
    {
      who: 'Scope, stated plainly',
      text: 'Elixir is certified for application access — patient selection. It is not certified to the standardized API criterion. The difference is explained below rather than left for you to find.',
      highlight: true,
    },
  ],
};

export const apiStrip = [
  {
    title: 'No gate, by obligation',
    text: 'No registration, no form, no agreement. Read it, evaluate it, and decide before you talk to anyone.',
  },
  {
    title: 'OAuth 2.0',
    text: 'Client credentials grant. One token request, then a bearer token on every call.',
  },
  {
    title: 'FHIR and C-CDA',
    text: 'Fourteen FHIR-formatted resource endpoints, plus a C-CDA Continuity of Care Document request.',
  },
  {
    title: 'Built on Salesforce',
    text: 'Elixir runs inside your Salesforce organization, so the API is reached at your own instance URL.',
  },
];

// Reference sections. Each lists its blocks in source order:
// endpoints (method + name + path), code (label + preformatted text), table, or note (rich text).
const fhirResources = [
  ['Fetch Patient', 'Patient'],
  ['Fetch Encounter', 'Encounter'],
  ['Fetch Practitioner', 'Practitioner'],
  ['Fetch Appointment', 'Appointment'],
  ['Fetch Allergy', 'Allergy'],
  ['Fetch Diagnosis', 'Diagnosis'],
  ['Fetch Condition', 'Condition'],
  ['Fetch Coverage', 'Claim'],
  ['Fetch Organization', 'Organization'],
  ['Fetch Procedure', 'Procedure'],
  ['Fetch DiagnosticReport', 'DiagnosticReport'],
  ['Fetch Medication', 'Medication'],
  ['Fetch Location', 'Location'],
  ['Fetch CareTeam', 'CareTeam'],
];

export const apiReference = [
  {
    id: 'auth',
    tone: 'white',
    eyebrow: 'Reference',
    title: 'Authentication: OAuth 2.0 Client Credentials',
    description:
      'Elixir uses the OAuth 2.0 client credentials grant. Request a token first, then present the returned access token on every subsequent request. Credentials are issued by the organization whose Elixir instance you are integrating with, not by us.',
    blocks: [
      {
        type: 'endpoints',
        items: [{ method: 'POST', name: 'Token generation', path: `${instance}/services/oauth2/token` }],
      },
      {
        type: 'code',
        label: 'Parameters',
        code: `grant_type      client_credentials
client_id       the client ID issued for your application
client_secret   the client secret issued for your application`,
      },
      {
        type: 'code',
        label: 'Response',
        code: `{
  "access_token": "String",
  "signature":    "String",
  "instance_url": "https://{salesforce_instance}",
  "id":           "String",
  "token_type":   "String",
  "issued_at":    "String"
}`,
      },
      {
        type: 'note',
        text: [
          'Use the ',
          { text: 'access_token', code: true },
          ' returned here on each subsequent request. ',
          { text: instance, code: true },
          ' throughout this documentation is the Salesforce instance URL of the organization you are integrating with.',
        ],
      },
    ],
  },
  {
    id: 'fhir',
    tone: 'surface',
    eyebrow: 'Reference',
    title: 'FHIR Resource Endpoints',
    description:
      'Each endpoint returns a single resource for the identifier supplied, formatted as a FHIR resource. All requests require a valid bearer token. These endpoints sit under the application access — patient selection criterion Elixir is certified to.',
    blocks: [
      {
        type: 'endpoints',
        items: fhirResources.map(([name, resource]) => ({
          method: 'GET',
          name,
          path: `${instance}/services/apexrest/fhir/${resource}/{Id}`,
        })),
      },
      {
        type: 'note',
        text: [
          'Note that the Coverage endpoint is served at the ',
          { text: '/Claim/', code: true },
          ' path. That is the live path and is reproduced here as it is, rather than corrected to what it looks like it should be.',
        ],
      },
    ],
  },
  {
    id: 'ccda',
    tone: 'white',
    eyebrow: 'Reference',
    title: 'C-CDA All Data Request',
    description:
      'The C-CDA endpoint returns a Continuity of Care Document formatted in accordance with the HL7 C-CDA Release 2.1 implementation guide — the specification Elixir is certified against for Consolidated CDA creation performance.',
    blocks: [
      {
        type: 'endpoints',
        items: [{ method: 'GET', name: 'Fetch C-CDA document', path: `${instance}/services/apexrest/ccda` }],
      },
      {
        type: 'code',
        label: 'Request body',
        code: `{
  "CDAType":      "Consolidated CDA",
  "strAccountId": "String"
}`,
      },
      {
        type: 'note',
        text: [
          'For exporting all of a single patient’s electronic health information rather than a care summary, see the ',
          { text: 'electronic health information export capability', to: oncCertification },
          ', which is certified separately.',
        ],
      },
    ],
  },
  {
    id: 'errors',
    tone: 'surface',
    eyebrow: 'Reference',
    title: 'Errors and Exception Handling',
    description: [
      'Errors follow standard HTTP status codes. Failures on the FHIR endpoints return a FHIR ',
      { text: 'OperationOutcome', code: true },
      ' resource carrying an issue array with a code, details and severity.',
    ],
    blocks: [
      {
        type: 'table',
        caption: 'HTTP status codes returned by the Elixir API and the condition each one indicates.',
        columns: ['Status', 'Meaning', 'Condition'],
        rows: [
          ['400', 'Bad request', 'The request carried an invalid query parameter.'],
          ['401', 'Unauthorized', 'The authentication token is absent, expired or invalid.'],
          ['403', 'Forbidden', 'The client is authenticated but does not hold permission to make the request.'],
          ['404', 'Not found', 'No resource exists for the identifier supplied.'],
          ['500', 'Internal server error', 'A general server-side error. Retry the request.'],
        ],
      },
      {
        type: 'code',
        label: 'OperationOutcome response shape',
        code: `{
  "resourceType": "OperationOutcome",
  "issue": [
    {
      "code":     "invalid",
      "details":  { "text": "String" },
      "severity": "error"
    }
  ]
}`,
      },
    ],
  },
];

export const apiTerms = {
  id: 'terms',
  eyebrow: 'Before you build',
  title: 'Software Requirements and Terms of Use',
  description: 'What you need on your side, and the conditions that attach to calling a live instance.',
  cards: [
    {
      title: 'What you need',
      items: [
        'An HTTP client library capable of sending RESTful requests.',
        'An OAuth 2.0 client credentials setup for the credentials issued to your application.',
        'A JSON parsing library for handling responses.',
      ],
      paragraphs: [
        'Nothing is required to read this documentation. Credentials to call a live instance are issued by the organization whose instance you are integrating with, under their agreement with us.',
      ],
    },
    {
      title: 'Terms of use',
      items: [
        'Data accessed through the Elixir API must be handled in accordance with HIPAA and the agreements in force between the calling organization and the covered entity whose data is being accessed.',
        'Access is restricted to authorized users and permitted applications.',
        'The API is subject to maintenance, and downtime may occur during scheduled updates.',
      ],
      paragraphs: [
        [
          'Fees are governed by the contract between the customer organization and us, and the fee types that apply are set out in the ',
          { text: 'costs and limitations disclosure', to: oncCertification },
          '.',
        ],
      ],
    },
  ],
};

export const apiScope = {
  id: 'scope',
  tone: 'surface',
  eyebrow: 'Being precise',
  title: 'What This API Is Certified To, and What It Is Not',
  kicker:
    'Two certification criteria govern APIs in certified health IT, and they are routinely conflated. If a federal program is part of why you are integrating, the difference will matter to you.',
  attribution: {
    label: 'Required attribution statement',
    text: 'This Health IT Module is compliant with the ONC Certification Criteria for Health IT and has been certified by an ONC-ACB in accordance with the applicable certification criteria adopted by the Secretary of Health and Human Services. This certification does not represent an endorsement by the U.S. Department of Health and Human Services.',
  },
  paragraphs: [
    [
      { text: 'Elixir is certified to application access — patient selection.', strong: true },
      ' That is the criterion at ',
      { text: '170.315(g)(7)', code: true },
      ', and it is the one that governs published API documentation: syntax, function names, required and optional parameters and their data types, return variables and their types and structures, exceptions, and exception-handling methods and their returns. This page is that documentation. The endpoints above are built on top of it.',
    ],
    [
      { text: 'Elixir is not certified to the standardized API criterion.', strong: true },
      ' That is a separate criterion, ',
      { text: '170.315(g)(10)', code: true },
      ', with its own requirements including support for the current US Core implementation guide and SMART App Launch specification. We state this plainly because the phrase “FHIR API” is used for both, and because the full list of criteria Elixir holds is ',
      { text: 'published where anyone can check it', to: oncCertification },
      '. If a program you participate in requires the standardized API criterion, raise it with us early rather than late.',
    ],
    [
      { text: 'What that means for an integration.', strong: true },
      ' The endpoints on this page are real, documented and callable, and for most point-to-point integrations — a care coordination tool, an analytics pipeline, a partner system reading patient context — the distinction makes no practical difference. It matters where a program or a counterparty specifically requires the certified standardized API, patient-mediated app access under SMART App Launch, or published service base URLs. Those are the cases to flag in a scoping conversation.',
    ],
    [
      'The full certification record, including the certificate number, all twenty-one certified criteria and the real world testing documents, is on the ',
      { text: 'ONC Certification', to: oncCertification },
      ' page. Broader context on FHIR, HL7 v2 and information blocking is on the ',
      { text: 'Interoperability', to: '/healthcare-interoperability/' },
      ' page.',
    ],
  ],
};

export const apiCta = {
  eyebrow: 'For integration teams',
  title: 'Tell us what you are connecting',
  description:
    'Most integration scope is settled by which systems are involved and what has to move between them. We would rather work through that than send you a standards list — and if what you need is not on this page, we would rather say so.',
  cta: { label: 'Talk to Us', to: '/request-demo/' },
  secondaryCta: { label: 'ONC Certification', to: oncCertification },
  related: [
    { label: 'Interoperability (FHIR/HL7)', to: '/healthcare-interoperability/' },
    { label: 'Salesforce Security Layer', to: '/salesforce-data-security/' },
    { label: 'HIPAA Compliance Center', to: '/hipaa-compliant-ehr/' },
  ],
};
