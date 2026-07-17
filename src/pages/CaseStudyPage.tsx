import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import { getCaseStudy } from '../data/caseStudies';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  // Unknown slug — send the visitor back to the listing.
  if (!study) return <Navigate to="/case-studies" replace />;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#68c0b8] pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container-xl">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-navy-900/80 hover:text-navy-900 font-semibold text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-navy-900/85 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {study.type}
              </span>
              <span className="bg-solar-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {study.size}
              </span>
              {study.badge && (
                <span className="bg-white text-navy-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <study.badge.icon className="w-3 h-3 text-solar-500" />
                  {study.badge.label}
                </span>
              )}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-4 leading-tight">
              {study.title}
            </h1>
            <p className="text-lg text-navy-800 max-w-2xl">{study.summary}</p>
          </div>
        </section>

        {/* Story + facts */}
        <section className="section-padding bg-white">
          <div className="container-xl grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-bold text-navy-900">The Project</h2>
              {study.body.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <aside className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 lg:sticky lg:top-28">
                <h3 className="text-lg font-bold text-navy-900 mb-4">Project Details</h3>
                <dl className="space-y-3">
                  {study.facts.map((f) => (
                    <div key={f.label} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-solar-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <dt className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                          {f.label}
                        </dt>
                        <dd className="text-navy-900 font-semibold">{f.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <a href="/#quote" className="btn-primary w-full justify-center mt-6">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl">
            <div className="text-center mb-8">
              <p className="section-label mb-2">Project Gallery</p>
              <h2 className="section-heading">A Closer Look</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {study.gallery.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-xl shadow-md card-hover">
                  <img
                    src={src}
                    alt={`${study.title} — solar installation photo ${i + 1}`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
