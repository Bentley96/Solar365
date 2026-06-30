import { Sun, Building2, Thermometer, Leaf, Wrench, Home, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Residential Solar',
    description: 'Solar PV panels lower your energy bills by up to 70% and reduce your carbon footprint. Our solar battery systems ensure electricity is supplied to your home whatever the weather.',
    href: '#residential',
    featured: true,
  },
  {
    icon: Building2,
    title: 'Commercial Solar',
    description: 'Solar PV for business is a fantastic cost-saving investment — it can even provide 100% bill reduction. Attract environmentally aware customers and add a green focus to your marketing.',
    href: '#',
  },
  {
    icon: Thermometer,
    title: 'Air Source Heat Pumps',
    description: 'Transform your home\'s heating with an ASHP — efficient, eco-friendly, and eligible for the £7,500 Boiler Upgrade Scheme grant. The only Cosy HP accredited installer in Doncaster.',
    href: '#',
  },
  {
    icon: Leaf,
    title: 'ECO4 Funding',
    description: 'You may be eligible for a FREE ECO4 grant to make your home more energy efficient. Covering insulation, heating, solar panels and more — find out if you qualify today.',
    href: '#',
  },
  {
    icon: Wrench,
    title: 'Solar Maintenance',
    description: 'Neglected panels can lose 10–30% efficiency over time. Our maintenance service covers cleaning, optimisation, shading management and full system health checks.',
    href: '#',
  },
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Professional roofing services integrated with your solar installation project. One trusted team for both your roof and your panels.',
    href: '#',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-white section-padding">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-2">What We Do</p>
          <h2 className="section-heading mb-3">Our Services</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            We provide clear advice from the initial consultation through to design and installation.
            From residential solar to commercial projects, heat pumps to ECO4 grants — all under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {services.map(({ icon: Icon, title, description, href, featured }) => (
            <div
              key={title}
              className={`rounded-2xl p-7 border card-hover ${
                featured
                  ? 'bg-solar-500 border-solar-600 text-white'
                  : 'bg-white border-gray-100 shadow-sm'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                featured ? 'bg-white/20' : 'bg-solar-50'
              }`}>
                <Icon className={`w-6 h-6 ${featured ? 'text-white' : 'text-solar-500'}`} />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${featured ? 'text-white' : 'text-navy-900'}`}>
                {title}
              </h3>
              <p
                className={`text-sm mb-5 leading-relaxed ${featured ? 'text-white/80' : 'text-gray-600'}`}
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <a
                href={href}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-3 transition-all ${
                  featured ? 'text-white' : 'text-solar-600'
                }`}
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 text-center">
          <p className="text-navy-900 font-semibold mb-1">Not sure which service is right for you?</p>
          <p className="text-gray-500 text-sm mb-4">
            We offer FREE initial energy surveys and no-obligation quotes. Give us a call and we'll
            point you in the right direction — no hard sell, just honest advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote" className="btn-primary">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:01302456613" className="btn-outline-navy">
              Call 01302 456 613
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
