import React from "react";
import ProductCard from "@/components/Shared/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function BestSellers() {
  const products = [
    {
      id: 1,
      name: "Dubai Premium Pistachio Kunafa Chocolate Bar",
      price: 850,
      oldPrice: 1200,
      image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=400&auto=format&fit=crop&q=80",
      rating: "5.0",
      brand: "Fix Chocolatier",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "BLK FOODS 100% Natural Australian Almond Kernels",
      price: 1132,
      oldPrice: 2250,
      image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d4f?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "BLK Foods",
    },
    {
      id: 3,
      name: "Aduka Homemade Traditional Thengolal Murukku",
      price: 150,
      oldPrice: 180,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Aduka",
      badge: "Fresh",
    },
    {
      id: 4,
      name: "Organic Cold Pressed Virgin Coconut Oil (1L)",
      price: 299,
      oldPrice: 380,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Malabar Gold",
    },
    {
      id: 5,
      name: "Premium Quality Safawi Dates (500g Pack)",
      price: 450,
      oldPrice: 600,
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "Pravasi Delight",
    },
    {
      id: 6,
      name: "Garnier Fructis Papaya Hair Food Multi-Use Mask",
      price: 257,
      oldPrice: 350,
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&auto=format&fit=crop&q=80",
      rating: "4.7",
      brand: "Garnier",
    },
    // Row 2
    {
      id: 7,
      name: "Lotus Biscoff Caramelised Biscuit Spread (400g)",
      price: 380,
      oldPrice: 450,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Lotus",
    },
    {
      id: 8,
      name: "Galaxy Smooth Milk Chocolate Bundle (Pack of 3)",
      price: 350,
      oldPrice: 420,
      image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=400&auto=format&fit=crop&q=80",
      rating: "4.6",
      brand: "Galaxy",
    },
    {
      id: 9,
      name: "Nutella Chocolate Hazelnut Spread Glass Jar (1kg)",
      price: 650,
      oldPrice: 750,
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "Ferrero",
    },
    {
      id: 10,
      name: "Kraft Cheddar Cheese Spread Squeezable (Pack of 2)",
      price: 499,
      oldPrice: 620,
      image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d4f?w=400&auto=format&fit=crop&q=80",
      rating: "4.7",
      brand: "Kraft",
    },
    {
      id: 11,
      name: "Nido Instant Full Cream Milk Powder Tin (2.5kg)",
      price: 1850,
      oldPrice: 2200,
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "Nestle",
      badge: "Popular",
    },
    {
      id: 12,
      name: "Tang Orange Instant Drink Powder Tub (2.5kg)",
      price: 990,
      oldPrice: 1350,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Tang",
    },
    // Row 3
    {
      id: 13,
      name: "Ferrero Rocher Premium Chocolates Box of 24",
      price: 899,
      oldPrice: 1200,
      image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=400&auto=format&fit=crop&q=80",
      rating: "5.0",
      brand: "Ferrero",
      badge: "Luxury",
    },
    {
      id: 14,
      name: "Sunfeast Dark Fantasy Choco Fills Cookies",
      price: 120,
      oldPrice: 150,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
      rating: "4.5",
      brand: "Dark Fantasy",
    },
    {
      id: 15,
      name: "Aduka Homemade Spicy Khara Boondi (250g)",
      price: 80,
      oldPrice: 100,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80",
      rating: "4.7",
      brand: "Aduka",
    },
    {
      id: 16,
      name: "Bounty Minis Chocolate Bag (500g)",
      price: 450,
      oldPrice: 550,
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Bounty",
    },
    {
      id: 17,
      name: "Lipton Yellow Label Black Tea Loose Leaves (1kg)",
      price: 320,
      oldPrice: 400,
      image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d4f?w=400&auto=format&fit=crop&q=80",
      rating: "4.6",
      brand: "Lipton",
    },
    {
      id: 18,
      name: "Heinz Tomato Ketchup Squeeze Bottle (1kg)",
      price: 180,
      oldPrice: 220,
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Heinz",
    },
  ];

  return (
    <section className={cn('py-16', 'bg-white')}>
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        {/* Section Header */}
        <div className={cn('flex', 'items-center', 'justify-between', 'mb-10')}>
          <div>

            <h2 className={cn('text-3xl', 'font-semibold', 'text-brand-charcoal')}>Best Sellers</h2>
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
                className={cn('w-10', 'h-10', 'rounded-full', 'border', 'border-brand-charcoal/10', 'flex', 'items-center', 'justify-center', 'text-brand-charcoal', 'hover:bg-brand-cream', 'hover:border-brand-gold/30', 'transition-all')}
                aria-label="Previous best sellers"
              >
                <ChevronLeft className={cn('w-5', 'h-5')} />
              </button>
              <button
                className={cn('w-10', 'h-10', 'rounded-full', 'border', 'border-brand-charcoal/10', 'flex', 'items-center', 'justify-center', 'text-brand-charcoal', 'hover:bg-brand-cream', 'hover:border-brand-gold/30', 'transition-all')}
                aria-label="Next best sellers"
              >
                <ChevronRight className={cn('w-5', 'h-5')} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={cn('grid', 'grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-6', 'gap-6')}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
