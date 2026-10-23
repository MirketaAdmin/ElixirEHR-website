// Salesforce Web-to-Lead configuration, copied exactly from the Web-to-Lead HTML supplied for Elixir
// (org 00Dd0000000hivg). Every lead form on the site posts natively to `action` with these hidden
// values; change them here only when Salesforce issues new form code.
export const webToLead = {
  action: 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dd0000000hivg',
  orgId: '00Dd0000000hivg',
  // Salesforce redirects here after accepting a lead (the live site's thank-you page).
  returnUrl: 'https://elixirehr.com/thank-you/',
  leadSource: 'Web',
  captcha: {
    keyName: 'ElixirEHR',
    siteKey: '6Lf5QdAZAAAAAMpIeeAGEDVzMQ0JSHFpdUYIZQs_',
  },
  // The site's form field keys mapped to the Salesforce field names and lengths in the supplied code.
  fields: {
    firstName: { name: 'first_name', maxLength: 40 },
    lastName: { name: 'last_name', maxLength: 80 },
    phone: { name: 'mobile', maxLength: 40 },
    email: { name: 'email', maxLength: 80 },
    company: { name: 'company', maxLength: 40 },
    message: { name: 'description' },
  },
};
