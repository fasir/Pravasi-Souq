import React from "react";
import ProductCard from "@/components/Shared/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function ImportedProducts() {
  const products = [
    // Row 1
    {
      id: 1,
      name: "Dubai Premium Pistachio Kunafa Chocolate Bar",
      price: 850,
      oldPrice: 1200,
      image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=400&auto=format&fit=crop&q=80",
      rating: "5.0",
      brand: "Fix Chocolatier",
      badge: "Viral Trend",
    },
    {
      id: 2,
      name: "Tang Orange Instant Drink Powder Tub (2.5kg)",
      price: 990,
      oldPrice: 1350,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Tang",
      badge: "Popular",
    },
    {
      id: 3,
      name: "Nutella Chocolate Hazelnut Spread Glass Jar (1kg)",
      price: 650,
      oldPrice: 750,
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "Ferrero",
    },
    {
      id: 4,
      name: "Kraft Cheddar Cheese Spread Squeezable (Pack of 2)",
      price: 499,
      oldPrice: 620,
      image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d4f?w=400&auto=format&fit=crop&q=80",
      rating: "4.7",
      brand: "Kraft",
    },
    {
      id: 5,
      name: "Nido Instant Full Cream Milk Powder Tin (2.5kg)",
      price: 1850,
      oldPrice: 2200,
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "Nestle",
      badge: "Imported",
    },
    {
      id: 6,
      name: "Lotus Biscoff Caramelised Biscuit Spread (400g)",
      price: 380,
      oldPrice: 450,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Lotus",
    },
    // Row 2
    {
      id: 7,
      name: "Dubai Premium Pistachio Kunafa Chocolate Bar",
      price: 850,
      oldPrice: 1200,
      image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=400&auto=format&fit=crop&q=80",
      rating: "5.0",
      brand: "Fix Chocolatier",
      badge: "Viral Trend",
    },
    {
      id: 8,
      name: "Tang Orange Instant Drink Powder Tub (2.5kg)",
      price: 990,
      oldPrice: 1350,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Tang",
      badge: "Popular",
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
      badge: "Imported",
    },
    {
      id: 12,
      name: "Lotus Biscoff Caramelised Biscuit Spread (400g)",
      price: 380,
      oldPrice: 450,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Lotus",
    },
    // Row 3
    {
      id: 13,
      name: "Dubai Premium Pistachio Kunafa Chocolate Bar",
      price: 850,
      oldPrice: 1200,
      image: "https://images.unsplash.com/photo-1549007994-cb92ca813bec?w=400&auto=format&fit=crop&q=80",
      rating: "5.0",
      brand: "Fix Chocolatier",
      badge: "Viral Trend",
    },
    {
      id: 14,
      name: "Tang Orange Instant Drink Powder Tub (2.5kg)",
      price: 990,
      oldPrice: 1350,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Tang",
      badge: "Popular",
    },
    {
      id: 15,
      name: "Nutella Chocolate Hazelnut Spread Glass Jar (1kg)",
      price: 650,
      oldPrice: 750,
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "Ferrero",
    },
    {
      id: 16,
      name: "Kraft Cheddar Cheese Spread Squeezable (Pack of 2)",
      price: 499,
      oldPrice: 620,
      image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d4f?w=400&auto=format&fit=crop&q=80",
      rating: "4.7",
      brand: "Kraft",
    },
    {
      id: 17,
      name: "Nido Instant Full Cream Milk Powder Tin (2.5kg)",
      price: 1850,
      oldPrice: 2200,
      image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&auto=format&fit=crop&q=80",
      rating: "4.9",
      brand: "Nestle",
      badge: "Imported",
    },
    {
      id: 18,
      name: "Lotus Biscoff Caramelised Biscuit Spread (400g)",
      price: 380,
      oldPrice: 450,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80",
      rating: "4.8",
      brand: "Lotus",
    },
  ];

  return (
    <section className={cn('py-16', 'bg-[#faf8f5]/30', 'border-t', 'border-brand-charcoal/5')}>
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        {/* Section Header */}
        <div className={cn('flex', 'items-center', 'justify-between', 'mb-10')}>
          <div>

            <h2 className={cn('text-2xl', 'font-semibold', 'text-brand-charcoal')}>Imported Specialties</h2>
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
                aria-label="Previous imported products"
              >
                <ChevronLeft className={cn('w-5', 'h-5')} />
              </button>
              <button
                className={cn('w-10', 'h-10', 'rounded-full', 'border', 'border-brand-charcoal/10', 'flex', 'items-center', 'justify-center', 'text-brand-charcoal', 'hover:bg-brand-cream', 'hover:border-brand-gold/30', 'transition-all')}
                aria-label="Next imported products"
              >
                <ChevronRight className={cn('w-5', 'h-5')} />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid (6 columns, 3 rows) */}
        <div className={cn('grid', 'grid-cols-2', 'sm:grid-cols-3', 'lg:grid-cols-6', 'gap-6')}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImportedProducts;
