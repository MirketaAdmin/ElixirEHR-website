export function isPrivatePreview(mode, hostname = '') {
  return mode === 'preview' || hostname.toLowerCase().replace(/\.$/, '').endsWith('.azurestaticapps.net');
}

export function confirmationUrl(origin) {
  return new URL('/thank-you/', origin).href;
}

export const PRIVATE_PREVIEW = isPrivatePreview(
  import.meta.env?.MODE,
  typeof window === 'undefined' ? '' : window.location.hostname,
);

export const PREVIEW_FORM_NOTICE = 'Private preview: form submissions are disabled. Please do not enter personal information.';
