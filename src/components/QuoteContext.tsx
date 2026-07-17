import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { preloadRecaptcha } from '../lib/recaptcha';

interface QuoteContextValue {
  open: boolean;
  openQuote: () => void;
  closeQuote: () => void;
  toggleQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue>({
  open: false,
  openQuote: () => {},
  closeQuote: () => {},
  toggleQuote: () => {},
});

// Strip a lingering #quote hash so the same link can re-trigger the flyout.
const stripHash = () => {
  if (window.location.hash === '#quote') {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
};

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openQuote = useCallback(() => setOpen(true), []);
  const closeQuote = useCallback(() => {
    setOpen(false);
    stripHash();
  }, []);
  const toggleQuote = useCallback(() => {
    setOpen((prev) => {
      if (prev) stripHash();
      return !prev;
    });
  }, []);

  // Open the flyout in place for any "Get a Quote" link (href="#quote" or
  // "/#quote") anywhere on the site, instead of navigating to the homepage and
  // jumping to the top. Delegated so every current and future quote link works.
  // Load reCAPTCHA up front so its badge is visible on every page.
  useEffect(() => {
    preloadRecaptcha();
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const anchor = (e.target as Element | null)?.closest('a');
      const href = anchor?.getAttribute('href');
      if (href === '#quote' || href === '/#quote') {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <QuoteContext.Provider value={{ open, openQuote, closeQuote, toggleQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useQuote = () => useContext(QuoteContext);
