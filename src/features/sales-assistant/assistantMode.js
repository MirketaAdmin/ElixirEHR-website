import { PRIVATE_PREVIEW } from '../../config/preview';
import { resolveAssistantMode } from './transport.mjs';

// The assistant mode for this build and host, shared by the floating launcher and the Home
// page's inline funnel answers so both switch on and off together.
export const ASSISTANT_MODE = resolveAssistantMode({
  requested: import.meta.env.VITE_ELIXIR_ASSISTANT_MODE,
  dev: import.meta.env.DEV,
  preview: PRIVATE_PREVIEW,
  hostedPreview: import.meta.env.VITE_ELIXIR_HOSTED_PREVIEW_ENABLED === 'true',
  hostname: typeof window === 'undefined' ? '' : window.location.hostname,
});
