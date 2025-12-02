"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, Environment, ContactShadows, Center, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";

function CarModel({ rotation }: { rotation: number }) {
  const { scene } = useGLTF("/models/ferrari.glb");
  const groupRef = useRef<THREE.Group>(null);

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
        <primitive object={scene} scale={0.4} />
      </Center>
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[2, 0.5, 4]} />
      <meshStandardMaterial color="#2563EB" opacity={0.5} transparent />
    </mesh>
  );
}

export default function Car3DShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const showcase = document.getElementById("car-3d-showcase");
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

  const rotation = (scrollProgress - 0.5) * 1.5;

  return (
    <section
      id="car-3d-showcase"
      className="relative py-32 bg-gradient-to-b from-surface-grey via-white to-surface-grey overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-maxxar-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-maxxar-blue/10 border border-maxxar-blue/20 backdrop-blur-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent-teal animate-pulse"></span>
            <span className="text-sm font-medium text-maxxar-blue tracking-wide">
              Interactive 3D Experience
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-maxxar-dark mb-6">
            Explore Every Angle
          </h2>

          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Scroll to rotate the vehicle and see how our premium detailing covers every curve and surface
          </p>
        </div>

        {/* 3D Canvas */}
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">
          <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 45 }}>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize={2048}
            />
            <pointLight position={[-10, 5, -10]} intensity={0.4} color="#60A5FA" />
            <pointLight position={[10, 5, -5]} intensity={0.6} color="#ffffff" />
            <directionalLight position={[0, 10, 0]} intensity={0.3} />

            {/* Environment for reflections */}
            <Environment preset="city" />

            {/* 3D Model */}
            <Suspense fallback={<LoadingFallback />}>
              <CarModel rotation={rotation} />
            </Suspense>

            {/* Ground shadow */}
            <ContactShadows
              position={[0, -0.5, 0]}
              opacity={0.5}
              scale={12}
              blur={2.5}
              far={5}
            />
          </Canvas>

          {/* Overlay gradient */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/20 via-transparent to-transparent" />

          {/* Brand badge */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
            <p className="text-sm font-bold text-maxxar-dark">Ferrari 458</p>
            <p className="text-xs text-text-secondary">Premium Detail Package</p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-maxxar-dark/80 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Scroll to rotate
          </div>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-maxxar-blue/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-maxxar-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-maxxar-dark mb-2">360° Coverage</h3>
            <p className="text-text-secondary text-sm">Every angle meticulously detailed</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-teal/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-maxxar-dark mb-2">Paint Protected</h3>
            <p className="text-text-secondary text-sm">Ceramic coating for lasting shine</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent-purple/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-bold text-maxxar-dark mb-2">Showroom Ready</h3>
            <p className="text-text-secondary text-sm">Concours-level finish</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Preload the model
useGLTF.preload("/models/ferrari.glb");
