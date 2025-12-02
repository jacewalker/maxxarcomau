"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Environment } from "@react-three/drei";
import * as THREE from "three";

// Loading Fallback Component (inside Canvas)
function CanvasLoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[2, 0.5, 4]} />
      <meshStandardMaterial color="#2563EB" opacity={0.3} transparent />
    </mesh>
  );
}

function CarModel({ rotation }: { rotation: number }) {
  const { scene } = useGLTF("/models/ferrari.glb");
  const groupRef = useRef<THREE.Group>(null);
  const clonedScene = scene.clone();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        rotation * Math.PI * 2,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={clonedScene} scale={0.5} />
      </Center>
    </group>
  );
}

function Car3DCanvas({ rotation }: { rotation: number }) {
  return (
    <Canvas
      camera={{ position: [0, 1, 3], fov: 45 }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      gl={{ alpha: true, antialias: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={0.4} color="#60A5FA" />

      {/* Environment for reflections */}
      <Environment preset="city" />

      {/* 3D Model with Suspense inside Canvas */}
      <Suspense fallback={<CanvasLoadingFallback />}>
        <CarModel rotation={rotation} />
      </Suspense>
    </Canvas>
  );
}

export default function CarShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const showcase = document.getElementById("car-showcase");
      if (!showcase) return;

      const rect = showcase.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      let progress = 0;
      if (elementTop < viewportHeight && elementTop > -elementHeight) {
        progress = (viewportHeight - elementTop) / (viewportHeight + elementHeight);
        progress = Math.max(0, Math.min(1, progress));
      }

      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const rotation = (scrollProgress - 0.5) * 1.2;

  return (
    <section
      id="car-showcase"
      className="relative py-20 md:py-28 bg-gradient-to-b from-maxxar-dark via-maxxar-dark/95 to-maxxar-dark overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-maxxar-blue/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-maxxar-blue to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maxxar-blue/10 border border-maxxar-blue/20 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent-teal animate-pulse"></span>
            <span className="text-sm font-medium text-blue-200 tracking-wide">
              Premium Vehicle Care
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Every Bayside Car Deserves
            <span className="block text-maxxar-blue mt-2">The Maxxar Treatment</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From luxury European cars to busy family SUVs across Bayside, we provide the same meticulous care and attention to detail
          </p>
        </div>

        {/* Single Large 3D Car */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="relative h-[450px] sm:h-[550px] lg:h-[650px]">
              {isClient ? (
                <Car3DCanvas rotation={rotation} />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-maxxar-blue border-t-transparent mb-4"></div>
                    <p className="text-gray-300 text-lg font-medium">Loading 3D model...</p>
                  </div>
                </div>
              )}

              {/* Shadow underneath */}
              <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-6 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse, rgba(37, 99, 235, 0.5) 0%, transparent 70%)",
                  filter: "blur(12px)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Scroll to rotate</p>
          <svg className="w-6 h-6 mx-auto mt-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-maxxar-blue/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-maxxar-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Showroom Finish</h3>
            <p className="text-gray-300">Professional-grade products and techniques for that pristine, just-detailed look</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-teal/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Paint Protection</h3>
            <p className="text-gray-300">Advanced ceramic coatings and sealants to protect your investment</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-purple/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Time Saving</h3>
            <p className="text-gray-300">We come to you - no more wasting hours at the car wash</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Preload the model
useGLTF.preload("/models/ferrari.glb");
