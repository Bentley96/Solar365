import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Megaphone } from 'lucide-react';

const support = [
  { label: 'FAQs', href: '#' },
  { label: 'Solar for Home', href: '#residential' },
  { label: 'Solar for Business', href: '#services' },
  { label: 'ECO4 Funding', href: '#services' },
  { label: 'Why Choose Solar?', href: '#' },
  { label: 'Complaints &amp; Feedback', href: 'mailto:customerservices@solar-365.co.uk' },
  { label: 'Privacy Policy', href: '#' },
];

const accreds = [
  { name: 'MCS Accredited', img: '/images/homepage/MCS-certified.png' },
  { name: 'HIES Registered', img: '/images/homepage/hies-logo.png.webp' },
  { name: 'TrustMark', img: '/images/homepage/trustmark.png.webp' },
  { name: 'NAPIT', img: '/images/homepage/napit-logo.png' },
  { name: 'Green Deal', img: '/images/homepage/green-deal-logo.png.webp' },
  { name: 'Citation', img: '/images/homepage/ciatation-logo.png.webp' },
  { name: 'BUS Scheme', img: '/images/homepage/bus-logo.png' },
];

const brands = [
  { name: 'SolarEdge', img: '/images/homepage/solar-edge-1.png' },
  { name: 'Solax Power', img: '/images/homepage/solax-power-1.png.webp' },
  { name: 'Sunsynk', img: '/images/homepage/sun-synk-logo.png' },
  { name: 'GivEnergy', img: '/images/homepage/giv-energy.png' },
  { name: 'Jinko Solar', img: '/images/homepage/jinko-solar-1.png.webp' },
  { name: 'LonGi Solar', img: '/images/homepage/longi-solar-.png' },
  { name: 'EcoFlow', img: '/images/homepage/ecoflow-logo.png' },
  { name: 'DMEGC Solar', img: '/images/homepage/dmegc-solar.png.webp' },
  { name: 'Fox ESS', img: '/images/homepage/fox-ess-logo.png.webp' },
  { name: 'Solis', img: '/images/homepage/solais-logo.png.webp' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/Solar365Inverted.png"
              alt="Solar 365"
              className="h-8 w-auto mb-4"
            />
            <p className="text-navy-300 text-sm leading-relaxed mb-4">
              Yorkshire's most trusted solar installer. MCS accredited, Octopus Energy Trusted Installer,
              Tesla Certified, and the only Cosy Heat Pump accredited installer in Doncaster.
            </p>
            <p className="text-solar-400 text-xs font-semibold uppercase tracking-wide">
              Small Business of the Year Finalist 2024
            </p>

            <div className="flex gap-3 mt-5">
              {[
                { href: 'https://facebook.com/people/Solar-365-Ltd/61567868732789/', Icon: Facebook, label: 'Facebook' },
                { href: 'https://instagram.com/solar365_/', Icon: Instagram, label: 'Instagram' },
                { href: 'https://uk.linkedin.com/company/solar365uk', Icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://www.bark.com/en/gb/company/solar-365-ltd/LJ1eM/', Icon: Megaphone, label: 'Bark' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-navy-800 rounded-lg flex items-center justify-center text-navy-400 hover:text-solar-400 hover:bg-navy-700 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:01302456613" className="flex items-center gap-2 text-navy-300 hover:text-solar-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 text-solar-500 flex-shrink-0" />
                  01302 456 613
                </a>
              </li>
              <li>
                <a href="tel:07432476663" className="flex items-center gap-2 text-navy-300 hover:text-solar-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 text-solar-500 flex-shrink-0" />
                  07432 476 663
                </a>
              </li>
              <li>
                <a href="mailto:customerservices@solar-365.co.uk" className="flex items-center gap-2 text-navy-300 hover:text-solar-400 text-sm transition-colors">
                  <Mail className="w-4 h-4 text-solar-500 flex-shrink-0" />
                  customerservices@solar-365.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2 text-navy-300 text-sm">
                <MapPin className="w-4 h-4 text-solar-500 flex-shrink-0 mt-0.5" />
                Doncaster, South Yorkshire
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Support</h4>
            <ul className="space-y-2.5">
              {support.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-navy-300 hover:text-solar-400 text-sm transition-colors"
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations & Brands */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Accreditations</h4>
            <div className="flex flex-wrap gap-2 mb-5">
              {accreds.map((a) => (
                <div key={a.name} className="bg-white rounded-lg p-1.5 flex items-center justify-center" style={{ width: '56px', height: '40px' }}>
                  <img src={a.img} alt={a.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Brands</h4>
            <div className="flex flex-wrap gap-2">
              {brands.map((b) => (
                <div key={b.name} className="bg-white rounded-lg p-1.5 flex items-center justify-center" style={{ width: '56px', height: '40px' }}>
                  <img src={b.img} alt={b.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              ))}
            </div>
            <p className="text-navy-400 text-xs mt-4 leading-relaxed">
              Solar 365 Ltd is authorised and regulated. Company registered in England &amp; Wales.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 pt-7 space-y-3">
          <p className="text-navy-400 text-xs leading-relaxed">
            <strong className="text-navy-300">Credit broker disclosure:</strong> Solar 365 Ltd acts as a credit broker, not a lender.
            Finance is provided by third-party lenders via Phoenix Financial Consultants, subject to status and credit checks.
            Not all applicants will be accepted. FCA authorised and regulated.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-navy-500 text-xs">
            <p>&copy; {new Date().getFullYear()} Solar 365 Ltd. All rights reserved.</p>
            <p>Website designed by Solar 365</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
