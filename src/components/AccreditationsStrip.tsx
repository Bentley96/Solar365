const accreditations = [
  { name: 'MCS Accredited', img: '/images/homepage/MCS-certified.png' },
  { name: 'HIES Registered', img: '/images/homepage/hies-logo.png.webp' },
  { name: 'TrustMark', img: '/images/homepage/trustmark.png.webp' },
  { name: 'NAPIT', img: '/images/homepage/napit-logo.png' },
  { name: 'Green Deal', img: '/images/homepage/green-deal-logo.png.webp' },
  { name: 'Citation', img: '/images/homepage/ciatation-logo.png.webp' },
  { name: 'BUS Scheme', img: '/images/homepage/bus-logo.png' },
];

const brands = [
  { name: 'SolarEdge', img: '/images/homepage/solar-edge-1.png' },
  { name: 'Solax Power', img: '/images/homepage/solax-power-1.png.webp' },
  { name: 'Sunsynk', img: '/images/homepage/sun-synk-logo.png' },
  { name: 'GivEnergy', img: '/images/homepage/giv-energy.png' },
  { name: 'Jinko Solar', img: '/images/homepage/jinko-solar-1.png.webp' },
  { name: 'LonGi Solar', img: '/images/homepage/longi-solar-.png' },
  { name: 'EcoFlow', img: '/images/homepage/ecoflow-logo.png' },
  { name: 'DMEGC Solar', img: '/images/homepage/dmegc-solar.png.webp' },
  { name: 'Fox ESS', img: '/images/homepage/fox-ess-logo.png.webp' },
  { name: 'Solis', img: '/images/homepage/solais-logo.png.webp' },
];

function AccredBadge({ name, img }: { name: string; img: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-gray-100 shadow-sm min-w-[100px]">
      <img src={img} alt={name} className="h-10 w-auto object-contain" loading="lazy" />
      <span className="text-xs text-gray-500 whitespace-nowrap text-center leading-tight">{name}</span>
    </div>
  );
}

function BrandLogo({ name, img }: { name: string; img: string }) {
  return (
    <div className="flex items-center justify-center px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 min-w-[130px]">
      <img src={img} alt={name} className="h-8 w-auto object-contain" loading="lazy" />
    </div>
  );
}

export default function AccreditationsStrip() {
  const doubled = [...brands, ...brands];

  return (
    <section className="bg-white py-14 overflow-hidden">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        {/* Accreditations */}
        <div className="mb-12">
          <p className="text-center section-label mb-3">Our Accreditations</p>
          <h2 className="text-center text-2xl font-bold text-navy-900 mb-6">Certified. Registered. Trusted.</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {accreditations.map((a) => (
              <AccredBadge key={a.name} name={a.name} img={a.img} />
            ))}
          </div>
          <p className="text-center mt-4 text-sm text-solar-600 font-semibold">
            Only Cosy Homes Heat Pump accredited installer based in Doncaster
          </p>
        </div>

        {/* Brands marquee */}
        <div>
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">Brands We Work With</p>
          <div className="overflow-hidden">
            <div className="marquee-track gap-4 flex">
              {doubled.map((b, i) => (
                <BrandLogo key={`${b.name}-${i}`} name={b.name} img={b.img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
