import { CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';

const benefits = [
  'Full roof surveys before installation',
  'Roof repair and replacement',
  'Integrated solar & roofing project management',
  'MCS accredited team',
  'Full aftercare support',
];

const galleryImages = [
  '04f278bd-b2c0-4df8-b30b-4324c5622460.jpg',
  '0d5c91d0-6a8b-4f35-8412-f5248027dffb.jpg',
  '272dc4d7-8481-4876-a21f-8dd1439ed60e.jpg',
  '2e4714f0-77df-4c18-ab23-8709c49c2bb7.jpg',
  '3daadcda-1304-4c68-9adc-b131605f9f81.jpg',
  '4ad3df73-4bd5-46f4-b52b-1f9b93ec541f.jpg',
  '4d7b15ba-e105-4a91-a039-c5ab8b1e0e84.jpg',
  '5224711b-f13a-4949-8c24-09ef88da68c6.jpg',
  '57a0b361-f809-48e3-9ffc-a7a78f727b4c.jpg',
  '5d80c6dc-a3c6-4960-acc6-82b5aabe9344.jpg',
  '66c6340b-2ad8-4361-8258-faef445e7349.jpg',
  '741c16c0-3597-496c-ac97-58972fe3e6d0.jpg',
  '7667c399-2351-4063-a4dc-ec9dccca0f3d.jpg',
  '7a3d6195-99dc-44db-9495-deffe7d9e71e.jpg',
  '7f4a5979-059c-497b-8d1f-c5c054dcc32d.jpg',
  '8195bc3b-b6a2-44e8-a015-5841f5c6faa6.jpg',
  '9546b735-d90a-4c74-b4b0-f6cf49d520c2.jpg',
  '9b7e1ae7-2ef4-4b21-a86d-7f03e4cc62b7.jpg',
  'IMG_4417-scaled.jpg',
  'IMG_4430-scaled.jpg',
  'b70c1e40-de91-4ffc-b581-5fd4d7a12b38.jpg',
  'c0a741eb-b4c7-4df2-9fd0-aadcd074b2ef.jpg',
  'cfeed1b1-4c9d-42e4-842b-a0f2384db240.jpg',
  'd83320c7-f4be-4b4c-911d-3a62667440d2.jpg',
  'fe9a3f29-2e4f-4203-8a10-573d5b4a43cd.jpg',
].map((file) => ({
  src: `/images/ResidentialRoofing/${file}`,
  alt: 'Solar 365 residential roofing project',
}));

export default function ResidentialRoofingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#68c0b8] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="text-navy-900/80 font-semibold text-sm uppercase tracking-widest mb-3">Professional Roofing</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 leading-tight">
              Residential Roofing
            </h1>
            <p className="text-lg text-navy-800 max-w-2xl mx-auto mb-8">
              Professional roofing services from a team you already trust for solar.
            </p>
            <a href="/#quote" className="btn-primary-lg">
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Main content */}
        <section className="section-padding bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-label mb-3">One Trusted Team</p>
                <h2 className="section-heading mb-6">
                  Roofing & Solar — Under One Roof
                </h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    Solar 365 provides professional residential roofing services that integrate
                    seamlessly with your solar installation. Whether you need a full roof replacement
                    before panels go on, or repairs and maintenance alongside an existing system —
                    our team handles it all.
                  </p>
                  <p>
                    One trusted company for both your roof and your solar panels, with the same high
                    standards of workmanship throughout. No coordinating between different
                    contractors — we manage everything.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="font-bold text-navy-900 text-xl mb-6">Our Roofing Services</h3>
                <ul className="space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-solar-500 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="/#quote" className="btn-primary w-full justify-center">
                    Request a Survey
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mini Gallery */}
        <section className="section-padding bg-gray-50">
          <div className="container-xl">
            <div className="text-center mb-8">
              <p className="section-label mb-2">Our Roofing Work</p>
              <h2 className="section-heading">Recent Roofing Projects</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-xl shadow-md card-hover">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a href="/#quote" className="btn-primary-lg inline-flex">
                Get a Free Roofing Survey
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
