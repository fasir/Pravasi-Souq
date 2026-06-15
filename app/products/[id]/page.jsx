"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  Star, 
  MapPin, 
  Calendar, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  ThumbsUp, 
  ThumbsDown, 
  ShoppingBag, 
  X, 
  ShieldCheck, 
  Info,
  ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock reviews data
const initialReviews = [
  {
    id: 1,
    name: "Sudip Das",
    rating: 5,
    date: "2 months ago",
    title: "Perfect product.",
    comment: "Very good quality. Fresh and tasty nuts. Packaging was also very good and kept them crispy.",
    likes: 12,
    dislikes: 1,
    verified: true
  },
  {
    id: 2,
    name: "Flipkart Customer",
    rating: 5,
    date: "3 months ago",
    title: "Best in the market.",
    comment: "Completely satisfied with the item. Highly recommended for daily consumption.",
    likes: 8,
    dislikes: 0,
    verified: true
  }
];

// Mock related products
const relatedProducts = [
  { id: "garnier-papaya", name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, originalPrice: 500, rating: 4.8, image: "/categories/4.png", brand: "Garnier fructis" },
  { id: "shampoo-banana", name: "Garnier fructis Banana Hair food shampoo 350ml", price: 257, originalPrice: 500, rating: 4.9, image: "/categories/2.png", brand: "Garnier fructis" },
  { id: "orange-oil", name: "Garnier fructis Orange Hair food oil 150ml", price: 257, originalPrice: 450, rating: 4.7, image: "/categories/5.png", brand: "Garnier fructis" },
  { id: "coconut-shampoo", name: "Garnier fructis Coconut Hair food shampoo 350ml", price: 257, originalPrice: 500, rating: 4.6, image: "/categories/6.png", brand: "Garnier fructis" },
  { id: "papaya-mask", name: "Garnier fructis Papaya Hair food mask 390ml", price: 257, originalPrice: 600, rating: 4.8, image: "/categories/4.png", brand: "Garnier fructis" },
  { id: "almond-shampoo", name: "Garnier fructis Almond Hair food shampoo 350ml", price: 257, originalPrice: 500, rating: 4.9, image: "/categories/1.png", brand: "Garnier fructis" }
];

export default function ProductDetailPage({ params }) {
  // We can unwrap params if needed, but since we default to showing the Dry Fruits product,
  // we will treat this page as the high-fidelity representation of the Dry Fruits product detail page.

  // State
  const [selectedQuantity, setSelectedQuantity] = useState("1000g");
  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Accordion Toggles
  const [expandHighlights, setExpandHighlights] = useState(true);
  const [expandDetails, setExpandDetails] = useState(false);
  const [expandReviews, setExpandReviews] = useState(true);
  
  // Likes/Dislikes interactive states
  const [reviews, setReviews] = useState(initialReviews);
  const [likedReviews, setLikedReviews] = useState({});
  const [dislikedReviews, setDislikedReviews] = useState({});

  // Offer collapse/expand
  const [expandOffers, setExpandOffers] = useState(false);

  // Carousel slide offset
  const [carouselOffset, setCarouselOffset] = useState(0);

  // Quantity sizing price mapping
  const pricingOptions = {
    "300g": { price: 312, originalPrice: 624, text: "(₹312/300g)" },
    "500g": { price: 500, originalPrice: 1000, text: "(₹500/500g)" },
    "1000g": { price: 1132, originalPrice: 2250, text: "(₹1132/1000g)" }
  };

  const currentPrice = pricingOptions[selectedQuantity].price;
  const currentOriginalPrice = pricingOptions[selectedQuantity].originalPrice;

  // Trigger Toast Notification
  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleLike = (id) => {
    if (likedReviews[id]) {
      setReviews(reviews.map(r => r.id === id ? { ...r, likes: r.likes - 1 } : r));
      setLikedReviews({ ...likedReviews, [id]: false });
    } else {
      setReviews(reviews.map(r => r.id === id ? { ...r, likes: r.likes + 1, dislikes: dislikedReviews[id] ? r.dislikes - 1 : r.dislikes } : r));
      setLikedReviews({ ...likedReviews, [id]: true });
      if (dislikedReviews[id]) {
        setDislikedReviews({ ...dislikedReviews, [id]: false });
      }
    }
  };

  const handleDislike = (id) => {
    if (dislikedReviews[id]) {
      setReviews(reviews.map(r => r.id === id ? { ...r, dislikes: r.dislikes - 1 } : r));
      setDislikedReviews({ ...dislikedReviews, [id]: false });
    } else {
      setReviews(reviews.map(r => r.id === id ? { ...r, dislikes: r.dislikes + 1, likes: likedReviews[id] ? r.likes - 1 : r.likes } : r));
      setDislikedReviews({ ...dislikedReviews, [id]: true });
      if (likedReviews[id]) {
        setLikedReviews({ ...likedReviews, [id]: false });
      }
    }
  };

  // Gallery items definitions
  const galleryItems = [
    { type: "image", src: "/products/mix_dry_fruits_main.png", alt: "Mix Dry Fruits Main View" },
    { type: "benefits", alt: "Mix Dry Fruits Benefits" },
    { type: "nutrition", alt: "Nutrition Facts Info" },
    { type: "image", src: "/products/mix_dry_fruits_bowl.png", alt: "Mix Dry Fruits in Ceramic Bowl" }
  ];

  // Open zoom modal
  const openZoom = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  // Carousel controls
  const slideLeft = () => {
    setCarouselOffset(prev => Math.min(0, prev + 250));
  };
  const slideRight = () => {
    setCarouselOffset(prev => Math.max(-750, prev - 250));
  };

  return (
    <main className="flex-grow bg-[#FAF8F5] py-4 relative">
      
      {/* 1. TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-brand-primary text-white px-6 py-3.5 rounded-full shadow-2xl z-50 flex items-center gap-3 border border-white/20 animate-bounce">
          <Check className="w-5 h-5 bg-white text-brand-primary rounded-full p-0.5" />
          <span className="text-xs font-black tracking-wide uppercase">{toastMessage}</span>
        </div>
      )}

      {/* 2. BREADCRUMBS */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-1.5 text-[11px] font-bold text-brand-charcoal/40 uppercase tracking-wider">
          <Link href="/products" className="hover:text-brand-primary transition-colors">
            Product Listing
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
          <span className="text-brand-charcoal/70">Product Details Page</span>
        </nav>
      </div>

      {/* 3. MAIN PRODUCT DETAILS LAYOUT */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ==================== LEFT COLUMN: GALLERIES & DESCRIPTION ==================== */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Image 1: Main product view */}
              <div 
                onClick={() => openZoom("/products/mix_dry_fruits_main.png")}
                className="aspect-square bg-white border border-brand-charcoal/5 rounded-[24px] overflow-hidden relative cursor-zoom-in group shadow-xs hover:shadow-md transition-all duration-300"
              >
                <Image
                  src="/products/mix_dry_fruits_main.png"
                  alt="Grocery Harvest Mix Dry Fruits Main"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-w-md) 100vw, 400px"
                  priority
                />
                <span className="absolute bottom-3.5 right-3.5 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur-xs select-none">
                  Click to Zoom
                </span>
              </div>

              {/* Image 2: Benefits layout (Rendered beautifully in HTML/CSS) */}
              <div className="aspect-square bg-gradient-to-br from-[#FEF9E7] to-[#FDF2E9] border border-brand-gold/15 rounded-[24px] overflow-hidden p-6 relative flex flex-col justify-between shadow-xs select-none">
                {/* Benefits Title */}
                <div className="text-center w-full mt-2">
                  <h3 className="text-[#D35400] font-black text-xl tracking-wide uppercase">Benefits</h3>
                  <div className="w-8 h-1 bg-brand-gold mx-auto mt-1 rounded-full" />
                </div>

                {/* 2x2 Grid of benefits */}
                <div className="grid grid-cols-2 gap-4 my-auto">
                  <div className="bg-white/80 backdrop-blur-xs border border-brand-gold/10 p-3 rounded-2xl flex flex-col items-center text-center shadow-2xs">
                    <span className="text-xs font-black text-brand-charcoal leading-tight">High In</span>
                    <span className="text-[10px] text-brand-secondary font-black tracking-widest uppercase">Protein & Fiber</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-xs border border-brand-gold/10 p-3 rounded-2xl flex flex-col items-center text-center shadow-2xs">
                    <span className="text-xs font-black text-brand-charcoal leading-tight">Rich In</span>
                    <span className="text-[10px] text-brand-secondary font-black tracking-widest uppercase">Antioxidants</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-xs border border-brand-gold/10 p-3 rounded-2xl flex flex-col items-center text-center shadow-2xs">
                    <span className="text-xs font-black text-brand-charcoal leading-tight">Boosts</span>
                    <span className="text-[10px] text-brand-secondary font-black tracking-widest uppercase">Immunity System</span>
                  </div>
                  <div className="bg-white/80 backdrop-blur-xs border border-brand-gold/10 p-3 rounded-2xl flex flex-col items-center text-center shadow-2xs">
                    <span className="text-xs font-black text-brand-charcoal leading-tight">Best For</span>
                    <span className="text-[10px] text-brand-secondary font-black tracking-widest uppercase">Weight Mgmt</span>
                  </div>
                </div>

                <div className="text-center text-[9px] font-bold text-brand-charcoal/40 uppercase tracking-widest">
                  100% Organic & Fresh
                </div>
              </div>

              {/* Image 3: Nutrition label (Rendered in HTML/CSS) */}
              <div className="aspect-square bg-white border border-brand-charcoal/5 rounded-[24px] overflow-hidden p-6 relative flex flex-col shadow-xs select-none">
                <div className="border-b-4 border-black pb-1.5 mb-1.5">
                  <h4 className="font-extrabold text-xl leading-none tracking-tight">Nutrition Facts</h4>
                  <p className="text-[10px] text-gray-500 font-semibold mt-0.5">Serving Size: 100g</p>
                </div>
                
                <div className="space-y-1 text-xs font-bold text-brand-charcoal flex-grow flex flex-col justify-center">
                  <div className="flex justify-between border-b border-gray-150 py-1.5">
                    <span>Calories</span>
                    <span className="font-extrabold">576 kcal</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-150 py-1.5">
                    <span>Total Fat <span className="font-medium text-[10px] text-gray-400">(62% DV)</span></span>
                    <span className="font-extrabold">49g</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-150 py-1.5">
                    <span>Sodium <span className="font-medium text-[10px] text-gray-400">(0% DV)</span></span>
                    <span className="font-extrabold">1mg</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-150 py-1.5">
                    <span>Total Carbohydrate <span className="font-medium text-[10px] text-gray-400">(7% DV)</span></span>
                    <span className="font-extrabold">22g</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-150 py-1.5">
                    <span>Dietary Fiber <span className="font-medium text-[10px] text-gray-400">(48% DV)</span></span>
                    <span className="font-extrabold">12g</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Protein <span className="font-medium text-[10px] text-gray-400">(42% DV)</span></span>
                    <span className="font-extrabold">21g</span>
                  </div>
                </div>
                
                <div className="border-t-2 border-black pt-1.5 text-[8px] text-gray-400 font-semibold leading-tight uppercase tracking-wider text-center mt-auto">
                  * Percent Daily Values (DV) are based on a 2,000 calorie diet.
                </div>
              </div>

              {/* Image 4: Bowl of nuts view */}
              <div 
                onClick={() => openZoom("/products/mix_dry_fruits_bowl.png")}
                className="aspect-square bg-white border border-brand-charcoal/5 rounded-[24px] overflow-hidden relative cursor-zoom-in group shadow-xs hover:shadow-md transition-all duration-300"
              >
                <Image
                  src="/products/mix_dry_fruits_bowl.png"
                  alt="Grocery Harvest Bowl Close-up"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                  sizes="(max-w-md) 100vw, 400px"
                />
                <span className="absolute bottom-3.5 right-3.5 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur-xs select-none">
                  Click to Zoom
                </span>
              </div>

              {/* Image 5: Huge full-width image below the 2x2 grid */}
              <div 
                onClick={() => openZoom("/products/mix_dry_fruits_table.png")}
                className="sm:col-span-2 aspect-video bg-white border border-brand-charcoal/5 rounded-[32px] overflow-hidden relative cursor-zoom-in group shadow-xs hover:shadow-md transition-all duration-300"
              >
                <Image
                  src="/products/mix_dry_fruits_table.png"
                  alt="Grocery Harvest Mix Dry Fruits on Table"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                  sizes="(max-w-4xl) 100vw, 800px"
                />
                <span className="absolute bottom-4 right-4 bg-black/60 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg backdrop-blur-xs select-none">
                  View High Resolution Table Scene
                </span>
              </div>

            </div>

            {/* Product details description area */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[28px] p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-black text-brand-charcoal tracking-wide mb-5">Product details</h3>
              <div className="space-y-4 text-xs font-semibold text-brand-charcoal/70 leading-relaxed max-w-none">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere libero a mi bibendum gravida. Fusce erat eros, ultricies gravida vestibulum quis, feugiat eu ligula. Nulla non velit et enim convallis eleifend. Duis risus dui, porttitor vel congue ultricies, pretium at ligula. Donec non purus nisl. Mauris sed mauris arcu. Morbi vulputate turpis id est laoreet tincidunt. Vivamus fermentum, erat vitae fermentum facilisis, neque lacus semper diam, in laoreet leo ante non ligula. Proin vitae dolor vestibulum, dapibus augue id, pellentesque massa. Suspendisse accumsan justo urna, et vehicula tellus maximus ac. Ut non fringilla purus. Donec auctor maximus nibh, id tempus tellus elementum id. Aenean a semper libero, at hendrerit urna. Sed fringilla erat quis neque iaculis, non elementum dolor elementum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere libero a mi bibendum gravida. Fusce erat eros, ultricies gravida vestibulum quis, feugiat eu ligula. Nulla non velit et enim convallis eleifend. Duis risus dui, porttitor vel congue ultricies, pretium at ligula. Donec non purus nisl. Mauris sed mauris arcu. Morbi vulputate turpis id est laoreet tincidunt. Vivamus fermentum, erat vitae fermentum facilisis, neque lacus semper diam, in laoreet leo ante non ligula. Proin vitae dolor vestibulum, dapibus augue id, pellentesque massa. Suspendisse accumsan justo urna, et vehicula tellus maximus ac. Ut non fringilla purus. Donec auctor maximus nibh, id tempus tellus elementum id. Aenean a semper libero, at hendrerit urna. Sed fringilla erat quis neque iaculis, non elementum dolor elementum.
                </p>
              </div>
            </div>

          </div>

          {/* ==================== RIGHT COLUMN: CHECKOUT OPTIONS, ACCORDIONS, COMBOS ==================== */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Promo banner header */}
            <div className="bg-[#FAF0E6] border border-brand-gold/10 rounded-2xl p-4 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-brand-gold/15 overflow-hidden">
                  <Image src="/products/mix_dry_fruits_main.png" alt="Promo Thumbnail" width={28} height={28} className="object-contain" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black text-brand-charcoal leading-tight uppercase tracking-wider">Enjoy a snack with health benefits</h4>
                  <p className="text-xs font-black text-brand-primary">Up to 50% Off</p>
                </div>
              </div>
              <span className="text-[9px] font-black uppercase bg-brand-primary text-white px-2 py-0.5 rounded-md self-center">Special</span>
            </div>

            {/* Price & Quantity Box */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[28px] p-6 shadow-xs space-y-6">
              
              {/* Selected Quantity Selector */}
              <div className="space-y-3">
                <span className="text-[11px] font-black text-brand-charcoal/40 uppercase tracking-widest">
                  Selected Quantity: {selectedQuantity}
                </span>
                
                <div className="flex gap-2.5">
                  {Object.keys(pricingOptions).map((qty) => {
                    const active = selectedQuantity === qty;
                    return (
                      <button
                        key={qty}
                        onClick={() => setSelectedQuantity(qty)}
                        className={cn(
                          "flex-1 py-3 px-2 rounded-2xl border text-center transition-all duration-200 focus:outline-none flex flex-col items-center justify-center gap-0.5",
                          active
                            ? "bg-brand-charcoal border-brand-charcoal text-white scale-102 shadow-md"
                            : "bg-white border-brand-charcoal/10 text-brand-charcoal hover:border-brand-primary/50 hover:bg-brand-cream/35"
                        )}
                      >
                        <span className="text-xs font-black">{qty}</span>
                        <span className={cn(
                          "text-[9px] font-bold",
                          active ? "text-white/60" : "text-brand-charcoal/40"
                        )}>
                          {pricingOptions[qty].text}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Brand, Title & Star Rating */}
              <div className="space-y-2">
                <Link 
                  href="/products?brand=blk-foods" 
                  className="text-[10px] font-black text-brand-gold hover:underline uppercase tracking-widest block"
                >
                  Visit brand store
                </Link>
                
                <h1 className="text-lg sm:text-xl font-extrabold text-brand-charcoal leading-snug">
                  RLK FOODS Select {selectedQuantity === "1000g" ? "1kg" : selectedQuantity} Natural Australian Almond Kernels | Badam giri
                </h1>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 bg-[#FBC02D] text-brand-charcoal text-[11px] font-black px-2 py-0.5 rounded-md">
                    <span>4.3</span>
                    <Star className="w-3 h-3 fill-current stroke-none" />
                  </div>
                  <span className="text-xs font-bold text-brand-charcoal/45 hover:text-brand-primary cursor-pointer transition-colors">
                    225 Ratings
                  </span>
                </div>
              </div>

              {/* Pricing section */}
              <div className="flex items-end gap-3.5 border-t border-brand-charcoal/5 pt-4">
                <div className="flex items-center gap-1 text-[#00A859] font-black text-sm">
                  <span>↓ 50%</span>
                </div>
                <span className="text-sm font-bold text-brand-charcoal/40 line-through leading-none pb-0.5">
                  2,250
                </span>
                <span className="text-2xl font-black text-brand-primary leading-none">
                  ₹{currentPrice}
                </span>
              </div>

              {/* Offers Box */}
              <div className="border border-brand-primary/10 rounded-2xl bg-brand-primary/5 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setExpandOffers(!expandOffers)}
                  className="w-full flex items-center justify-between p-3.5 text-left text-brand-primary font-black text-xs uppercase tracking-wide focus:outline-none"
                >
                  <div className="flex items-center gap-2">
                    <span className="bg-brand-primary text-white text-[9px] font-black px-1.5 py-0.5 rounded-md">POINT BUY</span>
                    <span>Buy at ₹{(currentPrice * 0.95).toFixed(0)}</span>
                  </div>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", expandOffers && "rotate-180")} />
                </button>
                
                {expandOffers && (
                  <div className="p-3.5 bg-white border-t border-brand-primary/10 text-[11px] text-brand-charcoal/70 font-semibold space-y-2 leading-relaxed">
                    <p>• Apply offers for maximum savings at checkout.</p>
                    <p>• Get 5% cashback on orders above ₹1,000 using Souq Pay.</p>
                    <p>• Free shipping applied automatically on this size selection.</p>
                  </div>
                )}
              </div>

              {/* Delivery Details */}
              <div className="border-t border-brand-charcoal/5 pt-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-brand-charcoal font-bold">
                  <MapPin className="w-4 h-4 text-brand-charcoal/40 shrink-0" />
                  <span>Location not set.</span>
                  <button className="text-brand-secondary hover:text-brand-secondary-dark hover:underline font-extrabold focus:outline-none text-xs ml-1">
                    Select delivery location &gt;
                  </button>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-brand-charcoal font-bold">
                  <Calendar className="w-4 h-4 text-brand-charcoal/40 shrink-0" />
                  <span>Delivery by 16 Jun, Tue</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button 
                  onClick={() => triggerToast(`Added RLK FOODS ${selectedQuantity} to Cart!`)}
                  className="flex-1 py-3.5 rounded-xl border-2 border-brand-primary text-brand-primary font-black text-xs uppercase tracking-wider hover:bg-brand-primary/5 transition-all duration-300 shadow-xs focus:outline-none"
                >
                  Add to cart
                </button>
                
                <button 
                  onClick={() => triggerToast("Proceeding to secure checkout...")}
                  className="flex-1 py-3.5 bg-brand-primary hover:bg-brand-primary-dark text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md shadow-brand-primary/10 hover:-translate-y-0.5 focus:outline-none"
                >
                  Buy at ₹{currentPrice}
                </button>
              </div>

              {/* Badges / Guarantees Row */}
              <div className="grid grid-cols-3 gap-2 border-t border-brand-charcoal/5 pt-4 text-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-[10px] font-black text-brand-charcoal/50 leading-tight uppercase">No returns</span>
                </div>
                
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-[10px] font-black text-brand-charcoal/50 leading-tight uppercase">In Time</span>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black text-brand-charcoal/50 leading-tight uppercase">Cash on Delivery</span>
                </div>
              </div>

            </div>

            {/* Highlights Accordion */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[24px] overflow-hidden shadow-xs">
              <button
                onClick={() => setExpandHighlights(!expandHighlights)}
                className="w-full flex items-center justify-between p-5 text-left font-black text-sm text-brand-charcoal focus:outline-none border-b border-brand-charcoal/5"
              >
                <span>Product highlights</span>
                {expandHighlights ? <ChevronUp className="w-4.5 h-4.5 text-brand-charcoal/40" /> : <ChevronDown className="w-4.5 h-4.5 text-brand-charcoal/40" />}
              </button>

              {expandHighlights && (
                <div className="p-5 text-xs font-semibold text-brand-charcoal/70 grid grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <span className="text-[10px] text-brand-charcoal/40 block mb-0.5 uppercase tracking-wider">Pack of</span>
                    <span className="text-brand-charcoal font-bold">1</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-charcoal/40 block mb-0.5 uppercase tracking-wider">Sales Package</span>
                    <span className="text-brand-charcoal font-bold">1 Premium Almonds Kernel</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-charcoal/40 block mb-0.5 uppercase tracking-wider">Brand</span>
                    <span className="text-brand-charcoal font-bold">BLK FOODS</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-charcoal/40 block mb-0.5 uppercase tracking-wider">Quantity</span>
                    <span className="text-brand-charcoal font-bold">{selectedQuantity}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-charcoal/40 block mb-0.5 uppercase tracking-wider">Type</span>
                    <span className="text-brand-charcoal font-bold">Almonds</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-charcoal/40 block mb-0.5 uppercase tracking-wider">Variant</span>
                    <span className="text-brand-charcoal font-bold">Plain</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-charcoal/40 block mb-0.5 uppercase tracking-wider">Container Type</span>
                    <span className="text-brand-charcoal font-bold">Pouch</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-charcoal/40 block mb-0.5 uppercase tracking-wider">Model Name</span>
                    <span className="text-brand-charcoal font-bold">Select {selectedQuantity === "1000g" ? "1kg" : selectedQuantity} Natural Australian Almonds</span>
                  </div>
                </div>
              )}
            </div>

            {/* All details Accordion (Collapsed) */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[24px] overflow-hidden shadow-xs">
              <button
                onClick={() => setExpandDetails(!expandDetails)}
                className="w-full flex items-center justify-between p-5 text-left font-black text-sm text-brand-charcoal focus:outline-none"
              >
                <span>All details</span>
                {expandDetails ? <ChevronUp className="w-4.5 h-4.5 text-brand-charcoal/40" /> : <ChevronDown className="w-4.5 h-4.5 text-brand-charcoal/40" />}
              </button>
              
              {expandDetails && (
                <div className="p-5 border-t border-brand-charcoal/5 text-xs font-semibold text-brand-charcoal/70 space-y-2.5 leading-relaxed">
                  <p><strong>Ingredients:</strong> 100% Premium Raw Almonds. No preservatives or additives.</p>
                  <p><strong>Storage Instructions:</strong> Store in a cool, dry place. Keep in an airtight container once opened to preserve freshness.</p>
                  <p><strong>Manufacturer:</strong> RLK FOODS Pvt Ltd, Raw Cashew & Almond Packers.</p>
                </div>
              )}
            </div>

            {/* Ratings and Reviews Accordion (Expanded) */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[24px] overflow-hidden shadow-xs">
              <button
                onClick={() => setExpandReviews(!expandReviews)}
                className="w-full flex items-center justify-between p-5 text-left font-black text-sm text-brand-charcoal focus:outline-none border-b border-brand-charcoal/5"
              >
                <span>Ratings and reviews</span>
                {expandReviews ? <ChevronUp className="w-4.5 h-4.5 text-brand-charcoal/40" /> : <ChevronDown className="w-4.5 h-4.5 text-brand-charcoal/40" />}
              </button>

              {expandReviews && (
                <div className="p-5 space-y-6">
                  {/* Reviews Summary */}
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-brand-charcoal">4.3</span>
                      <span className="text-brand-charcoal/40 font-bold text-xs">/ 5.0</span>
                      <span className="text-[10px] bg-green-500/10 text-green-600 font-black px-2 py-0.5 rounded-md uppercase tracking-wider ml-2">Very Good</span>
                    </div>
                    
                    <span className="text-[10px] text-[#71717A] font-black uppercase tracking-wider bg-brand-cream/80 px-2.5 py-1 rounded-lg">
                      based on 225 ratings by 17 Verified Buyers
                    </span>
                  </div>

                  {/* Customer Review Photo Grid */}
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-black text-brand-charcoal/40 uppercase tracking-widest">Customer Photos</span>
                    <div className="flex gap-3">
                      <div className="w-16 h-16 rounded-xl border border-brand-charcoal/5 overflow-hidden relative cursor-pointer group shadow-2xs">
                        <Image src="/products/mix_dry_fruits_table.png" alt="Review Photo 1" fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="w-16 h-16 rounded-xl border border-brand-charcoal/5 overflow-hidden relative cursor-pointer group shadow-2xs">
                        <Image src="/products/mix_dry_fruits_bowl.png" alt="Review Photo 2" fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Individual Customer Reviews List */}
                  <div className="space-y-4 border-t border-brand-charcoal/5 pt-4">
                    {reviews.map((rev) => (
                      <div key={rev.id} className="bg-brand-cream/15 border border-brand-charcoal/5 p-4 rounded-2xl space-y-2">
                        {/* Rating, Name, Verified */}
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-1.5">
                            <div className="flex items-center gap-0.5 bg-brand-primary text-white text-[9px] font-black px-1.5 py-0.5 rounded-md">
                              <span>{rev.rating}</span>
                              <Star className="w-2.5 h-2.5 fill-current stroke-none" />
                            </div>
                            <span className="text-xs font-black text-brand-charcoal">{rev.title}</span>
                          </div>
                          
                          <span className="text-[10px] text-brand-charcoal/40 font-bold">{rev.date}</span>
                        </div>

                        {/* Comment */}
                        <p className="text-xs text-brand-charcoal/75 font-semibold leading-relaxed">
                          {rev.comment}
                        </p>

                        {/* Footer details: Name, Verified Badge, Helpfulness */}
                        <div className="flex items-center justify-between gap-4 flex-wrap text-[10px] text-brand-charcoal/40 font-bold border-t border-brand-charcoal/5 pt-2 mt-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-brand-charcoal font-black">{rev.name}</span>
                            {rev.verified && (
                              <span className="text-[8px] bg-green-500/10 text-green-600 font-extrabold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                                Verified Buyer
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-3">
                            <button 
                              onClick={() => handleLike(rev.id)}
                              className={cn(
                                "flex items-center gap-1 hover:text-brand-primary transition-colors focus:outline-none",
                                likedReviews[rev.id] && "text-brand-primary"
                              )}
                            >
                              <ThumbsUp className="w-3.5 h-3.5" />
                              <span>{rev.likes}</span>
                            </button>
                            
                            <button 
                              onClick={() => handleDislike(rev.id)}
                              className={cn(
                                "flex items-center gap-1 hover:text-brand-primary transition-colors focus:outline-none",
                                dislikedReviews[rev.id] && "text-brand-primary"
                              )}
                            >
                              <ThumbsDown className="w-3.5 h-3.5" />
                              <span>{rev.dislikes}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Show All Reviews Trigger */}
                  <button className="w-full py-2.5 border border-brand-charcoal/10 rounded-xl text-xs font-black text-brand-charcoal/70 hover:bg-brand-cream hover:text-brand-primary transition-all focus:outline-none">
                    Show all reviews &gt;
                  </button>

                </div>
              )}
            </div>

            {/* Combos Recommendation Area */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[28px] p-6 shadow-xs space-y-4">
              <h4 className="text-xs font-black text-brand-charcoal uppercase tracking-widest">Save more with combos</h4>
              
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none snap-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {relatedProducts.slice(0, 2).map((item) => (
                  <div key={item.id} className="min-w-[190px] flex-1 bg-[#FCFBFA] border border-brand-charcoal/5 rounded-2xl p-3 flex flex-col justify-between snap-start">
                    <div className="relative aspect-square w-full rounded-xl bg-brand-cream overflow-hidden mb-3 border border-brand-charcoal/5">
                      <Image src={item.image} alt={item.name} fill className="object-contain p-3" />
                    </div>
                    
                    <h5 className="text-[11px] font-black text-brand-charcoal line-clamp-2 mb-2 leading-tight min-h-[28px]">
                      {item.name}
                    </h5>
                    
                    <div className="flex items-center justify-between border-t border-brand-charcoal/5 pt-2">
                      <span className="text-xs font-black text-brand-charcoal">₹{item.price}</span>
                      
                      <button 
                        onClick={() => triggerToast(`Added ${item.name} to Combo!`)}
                        className="flex items-center gap-0.5 px-2.5 py-1 bg-brand-primary hover:bg-brand-primary-dark text-white rounded-lg text-[9px] font-black tracking-wider transition-colors"
                      >
                        <Plus className="w-2.5 h-2.5" />
                        <span>ADD</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* 4. RELATED PRODUCTS SECTION */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-lg font-black text-brand-charcoal tracking-wide">Related Products</h2>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/products" 
              className="text-[10px] font-black text-brand-primary hover:underline uppercase tracking-widest flex items-center gap-0.5"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>

            <div className="flex gap-1.5">
              <button 
                onClick={slideLeft}
                className="w-8 h-8 rounded-lg border border-brand-charcoal/10 flex items-center justify-center text-brand-charcoal/50 hover:bg-brand-cream/50 transition-colors focus:outline-none"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={slideRight}
                className="w-8 h-8 rounded-lg border border-brand-charcoal/10 flex items-center justify-center text-brand-charcoal/50 hover:bg-brand-cream/50 transition-colors focus:outline-none"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Sliding products track */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex gap-5 transition-transform duration-350 ease-out"
            style={{ transform: `translateX(${carouselOffset}px)` }}
          >
            {relatedProducts.map((product) => (
              <div 
                key={product.id}
                className="min-w-[220px] w-[220px] bg-white border border-brand-charcoal/5 rounded-[20px] p-3 flex flex-col justify-between group shadow-2xs hover:shadow-md hover:border-brand-gold/15 transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-xl bg-brand-cream/80 overflow-hidden mb-3.5 border border-brand-charcoal/5">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <span className="text-[9px] font-black text-brand-charcoal/40 uppercase tracking-widest block mb-1">
                    {product.brand}
                  </span>
                  
                  <h4 className="text-xs font-bold text-brand-charcoal line-clamp-2 group-hover:text-brand-primary transition-colors min-h-[32px] leading-tight mb-3">
                    {product.name}
                  </h4>
                </div>

                <div className="flex items-center justify-between border-t border-brand-charcoal/5 pt-2.5">
                  <span className="text-sm font-extrabold text-brand-charcoal">₹{product.price}</span>
                  
                  <button 
                    onClick={() => triggerToast(`Added ${product.name} to Cart!`)}
                    className="flex items-center gap-0.5 px-3 py-1.5 bg-brand-primary hover:bg-brand-primary-dark text-white rounded-lg text-[10px] font-black tracking-wider transition-colors focus:outline-none"
                  >
                    <Plus className="w-3 h-3" />
                    <span>ADD</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. STICKY FOOTER ACTIONS (Visible on Scroll / Mobile) */}
      <div className="sticky bottom-0 left-0 right-0 w-full bg-white border-t border-brand-charcoal/8 py-3.5 shadow-2xl z-40 transition-transform duration-300 block">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Left item details (Desktop only) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-cream overflow-hidden border border-brand-charcoal/5 relative shrink-0">
              <Image src="/products/mix_dry_fruits_main.png" alt="Sticky Thumbnail" fill className="object-contain p-1" />
            </div>
            <div>
              <h4 className="text-xs font-black text-brand-charcoal leading-tight line-clamp-1">RLK FOODS Select {selectedQuantity === "1000g" ? "1kg" : selectedQuantity} Australian Almonds</h4>
              <p className="text-[10px] font-bold text-brand-charcoal/50 uppercase">Quantity: {selectedQuantity}</p>
            </div>
          </div>

          {/* Checkout Buttons */}
          <div className="flex-1 md:flex-initial flex gap-3.5 justify-end w-full">
            <button
              onClick={() => triggerToast(`Added RLK FOODS ${selectedQuantity} to Cart!`)}
              className="flex-1 md:w-48 py-3 px-4 rounded-xl border border-brand-charcoal/10 text-brand-charcoal font-black text-xs uppercase tracking-wider hover:bg-brand-cream transition-all focus:outline-none text-center"
            >
              Add to cart
            </button>
            
            <button
              onClick={() => triggerToast("Proceeding to secure checkout...")}
              className="flex-1 md:w-48 py-3 px-4 bg-brand-primary hover:bg-brand-primary-dark text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all focus:outline-none text-center"
            >
              Buy at ₹{currentPrice}
            </button>
          </div>
        </div>
      </div>

      {/* 6. IMAGE ZOOM MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-brand-primary bg-black/40 hover:bg-white/20 p-2.5 rounded-full transition-all duration-200"
            aria-label="Close Preview"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative max-w-4xl w-full aspect-square md:aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-2 flex items-center justify-center">
            <Image
              src={modalImageSrc}
              alt="Expanded Preview"
              fill
              className="object-contain p-4"
              sizes="80vw"
            />
          </div>
        </div>
      )}

    </main>
  );
}
