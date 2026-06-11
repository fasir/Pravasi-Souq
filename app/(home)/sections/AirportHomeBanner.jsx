import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

function AirportHomeBanner() {
  return (
    <section className={cn('py-12', 'md:py-16', 'bg-[#db9911]', 'text-white', 'relative', 'overflow-hidden', 'my-6', 'select-none')}>
      {/* Decorative background shapes */}
      <div className={cn('absolute', 'top-0', 'right-0', 'w-80', 'h-80', 'bg-white/5', 'rounded-full', 'blur-3xl', 'pointer-events-none')} />
      <div className={cn('absolute', 'bottom-0', 'left-0', 'w-80', 'h-80', 'bg-black/5', 'rounded-full', 'blur-3xl', 'pointer-events-none')} />

      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'relative', 'z-10')}>
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-10', 'items-center')}>

          {/* Text Content Left */}
          <div className={cn('lg:col-span-6', 'space-y-6', 'text-center', 'lg:text-left', 'flex', 'flex-col', 'items-center', 'lg:items-start')}>
            <h2 className={cn('text-3xl', 'sm:text-4xl', 'lg:text-5xl', 'font-black', 'tracking-tight', 'leading-tight', 'text-white', 'uppercase')}>
              AIRPORT OR HOME.<br />
              <span>YOUR CHOICE.</span>
            </h2>

            <p className={cn('text-sm', 'sm:text-base', 'text-white/95', 'leading-relaxed', 'font-semibold', 'max-w-xl')}>
              Get your order delivered where it suits you best — no hassle, no delays.
            </p>

            <div className="pt-2">
              <Link
                href="/products"
                className={cn('inline-flex', 'items-center', 'justify-center', 'px-8', 'py-3.5', 'bg-white', 'hover:bg-brand-cream', 'text-[#7A062F]', 'font-black', 'rounded-full', 'shadow-md', 'hover:shadow-lg', 'transition-all', 'duration-300', 'text-sm', 'tracking-wider', 'uppercase')}
              >
                SHOP NOW
              </Link>
            </div>

            {/* Separator Line */}
            <div className={cn('w-full', 'max-w-md', 'h-[1px]', 'bg-white/20', 'my-4')} />

            {/* Malayalam Translation copy */}
            <p className={cn('text-sm', 'sm:text-base', 'font-bold', 'text-white/90', 'leading-relaxed')}>
              വിദേശ ഷോപ്പിംഗ് ഇനി ഒരു ക്ലിക്ക് മാത്രം
            </p>
          </div>

          {/* Suitcase Illustration Right */}
          <div className={cn('lg:col-span-6', 'flex', 'justify-center', 'lg:justify-end', 'w-full')}>
            <div className={cn('relative', 'w-full', 'max-w-[500px]', 'aspect-[550/394]', 'hover:scale-[1.02]', 'transition-transform', 'duration-500')}>
              <Image
                src="/product-box.png"
                alt="Suitcase packed with imported chocolates, perfumes, and drinks"
                fill
                className="object-contain"
                sizes="(max-w-sm) 100vw, 500px"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AirportHomeBanner;
