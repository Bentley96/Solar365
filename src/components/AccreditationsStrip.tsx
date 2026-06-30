const accreditations = [
  { name: 'MCS Accredited', abbr: 'MCS' },
  { name: 'HIES Registered', abbr: 'HIES' },
  { name: 'TrustMark', abbr: 'TM' },
  { name: 'NAPIT', abbr: 'NAPIT' },
  { name: 'Green Deal', abbr: 'GD' },
  { name: 'Citation', abbr: 'CIT' },
  { name: 'BUS Scheme', abbr: 'BUS' },
  { name: 'Cosy Homes', abbr: 'CH' },
];

const brands = [
  'JA Solar', 'Solax', 'Sunsynk', 'Tesla', 'GivEnergy',
  'Jinko', 'Longi', 'SolarEdge', 'EcoFlow', 'DMEGC', 'Fox ESS',
];

function AccredBadge({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 px-6 py-4 rounded-xl bg-white border border-gray-100 shadow-sm min-w-[90px]">
      <span className="text-xs font-bold text-navy-600 tracking-widest uppercase">{abbr}</span>
      <span className="text-xs text-gray-500 whitespace-nowrap text-center leading-tight">{name}</span>
    </div>
  );
}

function BrandChip({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-6 py-3 rounded-xl bg-gray-50 border border-gray-100 min-w-[110px]">
      <span className="text-sm font-semibold text-navy-700">{name}</span>
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
              <AccredBadge key={a.abbr} name={a.name} abbr={a.abbr} />
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
            <div className="marquee-track gap-3 flex">
              {doubled.map((b, i) => (
                <BrandChip key={`${b}-${i}`} name={b} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
