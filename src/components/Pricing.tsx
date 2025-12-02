import Image from "next/image";

export default function Pricing() {
  const plans = [
    {
      name: "Mini Detail",
      price: "$130",
      description: "Essential clean for a fresh look",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      features: [
        "Contactless snow foam pre-wash",
        "Contact snow foam wash",
        "Rims & tyres detailed",
        "Microfibre towel dry",
        "Interior vacuumed, wiped & conditioned",
      ],
      featured: false,
    },
    {
      name: "Full Detail Package",
      price: "$225",
      description: "Complete interior & exterior transformation",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        "All of Mini Detail, plus:",
        "Wax & seal exterior shine & protection",
        "Full interior decontamination & protection",
        "Carpets deep cleaned",
        "Full interior detail including steamer",
      ],
      featured: true,
    },
    {
      name: "Full Detail + Paint Correction",
      price: "$465",
      description: "Professional paint restoration & protection",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      features: [
        "All of Full Detail, plus:",
        "Swirl marks & light scratch corrections",
        "Full body cut & polish",
        "Bug & tar removal",
        "Paint decontamination",
        "Enhanced paint shine & depth",
        "Hydrophobic sealant protection",
      ],
      featured: false,
    },
    {
      name: "The Full Reset + Longevity",
      price: "$880",
      description: "The ultimate car care experience",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      features: [
        "All of above, plus:",
        "Multi step cut & polish paint correction",
        "Professional ceramic coating (exterior, 1 year)",
      ],
      featured: false,
    },
  ];

  const addOns = [
    {
      name: "Headlight Restoration",
      description: "Oxidation, yellowing, scratches & foggy lenses",
      price: "$59",
    },
    {
      name: "Rim Repair",
      description: "Gutter rash, scuffs & scratches",
      price: "$95 each",
    },
    {
      name: "Window Tint",
      description: "See our full window tinting service above",
      price: "$370+",
    },
  ];

  return (
    <section id="services" className="pt-20 md:pt-28 pb-12 md:pb-16 bg-surface-grey relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-maxxar-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maxxar-dark mb-6">
            Our Services & Pricing
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            From quick washes to complete transformations. Choose the package that fits your needs — no hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 lg:p-8 relative flex flex-col ${
                plan.featured
                  ? "bg-maxxar-dark shadow-xl border border-maxxar-blue/20 transform lg:-translate-y-4"
                  : "bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-maxxar-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  plan.featured
                    ? "bg-maxxar-blue/20 text-maxxar-blue"
                    : "bg-maxxar-blue/10 text-maxxar-blue"
                }`}>
                  {plan.icon}
                </div>
                <h3 className={`text-lg font-bold ${plan.featured ? "text-white" : "text-maxxar-dark"}`}>
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-maxxar-dark"}`}>
                  {plan.price}
                </span>
              </div>

              <p className={`mb-6 text-sm ${plan.featured ? "text-gray-300" : "text-gray-500"}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? "text-accent-teal" : "text-success"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${plan.featured ? "text-gray-300" : "text-text-secondary"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full px-6 py-3 font-bold rounded-xl text-center transition-colors mt-auto ${
                  plan.featured
                    ? "bg-maxxar-blue text-white hover:bg-blue-600"
                    : "bg-surface-grey text-maxxar-dark hover:bg-gray-200"
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        {/* Window Tinting & Add-Ons Side by Side */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Window Tinting Section */}
          <div className="bg-gradient-to-br from-maxxar-blue/5 via-accent-teal/5 to-accent-purple/5 rounded-3xl p-6 md:p-8 border-2 border-maxxar-blue/10 shadow-lg flex flex-col">
            {/* Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-maxxar-dark mb-2">
                Window Tinting
              </h3>
              <p className="text-sm text-text-secondary">
                Professional window tinting for style, comfort and protection
              </p>
            </div>

            {/* Benefit Cards - Stacked */}
            <div className="space-y-4 mb-6 flex-grow">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-maxxar-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-maxxar-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-maxxar-dark mb-1">UV Protection</h4>
                  <p className="text-xs text-text-secondary">Block up to 99% of harmful UV rays</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-maxxar-dark mb-1">Heat Reduction</h4>
                  <p className="text-xs text-text-secondary">Keep your car cooler in summer</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="w-10 h-10 bg-accent-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-maxxar-dark mb-1">Privacy & Style</h4>
                  <p className="text-xs text-text-secondary">Enhanced privacy plus a sleek look</p>
                </div>
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center mt-auto">
              <div className="flex items-baseline justify-center gap-2 mb-1">
                <span className="text-3xl font-bold text-maxxar-dark">From $370</span>
              </div>
              <p className="text-xs text-text-secondary mb-4">
                Price varies by vehicle size and tint level
              </p>
              <a
                href="#contact"
                className="inline-block w-full px-6 py-3 bg-maxxar-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors mb-3"
              >
                Add Tinting to Your Detail
              </a>
              <div className="bg-accent-teal/10 border border-accent-teal/20 rounded-lg py-2 px-3">
                <p className="text-xs font-semibold text-maxxar-dark">
                  Book with any detail package and save $50
                </p>
              </div>
            </div>
          </div>

          {/* Add-Ons Section */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-lg flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-maxxar-dark mb-2">
                Add-Ons
              </h3>
              <p className="text-sm text-text-secondary">
                Enhance your detail with these optional extras
              </p>
            </div>

            <div className="space-y-4 flex-grow">
              {addOns.map((addOn, index) => (
                <div
                  key={index}
                  className="bg-surface-grey rounded-xl p-5 hover:shadow-md transition-shadow hover:border-maxxar-blue/20 border border-transparent"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-bold text-lg text-maxxar-dark">
                      {addOn.name}
                    </h4>
                    <span className="text-xl font-bold text-maxxar-blue whitespace-nowrap ml-2">
                      {addOn.price}
                    </span>
                  </div>
                  {addOn.description && (
                    <p className="text-sm text-text-secondary">
                      {addOn.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* CTA at bottom */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <a
                href="#contact"
                className="block w-full px-6 py-3 bg-surface-grey text-maxxar-dark rounded-xl font-bold hover:bg-gray-200 transition-colors text-center"
              >
                Add to Your Detail
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Image */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-72 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80"
              alt="Premium car detailing service"
              fill
              className="object-cover object-[center_60%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-maxxar-dark/80 via-maxxar-dark/40 to-transparent flex items-center">
              <div className="px-8 md:px-12 text-white max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Every Vehicle Gets Premium Care
                </h3>
                <p className="text-gray-200 mb-6">
                  From luxury vehicles to family cars, we treat every car with the same attention to detail and professional service.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-maxxar-blue text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                >
                  Get Started
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-text-secondary mt-12 space-y-2">
          <p>
            Prices based on standard sedan. SUVs and larger vehicles may incur additional charges.{" "}
            <a href="#contact" className="text-maxxar-blue hover:underline">
              Contact us
            </a>{" "}
            for a custom quote.
          </p>
          <p className="text-sm font-medium text-maxxar-dark">
            Note: Water & Power supply required
          </p>
        </div>
      </div>
    </section>
  );
}
