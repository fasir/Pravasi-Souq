"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function Categories() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const scrollTo = direction === "left" 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  const categories = [
    {
      name: "Dates & Nuts",
      image: "/categories/1.png",
      gradient: "from-[#ff7b7b] to-[#ff4747]",
      isCropped: false,
    },
    {
      name: "Kids & Toys",
      image: "/categories/2.png",
      gradient: "from-[#b080ff] to-[#7a3eff]",
      isCropped: false,
    },
    {
      name: "Drinks",
      image: "/categories/3.png",
      gradient: "from-[#43a047] to-[#2e7d32]",
      isCropped: false,
    },
    {
      name: "Health & Hygiene",
      image: "/categories/4.png",
      gradient: "from-[#8d6e63] to-[#5d4037]",
      isCropped: false,
    },
    {
      name: "Foreign Chocolates",
      image: "/categories/6.png",
      gradient: "from-[#00b0ff] to-[#0091ea]",
      isCropped: false,
    },
    {
      name: "Detergents",
      image: "/categories/5.png",
      gradient: "", // Background is baked-in
      isCropped: true,
    },
    {
      name: "Sweets",
      image: "/categories/7.png",
      gradient: "", // Background is baked-in
      isCropped: true,
    },
  ];

  return (
    <section className={cn('py-16', 'bg-white', 'border-t', 'border-brand-charcoal/5')}>
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        {/* Section Header */}
        <div className={cn('flex', 'items-center', 'justify-between', 'mb-12')}>
          <div>
            <h2 className={cn('text-2xl', 'font-semibold', 'text-brand-charcoal')}>Shop by Categories</h2>
          </div>

          <div className={cn('flex', 'items-center', 'gap-6')}>
            <a
              href="#categories"
              className={cn('text-sm', 'font-bold', 'text-brand-primary', 'hover:text-brand-primary-dark', 'hover:underline', 'underline-offset-4')}
            >
              VIEW ALL
            </a>
            <div className={cn('flex', 'items-center', 'gap-2')}>
              <button
                onClick={() => scroll("left")}
                className={cn('w-10', 'h-10', 'rounded-full', 'border', 'border-brand-charcoal/10', 'flex', 'items-center', 'justify-center', 'text-brand-charcoal', 'hover:bg-brand-cream', 'hover:border-brand-gold/30', 'transition-all')}
                aria-label="Previous categories"
              >
                <ChevronLeft className={cn('w-5', 'h-5')} />
              </button>
              <button
                onClick={() => scroll("right")}
                className={cn('w-10', 'h-10', 'rounded-full', 'border', 'border-brand-charcoal/10', 'flex', 'items-center', 'justify-center', 'text-brand-charcoal', 'hover:bg-brand-cream', 'hover:border-brand-gold/30', 'transition-all')}
                aria-label="Next categories"
              >
                <ChevronRight className={cn('w-5', 'h-5')} />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Carousel */}
        <div 
          ref={scrollContainerRef}
          className={cn(
            'flex', 
            'gap-6', 
            'overflow-x-auto', 
            'snap-x', 
            'snap-mandatory', 
            'scroll-smooth', 
            'pb-4',
            '[-ms-overflow-style:none]',
            '[scrollbar-width:none]',
            '[&::-webkit-scrollbar]:hidden'
          )}
        >
          {categories.map((category, idx) => (
            <div 
              key={idx} 
              className={cn(
                'w-[calc((100%-48px)/3)]', 
                'sm:w-[calc((100%-72px)/4)]', 
                'md:w-[calc((100%-144px)/7)]', 
                'flex-shrink-0', 
                'snap-start',
                'flex', 
                'flex-col', 
                'items-center', 
                'gap-3', 
                'group', 
                'cursor-pointer', 
                'text-center'
              )}
            >
              <div
                className={cn(
                  'w-full', 
                  'aspect-square', 
                  'rounded-full', 
                  'overflow-hidden', 
                  'shadow-md', 
                  'hover:shadow-xl', 
                  'group-hover:scale-105', 
                  'border', 
                  'border-brand-charcoal/5', 
                  'relative', 
                  'transition-all', 
                  'duration-300',
                  category.isCropped ? 'bg-transparent' : `bg-gradient-to-br ${category.gradient}`
                )}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className={cn(
                    category.isCropped ? 'object-cover' : 'object-contain p-4 sm:p-5', 
                    'group-hover:scale-110', 
                    'transition-transform', 
                    'duration-500'
                  )}
                  sizes="(max-w-sm) 150px, 200px"
                />
              </div>
              <span className={cn('text-xs', 'sm:text-sm', 'font-bold', 'text-brand-charcoal', 'group-hover:text-brand-primary', 'transition-colors')}>
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
