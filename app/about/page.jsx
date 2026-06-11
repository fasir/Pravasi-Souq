import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, ShoppingBag, Grid, Store, Eye, Target, ShoppingCart, Star } from "lucide-react";
import WhyChooseUs from "@/components/Shared/WhyChooseUs";
import ChairmanMessage from "@/components/Shared/ChairmanMessage";
import Locations from "@/components/Shared/Locations";
import PromoBanner from "@/components/Shared/PromoBanner";

// 1. About Hero Section with Spotlight Card
function AboutHero() {
  const spotlightProduct = {
    name: "BLK FOODS Select 100% Natural Australian Almond Kernels (1kg)",
    price: 1132,
    oldPrice: 2250,
    image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d4f?w=400&auto=format&fit=crop&q=80",
    rating: "4.9",
  };

  return (
    <section className="bg-brand-primary text-white py-20 relative overflow-hidden">
      {/* Decorative backdrop glows */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-brand-gold-light text-xs font-bold uppercase tracking-wider">
              ❤️ Passion for Authenticity
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              Bringing the Taste of Home <br />
              and the Gulf <span className="text-brand-gold">to Your Doorstep</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              Your trusted destination for premium chocolates, dry fruits, nuts, and authentic imported products from across the Gulf region. Sourced directly, packaged with care.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="#story"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-bold rounded-2xl shadow-lg transition-all duration-300"
              >
                Explore Our Story
              </Link>
            </div>
          </div>

          {/* Right Spotlight Product Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-white text-brand-charcoal rounded-3xl p-6 shadow-2xl max-w-sm w-full border border-white/10 relative">
              <span className="absolute -top-3.5 left-6 bg-brand-gold text-brand-charcoal text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow">
                Spotlight Deal
              </span>
              
              {/* Product Image */}
              <div className="relative aspect-video w-full rounded-2xl bg-brand-cream overflow-hidden mb-5 border border-brand-charcoal/5">
                <Image
                  src={spotlightProduct.image}
                  alt={spotlightProduct.name}
                  fill
                  className="object-cover"
                  sizes="(max-w-sm) 100vw, 350px"
                />
              </div>

              {/* Title & Star */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-charcoal/40 uppercase tracking-widest">BLK FOODS</span>
                  <div className="flex items-center gap-0.5 text-brand-gold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold text-brand-charcoal/70">{spotlightProduct.rating}</span>
                  </div>
                </div>
                <h3 className="text-base font-bold leading-snug line-clamp-2 min-h-[44px]">
                  {spotlightProduct.name}
                </h3>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between border-t border-brand-charcoal/5 pt-4 mt-4">
                <div>
                  <span className="text-xs text-brand-charcoal/40 font-bold line-through block leading-none mb-1">
                    ₹{spotlightProduct.oldPrice}
                  </span>
                  <span className="text-xl font-extrabold text-brand-charcoal leading-none">
                    ₹{spotlightProduct.price}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button className="p-2.5 bg-brand-cream hover:bg-brand-gold/20 text-brand-gold-dark rounded-xl transition-all" aria-label="Add to cart">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button className="px-4 py-2.5 bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold rounded-xl shadow-md transition-all">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 2. Stats Bar Section
function StatsBar() {
  const stats = [
    { value: "10K+", label: "Happy Customers", icon: <Users className="w-6 h-6 text-brand-primary" /> },
    { value: "2.5K+", label: "Products Delivered", icon: <ShoppingBag className="w-6 h-6 text-brand-primary" /> },
    { value: "50+", label: "Product Categories", icon: <Grid className="w-6 h-6 text-brand-primary" /> },
    { value: "5+", label: "Store Locations", icon: <Store className="w-6 h-6 text-brand-primary" /> },
  ];

  return (
    <section className="py-12 bg-white border-b border-brand-charcoal/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-brand-charcoal/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-5 justify-center pt-6 lg:pt-0 ${idx % 2 === 0 ? "border-t-0" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary/5 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div className="text-left">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal block leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-brand-charcoal/50 font-bold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. Our Story Section
function OurStory() {
  return (
    <section id="story" className="py-20 bg-brand-cream/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Logo / Graphic Left */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Soft decorative ring */}
            <div className="absolute inset-0 border border-brand-primary/10 rounded-[50px] rotate-6 pointer-events-none" />
            <div className="relative aspect-square w-full max-w-md bg-white border border-brand-charcoal/5 shadow-xl rounded-[40px] p-8 flex flex-col items-center justify-center gap-4 text-center">
              <span className="text-5xl sm:text-6xl font-black tracking-wider text-brand-primary flex items-center justify-center">
                <span className="text-brand-gold text-6xl sm:text-7xl font-extrabold">P</span>S
              </span>
              <div className="w-12 h-1 bg-brand-gold rounded-full" />
              <p className="text-sm font-bold text-brand-charcoal/40 uppercase tracking-widest">Est. 2026</p>
              <p className="text-sm font-medium text-brand-charcoal/60 leading-relaxed max-w-xs">
                “Bridging regional flavors and international specialties to satisfy every household request.”
              </p>
            </div>
          </div>

          {/* Copy Writing Right */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-sm font-bold tracking-widest text-brand-gold uppercase block">Our Story</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal leading-tight">
              A bridge between <br />
              <span className="text-brand-primary">two worlds</span>
            </h2>
            <div className="w-16 h-1 bg-brand-gold rounded-full" />
            <div className="space-y-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed font-light">
              <p>
                Pravasi Souq was founded with a clear, heartfelt vision: to{" "}
                <span className="font-semibold text-brand-charcoal">connect expatriates and families</span> with the authentic products
                they love, miss, and trust. We carefully source premium chocolates, dry fruits, nuts, Gulf specialty items, and traditional local delicacies to deliver quality and convenience straight to our customers.
              </p>
              <p>
                Our commitment is to provide a seamless, reliable shopping experience, exceptional customer service, and a carefully curated collection of products that bring <span className="font-semibold text-brand-charcoal">comfort, nostalgia, and happiness</span> to every household.
              </p>
              <p>
                Today, Pravasi Souq serves customers through both online and offline channels, making premium products accessible across regions — from the heart of Dubai to the shores of Kerala.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 4. Vision & Mission Section
function VisionMission() {
  return (
    <section className="py-20 bg-brand-charcoal text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Vision Card */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm space-y-6 hover:border-brand-gold/30 hover:bg-white/10 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/40 border border-brand-primary/30 flex items-center justify-center">
              <Eye className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-2xl font-bold tracking-wider text-white relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold pb-3 uppercase">
              Vision
            </h3>
            <p className="text-base leading-relaxed text-white/70 font-light italic">
              &ldquo;To become the most trusted destination for authentic Gulf and specialty products, connecting communities through quality, convenience, and exceptional customer experiences.&rdquo;
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm space-y-6 hover:border-brand-gold/30 hover:bg-white/10 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-brand-primary/40 border border-brand-primary/30 flex items-center justify-center">
              <Target className="w-7 h-7 text-brand-gold" />
            </div>
            <h3 className="text-2xl font-bold tracking-wider text-white relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold pb-3 uppercase">
              Mission
            </h3>
            <p className="text-base leading-relaxed text-white/70 font-light italic">
              &ldquo;To deliver premium imported products with reliability, affordability, and excellence while building lasting relationships through honesty, service, and absolute customer satisfaction.&rdquo;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// 5. Main Page Export
function AboutPage() {
  return (
    <main className="flex-grow">
      <AboutHero />
      <StatsBar />
      <OurStory />
      <VisionMission />
      <WhyChooseUs />
      <ChairmanMessage />
      <Locations />
      <PromoBanner />
    </main>
  );
}

export default AboutPage;
