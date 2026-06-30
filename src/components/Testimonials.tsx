import { Star, ArrowRight, Phone } from 'lucide-react';

const reviews = [
  {
    name: 'Jonathan Forsyth',
    location: 'Yorkshire',
    rating: 5,
    text: "From the very first phone call, I felt like I was in good hands. The team was friendly, honest, and took the time to explain everything — no pressure, just genuine help and great communication. The installation crew was fantastic — showed up right on time and treated my home with respect. Within days we were already seeing our energy bills drop. Solar 365 handled all the paperwork, permits, and inspections — I didn't have to stress about a single thing.",
  },
  {
    name: 'Lisa Jones',
    location: 'Yorkshire',
    rating: 5,
    text: "We had our solar panel system fitted Wednesday and were surprised at how quick the installation was! The fitters were polite and even worked through the rain! My husband dealt with Jordan for the initial sale and he was fantastic throughout — answered all questions in depth. He didn't sugar-coat things, was really upfront and honest! The price was spot on for what we wanted.",
  },
  {
    name: 'Wil Lyons',
    location: 'Yorkshire',
    rating: 5,
    text: "Within a week we had the survey and installation completed and were already seeing the benefits. In the last four days our electricity bill has been less than a pound — most energy provided from solar or the battery. They are so professional and polite, leaving a tidy finish only expected from a highly trained, competent team.",
  },
  {
    name: 'Diane Pritchard',
    location: 'Yorkshire',
    rating: 5,
    text: "Recently had 16 solar panels and a battery fitted at my home by Solar 365. From start to finish — very professional, explained everything clearly. The app is easy to navigate and use. Arrived on time every day. Very polite team of fitters. I would highly recommend this company. Very pleased with my solar panels and I'm saving money from today!",
  },
  {
    name: 'Jason Coopey',
    location: 'Yorkshire',
    rating: 5,
    text: "365 are true to their word — the install was done to a high standard and with a great can-do attitude. The communication was excellent throughout. I'm currently saving at least two thirds of my monthly bill and it's only winter. Looking forward to the longer days!",
  },
  {
    name: 'Michael Bardill',
    location: 'Yorkshire',
    rating: 5,
    text: "Had a couple of quotes for solar panels and battery. Solar 365 offered the best value — better spec system and significantly cheaper than others. Everything went smoothly. Installation was efficient and the team were easy to deal with. So far everything is up and running exactly as expected. Would be happy to work with Solar 365 again.",
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
              <p className="text-white font-semibold text-lg">Excellent — Based on 60+ Reviews</p>
              <p className="text-navy-300 text-sm">Verified reviews on Google &amp; Trustpilot</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://solar-365.co.uk/reviews/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:01302456613"
              className="inline-flex items-center justify-center gap-2 border-2 border-navy-600 text-white hover:border-solar-500 hover:text-solar-400 font-semibold px-5 py-2.5 rounded-lg transition-all text-sm whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              01302 456 613
            </a>
          </div>
        </div>

        <div className="text-center mb-10">
          <p className="section-label mb-2">Customer Reviews</p>
          <h2 className="section-heading mb-3">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base">
            Real feedback from real Yorkshire homeowners and businesses who've made the switch to solar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {reviews.map(({ name, location, rating, text }) => (
            <div key={name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col">
              <Stars count={rating} />
              <p className="text-gray-700 text-sm leading-relaxed my-4 flex-1">
                "{text}"
              </p>
              <div>
                <p className="text-navy-900 font-semibold text-sm">{name}</p>
                <p className="text-gray-500 text-xs">{location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-navy-800 font-semibold mb-4">
            Join hundreds of happy customers across Yorkshire
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote" className="btn-primary-lg inline-flex">
              Get Your Free Quote <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:01302456613" className="btn-outline-navy px-8 py-4 text-base inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Call 01302 456 613
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
