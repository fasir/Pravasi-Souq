"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, X, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(0);
  
  // Toast alerts
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // "success" | "error"
  const [showToast, setShowToast] = useState(false);

  const otpRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const triggerToast = (msg, type = "success") => {
    setToastMessage(msg);
    setToastType(type);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Resend OTP timer
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!identifier.trim()) {
      triggerToast("Please enter phone number or email ID", "error");
      return;
    }
    // Simulate sending OTP
    setOtpSent(true);
    setTimer(60);
    triggerToast(`OTP sent successfully to ${identifier}!`);
    
    // Focus first OTP field
    setTimeout(() => {
      if (otpRefs[0].current) {
        otpRefs[0].current.focus();
      }
    }, 100);
  };

  const handleOtpChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next field
    if (value && index < 3) {
      otpRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Backspace to focus previous field
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{4}$/.test(pasteData)) {
      const pasteOtp = pasteData.split("");
      setOtp(pasteOtp);
      otpRefs[3].current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length < 4) {
      triggerToast("Please enter the complete 4-digit OTP", "error");
      return;
    }
    // Simulate validation
    if (otpCode === "1234" || otpSent) {
      triggerToast("Login Successful! Welcome back.");
      setTimeout(() => {
        router.push("/account");
      }, 1500);
    } else {
      triggerToast("Invalid OTP. Please try again.", "error");
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col lg:flex-row relative">
      
      {/* 1. TOAST NOTIFICATION */}
      {showToast && (
        <div className={`fixed top-12 left-1/2 transform -translate-x-1/2 px-6 py-3.5 rounded-full shadow-2xl z-50 flex items-center gap-3 border animate-bounce ${
          toastType === "success" 
            ? "bg-[#00A859] text-white border-white/20" 
            : "bg-[#A70B45] text-white border-white/20"
        }`}>
          {toastType === "success" ? (
            <Check className="w-5 h-5 bg-white text-[#00A859] rounded-full p-0.5" />
          ) : (
            <X className="w-5 h-5 bg-white text-[#A70B45] rounded-full p-0.5" />
          )}
          <span className="text-base font-bold tracking-wide uppercase">{toastMessage}</span>
        </div>
      )}

      {/* 2. LEFT COLUMN - PROMOTIONAL BANNER */}
      <section className="hidden lg:block lg:w-[58%] xl:w-[62%] relative min-h-screen overflow-hidden bg-[#FAF8F5]">
        <Image 
          src="/login_banner.png" 
          alt="Pravasi Souq Promotional Banner" 
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle overlay gradient to match sunset tones */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/10 via-transparent to-orange-900/5 pointer-events-none" />
      </section>

      {/* 3. RIGHT COLUMN - LOGIN FORM CONTAINER */}
      <section className="flex-1 flex flex-col justify-center px-6 py-12 sm:px-12 md:px-16 lg:px-12 xl:px-20 min-h-screen bg-white select-none">
        
        {/* Brand Logo & Name */}
        <div className="mb-12 shrink-0">
          <Link href="/" className="inline-block relative w-48 h-12">
            <Image 
              src="/logo.png" 
              alt="Pravasi Souq Logo" 
              fill
              priority
              className="object-contain" 
            />
          </Link>
        </div>

        {/* Login Headings */}
        <div className="space-y-2 mb-8">
          <h1 className="text-3xl font-extrabold text-brand-charcoal tracking-tight">Login</h1>
          <p className="text-sm font-semibold text-brand-charcoal/45">Premium Products Delivered to Your Door</p>
        </div>

        {/* Form Body */}
        <div className="max-w-md w-full">
          
          {/* Section A: Phone/Email Submission */}
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-brand-charcoal/45 uppercase tracking-wider block">
                Phone Number Or Email ID
              </label>
              <input 
                type="text" 
                placeholder="e.g. +91 98765 43210 or susan@example.com"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                disabled={otpSent}
                className="w-full bg-[#FAF8F5]/80 border border-brand-charcoal/10 focus:border-brand-primary rounded-xl px-4 py-3.5 text-xs font-bold focus:outline-none focus:bg-white transition-all disabled:opacity-50"
              />
            </div>

            <button 
              type="submit" 
              disabled={otpSent}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl text-xs font-black tracking-wider transition-all shadow-md shadow-brand-primary/10 hover:shadow-brand-primary/25 disabled:opacity-50"
            >
              <span>Send OTP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Section B: OTP Code Insertion */}
          <div className="mt-8 space-y-6">
            
            {/* Divider */}
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-brand-charcoal/10"></div>
              <span className="flex-shrink mx-4 text-[10px] font-black text-brand-charcoal/30 uppercase tracking-widest bg-white px-2">
                OTP
              </span>
              <div className="flex-grow border-t border-brand-charcoal/10"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* 4 Digit Boxes */}
              <div className="flex justify-between gap-4">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength="1"
                    ref={otpRefs[idx]}
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    onPaste={idx === 0 ? handlePaste : undefined}
                    disabled={!otpSent}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-center text-2xl font-black bg-[#FAF8F5]/80 border border-brand-charcoal/10 focus:border-brand-primary rounded-xl focus:outline-none focus:bg-white transition-all disabled:opacity-40"
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  type="submit" 
                  disabled={!otpSent}
                  className="w-full py-3.5 bg-brand-primary hover:bg-brand-primary-dark text-white rounded-xl text-xs font-black tracking-wider transition-all shadow-md shadow-brand-primary/10 hover:shadow-brand-primary/25 disabled:opacity-50"
                >
                  Submit
                </button>

                {otpSent && (
                  <div className="text-center">
                    {timer > 0 ? (
                      <p className="text-xs font-semibold text-brand-charcoal/45">
                        Resend OTP in <span className="font-bold text-brand-primary">{timer}s</span>
                      </p>
                    ) : (
                      <button 
                        type="button" 
                        onClick={() => {
                          setTimer(60);
                          triggerToast("OTP resent successfully!");
                        }}
                        className="text-xs font-black text-brand-primary hover:underline"
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                )}
              </div>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}
