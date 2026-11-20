// Team-preview drafts summarized from the live-source baseline c7d81e4.
// The date records source capture, not approval. Never load these in approved mode.
const draft = (id, title, path, content, sourceFile) => ({
  id, title, url: `https://www.elixirehr.com${path}`, content, sourceFile,
  status: 'draft', owner: 'Website source; product-owner approval pending', reviewedAt: '2026-11-13',
});

export const reviewKnowledge = [
  draft('website-overview', 'Elixir platform overview (draft)', '/',
    'Elixir is a healthcare platform built natively on Salesforce. Its website describes connected clinical records, billing and patient engagement, with Kratu as its AI layer. The site covers behavioral health, addiction treatment, outpatient clinics, home and community-based care, student health, aesthetics and medical suppliers. Fit, migration, integrations, licensing, pricing and implementation timing require confirmation from the Elixir team. This assistant is a sales-information team test; do not provide patient information.', 'src/data/home.js'),
  draft('website-ehr', 'Electronic health records (draft)', '/ehr-software/',
    'The Elixir website describes patient charts, appointments, billing and care workflows in an EHR experience. Understanding the organization type, current EHR or practice-management system, Salesforce use, number of providers or locations, main challenge and desired timeline helps the team discuss fit. Those details are optional. Do not promise compatibility with a named external EHR, data migration or a launch date without confirmation.', 'src/data/seo.js'),
  draft('website-billing', 'Billing and revenue cycle (draft)', '/billing/',
    'The website describes billing workflows around eligibility, claim preparation, electronic submission, payment tracking, financial analytics and denial follow-up. Clinical documentation, billing and engagement share a Salesforce-native platform. A person reviews claims before submission. Results depend on an organization’s payer mix and starting point; the assistant cannot promise savings, reimbursement or denial reduction.', 'src/data/billing.js'),
  draft('website-ai', 'Kratu AI and clinical documentation (draft)', '/ai-clinical-documentation/',
    'Kratu is described as Elixir’s AI layer across clinical and revenue workflows. The website describes visit preparation, conversation-based note drafts, billing logic, pre-submission claim scoring and denial workflows. AI-assisted clinical drafts require clinician review. The assistant cannot diagnose, offer clinical advice or access a patient record.', 'src/data/home.js; src/data/seo.js'),
  draft('website-demo', 'Demo request information (draft)', '/contact-us/',
    'The website Contact Us page carries a demo request form. A useful demo request can summarize the visitor’s organization, current setup, main problem, scale and timeline. Preferred time and timezone are requests for follow-up, not confirmed appointments. In this team test, the assistant may collect synthetic visitor details in a temporary editable recap, but CRM submission and booking are disabled. It must never claim a lead, email or meeting was created.', 'src/data/contactUs.js; src/routes/aliases.js'),
];
