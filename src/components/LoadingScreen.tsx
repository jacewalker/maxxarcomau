'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start the wipe animation after a brief moment
    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 100);

    // Remove the component from DOM after animation completes
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 1500);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* The "dirty" overlay that gets wiped away */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 transition-all duration-1000 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          clipPath: isAnimating ? 'inset(0 0 0 0)' : 'inset(0 0 0 100%)',
          transition: 'clip-path 1.8s cubic-bezier(0.65, 0, 0.35, 1), opacity 1.8s cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      >
        {/* Condensation/fog effect texture */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, transparent 30%, rgba(255,255,255,0.5) 70%),
                            radial-gradient(circle at 80% 40%, transparent 40%, rgba(255,255,255,0.4) 80%),
                            radial-gradient(circle at 40% 80%, transparent 30%, rgba(255,255,255,0.3) 60%)`,
          }}
        />

        {/* Maxxar logo/brand in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-6xl font-bold text-maxxar-dark mb-2 tracking-tight">
              MAXXAR
            </h1>
            <p className="text-lg text-gray-600 font-medium tracking-wider">
              Mobile Car Care
            </p>
          </div>
        </div>
      </div>

      {/* The wiping hand with cloth animation */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-transform ${
          isAnimating ? 'translate-x-[-100%]' : 'translate-x-[100%]'
        }`}
        style={{
          transition: 'transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)',
          background: 'linear-gradient(90deg, transparent 0%, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%, transparent 100%)',
        }}
      >
        {/* Hand with cloth (represented as a stylized shape) */}
        <div className="relative w-full h-full">
          {/* Cloth/towel shape - positioned on the leading edge */}
          <div
            className="absolute top-0 bottom-0 w-64"
            style={{
              right: '40%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.9) 20%, rgba(59, 130, 246, 0.3) 50%, rgba(255,255,255,0.8) 80%, transparent)',
              filter: 'blur(2px)',
            }}
          >
            {/* Wiping motion effect - diagonal strokes */}
            <div className="absolute inset-0 opacity-40">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-full w-1 bg-white/60"
                  style={{
                    left: `${i * 7}%`,
                    transform: `skewX(-20deg) translateX(${i * 2}px)`,
                    animation: `wipeStreak 0.6s ease-in-out ${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Sparkle/clean effect particles */}
          <div
            className="absolute top-0 bottom-0 w-96"
            style={{
              right: '35%',
            }}
          >
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.6 + 0.2,
                  animationDelay: `${Math.random() * 1.8}s`,
                  animationDuration: `${Math.random() * 0.5 + 0.3}s`,
                }}
              />
            ))}
          </div>

          {/* Water droplets effect */}
          <div
            className="absolute top-0 bottom-0 w-32"
            style={{
              right: '30%',
            }}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 bg-blue-200/60 rounded-full"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 100}%`,
                  height: `${Math.random() * 40 + 10}px`,
                  animation: `droplet 1.5s ease-in ${i * 0.1}s forwards`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Clean reveal shine effect - follows the wipe */}
      <div
        className={`absolute top-0 left-0 w-32 h-full transition-transform ${
          isAnimating ? 'translate-x-[-100%]' : 'translate-x-[calc(100vw)]'
        }`}
        style={{
          transition: 'transform 1.8s cubic-bezier(0.65, 0, 0.35, 1)',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
          filter: 'blur(20px)',
        }}
      />

      {/* CSS animations */}
      <style jsx>{`
        @keyframes wipeStreak {
          0% {
            opacity: 0;
            transform: skewX(-20deg) translateX(0) translateY(20px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: skewX(-20deg) translateX(${10}px) translateY(-20px);
          }
        }

        @keyframes droplet {
          0% {
            opacity: 0.8;
            transform: translateY(0) scaleY(1);
          }
          100% {
            opacity: 0;
            transform: translateY(60px) scaleY(2);
          }
        }
      `}</style>
    </div>
  );
}
