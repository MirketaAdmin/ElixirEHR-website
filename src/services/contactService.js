// Sends the About Us contact form. The design defines no backend, so the endpoint is
// configured per environment (VITE_CONTACT_ENDPOINT); persistence is that service's concern.
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

export async function submitContactRequest(payload) {
  if (!endpoint) {
    throw new Error('Contact endpoint is not configured (set VITE_CONTACT_ENDPOINT).');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Contact request failed with status ${response.status}.`);
  }
}
