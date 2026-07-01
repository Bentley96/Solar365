import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface QuoteContextValue {
  open: boolean;
  openQuote: () => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue>({
  open: false,
  openQuote: () => {},
  closeQuote: () => {},
});

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openQuote = useCallback(() => setOpen(true), []);
  const closeQuote = useCallback(() => {
    setOpen(false);
    // Strip a lingering #quote hash so the same link can re-trigger the flyout.
    if (window.location.hash === '#quote') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <QuoteContext.Provider value={{ open, openQuote, closeQuote }}>
      {children}
    </QuoteContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useQuote = () => useContext(QuoteContext);
