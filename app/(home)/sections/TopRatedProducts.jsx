"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
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

function TopRatedProducts() {
  const products = [
    {
      id: 1,
      name: "Dubai Premium Pistachio Kunafa Chocolate Bar",
      price: 850,
      oldPrice: 1200,
      image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      brand: "Fix Chocolatier",
      badge: "5.0 Rating",
    },
    {
      id: 2,
      name: "BLK FOODS 100% Natural Australian Almond Kernels",
      price: 1132,
      oldPrice: 2250,
      image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d4f?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      brand: "BLK Foods",
    },
    {
      id: 3,
      name: "Aduka Homemade Traditional Thengolal Murukku",
      price: 150,
      oldPrice: 180,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      brand: "Aduka",
    },
    {
      id: 4,
      name: "Premium Quality Safawi Dates (500g Pack)",
      price: 450,
      oldPrice: 600,
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      brand: "Pravasi Delight",
      badge: "Fresh",
    },
    {
      id: 5,
      name: "Organic Cold Pressed Virgin Coconut Oil (1L)",
      price: 299,
      oldPrice: 380,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80",
      rating: 4.9,
      brand: "Malabar Gold",
    },
    // Row 2
    {
      id: 6,
      name: "Lotus Biscoff Caramelised Biscuit Spread (400g)",
      price: 380,
      oldPrice: 450,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
      rating: 4.9,
      brand: "Lotus",
    },
    {
      id: 7,
      name: "Nido Instant Full Cream Milk Powder Tin (2.5kg)",
      price: 1850,
      oldPrice: 2200,
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&auto=format&fit=crop&q=80",
      rating: 5,
      brand: "Nestle",
    },
    {
      id: 8,
      name: "Garnier Fructis Papaya Hair Food Multi-Use Mask",
      price: 257,
      oldPrice: 350,
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&auto=format&fit=crop&q=80",
      rating: 4.8,
      brand: "Garnier",
    },
    {
      id: 9,
      name: "Galaxy Smooth Milk Chocolate Bundle (Pack of 3)",
      price: 350,
      oldPrice: 420,
      image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=400&auto=format&fit=crop&q=80",
      rating: 4.8,
      brand: "Galaxy",
    },
    {
      id: 10,
      name: "Tang Orange Instant Drink Powder Tub (2.5kg)",
      price: 990,
      oldPrice: 1350,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80",
      rating: 4.9,
      brand: "Tang",
    },
  ];

  return (
    <section className={cn('py-20', 'bg-white', 'border-t', 'border-brand-charcoal/5')}>
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>

        {/* Section Header */}
        <div className={cn('text-center', 'max-w-xl', 'mx-auto', 'mb-16', 'space-y-3')}>

          <h2 className={cn('text-3xl', 'sm:text-5xl', 'font-semibold', 'text-brand-charcoal')}>
            Top Rated <span className="text-brand-primary">Products</span>
          </h2>
          <div className={cn('w-16', 'h-1', 'bg-brand-gold', 'mx-auto', 'rounded-full', 'mt-2')} />
        </div>

        {/* 5-Column Grid */}
        <div className={cn('grid', 'grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-5', 'gap-6')}>
          {products.map((product) => (
            <div
              key={product.id}
              className={cn('bg-white', 'border-2', 'border-brand-gold/20', 'hover:border-brand-gold', 'rounded-3xl', 'p-2', 'shadow-sm', 'hover:shadow-xl', 'hover:shadow-brand-gold/5', 'transition-all', 'duration-300', 'flex', 'flex-col', 'justify-between', 'group')}
            >
              <div>
                {/* Image */}
                <div className={cn('relative', 'aspect-square', 'w-full', 'rounded-2xl', 'bg-brand-cream', 'overflow-hidden', 'mb-4', 'border', 'border-brand-charcoal/5')}>
                  <SafeImage
                    src={product.image}
                    alt={product.name}Z
                    fill
                    className={cn('object-cover', 'group-hover:scale-105', 'transition-transform', 'duration-500')}
                    sizes="(max-w-sm) 100vw, 200px"
                  />
                  {product.badge && (
                    <span className={cn('absolute', 'top-2.5', 'left-2.5', 'bg-brand-gold', 'text-brand-charcoal', 'text-[9px]', 'font-extrabold', 'px-2', 'py-0.5', 'rounded-md', 'uppercase', 'tracking-wider', 'shadow')}>
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Rating & Brand */}
                <div className={cn('flex', 'items-center', 'justify-between', 'mb-1.5')}>
                  <span className={cn('text-[9px]', 'font-bold', 'text-brand-charcoal/40', 'uppercase', 'tracking-widest', 'leading-none')}>
                    {product.brand}
                  </span>
                  <div className={cn('flex', 'items-center', 'gap-0.5', 'text-brand-gold')}>
                    <Star className={cn('w-3.5', 'h-3.5', 'fill-current')} />
                    <span className={cn('text-xs', 'font-bold', 'text-brand-charcoal/70', 'leading-none')}>{product.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'line-clamp-2', 'leading-snug', 'min-h-[40px]', 'group-hover:text-brand-primary', 'transition-colors', 'mb-3')}>
                  {product.name}
                </h3>
              </div>

              {/* Price & Add to Cart button */}
              <div className={cn('border-t', 'border-brand-charcoal/5', 'pt-3', 'mt-2')}>
                <div className={cn('flex', 'items-baseline', 'gap-1.5', 'mb-3')}>
                  <span className={cn('text-lg', 'font-black', 'text-brand-charcoal')}>₹{product.price}</span>
                  <span className={cn('text-xs', 'text-brand-charcoal/40', 'line-through', 'font-semibold')}>
                    ₹{product.oldPrice}
                  </span>
                </div>

                <button
                  className={cn('w-full', 'flex', 'items-center', 'justify-center', 'gap-1.5', 'py-2.5', 'bg-brand-primary', 'hover:bg-brand-primary-dark', 'text-white', 'font-bold', 'rounded-xl', 'text-xs', 'transition-all', 'duration-300', 'shadow-md', 'shadow-brand-primary/10')}
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingCart className={cn('w-3.5', 'h-3.5')} />
                  <span>ADD TO CART</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TopRatedProducts;
