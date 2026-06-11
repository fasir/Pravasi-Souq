"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";

function Testimonials() {
  const [activeTab, setActiveTab] = useState("ALL");
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

  const tabs = ["ALL", "WRITINGS", "AUDIO", "VIDEOS"];

  const reviews = [
    {
      id: 1,
      name: "Siddharth Menon",
      role: "Texal Logix, New Jersey, United States",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
      type: "audio",
      duration: "2:00",
    },
    {
      id: 2,
      name: "Siddharth Menon",
      role: "Texal Logix, New Jersey, United States",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
      type: "writing",
      title: "Exceptional Chocolates!",
      comment: "Incredible selection of Middle Eastern chocolates rich, creamy, and authentic. The packaging ensures perfect delivery. I came with just a cabin baggage all over from Jersey! All the items delivered was in top quality, especially perfumes",
    },
    {
      id: 3,
      name: "Neena Thomas",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Siddharth Menon",
      role: "Texal Logix, New Jersey, United States",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
      type: "audio",
      duration: "2:00",
    },
    {
      id: 5,
      name: "Neena Thomas",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Siddharth Menon",
      role: "Texal Logix, New Jersey, United States",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
      type: "writing",
      title: "Exceptional Chocolates!",
      comment: "Incredible selection of Middle Eastern chocolates rich, creamy, and authentic. The packaging ensures perfect delivery. I came with just a cabin baggage all over from Jersey! All the items delivered was in top quality, especially perfumes",
    },
  ];

  const filteredReviews = reviews.filter((review) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "WRITINGS") return review.type === "writing";
    if (activeTab === "AUDIO") return review.type === "audio";
    if (activeTab === "VIDEOS") return review.type === "video";
    return true;
  });

  return (
    <section className="py-20 bg-white border-t border-brand-charcoal/5 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-charcoal">Testimonials</h2>

          {/* Navigation & Controls */}
          <div className="flex flex-wrap items-center justify-between md:justify-end gap-6 flex-grow">
            {/* Tabs */}
            <div className="flex items-center gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'text-[13px]',
                    'font-bold',
                    'tracking-wider',
                    'transition-all',
                    'pb-1',
                    'border-b-2',
                    activeTab === tab 
                      ? 'text-brand-charcoal border-brand-primary' 
                      : 'text-brand-charcoal/40 border-transparent hover:text-brand-charcoal/70'
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* View All & Navigation buttons */}
            <div className="flex items-center gap-6">
              <a
                href="#testimonials"
                className="text-xs font-bold text-brand-primary hover:text-brand-primary-dark hover:underline underline-offset-4 tracking-wider uppercase"
              >
                VIEW ALL
              </a>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="w-10 h-10 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-charcoal hover:bg-brand-cream hover:border-brand-gold/30 transition-all"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-10 h-10 rounded-full border border-brand-charcoal/10 flex items-center justify-center text-brand-charcoal hover:bg-brand-cream hover:border-brand-gold/30 transition-all"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
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
          {filteredReviews.map((review) => {
            if (review.type === "audio") {
              return (
                <div 
                  key={review.id}
                  className="w-[230px] shrink-0 snap-start bg-[#f8f8f9] border border-brand-charcoal/5 rounded-[24px] p-6 h-[260px] flex flex-col items-center justify-between text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-sm mb-4">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                    <h3 className="font-bold text-brand-charcoal text-[14px] leading-tight">
                      {review.name}
                    </h3>
                    <p className="text-[10px] text-brand-charcoal/40 font-semibold leading-tight mt-1 px-2 line-clamp-1">
                      {review.role}
                    </p>
                  </div>

                  {/* Audio Player Controls */}
                  <div className="flex items-center gap-2.5 w-full bg-white py-2 px-3.5 rounded-full shadow-inner border border-brand-charcoal/5 mt-4">
                    <button className="text-brand-primary hover:scale-105 transition-transform" aria-label="Play testimonial">
                      <Play className="w-3 h-3 fill-current text-brand-primary" />
                    </button>
                    <div className="flex-grow h-[3px] bg-brand-charcoal/10 rounded-full relative">
                      <div className="absolute top-0 left-0 h-full w-[35%] bg-brand-primary rounded-full" />
                      <div className="absolute top-1/2 left-[35%] w-2 h-2 -translate-y-1/2 -translate-x-1/2 bg-brand-primary rounded-full shadow-sm" />
                    </div>
                    <span className="text-[9px] font-bold text-brand-charcoal/50 whitespace-nowrap leading-none">
                      {review.duration}
                    </span>
                  </div>
                </div>
              );
            }

            if (review.type === "writing") {
              return (
                <div 
                  key={review.id}
                  className="w-[480px] max-w-[90vw] shrink-0 snap-start bg-[#f8f8f9] border border-brand-charcoal/5 rounded-[24px] p-6 h-[260px] flex gap-6 items-start"
                >
                  <div className="w-24 shrink-0 flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-sm mb-3">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <h3 className="font-bold text-brand-charcoal text-[14px] leading-tight">
                      {review.name}
                    </h3>
                    <p className="text-[10px] text-brand-charcoal/40 font-semibold leading-tight mt-1">
                      {review.role}
                    </p>
                  </div>

                  <div className="flex-grow flex flex-col justify-start h-full">
                    <h4 className="text-[16px] font-extrabold text-brand-charcoal mb-2 leading-tight">
                      &ldquo;{review.title}&rdquo;
                    </h4>
                    <p className="text-xs text-brand-charcoal/70 leading-relaxed font-semibold line-clamp-6">
                      {review.comment}
                    </p>
                  </div>
                </div>
              );
            }

            if (review.type === "video") {
              return (
                <div 
                  key={review.id}
                  className="w-[230px] shrink-0 snap-start relative rounded-[24px] overflow-hidden h-[260px] group cursor-pointer"
                >
                  <Image
                    src={review.thumbnail}
                    alt={review.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="230px"
                  />
                  {/* Play Overlay */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                    <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                  </div>
                  {/* Bottom Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-4 px-4 text-center">
                    <span className="text-xs font-bold text-white tracking-wide">
                      {review.name}
                    </span>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-charcoal" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-charcoal/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-charcoal/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-brand-charcoal/20" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
