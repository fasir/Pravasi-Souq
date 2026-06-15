"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Star } from "lucide-react";
import { cn } from "@/lib/utils";

function ProductCard({ product }) {
  const [imgSrc, setImgSrc] = useState(product.image || "/budget_box.png");

  return (
    <div className={cn('bg-gray-50', 'border', 'border-brand-charcoal/5', 'rounded-2xl', 'p-2', 'shadow-sm', 'hover:shadow-lg', 'hover:border-brand-gold/20', 'transition-all', 'duration-300', 'flex', 'flex-col', 'justify-between', 'group', 'relative', 'overflow-hidden')}>
      <div>
        {/* Product Image */}
        <Link href={`/products/${product.id || 'grocery-harvest-mix-dry-fruits'}`} className="block">
          <div className={cn('relative', 'aspect-square', 'w-full', 'rounded-xl', 'bg-brand-cream', 'overflow-hidden', 'mb-4', 'border', 'border-brand-charcoal/5')}>
            <Image
              src={imgSrc}
              alt={product.name}
              fill
              className={cn('object-cover', 'group-hover:scale-105', 'transition-transform', 'duration-500')}
              sizes="(max-w-sm) 100vw, 200px"
              onError={() => setImgSrc("/budget_box.png")}
            />
            {product.badge && (
              <span className={cn('absolute', 'top-2.5', 'left-2.5', 'bg-brand-gold', 'text-brand-charcoal', 'text-[10px]', 'font-semibold', 'px-2', 'py-0.5', 'rounded-md', 'uppercase', 'tracking-wider', 'shadow-sm')}>
                {product.badge}
              </span>
            )}
          </div>
        </Link>

        {/* Brand & Stars */}
        <div className={cn('flex', 'items-center', 'justify-between', 'mb-1.5')}>
          <span className={cn('text-[10px]', 'font-bold', 'text-brand-charcoal/40', 'uppercase', 'tracking-widest')}>
            {product.brand || "Pravasi Souq"}
          </span>
          <div className={cn('flex', 'items-center', 'gap-0.5', 'text-brand-gold')}>
            <Star className={cn('w-3.5', 'h-3.5', 'fill-current')} />
            <span className={cn('text-xs', 'font-bold', 'text-brand-charcoal/75')}>{product.rating || "4.8"}</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/products/${product.id || 'grocery-harvest-mix-dry-fruits'}`} className="block">
          <h4 className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'line-clamp-2', 'mb-2', 'group-hover:text-brand-primary', 'transition-colors', 'min-h-[40px]')}>
            {product.name}
          </h4>
        </Link>
      </div>

      {/* Price & Action */}
      <div className={cn('flex', 'items-center', 'justify-between', 'mt-2', 'pt-3', 'border-t', 'border-brand-charcoal/5')}>
        <div>
          <span className={cn('text-xs', 'text-brand-charcoal/40', 'font-semibold', 'line-through', 'block', 'leading-none', 'mb-1')}>
            {product.oldPrice && `₹${product.oldPrice}`}
          </span>
          <span className={cn('text-base', 'font-extrabold', 'text-brand-charcoal', 'leading-none')}>
            ₹{product.price}
          </span>
        </div>

        <button
          className={cn('flex', 'items-center', 'gap-1', 'px-3.5', 'py-2', 'bg-brand-primary', 'hover:bg-brand-primary-dark', 'text-white', 'rounded-full', 'text-xs', 'font-bold', 'shadow-md', 'shadow-brand-primary/15', 'hover:shadow-brand-primary/25', 'hover:-translate-y-0.5', 'transition-all', 'duration-300')}
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className={cn('w-3.5', 'h-3.5')} />
          <span>ADD</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
