"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Trash2,
  Plus,
  Minus,
  Truck,
  Check,
  ShoppingBag,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// Initial items in cart from the user's reference image
const initialCartItems = [
  {
    id: "veg-box",
    name: "Organic Garden Harvest Box",
    desc: "Farm-fresh assorted seasonal vegetables",
    price: 34.00,
    quantity: 1,
    image: "/products/cart_vegetable_box.png"
  },
  {
    id: "olive-oil",
    name: "Artisan Cold-Pressed Olive Oil",
    desc: "500ml, Single-origin Mediterranean olives",
    price: 56.00,
    quantity: 1,
    image: "/products/cart_olive_oil.png"
  },
  {
    id: "sourdough",
    name: "Traditional Sourdough Loaf",
    desc: "Naturally leavened, hand-scored crust",
    price: 8.50,
    quantity: 1,
    image: "/products/cart_sourdough_bread.png"
  }
];

// Recommended items at the bottom
const recommendedItems = [
  { id: "garnier-1", name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, image: "/categories/4.png" },
  { id: "garnier-2", name: "Garnier fructis Papaya Hair food conditioner 350ml", price: 257, image: "/categories/2.png" },
  { id: "garnier-3", name: "Garnier fructis Papaya Hair food oil 150ml", price: 257, image: "/categories/5.png" },
  { id: "garnier-4", name: "Garnier fructis Papaya Hair food mask 390ml", price: 257, image: "/categories/6.png" },
  { id: "garnier-5", name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, image: "/categories/4.png" },
  { id: "garnier-6", name: "Garnier fructis Papaya Hair food conditioner 350ml", price: 257, image: "/categories/2.png" },
  { id: "garnier-7", name: "Garnier fructis Papaya Hair food oil 150ml", price: 257, image: "/categories/5.png" }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 100.00;
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0.00 : 12.00;

  // Sourced from exact screenshot math: Subtotal 98.50 -> Tax 8.12 (which is ~8.2436% of subtotal)
  const taxRate = 0.082436;
  const tax = subtotal * taxRate;

  const total = subtotal + shippingCost + tax;
  const awayFromFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

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

  // Adjust quantity
  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  // Remove item from cart
  const removeItem = (id, name) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    triggerToast(`Removed ${name} from your cart.`);
  };

  // Add item from recommendations
  const addFromRecommendations = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prev, {
          id: item.id,
          name: item.name,
          desc: "Assorted premium hair food solutions",
          price: item.price,
          quantity: 1,
          image: item.image
        }];
      }
    });
    triggerToast(`Added ${item.name} to your cart!`);
  };

  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className={cn('flex-grow', 'bg-[#FCFBFA]', 'py-8')}>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-brand-primary text-white px-6 py-3.5 rounded-full shadow-2xl z-50 flex items-center gap-3 border border-white/20 animate-bounce">
          <Check className="w-5 h-5 bg-white text-brand-primary rounded-full p-0.5" />
          <span className="text-base font-bold tracking-wide uppercase">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-base font-semibold text-brand-charcoal/45 tracking-wide mb-8">
          <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
          <Link href="/products" className="hover:text-brand-primary transition-colors">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/30" />
          <span className="text-brand-charcoal/70 font-semibold">Cart</span>
        </nav>

        {/* Dynamic Two-Column Layout */}
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'items-start', 'mb-14')}>

          {/* ==================== LEFT COLUMN: CART ITEMS LIST ==================== */}
          <div className={cn('lg:col-span-8', 'space-y-6')}>
            <div className={cn('bg-white', 'border', 'border-brand-charcoal/5', 'rounded-[24px]', 'p-6', 'sm:p-8', 'shadow-xs')}>

              {/* Header */}
              <div className="border-b border-brand-charcoal/5 pb-4 mb-6">
                <h1 className="text-2xl font-bold text-brand-charcoal flex items-baseline gap-2">
                  <span>Cart</span>
                  <span className="text-sm font-semibold text-brand-charcoal/40">
                    ({totalItemsCount} {totalItemsCount === 1 ? "item" : "items"})
                  </span>
                </h1>
              </div>

              {/* Items List */}
              {cartItems.length === 0 ? (
                <div className={cn('text-center', 'py-12', 'space-y-4')}>
                  <div className={cn('w-16', 'h-16', 'rounded-full', 'bg-brand-cream', 'mx-auto', 'flex', 'items-center', 'justify-center', 'text-brand-primary/50')}>
                    <ShoppingBag className={cn('w-8', 'h-8')} />
                  </div>
                  <h3 className={cn('text-base', 'font-bold', 'text-brand-charcoal')}>Your cart is empty</h3>
                  <p className={cn('text-xs', 'text-brand-charcoal/40', 'max-w-sm', 'mx-auto')}>
                    Add products from our product listing or recommendations below to get started!
                  </p>
                  <Link
                    href="/products"
                    className={cn('inline-flex', 'items-center', 'gap-2', 'px-6', 'py-2.5', 'bg-brand-primary', 'hover:bg-brand-primary-dark', 'text-white', 'rounded-full', 'text-xs', 'font-bold', 'uppercase', 'tracking-wider', 'transition-all')}
                  >
                    <span>Browse Products</span>
                    <ArrowRight className={cn('w-4', 'h-4')} />
                  </Link>
                </div>
              ) : (
                <div className={cn('divide-y', 'divide-brand-charcoal/5')}>
                  {cartItems.map((item) => (
                    <div key={item.id} className={cn('py-6', 'first:pt-0', 'last:pb-0', 'flex', 'flex-col', 'sm:flex-row', 'items-center', 'sm:items-start', 'justify-between', 'gap-5', 'transition-all')}>

                      {/* Product details & thumbnail wrapper */}
                      <div className={cn('flex', 'flex-col', 'sm:flex-row', 'items-center', 'sm:items-start', 'gap-4', 'flex-1')}>
                        {/* Thumbnail */}
                        <div className={cn('w-24', 'h-24', 'rounded-2xl', 'bg-brand-cream', 'border', 'border-brand-charcoal/5', 'overflow-hidden', 'relative', 'shrink-0', 'shadow-2xs')}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className={cn('object-contain', 'p-2')}
                            sizes="96px"
                          />
                        </div>

                        {/* Title, desc & interactive controls */}
                        <div className="text-center sm:text-left space-y-3">
                          <div>
                            <h3 className="text-base font-bold text-brand-charcoal">{item.name}</h3>
                            <p className="text-base text-brand-charcoal/40 font-semibold mt-0.5">{item.desc}</p>
                          </div>

                          {/* Quantity selectors & Remove */}
                          <div className="flex items-center justify-center sm:justify-start gap-4">
                            <div className="flex items-center border border-brand-charcoal/10 rounded-full bg-white px-2 py-1 shadow-2xs">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 hover:text-brand-primary transition-colors focus:outline-none"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>

                              <span className="w-8 text-center text-base font-bold text-brand-charcoal select-none">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 hover:text-brand-primary transition-colors focus:outline-none"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id, item.name)}
                              className="flex items-center gap-1 text-red-500 hover:text-red-700 text-base font-semibold focus:outline-none"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Pricing block */}
                      <div className="text-right font-bold text-brand-primary text-lg min-w-[80px] sm:self-center">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </div>

                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* ==================== RIGHT COLUMN: ORDER SUMMARY ==================== */}
          <div className="lg:col-span-4">
            <div className={cn('bg-white', 'border', 'border-brand-charcoal/5', 'rounded-[24px]', 'p-6', 'sm:p-8', 'shadow-xs', 'space-y-6')}>
              <h2 className="text-lg font-bold text-brand-charcoal tracking-wide border-b border-brand-charcoal/5 pb-3.5">
                Order Summary
              </h2>

              {/* Breakdown */}
              <div className="space-y-4 text-base font-semibold text-brand-charcoal/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-brand-charcoal font-bold">₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="text-brand-charcoal font-bold">
                    {shippingCost === 0.00 ? "FREE" : `₹${shippingCost.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="text-brand-charcoal font-bold">₹{tax.toFixed(2)}</span>
                </div>

                {/* Grand Total */}
                <div className="flex justify-between border-t border-brand-charcoal/5 pt-4 text-base">
                  <span className="font-bold text-brand-charcoal">Total</span>
                  <span className="font-bold text-brand-primary text-xl">₹{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Link
                  href="/checkout"
                  className={cn(
                    "w-full block py-3.5 bg-brand-primary hover:bg-brand-primary-dark text-white font-bold text-base rounded-xl transition-all duration-300 shadow-md shadow-brand-primary/10 hover:-translate-y-0.5 text-center focus:outline-none",
                    cartItems.length === 0 && "pointer-events-none bg-brand-charcoal/20 shadow-none opacity-50"
                  )}
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/products"
                  className="w-full block py-3.5 rounded-xl border border-brand-primary hover:bg-brand-primary/5 text-brand-primary font-bold text-base text-center transition-all focus:outline-none"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Free Shipping Alert Box */}
              {subtotal > 0 && (
                <div className={cn(
                  "border rounded-xl p-3.5 flex items-center gap-3 transition-all duration-300",
                  shippingCost === 0
                    ? "bg-green-500/5 border-green-500/10 text-[#00A859]"
                    : "bg-[#FDF6F0] border-brand-gold/10 text-brand-charcoal"
                )}>
                  <Truck className="w-5 h-5 shrink-0" />

                  <span className="text-base font-semibold tracking-wide leading-tight">
                    {shippingCost === 0
                      ? "Congratulations! You qualify for FREE shipping!"
                      : `You're only ₹${awayFromFreeShipping.toFixed(2)} away from free shipping!`
                    }
                  </span>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* ==================== ITEMS YOU MAY HAVE MISSED SECTION ==================== */}
        <div className={cn('border-t', 'border-brand-charcoal/5', 'pt-12', 'mb-8')}>
          <h2 className="text-lg font-bold text-brand-charcoal tracking-wide mb-6">
            Items you may have missed
          </h2>

          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {recommendedItems.map((item) => (
              <div
                key={item.id}
                className="min-w-[210px] w-[210px] bg-white border border-brand-charcoal/5 rounded-[20px] p-3 flex flex-col justify-between group shadow-2xs hover:shadow-md hover:border-brand-gold/15 transition-all duration-300 snap-start"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-xl bg-brand-cream/80 overflow-hidden mb-3.5 border border-brand-charcoal/5">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <span className="text-[9px] font-bold text-brand-charcoal/40 uppercase tracking-widest block mb-1">
                    Garnier Fructis
                  </span>

                  <h4 className="text-base font-bold text-brand-charcoal line-clamp-2 group-hover:text-brand-primary transition-colors min-h-[32px] leading-tight mb-3">
                    {item.name}
                  </h4>
                </div>

                <div className="flex items-center justify-between border-t border-brand-charcoal/5 pt-2.5">
                  <span className="text-base font-bold text-brand-charcoal">₹{item.price}</span>

                  <button
                    onClick={() => addFromRecommendations(item)}
                    className="flex items-center gap-0.5 px-2.5 py-1.5 border border-brand-primary text-brand-primary bg-white hover:bg-brand-primary/5 rounded-lg text-[9px] font-bold tracking-wider transition-colors focus:outline-none"
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
    </main>
  );
}
