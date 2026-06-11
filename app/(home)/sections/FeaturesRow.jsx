import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function FeaturesRow() {
  const features = [
    {
      icon: "/call-icon.svg",
      title: "Call Us Anytime",
      desc: "24/7 customer support for seamless assistance",
    },
    {
      icon: "/truck-icon.svg",
      title: "All India Delivery",
      desc: "Nationwide delivery with reliable logistics",
    },
    {
      icon: "/card-icon.svg",
      title: "Secure Payment",
      desc: "Safe & secure transactions you can trust",
    },
    {
      icon: "/shop-icon.svg",
      title: "Happy Customers",
      desc: "10K+ Happy customers & positive ratings",
    },
  ];

  return (
    <section className={cn('py-10', 'bg-brand-cream/50', 'border-y', 'border-brand-charcoal/5')}>
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'lg:grid-cols-4', 'gap-6', 'md:gap-8')}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={cn('flex', 'items-center', 'gap-4', 'bg-white', 'border', 'border-brand-charcoal/5', 'p-5', 'rounded-2xl', 'shadow-sm', 'hover:shadow', 'transition-shadow')}
            >
              <div className={cn('w-12', 'h-12', 'rounded-xl', 'flex', 'items-center', 'justify-center', 'shrink-0')}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className={cn('w-12', 'h-12', 'object-contain')}
                />
              </div>
              <div className="space-y-1">
                <h3 className={cn('text-sm', 'sm:text-base', 'font-extrabold', 'text-brand-charcoal')}>{feature.title}</h3>
                <p className={cn('text-xs', 'sm:text-sm', 'text-brand-charcoal/50', 'leading-relaxed', 'font-semibold')}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesRow;
