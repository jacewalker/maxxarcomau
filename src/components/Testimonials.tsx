"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    {
      value: "5.0",
      label: "Google Rating",
      showStars: true,
    },
    {
      value: "500+",
      label: "Cars Detailed",
      showStars: false,
    },
    {
      value: "100+",
      label: "Happy Families",
      showStars: false,
    },
    {
      value: "4.9",
      label: "Customer Satisfaction",
      showStars: true,
    },
  ];

  const testimonials = [
    {
      quote: "Finally, a car detailer who actually shows up when they say they will. Our two family cars have never looked better, and I don't have to think about it anymore.",
      name: "Sarah M.",
      location: "Brighton",
      service: "Family Clean Club Member",
    },
    {
      quote: "As a real estate agent, first impressions matter. Maxxar keeps my car spotless for client inspections. The maintenance plan is worth every cent.",
      name: "James T.",
      location: "Hampton",
      service: "Weekly Maintenance Plan",
    },
    {
      quote: "The pre-sale detail added at least $500 to what we got for our old car. Incredible attention to detail and so convenient having them come to us.",
      name: "Michelle & David K.",
      location: "Sandringham",
      service: "Pre-Sale Detail",
    },
  ];

  const suburbs = [
    "Brighton",
    "Hampton",
    "Sandringham",
    "Beaumaris",
    "Highett",
    "Cheltenham",
    "Black Rock",
  ];

  const StarIcon = () => (
    <svg
      className="w-5 h-5 text-yellow-400 fill-current"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-12 bg-surface-grey relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-maxxar-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Divider Line */}
        <div className="flex justify-center mb-16">
          <div className="w-3/4 h-px bg-gray-300" />
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maxxar-dark mb-6">
            Trusted by Bayside Families
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            See why families across Brighton, Hampton and Sandringham choose Maxxar
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-maxxar-dark">
                  {stat.value}
                </span>
                {stat.showStars && (
                  <div className="flex gap-0.5 ml-1">
                    <StarIcon />
                  </div>
                )}
              </div>
              <p className="text-sm text-text-secondary font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              {/* Quote Mark */}
              <div className="absolute -top-4 -left-2 text-6xl md:text-7xl text-maxxar-blue/10 font-serif leading-none select-none">
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-text-primary leading-relaxed mb-6 relative z-10 italic">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-gradient-to-r from-maxxar-blue to-accent-teal rounded-full mb-4" />

              {/* Author Info */}
              <div className="space-y-1">
                <p className="font-bold text-maxxar-dark">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-secondary flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {testimonial.location}
                </p>
                <p className="text-sm text-maxxar-blue font-medium">
                  {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Suburb Trust Badges */}
        <div
          className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 text-center transition-all duration-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <p className="text-text-secondary font-medium mb-3">
            Proudly serving:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {suburbs.map((suburb, index) => (
              <span key={index} className="flex items-center gap-2 md:gap-3">
                <span className="text-maxxar-dark font-semibold text-sm md:text-base">
                  {suburb}
                </span>
                {index < suburbs.length - 1 && (
                  <span className="text-maxxar-blue">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
