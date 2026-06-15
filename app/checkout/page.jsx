"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  Truck, 
  MapPin, 
  CreditCard,
  CheckCircle,
  ShoppingBag,
  ArrowRight,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  // Address Form States
  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Selector States
  const [shippingMethod, setShippingMethod] = useState("standard"); // 'standard' | 'express'
  const [paymentMethod, setPaymentMethod] = useState("cod"); // 'cod' | 'razorpay'

  // Checkout Success State
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  // Notification Toast State
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // 'success' | 'error'
  const [showToast, setShowToast] = useState(false);

  // Summary Pricing Details
  const subtotal = 27.48;
  const shippingCost = shippingMethod === "standard" ? 4.99 : 1.99;
  const tax = 2.20;
  const total = subtotal + shippingCost + tax;

  const triggerToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Validations
    if (!fullName.trim()) {
      triggerToast("Please enter your full name.", "error");
      return;
    }
    if (!streetAddress.trim()) {
      triggerToast("Please enter your street address.", "error");
      return;
    }
    if (!city.trim()) {
      triggerToast("Please enter your city.", "error");
      return;
    }
    if (!state.trim()) {
      triggerToast("Please enter your state.", "error");
      return;
    }
    if (!zipCode.trim() || zipCode.length < 3) {
      triggerToast("Please enter a valid zip code.", "error");
      return;
    }
    if (!acceptTerms) {
      triggerToast("You must accept the Terms and Conditions to proceed.", "error");
      return;
    }

    // Process Order
    const randomOrderId = "PS-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomOrderId);
    setIsSuccess(true);
    triggerToast("Order placed successfully!", "success");
  };

  if (isSuccess) {
    return (
      <main className="flex-grow bg-[#FCFBFA] py-16 flex items-center justify-center">
        <div className="max-w-md w-full bg-white border border-brand-charcoal/5 rounded-[32px] p-8 text-center shadow-lg space-y-6">
          <div className="w-20 h-20 rounded-full bg-green-500/10 text-[#00A859] mx-auto flex items-center justify-center">
            <CheckCircle className="w-12 h-12 stroke-[2.5]" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-brand-charcoal">Thank you for your order!</h1>
            <p className="text-xs font-semibold text-brand-charcoal/45 uppercase tracking-widest">
              Order ID: <span className="font-bold text-brand-primary">{orderId}</span>
            </p>
            <p className="text-xs font-bold text-brand-charcoal/70 max-w-sm mx-auto leading-relaxed pt-2">
              We have received your order details and are preparing it for delivery. A confirmation email with receipt and tracking details has been sent to you.
            </p>
          </div>

          <div className="border-t border-brand-charcoal/5 pt-6 space-y-3">
            <div className="bg-brand-cream/40 rounded-2xl p-4 text-left space-y-2.5 text-xs font-bold text-brand-charcoal/70">
              <div className="flex justify-between">
                <span>Deliver To:</span>
                <span className="text-brand-charcoal">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span>Address:</span>
                <span className="text-brand-charcoal text-right">{streetAddress}, {city}</span>
              </div>
              <div className="flex justify-between">
                <span>Paid via:</span>
                <span className="text-brand-charcoal uppercase">{paymentMethod === "cod" ? "Cash on Delivery" : "Razorpay"}</span>
              </div>
              <div className="flex justify-between border-t border-brand-charcoal/5 pt-2 text-sm font-black text-brand-charcoal">
                <span>Amount Charged:</span>
                <span className="text-brand-primary">₹{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Link 
                href="/products"
                className="flex-1 py-3 bg-brand-primary hover:bg-brand-primary-dark text-white font-black text-xs uppercase tracking-wider rounded-xl transition-colors text-center focus:outline-none"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow bg-[#FCFBFA] py-8">
      {/* Toast Notification */}
      {showToast && (
        <div className={cn(
          "fixed top-24 left-1/2 transform -translate-x-1/2 text-white px-6 py-3.5 rounded-full shadow-2xl z-50 flex items-center gap-3 border transition-all animate-bounce",
          toastType === "success" 
            ? "bg-[#00A859] border-green-500/20" 
            : "bg-[#E30A5C] border-red-500/20"
        )}>
          {toastType === "success" ? (
            <Check className="w-5 h-5 bg-white text-[#00A859] rounded-full p-0.5" />
          ) : (
            <Info className="w-5 h-5 bg-white text-[#E30A5C] rounded-full p-0.5" />
          )}
          <span className="text-xs font-black tracking-wide uppercase">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Stepper Indicator */}
        <div className="max-w-md mx-auto mb-12 flex items-center justify-between relative select-none">
          <div className="absolute top-5 left-4 right-4 h-0.5 bg-brand-charcoal/5 -z-10" />
          
          {/* Step 1: Shipping */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-black text-xs shadow-md shadow-brand-primary/25">
              1
            </div>
            <span className="text-[10px] font-black uppercase text-brand-primary tracking-widest">Shipping</span>
          </div>
          
          {/* Step 2: Payment */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-cream border border-brand-charcoal/10 text-brand-charcoal/40 flex items-center justify-center font-black text-xs">
              2
            </div>
            <span className="text-[10px] font-black uppercase text-brand-charcoal/40 tracking-widest">Payment</span>
          </div>

          {/* Step 3: Review */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand-cream border border-brand-charcoal/10 text-brand-charcoal/40 flex items-center justify-center font-black text-xs">
              3
            </div>
            <span className="text-[10px] font-black uppercase text-brand-charcoal/40 tracking-widest">Review</span>
          </div>
        </div>

        {/* Dynamic Two-Column Grid */}
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ==================== LEFT COLUMN: INPUT SECTIONS ==================== */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Section 1: Shipping Address */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[24px] p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-sm font-black text-brand-charcoal uppercase tracking-widest flex items-center gap-2 border-b border-brand-charcoal/5 pb-3">
                <MapPin className="w-4.5 h-4.5 text-brand-primary shrink-0" />
                <span>Shipping Address</span>
              </h2>

              <div className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-brand-charcoal/50 tracking-wider">Full Name</label>
                  <input 
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-brand-cream/40 placeholder-brand-charcoal/25 text-xs px-4.5 py-3.5 rounded-xl border border-brand-charcoal/5 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:bg-white transition-all font-bold"
                  />
                </div>

                {/* Street Address */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-brand-charcoal/50 tracking-wider">Street Address</label>
                  <input 
                    type="text"
                    placeholder="123 Fresh Way"
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    className="w-full bg-brand-cream/40 placeholder-brand-charcoal/25 text-xs px-4.5 py-3.5 rounded-xl border border-brand-charcoal/5 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:bg-white transition-all font-bold"
                  />
                </div>

                {/* City, State, ZIP */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-brand-charcoal/50 tracking-wider">City</label>
                    <input 
                      type="text"
                      placeholder="Your City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-brand-cream/40 placeholder-brand-charcoal/25 text-xs px-4.5 py-3.5 rounded-xl border border-brand-charcoal/5 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:bg-white transition-all font-bold"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-brand-charcoal/50 tracking-wider">State</label>
                    <input 
                      type="text"
                      placeholder="ST"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-brand-cream/40 placeholder-brand-charcoal/25 text-xs px-4.5 py-3.5 rounded-xl border border-brand-charcoal/5 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:bg-white transition-all font-bold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-brand-charcoal/50 tracking-wider">ZIP Code</label>
                    <input 
                      type="text"
                      placeholder="00000"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full bg-brand-cream/40 placeholder-brand-charcoal/25 text-xs px-4.5 py-3.5 rounded-xl border border-brand-charcoal/5 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:bg-white transition-all font-bold"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* Section 2: Shipping Method */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[24px] p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-sm font-black text-brand-charcoal uppercase tracking-widest flex items-center gap-2 border-b border-brand-charcoal/5 pb-3">
                <Truck className="w-4.5 h-4.5 text-brand-primary shrink-0" />
                <span>Shipping Method</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Standard */}
                <button
                  type="button"
                  onClick={() => setShippingMethod("standard")}
                  className={cn(
                    "flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-200 focus:outline-none",
                    shippingMethod === "standard"
                      ? "border-brand-primary bg-brand-primary/5 shadow-2xs"
                      : "border-brand-charcoal/10 bg-white hover:border-brand-primary/30"
                  )}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-black text-brand-charcoal block">Standard Delivery</span>
                    <span className="text-[10px] font-bold text-brand-charcoal/40 block">5-7 business days</span>
                  </div>
                  <span className="text-sm font-black text-brand-primary">₹4.99</span>
                </button>

                {/* Express */}
                <button
                  type="button"
                  onClick={() => setShippingMethod("express")}
                  className={cn(
                    "flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-200 focus:outline-none",
                    shippingMethod === "express"
                      ? "border-brand-primary bg-brand-primary/5 shadow-2xs"
                      : "border-brand-charcoal/10 bg-white hover:border-brand-primary/30"
                  )}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-black text-brand-charcoal block">Express Delivery</span>
                    <span className="text-[10px] font-bold text-brand-charcoal/40 block">2-3 business days</span>
                  </div>
                  <span className="text-sm font-black text-brand-primary">₹1.99</span>
                </button>
              </div>
            </div>

            {/* Section 3: Payment Method */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[24px] p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-sm font-black text-brand-charcoal uppercase tracking-widest flex items-center gap-2 border-b border-brand-charcoal/5 pb-3">
                <CreditCard className="w-4.5 h-4.5 text-brand-primary shrink-0" />
                <span>Payment Method</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Cash On Delivery */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={cn(
                    "flex items-center gap-3 p-5 rounded-2xl border text-left transition-all duration-200 focus:outline-none",
                    paymentMethod === "cod"
                      ? "border-brand-primary bg-brand-primary/5 shadow-2xs"
                      : "border-brand-charcoal/10 bg-white hover:border-brand-primary/30"
                  )}
                >
                  <div className={cn(
                    "w-4 h-4 rounded-full border flex items-center justify-center shrink-0",
                    paymentMethod === "cod" ? "border-brand-primary" : "border-brand-charcoal/30"
                  )}>
                    {paymentMethod === "cod" && <div className="w-2 h-2 rounded-full bg-brand-primary" />}
                  </div>
                  <span className="text-xs font-black text-brand-charcoal">Cash on delivery</span>
                </button>

                {/* Razorpay */}
                <button
                  type="button"
                  onClick={() => setPaymentMethod("razorpay")}
                  className={cn(
                    "flex items-center gap-3 p-5 rounded-2xl border text-left transition-all duration-200 focus:outline-none",
                    paymentMethod === "razorpay"
                      ? "border-brand-primary bg-brand-primary/5 shadow-2xs"
                      : "border-brand-charcoal/10 bg-white hover:border-brand-primary/30"
                  )}
                >
                  <div className={cn(
                    "w-4 h-4 rounded-full border flex items-center justify-center shrink-0",
                    paymentMethod === "razorpay" ? "border-brand-primary" : "border-brand-charcoal/30"
                  )}>
                    {paymentMethod === "razorpay" && <div className="w-2 h-2 rounded-full bg-brand-primary" />}
                  </div>
                  
                  {/* Mock Razorpay logo design */}
                  <div className="flex items-center gap-1 font-bold italic text-blue-600 tracking-tight shrink-0 select-none">
                    <span className="w-2 h-4.5 bg-blue-500 rounded-xs transform -skew-x-12 shrink-0 inline-block" />
                    <span className="text-xs not-italic font-black text-brand-charcoal">Razorpay</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Checkbox Terms */}
            <div className="flex items-start gap-2.5 px-2">
              <input 
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded accent-brand-primary border-brand-charcoal/25 cursor-pointer shrink-0"
              />
              <label htmlFor="terms" className="text-xs font-bold text-brand-charcoal/60 leading-normal cursor-pointer select-none">
                I accept the <Link href="/about" className="text-brand-primary hover:underline font-extrabold">Terms and Conditions</Link>
              </label>
            </div>

            {/* Action Checkout Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-brand-primary hover:bg-brand-primary-dark text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md shadow-brand-primary/10 hover:-translate-y-0.5 focus:outline-none"
            >
              PLACE ORDER
            </button>

          </div>

          {/* ==================== RIGHT COLUMN: ORDER SUMMARY ==================== */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-brand-charcoal/5 rounded-[24px] p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-lg font-black text-brand-charcoal tracking-wide border-b border-brand-charcoal/5 pb-3.5">
                Order Summary
              </h2>

              {/* Items List */}
              <div className="space-y-4 max-h-[280px] overflow-y-auto pr-2 divide-y divide-brand-charcoal/5">
                {/* Product 1 */}
                <div className="flex items-center gap-4 py-3 first:pt-0">
                  <div className="w-14 h-14 rounded-xl bg-brand-cream border border-brand-charcoal/5 overflow-hidden relative shrink-0">
                    <Image src="/products/checkout_berry_mix.png" alt="Organic Berry Mix" fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-black text-brand-charcoal truncate">Organic Berry Mix</h4>
                    <span className="text-[10px] text-brand-charcoal/40 font-bold block mt-0.5">Qty: 2</span>
                  </div>
                  <span className="text-xs font-black text-brand-charcoal shrink-0">₹34.00</span>
                </div>

                {/* Product 2 */}
                <div className="flex items-center gap-4 pt-3">
                  <div className="w-14 h-14 rounded-xl bg-brand-cream border border-brand-charcoal/5 overflow-hidden relative shrink-0">
                    <Image src="/products/checkout_power_salad.png" alt="Fresh Power Salad" fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-black text-brand-charcoal truncate">Fresh Power Salad</h4>
                    <span className="text-[10px] text-brand-charcoal/40 font-bold block mt-0.5">Qty: 1</span>
                  </div>
                  <span className="text-xs font-black text-brand-charcoal shrink-0">₹34.00</span>
                </div>
              </div>

              {/* Math breakdown */}
              <div className="border-t border-brand-charcoal/5 pt-4 space-y-4 text-xs font-bold text-brand-charcoal/70">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-brand-charcoal font-black">₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-brand-charcoal font-black">₹{shippingCost.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="text-brand-charcoal font-black">₹{tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between border-t border-brand-charcoal/5 pt-4 text-sm">
                  <span className="font-black text-brand-charcoal">Total</span>
                  <span className="font-black text-brand-primary text-lg">₹{total.toFixed(2)}</span>
                </div>
              </div>

            </div>
          </div>

        </form>

      </div>
    </main>
  );
}
