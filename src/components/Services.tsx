"use client";

export default function Services() {
  const services = [
    {
      title: "Mini Detail",
      description: "Essential clean for a fresh look. Snow foam wash, detailed rims & tyres, and interior vacuum & conditioning.",
      price: "From $130",
      highlights: ["Snow foam wash", "Rims & tyres", "Interior vacuumed"],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Full Detail",
      description: "Complete interior and exterior transformation. Everything in Mini Detail plus wax & seal, deep carpet cleaning, and full interior detail with steamer.",
      price: "From $225",
      highlights: ["Wax & seal", "Deep cleaned carpets", "Full interior detail"],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Paint Correction",
      description: "Professional paint restoration & protection. Full Detail plus swirl mark correction, cut & polish, bug & tar removal, and hydrophobic sealant.",
      price: "From $465",
      highlights: ["Cut & polish", "Swirl removal", "Hydrophobic sealant"],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
    {
      title: "The Full Reset",
      description: "The ultimate car care experience. Everything above plus multi-step paint correction and professional 1-year ceramic coating.",
      price: "From $880",
      highlights: ["Multi-step correction", "Ceramic coating", "1 year protection"],
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-surface-grey relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-maxxar-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl" />

      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-grey via-transparent to-surface-grey" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maxxar-dark mb-6">
            Our Services
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            From quick washes to full detailing, we offer a complete range of mobile car care services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-maxxar-blue/20"
            >
              <div className="flex items-start gap-6 mb-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-maxxar-blue to-accent-teal flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-2xl font-bold text-maxxar-dark group-hover:text-maxxar-blue transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-lg font-bold text-maxxar-blue whitespace-nowrap ml-2">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="flex flex-wrap gap-2 pl-[88px]">
                {service.highlights.map((highlight, highlightIndex) => (
                  <span
                    key={highlightIndex}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-grey rounded-lg text-sm text-text-secondary"
                  >
                    <svg className="w-4 h-4 text-maxxar-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-maxxar-blue text-white font-semibold rounded-xl hover:bg-maxxar-blue/90 transition-colors shadow-lg hover:shadow-xl"
          >
            View Pricing
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
