import { ArrowRight, Battery } from 'lucide-react';

const cases = [
  {
    title: 'The Curtain Factory Outlet',
    type: 'Commercial Solar',
    size: '15 kW',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=700&h=480&fit=crop',
    excerpt:
      'A family-run manufacturer wanted to cut grid reliance and boost sustainability. We installed a 15 kW solar PV system using premium JA Solar panels, offsetting a large portion of their daily electricity usage.',
    href: 'https://solar-365.co.uk/case_studies/curtain-factory-outlet/',
  },
  {
    title: 'JA Autos',
    type: 'Commercial Solar',
    size: '25 kW',
    image: 'https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&w=700&h=480&fit=crop',
    excerpt:
      'This busy MOT garage faced rising overheads from diagnostic tools, lifts, and lighting. We delivered a 25 kW roof-mounted PV system across the workshop and office, meeting peak daytime demand.',
    href: 'https://solar-365.co.uk/case_studies/ja-autos/',
  },
  {
    title: 'Tesla Powerwall Installation',
    type: 'Residential Solar + Battery',
    size: 'Powerwall 3',
    image: 'https://images.pexels.com/photos/9875468/pexels-photo-9875468.jpeg?auto=compress&cs=tinysrgb&w=700&h=480&fit=crop',
    excerpt:
      'As Tesla Certified Installers, we designed and installed a complete Powerwall 3 battery storage system alongside a high-yield solar array — enabling this Yorkshire home to achieve near energy independence.',
    href: '#',
    badge: 'Tesla Certified',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-gray-50 section-padding">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-2">Our Work</p>
          <h2 className="section-heading mb-3">Featured Case Studies</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Real installs, real savings. See how we've helped homes and businesses across
            Yorkshire harness the power of solar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cases.map(({ title, type, size, image, excerpt, href, badge }) => (
            <div key={title} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover flex flex-col">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                  <span className="bg-navy-900/85 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {type}
                  </span>
                  <span className="bg-solar-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {size}
                  </span>
                  {badge && (
                    <span className="bg-white text-navy-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Battery className="w-3 h-3 text-solar-500" />
                      {badge}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-navy-900 font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{excerpt}</p>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-solar-600 text-sm font-semibold hover:gap-3 transition-all"
                >
                  Find Out More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://solar-365.co.uk/case-studies/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-navy px-8 py-3.5 text-base"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
