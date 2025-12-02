export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Book Online",
      description: "Choose your service and pick a time that suits you anywhere in Bayside. Book in under 2 minutes.",
    },
    {
      number: "02",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "We Come to You",
      description: "We arrive at your Bayside home or office - wherever is most convenient for you.",
    },
    {
      number: "03",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Expert Clean",
      description: "Professional detailers use premium products to make your car sparkle.",
    },
    {
      number: "04",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Enjoy the Shine",
      description: "Drive away in a spotless car without leaving your location. Simple!",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-maxxar-blue/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-teal/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maxxar-dark mb-6">
            How It Works
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Getting your car cleaned has never been easier. Four simple steps to a sparkling clean vehicle.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative z-10 h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-maxxar-blue text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-maxxar-blue/20">
                {step.icon}
              </div>
              <div className="absolute -top-4 -right-4 text-6xl font-display font-bold text-gray-100 -z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-maxxar-dark mb-4">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
