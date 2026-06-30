import { Wrench, Star, MapPin, Zap, Trophy, ThumbsUp, ArrowRight, Phone } from 'lucide-react';

const stats = [
  {
    icon: Wrench,
    value: '15+',
    label: 'Years Combined Experience',
    sub: 'Residential & commercial installs',
  },
  {
    icon: Star,
    value: '4.9★',
    label: 'Customer Rating',
    sub: 'Verified reviews across platforms',
  },
  {
    icon: MapPin,
    value: '#1',
    label: 'In Doncaster',
    sub: 'Only Cosy HP accredited installer',
  },
  {
    icon: Trophy,
    value: '2024',
    label: 'Small Business of the Year',
    sub: 'Finalist — Yorkshire Business Awards',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-2">Why Choose Solar 365</p>
          <h2 className="section-heading mb-4">Yorkshire's Most Trusted Solar Installer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            We're not a national call centre. We're a Yorkshire-based, family-run team that shows
            up, does the job right, and stands behind every installation we carry out.
          </p>
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map(({ icon: Icon, value, label, sub }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm card-hover"
            >
              <div className="w-12 h-12 bg-solar-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-solar-500" />
              </div>
              <p className="text-3xl font-extrabold text-navy-900 mb-1">{value}</p>
              <p className="text-navy-800 font-semibold text-sm mb-1">{label}</p>
              <p className="text-gray-500 text-xs">{sub}</p>
            </div>
          ))}
        </div>

        {/* Body copy + coverage */}
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
          <div>
            <h3 className="text-xl font-bold text-navy-900 mb-4">
              Covering Yorkshire &amp; Beyond
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Based in Doncaster, our installations span Worksop, Retford, Leeds, Wakefield,
              Sheffield, Gainsborough, Scunthorpe, Goole, Pontefract, Castleford, Wetherby,
              Lincolnshire, Nottinghamshire, Derbyshire, and throughout the wider UK.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Every installation is carried out by our own MCS-certified team — we don't
              subcontract. No surprises, no shortcuts. Just clean, efficient solar done properly.
            </p>

            <ul className="space-y-2">
              {[
                'Free initial energy survey at your property',
                'Transparent pricing — no hidden costs',
                'Full system warranty &amp; aftercare support',
                'Octopus Energy approved — independently vetted',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <ThumbsUp className="w-4 h-4 text-solar-500 mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-navy-900 rounded-xl p-6 text-white">
              <Zap className="w-8 h-8 text-solar-400 mb-3" />
              <p className="font-bold text-lg mb-2">Octopus Energy Trusted Installer</p>
              <p className="text-navy-200 text-sm leading-relaxed">
                One of a select few installers hand-picked by Octopus Energy.
                This means you get access to exclusive tariffs, smart energy
                products, and the peace of mind that comes with independent verification.
              </p>
            </div>

            <div className="flex gap-4">
              <a href="#quote" className="btn-primary flex-1 justify-center">
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:01302456613" className="btn-outline-navy flex-1 justify-center">
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
