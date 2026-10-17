"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import type { CarouselSlide } from "@/content/assets";

interface ImpactCarouselProps {
  slides: CarouselSlide[];
  variant?: "precision" | "cause";
  autoplay?: boolean;
  autoplayInterval?: number;
}

export default function ImpactCarousel({
  slides,
  variant = "precision",
  autoplay = false,
  autoplayInterval = 5000,
}: ImpactCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, slides.length, goTo]);

  // Autoplay
  useEffect(() => {
    if (autoplay && !paused && !prefersReducedMotion.current) {
      autoplayRef.current = setInterval(next, autoplayInterval);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, paused, next, autoplayInterval]);

  const handleUserInteraction = () => {
    setPaused(true);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      handleUserInteraction();
      if (diff > 0) next();
      else prev();
    }
  };

  const isPrecision = variant === "precision";

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main slide container */}
      <div
        className={`relative overflow-hidden ${
          isPrecision
            ? "rounded-xl aspect-[16/9] lg:aspect-[2.2/1]"
            : "rounded-2xl aspect-[16/10] lg:aspect-[16/9]"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity ${
              prefersReducedMotion.current ? "duration-0" : "duration-500"
            } ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={() => {
          handleUserInteraction();
          prev();
        }}
        aria-label="Previous slide"
        className={`absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all ${
          isPrecision
            ? "left-3 lg:left-4 w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-white/90 text-navy-dark hover:bg-white shadow-md"
            : "left-3 lg:-left-5 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-white/95 text-navy-dark hover:bg-white shadow-lg"
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 4l-6 6 6 6" />
        </svg>
      </button>
      <button
        onClick={() => {
          handleUserInteraction();
          next();
        }}
        aria-label="Next slide"
        className={`absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all ${
          isPrecision
            ? "right-3 lg:right-4 w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-white/90 text-navy-dark hover:bg-white shadow-md"
            : "right-3 lg:-right-5 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-white/95 text-navy-dark hover:bg-white shadow-lg"
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M8 4l6 6-6 6" />
        </svg>
      </button>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              handleUserInteraction();
              goTo(i);
            }}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            className={`transition-all rounded-full ${
              isPrecision
                ? i === current
                  ? "w-8 h-2 bg-navy"
                  : "w-2 h-2 bg-gray-300 hover:bg-navy/40"
                : i === current
                  ? "w-8 h-2.5 bg-orange rounded-full"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-orange/40 rounded-full"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
