import React from "react";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";


// Inline SVG Apple App Store Badge
const AppStoreBadge = () => (
  <a
    href="#"
    className={cn('flex', 'items-center', 'gap-3', 'bg-brand-charcoal', 'hover:bg-brand-charcoal/90', 'text-white', 'border', 'border-white/10', 'px-5', 'py-3', 'rounded-2xl', 'transition-all', 'shadow-md', 'hover:shadow-lg', 'hover:-translate-y-0.5', 'shrink-0')}
  >
    <svg className={cn('w-6', 'sm:w-7', 'h-6', 'sm:h-7')} viewBox="0 0 170 170" fill="currentColor">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.92-14.37-6.13-3.48-2.8-7.34-7.46-11.59-13.99-11.82-18.25-17.74-36.26-17.74-54.04 0-14.88 4.01-27.1 12.04-36.65 8.02-9.56 17.6-14.34 28.74-14.34 5.3 0 11.28 1.6 17.96 4.79 6.67 3.19 11.01 4.79 13.03 4.79 1.76 0 5.86-1.54 12.31-4.63 6.45-3.08 12.34-4.57 17.67-4.46 12.87.23 23.36 4.88 31.47 13.93-13.68 8.28-20.42 19.53-20.2 33.77.22 10.37 4.16 19.16 11.83 26.38 7.67 7.22 16.94 11.18 27.81 11.89-2.11 6.22-4.58 12.28-7.42 18.18zm-22.65-98.07c0-8.62 3.05-16.14 9.16-22.56 6.11-6.42 13.36-9.84 21.75-10.28.11 1 .16 1.9.16 2.7 0 8.29-3.23 15.82-9.68 22.58-6.45 6.76-13.8 10.24-22.03 10.45-.44-1.92-.91-6.07-.91-10.15-.45 4.88-1.57 9.87-4.14 14.87-.22.45-.44.9-.66 1.35z" />
    </svg>
    <div className={cn('text-left', 'leading-none')}>
      <span className={cn('text-[10px]', 'text-white/50', 'block', 'font-semibold', 'mb-1', 'uppercase', 'tracking-wider')}>Download on the</span>
      <span className={cn('text-sm', 'sm:text-base', 'font-bold', 'text-white', 'block')}>App Store</span>
    </div>
  </a>
);

// Inline SVG Google Play Store Badge
const GooglePlayBadge = () => (
  <a
    href="#"
    className={cn('flex', 'items-center', 'gap-3', 'bg-brand-charcoal', 'hover:bg-brand-charcoal/90', 'text-white', 'border', 'border-white/10', 'px-5', 'py-3', 'rounded-2xl', 'transition-all', 'shadow-md', 'hover:shadow-lg', 'hover:-translate-y-0.5', 'shrink-0')}
  >
    <svg className={cn('w-6', 'sm:w-7', 'h-6', 'sm:h-7')} viewBox="0 0 512 512" fill="currentColor">
      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58-33.2-65.6 65.6 65.6 65.6 58-33.2c15-8.6 24.8-23.7 24.8-42.4 0-18.7-9.8-33.8-24.8-42.4zM385.4 337.8L104.6 499l220.7-221.3 60.1 60.1z" />
    </svg>
    <div className={cn('text-left', 'leading-none')}>
      <span className={cn('text-[10px]', 'text-white/50', 'block', 'font-semibold', 'mb-1', 'uppercase', 'tracking-wider')}>Get it on</span>
      <span className={cn('text-sm', 'sm:text-base', 'font-bold', 'text-white', 'block')}>Google Play</span>
    </div>
  </a>
);

function AppDownload() {
  const benefits = [
    "Order in 3 simple steps with fast checkout",
    "Real-time tracking of packages from Dubai to Kerala",
    "Exclusive App-only discount codes and early access to sales",
    "Instant notifications when fresh snack batches arrive",
  ];

  return (
    <section className={cn('bg-brand-cream/30', 'py-20', 'border-t', 'border-brand-charcoal/5', 'overflow-hidden')}>
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-16', 'items-center')}>

          {/* Mockup Display Left */}
          <div className={cn('lg:col-span-6', 'flex', 'justify-center', 'order-2', 'lg:order-1', 'relative')}>

            <Image
              src="/app.png"
              alt="Pravasi Souq Mobile App interface screenshot"
              width={'500'}
              height={500}
              className={cn('object-contain', 'w-full')}

            />


          </div>

          {/* Copy Writing Right */}
          <div className={cn('lg:col-span-6', 'space-y-8', 'order-1', 'lg:order-2', 'text-center', 'lg:text-left')}>
            {/* <div className={cn('inline-flex', 'items-center', 'gap-2', 'px-3', 'py-1.5', 'bg-brand-green/5', 'border', 'border-brand-green/15', 'rounded-full', 'text-brand-green', 'text-xs', 'font-bold', 'uppercase', 'tracking-wider')}>
              <Sparkles className={cn('w-3.5', 'h-3.5')} />
              <span>Shop on the Go</span>
            </div> */}

            <h2 className={cn('text-4xl', 'sm:text-5xl', 'font-extrabold', 'text-brand-charcoal', 'leading-tight')}>
              LOVING THE<br />
              <span className="text-brand-primary">EXPERIENCE?</span>
            </h2>

            <p className={cn('text-base', 'sm:text-lg', 'text-brand-charcoal/65', 'mb-5', 'leading-relaxed', 'font-medium', 'max-w-xl', 'mx-auto', 'lg:mx-0')}>
              Let’s make it even more exciting!
               Download Our mobile App for Better Experience.
            </p>
              <p className={cn('text-base', 'sm:text-lg', 'text-brand-charcoal/65', 'leading-relaxed', 'font-medium', 'max-w-xl', 'mx-auto', 'lg:mx-0')}>

               Download Our mobile App for Better Experience.
            </p>
              
              {/* Checklist */}
              {/* <div className={cn('max-w-md', 'mx-auto', 'lg:mx-0', 'text-left', 'space-y-3', 'pb-4')}>
               {benefits.map((benefit, idx) => (
                <div key={idx} className={cn('flex', 'items-start', 'gap-3', 'text-sm', 'font-semibold', 'text-brand-charcoal/75')}>
                  <CheckCircle2 className={cn('w-5', 'h-5', 'text-brand-gold', 'shrink-0', 'mt-0.5')} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div> */}

          {/* Download Buttons */}
            <div className={cn('flex', 'flex-wrap', 'items-center', 'justify-center', 'lg:justify-start', 'gap-4')}>
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </div>
      
    </div>       
      </div>
    </section >
  );       
}       

export default AppDownload;
