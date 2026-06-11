import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

function BudgetBoxBanner() {
  return (
    <section className={cn('py-20', 'bg-brand-cream/30', 'border-y', 'border-brand-charcoal/5', 'overflow-hidden')}>
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'items-center', 'text-center')}>

          {/* Left Suitcase */}
          <div className={cn('lg:col-span-3', 'flex', 'justify-center', 'order-2', 'lg:order-1')}>
            <div className={cn('relative', 'w-56', 'h-56', 'rotate-[-6deg]', 'hover:rotate-0', 'transition-transform', 'duration-500', 'hover:scale-105')}>
              <div className={cn('absolute', 'inset-0', 'bg-brand-gold/10', 'rounded-full', 'blur-xl', 'pointer-events-none')} />
              <Image
                src="/budget_box.png"
                alt="BudgetBox snacks luggage bundle left"
                fill
                className={cn('object-contain', 'drop-shadow-xl')}
                sizes="250px"
              />
            </div>
          </div>

          {/* Middle Copy Writing */}
          <div className={cn('lg:col-span-6', 'space-y-6', 'order-1', 'lg:order-2', 'px-4')}>
            <span className={cn('text-xs', 'font-semibold', 'tracking-widest', 'text-brand-gold', 'uppercase', 'block')}>
              Introducing
            </span>
            <h2 className={cn('text-4xl', 'sm:text-5xl', 'font-bold', 'text-brand-charcoal', 'tracking-tight', 'leading-none')}>
              BudgetBox AI
            </h2>
            <div className={cn('w-16', 'h-1', 'bg-brand-gold', 'mx-auto', 'rounded-full')} />
            <p className={cn('text-sm', 'sm:text-base', 'text-brand-charcoal/70', 'leading-relaxed', 'font-semibold', 'max-w-md', 'mx-auto')}>
              Set your budget and let AI build the best product bundle for you. Optimized for value, taste, and trending picks.
            </p>
            <div className="pt-2">
              <Link
                href="#products"
                className={cn('inline-flex', 'items-center', 'gap-2', 'px-8', 'py-4', 'bg-brand-primary', 'hover:bg-brand-primary-light', 'text-white', 'font-bold', 'rounded-2xl', 'shadow-lg', 'shadow-brand-primary/20', 'hover:-translate-y-0.5', 'transition-all', 'duration-300')}
              >
                <span>Build My Box</span>
                <ArrowUpRight className={cn('w-4', 'h-4')} />
              </Link>
            </div>
          </div>

          {/* Right Suitcase */}
          <div className={cn('lg:col-span-3', 'flex', 'justify-center', 'order-3')}>
            <div className={cn('relative', 'w-56', 'h-56', 'rotate-[6deg]', 'hover:rotate-0', 'transition-transform', 'duration-500', 'hover:scale-105')}>
              <div className={cn('absolute', 'inset-0', 'bg-brand-primary/5', 'rounded-full', 'blur-xl', 'pointer-events-none')} />
              <Image
                src="/budget_box.png"
                alt="BudgetBox snacks luggage bundle right"
                fill
                className={cn('object-contain', 'drop-shadow-xl')}
                sizes="250px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BudgetBoxBanner;
