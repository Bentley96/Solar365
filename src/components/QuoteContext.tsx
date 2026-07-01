import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

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

  return (
    <QuoteContext.Provider value={{ open, openQuote, closeQuote, toggleQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useQuote = () => useContext(QuoteContext);
