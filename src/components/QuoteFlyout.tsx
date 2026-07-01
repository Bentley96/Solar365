import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useQuote } from './QuoteContext';
import QuoteForm from './QuoteForm';

export default function QuoteFlyout() {
  const { open, openQuote, closeQuote } = useQuote();
  const panelRef = useRef<HTMLDivElement>(null);

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

  // Close when clicking outside the panel (no dimmed overlay, page stays usable).
  // Ignore the toggle button so it can close the flyout itself.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest('[data-quote-toggle]')) return;
      if (panelRef.current && !panelRef.current.contains(target as Node)) {
        closeQuote();
      }
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open, closeQuote]);

  return (
    // Full-width positioner that mirrors the header container so the panel's
    // right edge lines up with the "Get a Free Quote" button.
    <div className="fixed inset-x-0 top-[92px] z-40 pointer-events-none">
      <div className="container-xl px-4 sm:px-6 lg:px-8 flex justify-end">
        <div
          ref={panelRef}
          className={`pointer-events-auto w-full max-w-md origin-top transition-all duration-300 ease-out ${
            open
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-10 scale-95 !pointer-events-none'
          }`}
          role="dialog"
          aria-modal="false"
          aria-label="Request your free quote"
          aria-hidden={!open}
        >
          <div className="relative max-h-[calc(100vh-108px)] overflow-y-auto rounded-2xl pt-3">
            <button
              onClick={closeQuote}
              aria-label="Close quote form"
              className="absolute top-6 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow border border-gray-200 text-navy-800 hover:text-solar-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
