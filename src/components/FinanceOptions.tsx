import { Wallet, CalendarDays, FileCheck, ArrowRight } from 'lucide-react';

const options = [
  {
    icon: Wallet,
    title: 'Cash Payment',
    description:
      'A deposit followed by a completion payment — ideal if you want full control and the biggest long-term savings from day one.',
  },
  {
    icon: CalendarDays,
    title: 'Finance Plan',
    description:
      'Fixed monthly payments with no hidden fees. Choose a term length that suits your budget, subject to status.',
  },
  {
    icon: FileCheck,
    title: 'Leasing',
    description:
      'Start with a low deposit and a fixed monthly lease — enjoy the savings of solar and battery now, while keeping your upfront spend to a minimum.',
  },
];

export default function FinanceOptions() {
  return (
    <section className="bg-white section-padding border-y border-gray-100">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading mb-4">Financing Your Solar</h2>
        <div className="border-b border-gray-200 mb-8" />
        <p className="text-gray-600 text-base leading-relaxed max-w-3xl mb-10">
          Financing your new solar &amp; battery system is easy with Solar 365. Pay up front, or spread
          the cost with flexible monthly finance through Phoenix Financial Consultants.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {options.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-5 border border-gray-200 rounded-xl p-6 card-hover"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-[#68c0b8] flex items-center justify-center">
                <Icon className="w-7 h-7 text-[#68c0b8]" />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-1.5">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://www.phoenix-fc.co.uk/finance_landing?b=6598B6E5D7AE4889&t=9E634738F2D54B36B2BDB6BD"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Explore Finance Options
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
