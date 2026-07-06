import Header from '../components/Header';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';

const galleryImages = [
  'PHOTO-2023-09-12-10-35-28.jpg',
  'PHOTO-2023-09-12-10-35-28-1.jpg',
  'PHOTO-2023-09-12-10-35-28-3.jpg',
  'PHOTO-2023-09-12-10-35-29.jpg',
  'PHOTO-2023-10-17-14-52-04-4.jpg',
  'PHOTO-2024-05-23-09-34-32-4.jpg',
  'PHOTO-2024-05-23-09-34-32-6.jpg',
  'PHOTO-2024-05-23-09-34-33-1.jpg',
  'PHOTO-2024-11-08-14-16-32-2.jpg',
  'PHOTO-2024-11-08-14-16-33.jpg',
  'PHOTO-2024-11-08-14-16-33-2.jpg',
  'PHOTO-2024-11-08-14-16-33-3.jpg',
  'PXL_20230911_1434378952-scaled.jpg',
  'WhatsApp-Image-2022-11-09-at-13.49.00.jpeg',
  'WhatsApp-Image-2022-11-09-at-13.49.31.jpeg',
  'WhatsApp-Image-2022-11-09-at-13.49.33.jpeg',
  'WhatsApp-Image-2022-11-09-at-13.49.56.jpeg',
  'WhatsApp-Image-2022-11-09-at-13.49.58.jpeg',
  'WhatsApp-Image-2022-11-09-at-13.50.06.jpeg',
  'WhatsApp-Image-2022-11-09-at-13.51.15.jpeg',
  'WhatsApp-Image-2022-11-09-at-13.51.18.jpeg',
  'WhatsApp-Image-2022-11-18-at-12.27.18.jpeg',
  'WhatsApp-Image-2023-02-14-at-08.33.02.jpeg',
  'WhatsApp-Image-2023-02-14-at-08.33.03.jpeg',
  'WhatsApp-Image-2023-02-14-at-08.33.03-1.jpeg',
  'WhatsApp-Image-2023-02-14-at-08.33.04.jpeg',
  'WhatsApp-Image-2023-02-15-at-11.43.19.jpeg',
  'WhatsApp-Image-2023-02-15-at-11.43.20.jpeg',
  'WhatsApp-Image-2023-02-15-at-11.43.21.jpeg',
  'WhatsApp-Image-2023-04-05-at-19.45.13.jpeg',
  'WhatsApp-Image-2023-04-05-at-19.45.13-1.jpeg',
  'WhatsApp-Image-2023-04-05-at-19.45.13-2.jpeg',
  'c3ad11c0-68c7-449f-b63a-29cbd7f46e25.jpg',
  'residential-solar-installers.jpg',
  'solar-panels-yorkshire.jpg',
].map((file) => ({
  src: `/images/Gallery/${file}`,
  alt: 'Solar 365 installation',
}));

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#68c0b8] pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="container-xl text-center">
            <p className="text-navy-900/80 font-semibold text-sm uppercase tracking-widest mb-3">Our Installations</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 mb-5 leading-tight">
              Recent Solar Installations
            </h1>
            <p className="text-lg text-navy-800 max-w-2xl mx-auto">
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
