import { Star, ArrowRight } from 'lucide-react';

const reviews = [
  {
    name: 'Mark T.',
    location: 'Doncaster',
    rating: 5,
    text: 'Absolutely top-notch service from start to finish. The team were professional, tidy, and completed the install in a single day. Our bills have dropped massively — wish we\'d done it sooner.',
  },
  {
    name: 'Sarah L.',
    location: 'Worksop',
    rating: 5,
    text: 'Solar 365 gave us honest, straightforward advice — no pushy sales tactics. The Octopus Energy referral was a bonus. Highly recommend them to anyone thinking about solar in Yorkshire.',
  },
  {
    name: 'James &amp; Karen R.',
    location: 'Wakefield',
    rating: 5,
    text: 'We had our Tesla Powerwall fitted alongside the solar panels. The guys knew exactly what they were doing and the monitoring app is brilliant. Exceptional job.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-solar-500 fill-solar-500" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white section-padding">
      <div className="container-xl px-4 sm:px-6 lg:px-8">
        {/* Summary badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 bg-navy-900 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-5">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-white">4.9</p>
              <Stars count={5} />
              <p className="text-navy-300 text-xs mt-1">Average Rating</p>
            </div>
            <div className="h-12 w-px bg-navy-700 hidden sm:block" />
            <div>
              <p className="text-white font-semibold text-lg">Trusted by Yorkshire homeowners</p>
              <p className="text-navy-300 text-sm">Verified reviews across Google &amp; Trustpilot</p>
            </div>
          </div>
          <a
            href="https://solar-365.co.uk"
            target="_blank"
            rel="noreferrer"
            className="btn-primary whitespace-nowrap"
          >
            Read All Reviews <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="text-center mb-10">
          <p className="section-label mb-2">Customer Reviews</p>
          <h2 className="section-heading mb-3">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {reviews.map(({ name, location, rating, text }) => (
            <div key={name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <Stars count={rating} />
              <p
                className="text-gray-700 text-sm leading-relaxed my-4"
                dangerouslySetInnerHTML={{ __html: `"${text}"` }}
              />
              <div>
                <p className="text-navy-900 font-semibold text-sm" dangerouslySetInnerHTML={{ __html: name }} />
                <p className="text-gray-500 text-xs">{location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-navy-800 font-semibold mb-4">
            Join hundreds of happy customers across Yorkshire
          </p>
          <a href="#quote" className="btn-primary-lg inline-flex">
            Get Your Free Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
