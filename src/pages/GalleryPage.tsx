import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';

const galleryImages = [
  { src: '/images/gallery-0.png', alt: 'Solar 365 installation' },
  { src: '/images/gallery-2.webp', alt: 'Solar 365 installation' },
  { src: '/images/gallery-3.png', alt: 'Solar 365 installation' },
  { src: '/images/gallery-4.webp', alt: 'Solar 365 installation' },
  { src: '/images/gallery-5.png', alt: 'Solar 365 installation' },
  { src: '/images/gallery-6.png', alt: 'Solar 365 installation' },
  { src: '/images/gallery-7.webp', alt: 'Solar 365 installation' },
  { src: '/images/gallery-8.webp', alt: 'Solar 365 installation' },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-navy-900 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="section-label mb-3">Our Installations</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Recent Solar Installations
            </h1>
            <p className="text-lg text-navy-200 max-w-2xl mx-auto">
              Having Solar Panels Installed On Your Property Is A Great Way To Produce Electricity,
              Reducing Your Bills &amp; Saving You Money.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-white">
          <div className="container-xl">
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
            <p className="text-center text-gray-500 mt-10 text-sm">
              Visit our social media pages to see our latest installations.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
