export default function MaintenancePlans() {
  const plans = [
    {
      name: "Family Clean Club - Fortnightly",
      price: "From $65/week",
      subtitle: "for 2 cars",
      features: [
        "Fortnightly detail for 2 cars",
        "Priority booking & locked-in timeslot",
        "10% off any add-ons",
        "SMS reminders",
      ],
      featured: false,
    },
    {
      name: "Family Clean Club - Weekly",
      price: "From $89/week",
      subtitle: "for 2 cars",
      features: [
        "Weekly exterior + Monthly full interior",
        "Priority booking & locked-in timeslot",
        "15% off any add-ons",
        "Perfect for cars that need to always look immaculate",
      ],
      featured: true,
    },
    {
      name: "Custom Plan",
      price: "Let's Talk",
      subtitle: "",
      features: [
        "Tailored to your family's needs",
        "Multiple cars, flexible scheduling",
        "Volume discounts available",
        "Contact us to design your plan",
      ],
      featured: false,
    },
  ];

  return (
    <section id="maintenance-plans" className="py-20 md:py-28 bg-gradient-to-b from-maxxar-dark via-maxxar-dark/95 to-maxxar-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-maxxar-blue/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-maxxar-blue to-transparent" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maxxar-blue/10 border border-maxxar-blue/20 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent-teal animate-pulse"></span>
            <span className="text-sm font-medium text-blue-200 tracking-wide">
              Our Big Differentiator
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Maintenance Plans
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Set and forget car care for busy Bayside families. Lock in a regular slot and never think about the car wash again.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 relative flex flex-col ${
                plan.featured
                  ? "bg-white shadow-2xl border-2 border-maxxar-blue transform lg:-translate-y-4"
                  : "bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-maxxar-blue text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-4 ${plan.featured ? "text-maxxar-dark" : "text-white"}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className={`text-4xl font-bold mb-1 ${plan.featured ? "text-maxxar-blue" : "text-white"}`}>
                  {plan.price}
                </div>
                {plan.subtitle && (
                  <div className={`text-sm ${plan.featured ? "text-text-secondary" : "text-gray-400"}`}>
                    {plan.subtitle}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? "text-success" : "text-accent-teal"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm leading-relaxed ${plan.featured ? "text-text-secondary" : "text-gray-300"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full px-6 py-3 font-bold rounded-xl text-center transition-colors mt-auto ${
                  plan.featured
                    ? "bg-maxxar-blue text-white hover:bg-blue-600"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                Start Your Maintenance Plan
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <p className="text-gray-300 leading-relaxed">
              All maintenance plans include priority booking, SMS reminders before each visit, and the flexibility to pause or adjust anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
