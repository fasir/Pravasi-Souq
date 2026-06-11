"use client";

import React, { useRef } from "react";
import ProductCard from "@/components/Shared/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function TrendingProducts() {
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

  const products = [
    {
      id: 1,
      name: "Premium Medjool Dates (500g)",
      price: 450,
      oldPrice: 600,
      image: "https://images.unsplash.com/photo-1628134711291-b997fd4e16d4?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "Royal Dates",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Assorted Premium Mixed Nuts (250g)",
      price: 350,
      oldPrice: 450,
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Nutraj",
      badge: "10% OFF",
    },
    {
      id: 3,
      name: "Artisanal Dark Chocolate Truffles",
      price: 299,
      oldPrice: 399,
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "Cadbury",
      badge: "Sweet Deal",
    },
    {
      id: 4,
      name: "Organic Dried Apricots & Raisins",
      price: 240,
      oldPrice: 300,
      image: "https://images.unsplash.com/photo-1606757389105-6482102fe83b?w=400&auto=format&fit=crop&q=80",
      rating: "4.7",
      brand: "Nutraj",
      badge: "Organic",
    },
    {
      id: 5,
      name: "Natural Aloe Vera Skincare Gel",
      price: 180,
      oldPrice: 250,
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&auto=format&fit=crop&q=80",
      rating: "4.6",
      brand: "Himalaya",
      badge: "Popular",
    },
    {
      id: 6,
      name: "Luxury French Lavender Eau de Parfum",
      price: 1200,
      oldPrice: 1500,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Chanel",
      badge: "Premium",
    },
    {
      id: 7,
      name: "Educational Wooden Stacking Blocks",
      price: 499,
      oldPrice: 650,
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&auto=format&fit=crop&q=80",
      rating: "4.7",
      brand: "LEGO",
      badge: "Kids Choice",
    },
    {
      id: 8,
      name: "Noise Cancelling Wireless Headphones",
      price: 2499,
      oldPrice: 3999,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "Sony",
      badge: "Hot Deal",
    },
    {
      id: 9,
      name: "Classic Minimalist Leather Watch",
      price: 1899,
      oldPrice: 2999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Fossil",
      badge: "New",
    },
  ];

  return (
    <section id="products" className={cn('py-16', 'bg-white')}>
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        {/* Section Header */}
        <div className={cn('flex', 'items-center', 'justify-between', 'mb-6')}>
          <div>
            <h2 className={cn('text-2xl', 'font-semibold', 'text-brand-charcoal')}>Trending Products</h2>
          </div>

          <div className={cn('flex', 'items-center', 'gap-6')}>
            <a
              href="#products"
              className={cn('text-sm', 'font-bold', 'text-brand-primary', 'hover:text-brand-primary-dark', 'hover:underline', 'underline-offset-4')}
            >
              VIEW ALL
            </a>
            <div className={cn('flex', 'items-center', 'gap-2')}>
              <button
                onClick={() => scroll("left")}
                className={cn('w-10', 'h-10', 'rounded-full', 'border', 'border-brand-charcoal/10', 'flex', 'items-center', 'justify-center', 'text-brand-charcoal', 'hover:bg-brand-cream', 'hover:border-brand-gold/30', 'transition-all')}
                aria-label="Previous page"
              >
                <ChevronLeft className={cn('w-5', 'h-5')} />
              </button>
              <button
                onClick={() => scroll("right")}
                className={cn('w-10', 'h-10', 'rounded-full', 'border', 'border-brand-charcoal/10', 'flex', 'items-center', 'justify-center', 'text-brand-charcoal', 'hover:bg-brand-cream', 'hover:border-brand-gold/30', 'transition-all')}
                aria-label="Next page"
              >
                <ChevronRight className={cn('w-5', 'h-5')} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          ref={scrollContainerRef}
          className={cn(
            'flex',
            'gap-4',
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
          {products.map((product) => (
            <div
              key={product.id}
              className={cn(
                'w-[calc((100%-16px)/2)]',
                'sm:w-[calc((100%-32px)/3)]',
                'md:w-[calc((100%-48px)/4)]',
                'lg:w-[calc((100%-80px)/6)]',
                'flex-shrink-0',
                'snap-start'
              )}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingProducts;
