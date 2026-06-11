"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    {
      id: 1,
      src: "/banner.jpg",
      alt: "Pravasi Souq Premium Banners",
    },
    {
      id: 2,
      src: "/banner.jpg", // Duplicate or fallback to demonstrate carousel scrolling
      alt: "Pravasi Souq Traditional Delights",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden bg-brand-cream aspect-[21/9] sm:aspect-[21/7.5] md:aspect-[21/6.5] min-h-[220px] sm:min-h-[350px] md:min-h-[450px]">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-brand-primary text-white p-2 rounded-full transition-all duration-300 backdrop-blur-xs focus:outline-none hidden sm:flex items-center justify-center opacity-0 hover:opacity-100 group-hover:opacity-100"
        style={{ opacity: banners.length > 1 ? undefined : 0 }}
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-brand-primary text-white p-2 rounded-full transition-all duration-300 backdrop-blur-xs focus:outline-none hidden sm:flex items-center justify-center opacity-0 hover:opacity-100 group-hover:opacity-100"
        style={{ opacity: banners.length > 1 ? undefined : 0 }}
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide Indicators / Dots */}
      {banners.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentIndex ? "bg-brand-primary w-6 scale-110" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default HeroSection;
