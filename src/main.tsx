import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { QuoteProvider } from './components/QuoteContext';
import QuoteFlyout from './components/QuoteFlyout';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QuoteProvider>
        <App />
        <QuoteFlyout />
      </QuoteProvider>
    </BrowserRouter>
  </StrictMode>
);
