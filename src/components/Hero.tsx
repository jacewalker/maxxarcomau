import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-maxxar-dark flex items-center pt-52 pb-44">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80"
          alt="BMW luxury car detailing and wash"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maxxar-dark via-maxxar-dark/95 to-maxxar-dark/80" />
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-maxxar-blue/20 rounded-full blur-3xl mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl mix-blend-screen" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maxxar-blue/10 border border-maxxar-blue/20 backdrop-blur-sm mb-8">
              <span className="flex h-2 w-2 rounded-full bg-accent-teal animate-pulse"></span>
              <span className="text-sm font-medium text-blue-200 tracking-wide">
                Bayside's Mobile Car Care Concierge
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Premium Mobile Car Care for{" "}
              <span className="text-maxxar-blue">Busy Bayside Families</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              We come to your home or office, keeping every car in the family clean, protected and ready to go—with weekly and fortnightly maintenance plans available.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="px-8 py-4 bg-maxxar-blue text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-maxxar-blue/25"
              >
                Book a Mobile Detail
              </a>
              <a
                href="#maintenance-plans"
                className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                See Maintenance Plans
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-gray-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Serving Brighton, Hampton & Bayside</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">We Come To You</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Maintenance Plans Available</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block py-8">
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-4">
              {/* Car Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80"
                  alt="Premium BMW detailing and car care"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-teal/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-maxxar-dark">1,000+</p>
                    <p className="text-xs text-text-secondary">Cars Cleaned</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-maxxar-blue/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-maxxar-blue" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-maxxar-dark">5.0 Rating</p>
                    <p className="text-xs text-text-secondary">Customer Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
