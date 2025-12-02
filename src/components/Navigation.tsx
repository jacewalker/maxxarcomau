"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "#services", label: "Services & Pricing" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => {
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: link.href,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean);

      // Find the section that's currently in view
      // We consider a section active if its top is within the viewport's top half
      const viewportMiddle = window.innerHeight / 3;

      for (const section of sections) {
        if (section && section.top <= viewportMiddle && section.bottom > viewportMiddle) {
          setActiveSection(section.id);
          return;
        }
      }

      // If no section is in the middle third, find the closest one
      if (sections.length > 0) {
        const closest = sections.reduce((prev, curr) => {
          if (!prev || !curr) return curr || prev;
          const prevDist = Math.abs(prev.top - viewportMiddle);
          const currDist = Math.abs(curr.top - viewportMiddle);
          return currDist < prevDist ? curr : prev;
        });
        if (closest) {
          setActiveSection(closest.id);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-clinical-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-maxxar-blue rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <span className="font-extrabold text-xl text-maxxar-dark">Maxxar</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-ink-charcoal hover:text-maxxar-blue transition-colors font-medium ${
                  activeSection === link.href ? "text-maxxar-blue" : ""
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-maxxar-blue rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-3 bg-maxxar-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-ink-charcoal min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-ink-charcoal hover:text-maxxar-blue transition-colors font-medium py-2 ${
                    activeSection === link.href ? "text-maxxar-blue font-bold" : ""
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <span className="ml-2 inline-block w-1.5 h-1.5 bg-maxxar-blue rounded-full" />
                  )}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-3 bg-maxxar-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-center mt-2"
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
