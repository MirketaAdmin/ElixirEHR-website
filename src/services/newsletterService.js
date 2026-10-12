// Sends "The Weekly Briefing" sign-up (Insights sidebar). The design defines no backend, so the
// endpoint is configured per environment (VITE_NEWSLETTER_ENDPOINT), like the contact form's.
const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT;

export async function subscribeToNewsletter(email) {
  if (!endpoint) {
    throw new Error('Newsletter endpoint is not configured (set VITE_NEWSLETTER_ENDPOINT).');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error(`Newsletter sign-up failed with status ${response.status}.`);
  }
}
