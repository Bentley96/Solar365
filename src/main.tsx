import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { QuoteProvider } from './components/QuoteContext';
import QuoteFlyout from './components/QuoteFlyout';
import './index.css';

// Mount once, even if this module is evaluated twice. Some WordPress caching /
// JS-optimization plugins duplicate or combine the entry script, which would
// otherwise create two React roots on the same #root element and corrupt the
// DOM (React error #321, "removeChild/insertBefore is not a child of this node").
const container = document.getElementById('root') as
  | (HTMLElement & { _solar365Root?: boolean })
  | null;

if (container && !container._solar365Root) {
  container._solar365Root = true;
  createRoot(container).render(
    <StrictMode>
      <BrowserRouter>
        <QuoteProvider>
          <App />
          <QuoteFlyout />
        </QuoteProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
