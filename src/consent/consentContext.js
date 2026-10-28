import { createContext, useContext } from 'react';

/** { consent, acceptAll, rejectNonEssential, savePreferences, openPreferences } (see CookieConsent). */
export const ConsentContext = createContext(null);

export function useCookieConsent() {
  return useContext(ConsentContext);
}
