import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, MapPin, Clock, Facebook, Instagram, Linkedin,
  ChevronDown, Menu, X, Megaphone
} from 'lucide-react';

const services = [
  { label: 'Residential Solar', to: '/residential-solar' },
  { label: 'Commercial Solar', to: '/commercial-solar' },
  { label: 'Air Source Heat Pumps', to: '/air-source-heat-pumps' },
  { label: 'ECO4 Funding', to: '/eco4-funding' },
  { label: 'Solar Maintenance', to: '/solar-maintenance' },
  { label: 'Residential Roofing', to: '/residential-roofing' },
];

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/', dropdown: services },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Top utility bar — navy */}
      <div className="bg-navy-950 text-white text-sm">
        <div className="container-xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2 gap-4">
          <div className="flex items-center gap-5 flex-wrap">
            <a href="tel:01302456613" className="flex items-center gap-1.5 hover:text-solar-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-solar-500" />
              <span className="font-medium">01302 456 613</span>
            </a>
            <a href="tel:07432476663" className="hidden sm:flex items-center gap-1.5 hover:text-solar-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-solar-500" />
              <span className="font-medium">07432 476 663</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-navy-200">
              <Clock className="w-3.5 h-3.5" />
              Mon–Fri 9am–5pm
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-navy-200">
              <MapPin className="w-3.5 h-3.5" />
              Doncaster &amp; Yorkshire
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com/people/Solar-365-Ltd/61567868732789/" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-navy-300 hover:text-solar-400 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/solar365_/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-navy-300 hover:text-solar-400 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://uk.linkedin.com/company/solar365uk" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-navy-300 hover:text-solar-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.bark.com/en/gb/company/solar-365-ltd/LJ1eM/" target="_blank" rel="noreferrer" aria-label="Bark" className="text-navy-300 hover:text-solar-400 transition-colors">
              <Megaphone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav — white */}
      <nav className={`bg-white border-b border-gray-200 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
        <div className="container-xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://solar-365.co.uk/wp-content/uploads/2022/11/Solar-365-Logo-1024x247.png"
              alt="Solar 365"
              className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'} w-auto`}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-1 text-navy-800 hover:text-solar-600 font-semibold px-4 py-2 rounded-md transition-colors text-sm"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 text-sm text-navy-800 hover:bg-solar-50 hover:text-solar-600 font-medium transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-navy-800 hover:text-solar-600 font-semibold px-4 py-2 rounded-md transition-colors text-sm"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <a href="/#quote" className="hidden lg:inline-flex btn-primary text-sm whitespace-nowrap">
            Get a Free Quote
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-navy-900 p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between text-navy-800 font-semibold px-3 py-2.5 rounded-md hover:bg-gray-50 transition-colors text-sm"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.to}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm text-navy-600 hover:text-solar-600 font-medium transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="block text-navy-800 font-semibold px-3 py-2.5 rounded-md hover:bg-gray-50 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3">
                <a
                  href="/#quote"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
