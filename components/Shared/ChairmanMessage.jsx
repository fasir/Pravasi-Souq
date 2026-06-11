import React from "react";
import Image from "next/image";

function ChairmanMessage() {
  return (
    <section className="py-24 bg-brand-charcoal text-white overflow-hidden relative">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-burgundy/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Message Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-sm font-bold tracking-widest text-brand-gold uppercase block">
                Leadership Message
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Message from the <span className="text-brand-gold">Chairman</span>
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-white/80 leading-relaxed font-light">
              <p>
                At <span className="font-semibold text-white">Pravasi Souq</span>, our goal is simple — to provide our
                customers with trusted, authentic products that bring value, quality, and convenience to their everyday
                lives.
              </p>
              <p>
                We believe in building long-term relationships through honesty, service excellence, and absolute
                customer satisfaction. By bridging the finest delicacies of the Gulf and local staples of Kerala, we
                bring home closer to you.
              </p>
              <p className="font-medium text-white/95">Thank you for being an essential part of our journey.</p>
            </div>

            {/* Signature & Title */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-lg font-bold text-white">Sajeeb K.P.</p>
                <p className="text-sm text-white/50 font-medium">Chairman, Pravasi Souq</p>
              </div>
              <div className="opacity-90">
                <svg
                  className="w-44 h-16 text-brand-gold"
                  viewBox="0 0 200 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 50 C 40 10, 50 15, 60 50 C 70 70, 75 75, 80 60 C 90 40, 100 45, 105 60 C 110 70, 120 70, 125 55 C 130 40, 140 50, 145 60 C 150 70, 160 55, 170 50 C 180 45, 190 55, 195 50" />
                  <path d="M15 32 C 80 34, 130 35, 180 38" strokeWidth="1.5" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Photo Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Gold Accent Frame Border */}
              <div className="absolute inset-0 border-2 border-brand-gold rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
              
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-brand-charcoal shadow-2xl">
                <Image
                  src="/chairman_portrait.png"
                  alt="Chairman of Pravasi Souq"
                  fill
                  className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-md) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChairmanMessage;
