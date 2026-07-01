import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useQuote } from './QuoteContext';
import QuoteForm from './QuoteForm';

export default function QuoteFlyout() {
  const { open, openQuote, closeQuote } = useQuote();

  // Open the flyout whenever a link points at #quote (keeps every existing
  // "Get a Free Quote" / "/#quote" CTA across the site working).
  useEffect(() => {
    const check = () => {
      if (window.location.hash === '#quote') openQuote();
    };
    check();
    window.addEventListener('hashchange', check);
    return () => window.removeEventListener('hashchange', check);
  }, [openQuote]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeQuote();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeQuote]);

  // Lock body scroll while open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Overlay — sits below the header (z-50) so the flyout appears from behind it */}
      <div
        className={`fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeQuote}
        aria-hidden={!open}
      />

      {/* Flyout panel — slides in from the right */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-full max-w-md bg-gray-50 shadow-2xl overflow-y-auto transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Request your free quote"
      >
        <div className="pt-28 px-5 pb-8">
          <div className="flex justify-end mb-3">
            <button
              onClick={closeQuote}
              aria-label="Close quote form"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 text-navy-800 hover:text-solar-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <QuoteForm />
        </div>
      </aside>
    </>
  );
}
