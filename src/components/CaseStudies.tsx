import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';

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
          {caseStudies.map(({ slug, title, type, size, card, summary, badge }) => (
            <Link
              to={`/case-studies/${slug}`}
              key={slug}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover flex flex-col group"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={card}
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
                      <badge.icon className="w-3 h-3 text-solar-500" />
                      {badge.label}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-navy-900 font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{summary}</p>
                <span className="inline-flex items-center gap-1.5 text-solar-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  Find Out More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
