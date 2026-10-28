// Privacy Policy (/privacy-policy). Every word is the supplied policy text, in its order; only the
// layout is ours. Text fields take a string or RichText segments ({ text, strong, href }) — the
// bold lead-ins mark the supplied label wording, and email/phone are made clickable without
// changing their text.
//
// Blocks: paragraph { text } · list { items } · note { title, paragraphs } (a highlighted notice)
// · address { lines } (a contact block).

const strong = (text) => ({ text, strong: true });
const email = { text: 'info@elixirehr.com', href: 'mailto:info@elixirehr.com' };
const phone = { text: '1-855-647-5382', href: 'tel:+18556475382' };

export const privacyPolicy = {
  title: 'Privacy Policy',
  // Meta description: the policy's opening words, quoted.
  description:
    'Mirketa Inc. (“we,” “us,” or “our”), operating the Elixir brand, respects your privacy. This Privacy Policy explains what personal information we collect through elixirehr.com (the “Site”), how we use and share it, the choices you have, and your rights…',
  intro: [
    'Mirketa Inc. (“we,” “us,” or “our”), operating the Elixir brand, respects your privacy. This Privacy Policy explains what personal information we collect through elixirehr.com (the “Site”), how we use and share it, the choices you have, and your rights under the California Consumer Privacy Act as amended by the CPRA (“CCPA”), the California Invasion of Privacy Act (“CIPA”), the EU and UK General Data Protection Regulation (“GDPR”), and other applicable laws. It should be read together with our Cookie Policy at elixirehr.com/cookie-policy.',
  ],
  scopeNote: {
    title: 'Scope note for healthcare visitors',
    paragraphs: [
      'This Policy governs our public marketing Site only. Protected health information (“PHI”) that we process as a business associate or service provider on behalf of healthcare-provider customers through the Elixir product (EHR, Patient Portal, Billing, Contact Center) is governed by the Health Insurance Portability and Accountability Act (“HIPAA”), our Business Associate Agreements, and our customers’ own privacy notices — not by this Policy. If you are a patient with questions about your medical records, please contact your healthcare provider directly.',
    ],
  },
  sections: [
    {
      id: 'who-we-are',
      title: '1. Who we are and how to contact us',
      blocks: [
        { type: 'paragraph', text: [strong('Controller / business:'), ' Mirketa Inc., operating the Elixir brand.'] },
        {
          type: 'list',
          items: [
            [strong('Postal address:'), ' 11501 Dublin Blvd STE 200, Dublin, CA 94568, USA'],
            [strong('Email:'), ' ', email],
            [strong('Phone:'), ' ', phone],
          ],
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: '2. Information we collect',
      blocks: [
        {
          type: 'list',
          items: [
            [
              strong('Information you provide directly:'),
              ' name, business email, phone number, company/organization, job title, and the content of demo requests (“Take a Test Drive”), contact forms, newsletter sign-ups, and webinar or e-book downloads.',
            ],
            [
              strong('Live chat communications:'),
              ' the content of chats you start through our chat widget, with related metadata (timestamps, pages viewed, technical identifiers). See Section 5.',
            ],
            [
              strong('Information collected automatically:'),
              ' IP address, device and browser type, operating system, referring/exit pages, pages viewed, links clicked, approximate location from IP, and similar usage data collected through cookies and analytics. See Section 4.',
            ],
            [
              strong('Information from third parties:'),
              ' our service providers and publicly available sources, consistent with their terms.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Sensitive information — please do not submit health information here.',
          paragraphs: [
            'This marketing Site is not part of the Elixir EHR product and is not where patient health information should be entered. We do not ask visitors to submit health information through this Site, and we do not intentionally collect it. If you voluntarily include health-related details in a form or chat message, we limit our use of that information to responding to your inquiry.',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-information',
      title: '3. How we use your information',
      blocks: [
        {
          type: 'list',
          items: [
            'Operate, maintain, secure, and improve the Site;',
            'Respond to your inquiries, chat messages, demo requests, and support requests;',
            'Send marketing, newsletters, webinar invitations, and release notes you may opt out of at any time;',
            'Understand how visitors use the Site and measure and improve our content;',
            'Detect, prevent, and address fraud, abuse, security, and technical issues; and',
            'Comply with legal obligations and enforce our terms.',
          ],
        },
      ],
    },
    {
      id: 'cookies',
      title: '4. Cookies, analytics, and tracking technologies',
      blocks: [
        {
          type: 'paragraph',
          text: 'We use cookies and similar technologies, loaded through Google Tag Manager, to operate the Site, remember preferences, and measure traffic. The main third-party technologies are:',
        },
        {
          type: 'list',
          items: [
            [
              strong('Google Analytics'),
              ' — measures how visitors use the Site; sets cookies such as _ga and processes data on Google’s infrastructure.',
            ],
            [
              strong('YouTube (embedded video)'),
              ' — our homepage product overview video is embedded from YouTube, which may set its own cookies when played.',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: [
            strong('Consent and your choices.'),
            ' Non-essential cookies load only after you consent through our cookie banner. You can accept, deny, or choose by category (Functional, Preferences, Statistics, Marketing), and change your choices anytime via the “Cookie settings” link in the footer. We honor the Global Privacy Control (“GPC”) signal as a valid request to opt out of “sale”/“sharing.” See our Cookie Policy for the full list of cookies.',
          ],
        },
      ],
    },
    {
      id: 'live-chat',
      title: '5. Live chat and recorded communications (CIPA notice)',
      blocks: [
        {
          type: 'paragraph',
          text: 'We use Tawk.to to power live chat. When you use chat, your messages and related information are transmitted to, processed, and stored by Tawk.to acting as our service provider, so we can respond and keep a record.',
        },
        {
          type: 'note',
          title: 'Notice and consent',
          paragraphs: [
            'By starting or continuing a chat, you acknowledge and consent that your communications may be monitored, recorded, and stored, and that a third-party provider (Tawk.to) processes them on our behalf. Please do not share patient health information or other sensitive details in chat. If you do not consent, please contact us by email or phone instead. A comparable notice is shown at the start of each chat session.',
          ],
        },
        {
          type: 'paragraph',
          text: 'We use chat content only to respond to and document your inquiry and to improve our service. We do not use chat content for advertising.',
        },
      ],
    },
    {
      id: 'sharing',
      title: '6. How we share personal information',
      blocks: [
        {
          type: 'list',
          items: [
            [
              strong('Service providers and processors:'),
              ' analytics (Google), live chat (Tawk.to), hosting, email/marketing platforms, and security providers, under contracts limiting their use to providing services to us;',
            ],
          ],
        },
        { type: 'paragraph', text: 'We do not sell your personal information for money.' },
      ],
    },
    {
      id: 'sale-and-sharing',
      title: '7. “Sale,” “Sharing,” and targeted advertising',
      blocks: [
        {
          type: 'paragraph',
          text: 'If our tracking technologies are configured to share online identifiers or usage data for cross-context behavioral advertising, you can opt out by',
        },
        {
          type: 'list',
          items: [
            'Rejecting Marketing cookies in our cookie banner; or',
            'We do not knowingly sell or share the personal information of consumers under 16 years of age.',
          ],
        },
      ],
    },
    {
      id: 'retention',
      title: '8. How long we keep information',
      blocks: [
        {
          type: 'paragraph',
          text: 'We retain personal information for as long as needed for the purposes in this Policy, then delete or de-identify it, based on the duration of our relationship with you, the need to respond to inquiries, marketing activity, and legal requirements. Analytics and chat data follow our internal retention schedule and the default retention settings of Google and Tawk.to.',
        },
      ],
    },
    {
      id: 'security',
      title: '9. How we protect information',
      blocks: [
        {
          type: 'paragraph',
          text: 'We maintain administrative, technical, and physical safeguards appropriate to the sensitivity of the information, including HIPAA-aligned safeguards for the Elixir product itself. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
        },
      ],
    },
    {
      id: 'third-party-links',
      title: '10. Third-party links',
      blocks: [
        {
          type: 'paragraph',
          text: 'The Site links to third-party sites and services we do not control, including Google, YouTube, and Tawk.to. Their practices are governed by their own policies.',
        },
      ],
    },
    {
      id: 'changes',
      title: '11. Changes to this Policy',
      blocks: [
        {
          type: 'paragraph',
          text: 'We may update this Policy and will post the updated version with a new effective date and, where required, additional notice.',
        },
      ],
    },
    {
      id: 'contact',
      title: '12. Contact us',
      blocks: [
        {
          type: 'address',
          lines: [
            [strong('Mirketa Inc. (Elixir)')],
            '11501 Dublin Blvd STE 200, Dublin, CA 94568, USA',
            [email],
            [phone],
          ],
        },
      ],
    },
  ],
};
