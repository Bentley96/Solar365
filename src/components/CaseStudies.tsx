import { ArrowRight, Tractor } from 'lucide-react';

const cases = [
  {
    title: 'The Curtain Factory Outlet',
    type: 'Commercial Solar',
    size: '15 kW',
    image: '/images/homepage/PHOTO-2023-10-17-14-52-27.jpg.webp',
    excerpt:
      'A family-run curtain and blinds manufacturer wanted to lower its energy bills and reduce reliance on the grid while enhancing its green credentials. With machinery and lighting running throughout the day, solar PV was an ideal fit. We installed a 15 kW solar PV system on their factory roof using premium JA Solar panels and a smart inverter system.',
    href: 'https://solar-365.co.uk/case_studies/curtain-factory-outlet/',
  },
  {
    title: 'JA Autos',
    type: 'Commercial Solar',
    size: '25 kW',
    image: '/images/homepage/PHOTO-2023-09-12-10-35-28.jpg',
    excerpt:
      'This busy MOT garage faced rising overheads from diagnostic tools, lifts, and lighting. With a goal of making the business greener and more cost-efficient, they turned to us for a tailored solar solution. We delivered a 25 kW roof-mounted PV system across the workshop and office building, designed to meet peak daytime energy demands.',
    href: 'https://solar-365.co.uk/case_studies/ja-autos/',
  },
  {
    title: 'TA — Farm Installation',
    type: 'Agricultural Solar',
    size: '30 kW',
    image: '/images/homepage/commercial-solar-installers-yorkshire.jpg',
    excerpt:
      'After completing a detailed site assessment, we installed a 30 kW PV system on the farm\'s storage barn. The system features high-efficiency panels paired with Power Optimisers to maximise yield and system visibility. The farm now benefits from significantly lower energy bills and a reduced carbon footprint.',
    href: 'https://solar-365.co.uk/case-studies/',
    badge: 'Agricultural',
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
            Real installs, real savings. We undertake commercial solar, residential solar, battery storage,
            air source heat pumps and more across Yorkshire and beyond.
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
                      <Tractor className="w-3 h-3 text-solar-500" />
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
                  target="_blank"
                  rel="noreferrer"
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
