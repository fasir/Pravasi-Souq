import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function PromoBanner() {
  return (
    <section className="py-16 bg-brand-charcoal text-white relative overflow-hidden border-t border-white/5">
      {/* Decorative colored glow overlays */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-primary/15 rounded-full blur-3xl -translate-y-1/2 -ml-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-primary/15 rounded-full blur-3xl -translate-y-1/2 -mr-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 bg-brand-primary/10 border border-brand-primary/20 p-8 sm:p-12 rounded-3xl backdrop-blur-sm">
          {/* Text Left */}
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-brand-gold uppercase">
              Gulf & Kerala Products
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Experience the best, <br />
              <span className="text-brand-gold">delivered to you</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
              Discover premium chocolates, nuts, imported specialties, and authentic snacks. Sourced with care, delivered fresh to your doorstep.
            </p>
          </div>

          {/* Buttons Right */}
          <div className="flex flex-wrap items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="#products"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-primary-light text-white font-bold rounded-2xl shadow-lg shadow-brand-primary/25 transition-all duration-300 w-full sm:w-auto text-center"
            >
              <span>Shop Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/5 text-white border-2 border-white/20 hover:border-white font-bold rounded-2xl transition-all duration-300 w-full sm:w-auto text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;
