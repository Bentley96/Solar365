import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Solar panel installation on residential roof',
  },
  {
    src: 'https://images.pexels.com/photos/4254151/pexels-photo-4254151.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Solar panels on home roof',
  },
  {
    src: 'https://images.pexels.com/photos/9875468/pexels-photo-9875468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Residential solar panel system',
  },
  {
    src: 'https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Solar panels installed on pitched roof',
  },
  {
    src: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Commercial solar installation',
  },
  {
    src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Solar panel array on building',
  },
  {
    src: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Yorkshire solar installation',
  },
  {
    src: 'https://images.pexels.com/photos/4254151/pexels-photo-4254151.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Roof mounted solar panels',
  },
  {
    src: 'https://images.pexels.com/photos/9875468/pexels-photo-9875468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Solar energy system installation',
  },
  {
    src: 'https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Solar 365 residential installation',
  },
  {
    src: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Large solar panel system',
  },
  {
    src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    alt: 'Solar panel installation Yorkshire',
  },
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
