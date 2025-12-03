"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderHandleRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(clampedPercentage);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 5;

    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        setSliderPosition((prev) => Math.max(0, prev - step));
        break;
      case "ArrowRight":
        e.preventDefault();
        setSliderPosition((prev) => Math.min(100, prev + step));
        break;
      case "Home":
        e.preventDefault();
        setSliderPosition(0);
        break;
      case "End":
        e.preventDefault();
        setSliderPosition(100);
        break;
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalTouchMove = (e: globalThis.TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
        const touch = e.touches[0];
        handleMove(touch.clientX);
      }
    };

    const handleGlobalTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
      document.addEventListener("touchmove", handleGlobalTouchMove, { passive: false });
      document.addEventListener("touchend", handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("touchmove", handleGlobalTouchMove);
      document.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1024px] mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before Image (Dirty) - Full background */}
      <div className="absolute inset-0">
        <Image
          src="/img/dirty-merc.png"
          alt="Mercedes before cleaning - dirty car"
          fill
          className="object-cover"
        />

        {/* Label */}
        <div className="absolute top-8 right-8 bg-amber-900/80 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
          BEFORE
        </div>
      </div>

      {/* After Image (Clean) - Clipped */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src="/img/clean-merc.png"
          alt="Mercedes after detailing - clean car"
          fill
          className="object-cover"
        />

        {/* Label */}
        <div className="absolute top-8 left-8 bg-maxxar-blue text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
          AFTER
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Slider Handle */}
        <div
          ref={sliderHandleRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 min-h-[44px] min-w-[44px] bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-maxxar-blue transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-maxxar-blue/50 touch-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-label="Before and after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuetext={`${Math.round(sliderPosition)}% of after image visible`}
        >
          {/* Left Arrow */}
          <svg
            className="w-4 h-4 text-maxxar-blue absolute left-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {/* Right Arrow */}
          <svg
            className="w-4 h-4 text-maxxar-blue absolute right-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Instruction hint */}
      {sliderPosition === 50 && !isDragging && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-maxxar-dark/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg animate-pulse">
          <span className="hidden sm:inline">Drag or use arrow keys to compare</span>
          <span className="sm:hidden">Drag to compare</span>
        </div>
      )}
    </div>
  );
}
