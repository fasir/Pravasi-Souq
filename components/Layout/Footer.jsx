"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, Send } from "lucide-react";

// Custom inline SVG icons for social platforms
const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

function Footer() {
  const socialLinks = [
    { icon: <FacebookIcon />, href: "#" },
    { icon: <InstagramIcon />, href: "#" },
    { icon: <LinkedinIcon />, href: "#" },
    { icon: <YoutubeIcon />, href: "#" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "#products" },
    { name: "Combo Deals", href: "#combo-deals" },
    { name: "Contact Us", href: "#contact" },
  ];

  const policyLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Shipping & Returns", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  return (
    <footer id="contact" className="bg-brand-charcoal text-white/80 border-t border-white/5 pt-16 pb-8 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-wider text-white">
                <span className="text-brand-gold font-extrabold text-3xl">P</span>ravasi
                <span className="text-brand-gold font-extrabold text-3xl">S</span>ouq
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Your bridge between two worlds. Bringing premium quality products, authentic Gulf snacks, dry fruits, nuts, chocolates, and household specialties straight from Dubai to Kerala and nationwide.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold hover:bg-white/10 transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-lg font-semibold tracking-wider mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3 font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-gold hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h3 className="text-white text-lg font-semibold tracking-wider mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold pb-2">
              Customer Support
            </h3>
            <ul className="space-y-3 font-medium">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-gold hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white text-lg font-semibold tracking-wider mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold pb-2">
              Newsletter
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-brand-gold focus-within:border-transparent transition-all">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-transparent text-sm px-4 py-3 text-white placeholder-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-3 text-brand-gold hover:text-brand-gold-light transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
          <p>© {new Date().getFullYear()} Pravasi Souq. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-gold" /> +971 XX XXX XXXX
            </p>
            <p className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand-gold" /> info@pravasisouq.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;