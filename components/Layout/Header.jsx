"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, User, Menu, X, ChevronDown, ClipboardList } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to shrink or shadow bottom bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        isScrolled || setIsScrolled(true);
      } else {
        !isScrolled || setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "COMBO BOX", href: "/products?category=combo" },
    { name: "BEST SELLERS", href: "/products?filter=best-sellers", hasDropdown: true },
    { name: "KERALA PRODUCTS", href: "/products?category=kerala", hasDropdown: true },
    { name: "GULF PRODUCTS", href: "/products?category=gulf", hasDropdown: true },
    { name: "TODAY'S DEALS", href: "/products?filter=deals", hasDropdown: true },
    { name: "GIFTINGS", href: "/products?category=giftings", hasDropdown: true },
    { name: "ABOUT US", href: "/about" },
  ];

  return (
    <header className={cn('w-full', 'z-50', 'sticky', 'top-0')}>
      {/* 1. TOP BAR (Burgundy Background - Hidden on Mobile) */}
      <div className={cn('hidden', 'md:block', 'bg-brand-primary', 'text-white', 'py-2', 'border-b', 'border-brand-primary-dark/20')}>
        <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
          <div className={cn('flex', 'items-center', 'justify-between', 'gap-6')}>

            {/* Search Bar (Left Portion) */}
            <div className={cn('flex-1', 'max-w-lg', 'relative')}>
              <input
                type="text"
                placeholder="Search for an item..."
                className={cn('w-full', 'bg-[#910a3d]/80', 'text-white', 'placeholder-white/70', 'text-sm', 'px-4', 'py-2', 'pr-10', 'rounded-full', 'border', 'border-[#b3124f]/30', 'focus:outline-none', 'focus:ring-1', 'focus:ring-brand-gold', 'focus:bg-[#910a3d]', 'transition-all')}
              />
              <Search className={cn('absolute', 'right-3.5', 'top-2.5', 'w-4', 'h-4', 'text-white/80')} />
            </div>

            {/* Right Utilities */}
            <div className={cn('flex', 'items-center', 'gap-6', 'text-xs', 'font-bold', 'tracking-wide')}>
              {/* Language Dropdown */}
              <button className={cn('flex', 'items-center', 'gap-1', 'hover:text-brand-gold', 'transition-colors')} aria-label="Language Selector">
                <span>ENGLISH</span>
                <ChevronDown className={cn('w-3.5', 'h-3.5')} />
              </button>

              {/* Currency Dropdown */}
              <button className={cn('flex', 'items-center', 'gap-1', 'hover:text-brand-gold', 'transition-colors')} aria-label="Currency Selector">
                <span>SAR</span>
                <ChevronDown className={cn('w-3.5', 'h-3.5')} />
              </button>

              {/* My Account Button */}
              <Link
                href="#account"
                className={cn('flex', 'items-center', 'gap-1.5', 'px-4', 'py-2', 'bg-[#A70B45]', 'hover:bg-white/15', 'rounded-full', 'transition-all')}
              >
                <User className={cn('w-4', 'h-4')} />
                <span>MY ACCOUNT</span>
                <ChevronDown className={cn('w-3.5', 'h-3.5')} />
              </Link>

              {/* Orders Button */}
              <Link
                href="#orders"
                className={cn('flex', 'items-center', 'gap-1.5', 'px-4', 'py-2', 'bg-[#A70B45]', 'hover:bg-white/15', 'rounded-full', 'transition-all')}
              >
                <ClipboardList className={cn('w-4', 'h-4')} />
                <span>ORDERS</span>
              </Link>

              {/* Cart Button */}
              <Link
                href="/cart"
                className={cn('flex', 'items-center', 'gap-1.5', 'px-4', 'py-2', 'bg-[#A70B45]', 'hover:bg-white/15', 'rounded-full', 'transition-all')}
              >
                <ShoppingBag className={cn('w-4', 'h-4')} />
                <span>CART</span>
                <span className={cn('bg-white', 'text-brand-primary', 'text-[10px]', 'font-black', 'w-5', 'h-5', 'rounded-full', 'flex', 'items-center', 'justify-center', 'ml-1')}>
                  03
                </span>
              </Link>


            </div>

          </div>
        </div>
      </div>

      {/* 2. BOTTOM BAR (White Background - Desktop & Responsive) */}
      <div
        className={`bg-white text-brand-charcoal transition-all duration-300 border-b border-brand-charcoal/5 ${isScrolled ? "shadow-md py-2.5" : "py-3.5"
          }`}
      >
        <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
          <div className={cn('flex', 'items-center', 'justify-between', 'gap-4')}>

            {/* Logo Image */}
            <Link href="/" className={cn('flex', 'items-center', 'shrink-0')}>
              <div className={cn('relative', 'w-40', 'h-10', 'sm:w-48', 'sm:h-12')}>
                <Image
                  src="/logo.png"
                  alt="Pravasi Souq Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className={cn('hidden', 'xl:flex', 'items-center', 'gap-6', 'text-[13px]', 'font-semibold', 'tracking-wide', 'text-brand-charcoal/80')}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-0.5 hover:text-brand-primary transition-all duration-200 relative py-2 ${pathname === link.href ? "text-brand-primary font-black" : ""
                    }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className={cn('w-3.5', 'h-3.5', 'text-brand-charcoal/40')} />}
                  {pathname === link.href && (
                    <span className={cn('absolute', 'bottom-[-14px]', 'left-0', 'right-0', 'h-[3px]', 'bg-brand-primary', 'rounded-full')} />
                  )}
                </Link>
              ))}
            </nav>

            {/* WhatsApp CTA & Mobile Toggle */}
            <div className={cn('flex', 'items-center', 'gap-3')}>
              {/* Green ORDER WHATSAPP Button (Desktop) */}
              <a
                href="https://wa.me/971XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className={cn('hidden', 'md:inline-flex', 'items-center', 'justify-center', 'px-6', 'py-2.5', 'bg-[#00A859]', 'hover:bg-[#00924d]', 'text-white', 'rounded-full', 'text-xs', 'font-black', 'tracking-wider', 'transition-all', 'duration-300', 'shadow-md', 'shadow-[#00A859]/10', 'hover:shadow-[#00A859]/25', 'hover:-translate-y-0.5')}
              >
                ORDER WHATSAPP
              </a>

              {/* Mobile Cart Shortcut (Mobile only) */}
              <Link
                href="/cart"
                className={cn('md:hidden', 'p-2', 'text-brand-primary', 'bg-brand-primary/5', 'rounded-full', 'relative')}
                aria-label="View Cart"
              >
                <ShoppingBag className={cn('w-5', 'h-5')} />
                <span className={cn('absolute', '-top-1', '-right-1', 'bg-brand-gold', 'text-brand-charcoal', 'text-[9px]', 'font-black', 'w-4.5', 'h-4.5', 'rounded-full', 'flex', 'items-center', 'justify-center')}>
                  3
                </span>
              </Link>

              {/* Hamburger Button (Mobile only) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn('p-2', 'text-brand-charcoal', 'hover:bg-brand-cream', 'rounded-full', 'transition-colors', 'md:hidden')}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className={cn('w-6', 'h-6')} /> : <Menu className={cn('w-6', 'h-6')} />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className={cn('fixed', 'inset-0', 'top-[60px]', 'z-40', 'bg-black/40', 'backdrop-blur-sm', 'md:hidden')}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={cn('fixed', 'right-0', 'top-[60px]', 'bottom-0', 'w-4/5', 'max-w-sm', 'z-50', 'p-6', 'flex', 'flex-col', 'gap-6', 'shadow-2xl', 'md:hidden', 'bg-white', 'text-brand-charcoal', 'border-l', 'border-brand-charcoal/5')}
            >
              {/* Search Bar Mobile */}
              <div className={cn('flex', 'items-center', 'relative', 'w-full', 'mb-2')}>
                <input
                  type="text"
                  placeholder="Search for an item..."
                  className={cn('w-full', 'bg-brand-cream/80', 'text-brand-charcoal', 'placeholder-brand-charcoal/40', 'text-sm', 'px-4', 'py-2.5', 'pr-10', 'rounded-full', 'border', 'border-brand-charcoal/5', 'focus:outline-none', 'focus:ring-1', 'focus:ring-brand-primary', 'focus:bg-white', 'transition-all')}
                />
                <Search className={cn('absolute', 'right-3.5', 'w-4', 'h-4', 'text-brand-charcoal/60')} />
              </div>

              {/* Navigation Links */}
              <nav className={cn('flex', 'flex-col', 'gap-3.5', 'font-base', 'text-sm', 'text-brand-charcoal/80', 'overflow-y-auto', 'max-h-[50vh]', 'pr-2')}>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between pb-2.5 border-b border-brand-charcoal/5 transition-colors hover:text-brand-primary ${pathname === link.href ? "text-brand-primary font-black border-brand-primary/20" : ""
                      }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <ChevronDown className={cn('w-4', 'h-4', 'text-brand-charcoal/30')} />}
                  </Link>
                ))}
              </nav>

              {/* WhatsApp Mobile CTA & Utility Links */}
              <div className={cn('mt-auto', 'border-t', 'border-brand-charcoal/5', 'pt-6', 'space-y-4')}>
                <a
                  href="https://wa.me/971XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn('flex', 'items-center', 'justify-center', 'w-full', 'py-3', 'bg-[#00A859]', 'hover:bg-[#00924d]', 'text-white', 'rounded-full', 'text-xs', 'font-black', 'tracking-wider', 'transition-all', 'duration-300', 'shadow')}
                >
                  ORDER WHATSAPP
                </a>

                <div className={cn('grid', 'grid-cols-2', 'gap-4', 'text-xs', 'font-bold', 'text-brand-charcoal/60', 'text-center')}>
                  <button className={cn('py-2', 'bg-brand-cream', 'rounded-lg')}>MY ACCOUNT</button>
                  <button className={cn('py-2', 'bg-brand-cream', 'rounded-lg')}>CURRENCY: SAR</button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;