"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const SafeImage = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src || "/budget_box.png");
  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc("/budget_box.png")}
    />
  );
};

function ValueBundles() {
  const bundles = [
    {
      id: 1,
      name: "Combo Mix of Beauty Products",
      itemsCount: "+33 Items",
      price: 257,
      rating: 5,
      subProducts: [
        { name: "Garnier fructis", image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=200&auto=format&fit=crop&q=80" },
        { name: "Garnier fructis", image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=200&auto=format&fit=crop&q=80" },
        { name: "Garnier fructis", image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=200&auto=format&fit=crop&q=80" },
      ],
    },
    {
      id: 2,
      name: "Combo Mix of Beauty Products",
      itemsCount: "+33 Items",
      price: 257,
      rating: 5,
      subProducts: [
        { name: "Garnier fructis", image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=200&auto=format&fit=crop&q=80" },
        { name: "Garnier fructis", image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=200&auto=format&fit=crop&q=80" },
        { name: "Garnier fructis", image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=200&auto=format&fit=crop&q=80" },
      ],
    },
    {
      id: 3,
      name: "Combo Mix of Beauty Products",
      itemsCount: "+33 Items",
      price: 257,
      rating: 5,
      subProducts: [
        { name: "Garnier fructis", image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=200&auto=format&fit=crop&q=80" },
        { name: "Garnier fructis", image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=200&auto=format&fit=crop&q=80" },
        { name: "Garnier fructis", image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=200&auto=format&fit=crop&q=80" },
      ],
    },
  ];

  return (
    <section id="combo-deals" className={cn('py-20', 'bg-white', 'border-t', 'border-brand-charcoal/5')}>
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        <div className={cn('text-start', 'mb-12', 'space-y-3')}>
          <h2 className={cn('text-2xl', 'sm:text-2xl', 'font-semibold', 'text-brand-charcoal')}>
            Imported <span className="text-brand-primary">Value Bundles</span>
          </h2>
          <p className={cn('text-brand-charcoal/50', 'text-sm', 'font-medium')}>
            Discover our handpicked bundles designed to save you money while enjoying premium quality products.
          </p>
        </div>

        {/* 3 columns layout matching the screenshot */}
        <div className={cn('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-8')}>
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className={cn(
                'bg-white',
                'border',
                'border-brand-charcoal/10',
                'rounded-[20px]',
                'overflow-hidden',
                'shadow-sm',
                'hover:shadow-lg',
                'transition-all',
                'duration-300',
                'flex',
                'flex-col',
                'justify-between',
                'group'
              )}
            >
              {/* Dark Purple Header Band */}
              <div className="bg-[#483d66] text-white px-5 py-3.5 flex items-center justify-between">
                <h3 className="text-[15px] font-bold tracking-wide">
                  {bundle.name}
                </h3>
                <span className="text-xs font-semibold opacity-90">
                  {bundle.itemsCount}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                {/* 3 Sub-products Row */}
                <div className="grid grid-cols-3 gap-4 mb-4 mt-2">
                  {bundle.subProducts.map((sub, sIdx) => (
                    <div key={sIdx} className="flex flex-col items-center">
                      <div className="relative aspect-square w-full bg-[#f9f9fb] rounded-xl overflow-hidden mb-2 border border-brand-charcoal/5 flex items-center justify-center">
                        <SafeImage
                          src={sub.image}
                          alt={sub.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-w-xs) 33vw, 80px"
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-brand-charcoal/90 text-center leading-snug">
                        {sub.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider Line */}
                <hr className="border-t border-brand-charcoal/15 my-2" />

                {/* Actions & Rating Row */}
                <div className="flex items-center justify-between py-2 mb-2">
                  {/* Price Section */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-base font-extrabold text-brand-charcoal">₹{bundle.price}</span>
                    <span className="bg-[#ffc600] text-brand-charcoal text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider leading-none">
                      {(bundle.price / 32.6).toFixed(2)} SAR
                    </span>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex items-center gap-0.5 text-brand-gold shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'w-3.5',
                          'h-3.5',
                          i < Math.floor(bundle.rating) ? 'fill-current' : 'text-brand-charcoal/10'
                        )}
                      />
                    ))}
                  </div>

                  {/* ALL PRODUCTS Link */}
                  <a
                    href="#combo-deals"
                    className="text-[10px] font-black text-[#483d66] hover:underline whitespace-nowrap uppercase tracking-wider"
                  >
                    ALL PRODUCTS
                  </a>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#780c2e] hover:bg-[#5e0924] text-white font-bold rounded-[8px] text-xs sm:text-sm transition-all duration-300 shadow-md shadow-brand-primary/10 mt-2"
                  aria-label={`Add ${bundle.name} bundle to cart`}
                >
                  <span>+ ADD TO CART</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueBundles;
