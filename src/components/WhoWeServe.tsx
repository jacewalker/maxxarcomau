export default function WhoWeServe() {
  const audiences = [
    {
      title: "Busy Bayside Families",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Multiple cars, school runs, sports practice—we keep every family vehicle clean and ready without you lifting a finger.",
    },
    {
      title: "Busy Professionals",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "Real estate agents, executives, business owners—always arrive in a spotless car that reflects your professional image.",
    },
    {
      title: "Convenience Seekers",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "You already get groceries delivered and the house cleaned. Why not add car care to your 'done for you' list?",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-maxxar-blue/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-teal/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maxxar-dark mb-6">
            Who We&apos;re Perfect For
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Maxxar Car Care is designed for people who value their time and want their cars always looking their best
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-maxxar-blue/10 text-maxxar-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-maxxar-blue group-hover:text-white transition-colors duration-300 shadow-lg shadow-maxxar-blue/10 group-hover:shadow-maxxar-blue/20">
                {audience.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-maxxar-dark mb-4">
                {audience.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
