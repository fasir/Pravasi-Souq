import React from "react";
import { Shield, Star, Zap, Heart } from "lucide-react";

function WhyChooseUs() {
  const pillars = [
    {
      icon: <Shield className="w-8 h-8 text-brand-gold" />,
      title: "Authentic Products",
      desc: "Every item is carefully sourced and verified for authenticity. We stand by what we sell.",
    },
    {
      icon: <Star className="w-8 h-8 text-brand-gold" />,
      title: "Premium Quality",
      desc: "Only the finest chocolates, nuts, and imported specialties make it into our collection.",
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-gold" />,
      title: "Fast Delivery",
      desc: "Reliable and timely order fulfillment — from our shelves to your doorstep, on time.",
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-gold" />,
      title: "Customer Satisfaction",
      desc: "Dedicated support and a seamless shopping experience, every single time.",
    },
  ];

  return (
    <section className="py-20 bg-brand-cream/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-sm font-bold tracking-widest text-brand-gold uppercase block mb-3">Our Values</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-charcoal leading-tight">
              Why choose <span className="text-brand-primary">Pravasi Souq?</span>
            </h2>
          </div>
          <p className="text-brand-charcoal/65 font-medium max-w-md lg:mb-2">
            Four pillars that define every interaction we have with our valued customers. We strive to provide the absolute best.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-brand-charcoal/5 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-gold/30 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-cream border border-brand-gold/10 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 group-hover:scale-110 transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-3">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-brand-charcoal/60 font-medium">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
