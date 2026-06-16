"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ShoppingBag,
  Heart,
  CreditCard,
  Star,
  User,
  MapPin,
  Bell,
  HelpCircle,
  Info,
  LogOut,
  Gift,
  Plus,
  Check,
  X,
  ChevronRight,
  Eye,
  Trash2,
  Lock,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Data for User Panels
const initialOrders = [
  {
    id: "PS-8921",
    date: "14 Jun 2026",
    status: "In Transit",
    total: 1132,
    items: [
      { name: "RLK FOODS Select 1kg Natural Australian Almonds", qty: 1, image: "/products/mix_dry_fruits_main.png" }
    ]
  },
  {
    id: "PS-7622",
    date: "28 May 2026",
    status: "Delivered",
    total: 98.50,
    items: [
      { name: "Organic Garden Harvest Box", qty: 1, image: "/products/cart_vegetable_box.png" },
      { name: "Traditional Sourdough Loaf", qty: 1, image: "/products/cart_sourdough_bread.png" }
    ]
  }
];

const initialWishlist = [
  { id: "almond-1k", name: "RLK FOODS Select 1kg Natural Australian Almonds Kernels", price: 1132, rating: 4.8, image: "/products/mix_dry_fruits_main.png", brand: "BLK FOODS" },
  { id: "coconut-sh", name: "Garnier fructis Coconut Hair food shampoo 350ml", price: 257, rating: 4.6, image: "/categories/6.png", brand: "Garnier fructis" }
];

const savedAddresses = [
  { id: "addr-1", type: "Home Address", name: "Susan Gardner", line1: "Flat 4B, Emerald Green Apartments", line2: "Sector 15, Dwarka", city: "New Delhi", state: "Delhi", zip: "110075", phone: "+91 98765 43210", isDefault: true, country: "India" },
  { id: "addr-2", type: "Office Address", name: "Susan Gardner", line1: "Pravasi Souq HQ, Tower C, Tech Park", line2: "Infopark Phase 2", city: "Kochi", state: "Kerala", zip: "682030", phone: "+91 484 234 5678", isDefault: false, country: "India" }
];

const mockReviews = [
  {
    id: "rev-1",
    productName: "RLK FOODS Select 1kg Natural Australian Almonds Kernels",
    productImg: "/products/mix_dry_fruits_main.png",
    rating: 5,
    date: "12 Jun 2026",
    title: "Absolutely delicious!",
    comment: "Extremely fresh, large-sized almonds. The jar packaging is very solid and keeps the nuts crispy. Highly recommended!"
  },
  {
    id: "rev-2",
    productName: "Artisan Cold-Pressed Olive Oil",
    productImg: "/products/cart_olive_oil.png",
    rating: 4,
    date: "15 May 2026",
    title: "Great taste and quality",
    comment: "Very aromatic and authentic flavor. Ideal for salads. Only wish the pouring nozzle was slightly better designed."
  }
];

function AccountContent() {
  const searchParams = useSearchParams();
  const tabQuery = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState("reviews"); // "reviews" is active by default

  useEffect(() => {
    if (tabQuery) {
      setActiveTab(tabQuery);
    }
  }, [tabQuery]);

  const [orders, setOrders] = useState(initialOrders);
  const [wishlist, setWishlist] = useState(initialWishlist);
  const [addresses, setAddresses] = useState(savedAddresses);
  const [reviews, setReviews] = useState(mockReviews);

  // Form states for Personal Info
  const [profile, setProfile] = useState({
    name: "Susan Gardner",
    email: "susan.gardner@example.com",
    phone: "+91 98765 43210",
    dob: "1994-08-12",
    gender: "Female"
  });

  // Notification Preferences
  const [notifs, setNotifs] = useState({
    orders: true,
    offers: false,
    newsletter: true,
    security: true
  });

  // Toast alerts
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Modal overlay for logout
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Modal overlay for adding a new address
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: "Home Address",
    name: "Susan Gardner",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    country: "India",
    isDefault: false
  });

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleProfileSave = (e) => {
    e.preventDefault();
    triggerToast("Profile details updated successfully!");
  };

  const handleNotifSave = () => {
    triggerToast("Notification preferences updated!");
  };

  const deleteWishlistItem = (id, name) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
    triggerToast(`Removed ${name} from Wishlist`);
  };

  const deleteAddress = (id, type) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
    triggerToast(`Deleted address: ${type}`);
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    const id = `addr-${Date.now()}`;
    const newAddrItem = {
      ...newAddress,
      id
    };
    if (newAddrItem.isDefault) {
      setAddresses(prev => prev.map(addr => ({ ...addr, isDefault: false })).concat(newAddrItem));
    } else {
      setAddresses(prev => [...prev, newAddrItem]);
    }
    triggerToast("New address added successfully!");
    setNewAddress({
      type: "Home Address",
      name: "Susan Gardner",
      line1: "",
      line2: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      country: "India",
      isDefault: false
    });
    setShowAddAddressModal(false);
  };

  return (
    <main className={cn('flex-grow', 'bg-[#FAF8F5]', 'py-8', 'relative')}>

      {/* 1. TOAST NOTIFICATION */}
      {showToast && (
        <div className={cn('fixed', 'top-24', 'left-1/2', 'transform', '-translate-x-1/2', 'bg-brand-primary', 'text-white', 'px-6', 'py-3.5', 'rounded-full', 'shadow-2xl', 'z-50', 'flex', 'items-center', 'gap-3', 'border', 'border-white/20', 'animate-bounce')}>
          <Check className={cn('w-5', 'h-5', 'bg-white', 'text-brand-primary', 'rounded-full', 'p-0.5')} />
          <span className={cn('text-base', 'font-bold', 'tracking-wide', 'uppercase')}>{toastMessage}</span>
        </div>
      )}

      {/* 2. BREADCRUMBS */}
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8', 'mb-6')}>
        <nav className={cn('flex', 'items-center', 'gap-1.5', 'text-base', 'font-semibold', 'text-brand-charcoal/45', 'tracking-wide')}>
          <Link href="/" className={cn('hover:text-brand-primary', 'transition-colors')}>Home</Link>
          <ChevronRight className={cn('w-3.5', 'h-3.5', 'text-brand-charcoal/30')} />
          <span className={cn('text-brand-charcoal/70', 'font-semibold')}>My Account</span>
        </nav>
      </div>

      {/* 3. ACCOUNT LAYOUT CONTAINER */}
      <div className={cn('max-w-8xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')}>
        <div className={cn('grid', 'grid-cols-1', 'lg:grid-cols-12', 'gap-8', 'items-start')}>

          {/* ==================== LEFT SIDEBAR MENU ==================== */}
          <aside className={cn('lg:col-span-4', 'bg-white', 'border', 'border-brand-charcoal/5', 'rounded-[24px]', 'p-6', 'shadow-xs', 'space-y-6')}>

            {/* User Profile Header */}
            <div className={cn('flex', 'items-center', 'gap-4', 'border-b', 'border-brand-charcoal/5', 'pb-5')}>
              <div className={cn('w-14', 'h-14', 'rounded-full', 'bg-[#fef2f2]', 'text-pink-600', 'font-bold', 'text-2xl', 'flex', 'items-center', 'justify-center', 'border', 'border-pink-100', 'select-none')}>
                S
              </div>
              <div className="space-y-0.5">
                <h2 className={cn('text-lg', 'font-bold', 'text-brand-charcoal', 'leading-tight')}>Susan Gardner</h2>
                <div className={cn('flex', 'items-center', 'gap-1.5', 'text-sm', 'font-semibold', 'text-brand-charcoal/60')}>
                  <span className={cn('text-brand-gold', 'text-sm')}>🎁</span>
                  <span>100 bonuses available</span>
                </div>
              </div>
            </div>

            {/* Menu Group 1: Purchases & Lists */}
            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("orders")}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-left font-bold text-base",
                  activeTab === "orders"
                    ? "bg-[#f0f3f8] text-brand-charcoal"
                    : "text-brand-charcoal/70 hover:bg-[#faf8f5] hover:text-brand-charcoal"
                )}
              >
                <div className={cn('flex', 'items-center', 'gap-3')}>
                  <ShoppingBag className={cn('w-5', 'h-5', 'opacity-70')} />
                  <span>Orders</span>
                </div>
                <span className={cn('w-5', 'h-5', 'rounded-full', 'bg-red-500', 'text-white', 'font-bold', 'text-[12px]', 'flex', 'items-center', 'justify-center')}>
                  1
                </span>
              </button>

              <button
                onClick={() => setActiveTab("wishlist")}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-bold text-base",
                  activeTab === "wishlist"
                    ? "bg-[#f0f3f8] text-brand-charcoal"
                    : "text-brand-charcoal/70 hover:bg-[#faf8f5] hover:text-brand-charcoal"
                )}
              >
                <Heart className={cn('w-5', 'h-5', 'opacity-70')} />
                <span>Wishlist</span>
              </button>

              <button
                onClick={() => setActiveTab("reviews")}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-bold text-base",
                  activeTab === "reviews"
                    ? "bg-[#f0f3f8] text-brand-charcoal"
                    : "text-brand-charcoal/70 hover:bg-[#faf8f5] hover:text-brand-charcoal"
                )}
              >
                <Star className={cn('w-5', 'h-5', 'opacity-70')} />
                <span>My reviews</span>
              </button>
            </div>

            {/* Menu Group 2: Manage Account */}
            <div className="space-y-1">
              <h3 className={cn('text-sm', 'font-bold', 'text-brand-charcoal/40', 'uppercase', 'tracking-wider', 'px-4', 'mb-2')}>
                Manage account
              </h3>

              <button
                onClick={() => setActiveTab("personal")}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-bold text-base",
                  activeTab === "personal"
                    ? "bg-[#f0f3f8] text-brand-charcoal"
                    : "text-brand-charcoal/70 hover:bg-[#faf8f5] hover:text-brand-charcoal"
                )}
              >
                <User className={cn('w-5', 'h-5', 'opacity-70')} />
                <span>Personal info</span>
              </button>

              <button
                onClick={() => setActiveTab("addresses")}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-bold text-base",
                  activeTab === "addresses"
                    ? "bg-[#f0f3f8] text-brand-charcoal"
                    : "text-brand-charcoal/70 hover:bg-[#faf8f5] hover:text-brand-charcoal"
                )}
              >
                <MapPin className={cn('w-5', 'h-5', 'opacity-70')} />
                <span>Addresses</span>
              </button>

              <button
                onClick={() => setActiveTab("notifications")}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-bold text-base",
                  activeTab === "notifications"
                    ? "bg-[#f0f3f8] text-brand-charcoal"
                    : "text-brand-charcoal/70 hover:bg-[#faf8f5] hover:text-brand-charcoal"
                )}
              >
                <Bell className={cn('w-5', 'h-5', 'opacity-70')} />
                <span>Notifications</span>
              </button>
            </div>

            {/* Menu Group 3: Customer Service */}
            <div className="space-y-1">
              <h3 className={cn('text-sm', 'font-bold', 'text-brand-charcoal/40', 'uppercase', 'tracking-wider', 'px-4', 'mb-2')}>
                Customer service
              </h3>

              <button
                onClick={() => setActiveTab("help")}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-bold text-base",
                  activeTab === "help"
                    ? "bg-[#f0f3f8] text-brand-charcoal"
                    : "text-brand-charcoal/70 hover:bg-[#faf8f5] hover:text-brand-charcoal"
                )}
              >
                <HelpCircle className={cn('w-5', 'h-5', 'opacity-70')} />
                <span>Help center</span>
              </button>

              <button
                onClick={() => setActiveTab("terms")}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left font-bold text-base",
                  activeTab === "terms"
                    ? "bg-[#f0f3f8] text-brand-charcoal"
                    : "text-brand-charcoal/70 hover:bg-[#faf8f5] hover:text-brand-charcoal"
                )}
              >
                <Info className={cn('w-5', 'h-5', 'opacity-70')} />
                <span>Terms and conditions</span>
              </button>
            </div>

            {/* Log Out button */}
            <div className={cn('border-t', 'border-brand-charcoal/5', 'pt-4')}>
              <button
                onClick={() => setShowLogoutModal(true)}
                className={cn('w-full', 'flex', 'items-center', 'gap-3', 'px-4', 'py-3', 'rounded-xl', 'text-left', 'font-bold', 'text-base', 'text-red-500', 'hover:bg-red-50', 'transition-all', 'duration-200')}
              >
                <LogOut className={cn('w-5', 'h-5')} />
                <span>Log out</span>
              </button>
            </div>

          </aside>

          {/* ==================== RIGHT CONTENT PANELS ==================== */}
          <div className={cn('lg:col-span-8', 'bg-white', 'border', 'border-brand-charcoal/5', 'rounded-[24px]', 'p-6', 'sm:p-8', 'shadow-xs', 'min-h-[500px]')}>

            {/* 1. ORDERS PANEL */}
            {activeTab === "orders" && (
              <div className={cn('space-y-6', 'animate-fade-in')}>
                <div className={cn('border-b', 'border-brand-charcoal/5', 'pb-4')}>
                  <h2 className={cn('text-xl', 'font-bold', 'text-brand-charcoal')}>Your Orders</h2>
                  <p className={cn('text-sm', 'text-brand-charcoal/45', 'font-semibold', 'mt-1')}>Track and manage your order history</p>
                </div>

                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className={cn('border', 'border-brand-charcoal/5', 'rounded-2xl', 'overflow-hidden', 'shadow-2xs')}>

                      {/* Order Info Bar */}
                      <div className={cn('bg-[#FAF8F5]', 'border-b', 'border-brand-charcoal/5', 'p-4', 'flex', 'flex-wrap', 'gap-4', 'justify-between', 'items-center', 'text-sm', 'font-semibold', 'text-brand-charcoal/65')}>
                        <div className={cn('flex', 'gap-4')}>
                          <div>
                            <span className={cn('block', 'text-[12px]', 'text-brand-charcoal/40', 'uppercase', 'tracking-wider', 'mb-0.5')}>Order ID</span>
                            <span className={cn('font-bold', 'text-brand-charcoal')}>{order.id}</span>
                          </div>
                          <div>
                            <span className={cn('block', 'text-[12px]', 'text-brand-charcoal/40', 'uppercase', 'tracking-wider', 'mb-0.5')}>Date</span>
                            <span className={cn('font-bold', 'text-brand-charcoal')}>{order.date}</span>
                          </div>
                          <div>
                            <span className={cn('block', 'text-[12px]', 'text-brand-charcoal/40', 'uppercase', 'tracking-wider', 'mb-0.5')}>Total</span>
                            <span className={cn('font-bold', 'text-brand-charcoal')}>₹{order.total.toFixed(2)}</span>
                          </div>
                        </div>
                        <span className={cn(
                          "px-2.5 py-1 rounded-md text-[12px] font-black uppercase tracking-wider",
                          order.status === "In Transit" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                        )}>
                          {order.status}
                        </span>
                      </div>

                      {/* Items */}
                      <div className={cn('p-4', 'space-y-3')}>
                        {order.items.map((item, index) => (
                          <div key={index} className={cn('flex', 'gap-4', 'items-center')}>
                            <div className={cn('w-12', 'h-12', 'rounded-lg', 'bg-brand-cream', 'border', 'border-brand-charcoal/5', 'relative', 'shrink-0', 'overflow-hidden')}>
                              <Image src={item.image} alt={item.name} fill className={cn('object-contain', 'p-1')} />
                            </div>
                            <div className="flex-1">
                              <h4 className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'line-clamp-1')}>{item.name}</h4>
                              <p className={cn('text-sm', 'text-brand-charcoal/40', 'font-semibold')}>Qty: {item.qty}</p>
                            </div>
                            <button className={cn('text-sm', 'font-bold', 'text-brand-primary', 'border', 'border-brand-primary', 'rounded-lg', 'px-3', 'py-1.5', 'hover:bg-brand-primary/5', 'transition-all')}>
                              Buy Again
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Controls */}
                      <div className={cn('bg-[#FAF8F5]/35', 'p-4', 'border-t', 'border-brand-charcoal/5', 'flex', 'justify-end', 'gap-3.5')}>
                        <button className={cn('text-sm', 'font-semibold', 'text-brand-charcoal/60', 'hover:text-brand-charcoal')}>
                          Need Help?
                        </button>
                        <button className={cn('text-sm', 'font-bold', 'bg-brand-primary', 'text-white', 'rounded-lg', 'px-4', 'py-2', 'hover:bg-brand-primary-dark', 'transition-all')}>
                          {order.status === "In Transit" ? "Track Order" : "View Invoice"}
                        </button>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 2. WISHLIST PANEL */}
            {activeTab === "wishlist" && (
              <div className={cn('space-y-6', 'animate-fade-in')}>
                <div className={cn('border-b', 'border-brand-charcoal/5', 'pb-4')}>
                  <h2 className={cn('text-xl', 'font-bold', 'text-brand-charcoal')}>Your Wishlist</h2>
                  <p className={cn('text-sm', 'text-brand-charcoal/45', 'font-semibold', 'mt-1')}>Products you saved for later</p>
                </div>

                {wishlist.length === 0 ? (
                  <div className={cn('text-center', 'py-12', 'space-y-4')}>
                    <Heart className={cn('w-12', 'h-12', 'text-brand-charcoal/20', 'mx-auto')} />
                    <h3 className={cn('text-base', 'font-bold', 'text-brand-charcoal')}>Your wishlist is empty</h3>
                    <p className={cn('text-sm', 'text-brand-charcoal/40')}>Browse products and tap the heart icon to save items here!</p>
                  </div>
                ) : (
                  <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                    {wishlist.map((item) => (
                      <div key={item.id} className={cn('border', 'border-brand-charcoal/5', 'rounded-2xl', 'p-4', 'flex', 'flex-col', 'justify-between', 'group', 'shadow-2xs', 'hover:shadow-md', 'transition-all', 'duration-300', 'relative')}>
                        <button
                          onClick={() => deleteWishlistItem(item.id, item.name)}
                          className={cn('absolute', 'top-3', 'right-3', 'text-brand-charcoal/30', 'hover:text-red-500', 'transition-colors', 'z-10')}
                          aria-label="Remove item"
                        >
                          <Trash2 className={cn('w-4', 'h-4')} />
                        </button>

                        <div>
                          <div className={cn('relative', 'aspect-square', 'w-full', 'rounded-xl', 'bg-brand-cream/80', 'overflow-hidden', 'mb-3', 'border', 'border-brand-charcoal/5')}>
                            <Image src={item.image} alt={item.name} fill className={cn('object-contain', 'p-4', 'group-hover:scale-103', 'transition-transform')} />
                          </div>
                          <span className={cn('text-[11px]', 'font-bold', 'text-brand-charcoal/40', 'uppercase', 'tracking-widest', 'block', 'mb-1')}>{item.brand}</span>
                          <h4 className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'line-clamp-2', 'leading-snug', 'mb-3', 'min-h-[36px]')}>{item.name}</h4>
                        </div>

                        <div className={cn('flex', 'items-center', 'justify-between', 'border-t', 'border-brand-charcoal/5', 'pt-3', 'mt-1')}>
                          <span className={cn('text-base', 'font-bold', 'text-brand-charcoal')}>₹{item.price}</span>
                          <button className={cn('flex', 'items-center', 'gap-0.5', 'px-3', 'py-1.5', 'border', 'border-brand-primary', 'text-brand-primary', 'bg-white', 'hover:bg-brand-primary/5', 'rounded-lg', 'text-sm', 'font-bold', 'transition-all')}>
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}


            {/* 4. MY REVIEWS PANEL */}
            {activeTab === "reviews" && (
              <div className={cn('space-y-6', 'animate-fade-in')}>
                <div className={cn('border-b', 'border-brand-charcoal/5', 'pb-4')}>
                  <h2 className={cn('text-xl', 'font-bold', 'text-brand-charcoal')}>My Reviews</h2>
                  <p className={cn('text-sm', 'text-brand-charcoal/45', 'font-semibold', 'mt-1')}>Reviews you left on your purchases</p>
                </div>

                <div className="space-y-4">
                  {reviews.map((rev) => (
                    <div key={rev.id} className={cn('border', 'border-brand-charcoal/5', 'rounded-2xl', 'p-5', 'shadow-2xs', 'flex', 'gap-4')}>

                      {/* Product Thumbnail */}
                      <div className={cn('w-16', 'h-16', 'rounded-xl', 'bg-brand-cream', 'border', 'border-brand-charcoal/5', 'overflow-hidden', 'shrink-0', 'relative')}>
                        <Image src={rev.productImg} alt={rev.productName} fill className={cn('object-contain', 'p-1')} />
                      </div>

                      {/* Content */}
                      <div className={cn('flex-1', 'space-y-2')}>
                        <div className={cn('flex', 'items-start', 'justify-between', 'flex-wrap', 'gap-2')}>
                          <div>
                            <h4 className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'line-clamp-1', 'max-w-md')}>{rev.productName}</h4>

                            <div className={cn('flex', 'items-center', 'gap-1.5', 'mt-1.5')}>
                              <div className={cn('flex', 'items-center', 'gap-0.5', 'bg-[#00A859]', 'text-white', 'text-[11px]', 'font-bold', 'px-1.5', 'py-0.5', 'rounded-md')}>
                                <span>{rev.rating}</span>
                                <Star className={cn('w-2.5', 'h-2.5', 'fill-current', 'stroke-none')} />
                              </div>
                              <span className={cn('text-sm', 'font-bold', 'text-brand-charcoal')}>{rev.title}</span>
                            </div>
                          </div>
                          <span className={cn('text-[12px]', 'text-brand-charcoal/40', 'font-bold')}>{rev.date}</span>
                        </div>

                        <p className={cn('text-sm', 'text-brand-charcoal/70', 'font-semibold', 'leading-relaxed')}>
                          {rev.comment}
                        </p>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. PERSONAL INFO PANEL */}
            {activeTab === "personal" && (
              <div className={cn('space-y-6', 'animate-fade-in')}>
                <div className={cn('border-b', 'border-brand-charcoal/5', 'pb-4')}>
                  <h2 className={cn('text-xl', 'font-bold', 'text-brand-charcoal')}>Personal Information</h2>
                  <p className={cn('text-sm', 'text-brand-charcoal/45', 'font-semibold', 'mt-1')}>Manage your account details and contact info</p>
                </div>

                <form onSubmit={handleProfileSave} className={cn('space-y-4', 'max-w-lg')}>
                  <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                    <div className="space-y-1">
                      <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>Full Name</label>
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        required
                        className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>Phone Number</label>
                      <input
                        type="text"
                        value={profile.phone}
                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                        required
                        className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>Email Address</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      required
                      className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                    />
                  </div>

                  <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                    <div className="space-y-1">
                      <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>Date of Birth</label>
                      <input
                        type="date"
                        value={profile.dob}
                        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                        className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>Gender</label>
                      <select
                        value={profile.gender}
                        onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                        className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all', 'appearance-none')}
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className={cn('border-t', 'border-brand-charcoal/5', 'pt-4', 'flex', 'justify-end', 'gap-3.5')}>
                    <button
                      type="button"
                      onClick={() => setProfile({ name: "Susan Gardner", email: "susan.gardner@example.com", phone: "+91 98765 43210", dob: "1994-08-12", gender: "Female" })}
                      className={cn('text-sm', 'font-bold', 'text-brand-charcoal/60', 'px-4', 'py-2.5', 'hover:text-brand-charcoal', 'focus:outline-none')}
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className={cn('text-sm', 'font-bold', 'bg-brand-primary', 'hover:bg-brand-primary-dark', 'text-white', 'rounded-xl', 'px-5', 'py-2.5', 'transition-all', 'shadow-md', 'shadow-brand-primary/10')}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* 6. ADDRESSES PANEL */}
            {activeTab === "addresses" && (
              <div className={cn('space-y-6', 'animate-fade-in')}>
                <div className={cn('border-b', 'border-brand-charcoal/5', 'pb-4')}>
                  <h2 className={cn('text-xl', 'font-bold', 'text-brand-charcoal')}>Saved Addresses</h2>
                  <p className={cn('text-sm', 'text-brand-charcoal/45', 'font-semibold', 'mt-1')}>Manage delivery locations for quick checkout</p>
                </div>

                <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                  {addresses.map((addr) => (
                    <div key={addr.id} className={cn('border', 'border-brand-charcoal/10', 'rounded-2xl', 'p-5', 'bg-[#FCFBFA]', 'relative', 'flex', 'flex-col', 'justify-between', 'min-h-[190px]', 'shadow-2xs')}>
                      <div className={cn('flex', 'justify-between', 'items-start')}>
                        <div>
                          <span className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'block')}>{addr.type}</span>
                          <span className={cn('text-[12px]', 'text-brand-charcoal/50', 'font-bold')}>{addr.name}</span>
                        </div>
                        {addr.isDefault && (
                          <span className={cn('bg-[#00A859]/10', 'text-[#00A859]', 'text-[11px]', 'font-black', 'uppercase', 'tracking-wider', 'px-2', 'py-0.5', 'rounded-md', 'border', 'border-[#00A859]/20')}>
                            Default
                          </span>
                        )}
                      </div>

                      <div className={cn('text-[12px]', 'text-brand-charcoal/80', 'font-semibold', 'space-y-0.5', 'leading-snug', 'my-2')}>
                        <p>{addr.line1}</p>
                        {addr.line2 && <p>{addr.line2}</p>}
                        <p>{addr.city}, {addr.state} - {addr.zip}</p>
                        <p className={cn('text-brand-charcoal/50', 'pt-0.5')}>Phone: {addr.phone}</p>
                        {addr.country && (
                          <p className="pt-1.5">
                            <span className={cn('bg-[#A70B45]/10', 'text-[#A70B45]', 'text-[11px]', 'font-bold', 'uppercase', 'tracking-wider', 'px-2', 'py-0.5', 'rounded', 'border', 'border-[#A70B45]/20', 'inline-block', 'shadow-3xs')}>
                              📍 {addr.country}
                            </span>
                          </p>
                        )}
                      </div>

                      <div className={cn('border-t', 'border-brand-charcoal/5', 'pt-2', 'flex', 'justify-end', 'gap-3.5', 'text-sm', 'font-bold', 'shrink-0')}>
                        <button
                          onClick={() => triggerToast("Address edit coming soon!")}
                          className={cn('text-brand-secondary', 'hover:underline')}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteAddress(addr.id, addr.type)}
                          className={cn('text-red-500', 'hover:underline')}
                        >
                          Delete
                        </button>
                      </div>

                    </div>
                  ))}

                  {/* Add New Address Button */}
                  <button
                    onClick={() => setShowAddAddressModal(true)}
                    className={cn('border-2', 'border-dashed', 'border-brand-charcoal/10', 'hover:border-brand-primary/30', 'rounded-2xl', 'flex', 'flex-col', 'items-center', 'justify-center', 'p-6', 'min-h-[190px]', 'transition-colors', 'group', 'cursor-pointer')}
                  >
                    <div className={cn('w-10', 'h-10', 'rounded-full', 'bg-brand-cream', 'group-hover:bg-brand-primary/5', 'flex', 'items-center', 'justify-center', 'text-brand-charcoal/45', 'group-hover:text-brand-primary', 'transition-all', 'mb-2', 'shadow-2xs')}>
                      <Plus className={cn('w-5', 'h-5')} />
                    </div>
                    <span className={cn('text-sm', 'font-bold', 'text-brand-charcoal/60', 'group-hover:text-brand-primary', 'transition-colors')}>
                      Add New Address
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* 7. NOTIFICATIONS PANEL */}
            {activeTab === "notifications" && (
              <div className={cn('space-y-6', 'animate-fade-in')}>
                <div className={cn('border-b', 'border-brand-charcoal/5', 'pb-4')}>
                  <h2 className={cn('text-xl', 'font-bold', 'text-brand-charcoal')}>Notification Preferences</h2>
                  <p className={cn('text-sm', 'text-brand-charcoal/45', 'font-semibold', 'mt-1')}>Customize what alerts and messages you receive</p>
                </div>

                <div className={cn('space-y-4', 'max-w-md')}>
                  <label className={cn('flex', 'items-start', 'gap-3', 'p-4', 'border', 'border-brand-charcoal/5', 'rounded-2xl', 'hover:bg-brand-cream/10', 'cursor-pointer')}>
                    <input
                      type="checkbox"
                      checked={notifs.orders}
                      onChange={() => setNotifs({ ...notifs, orders: !notifs.orders })}
                      className={cn('w-4.5', 'h-4.5', 'rounded', 'accent-brand-primary', 'mt-0.5')}
                    />
                    <div>
                      <span className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'block', 'leading-none', 'mb-1')}>Order Updates</span>
                      <span className={cn('text-sm', 'text-brand-charcoal/40', 'font-semibold', 'block', 'leading-tight')}>Delivery statuses, shipping alerts, and purchase receipts.</span>
                    </div>
                  </label>

                  <label className={cn('flex', 'items-start', 'gap-3', 'p-4', 'border', 'border-brand-charcoal/5', 'rounded-2xl', 'hover:bg-brand-cream/10', 'cursor-pointer')}>
                    <input
                      type="checkbox"
                      checked={notifs.offers}
                      onChange={() => setNotifs({ ...notifs, offers: !notifs.offers })}
                      className={cn('w-4.5', 'h-4.5', 'rounded', 'accent-brand-primary', 'mt-0.5')}
                    />
                    <div>
                      <span className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'block', 'leading-none', 'mb-1')}>Promotional Offers</span>
                      <span className={cn('text-sm', 'text-brand-charcoal/40', 'font-semibold', 'block', 'leading-tight')}>Discount sales, holiday coupons, and bundle combo notifications.</span>
                    </div>
                  </label>

                  <label className={cn('flex', 'items-start', 'gap-3', 'p-4', 'border', 'border-brand-charcoal/5', 'rounded-2xl', 'hover:bg-brand-cream/10', 'cursor-pointer')}>
                    <input
                      type="checkbox"
                      checked={notifs.newsletter}
                      onChange={() => setNotifs({ ...notifs, newsletter: !notifs.newsletter })}
                      className={cn('w-4.5', 'h-4.5', 'rounded', 'accent-brand-primary', 'mt-0.5')}
                    />
                    <div>
                      <span className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'block', 'leading-none', 'mb-1')}>Weekly Newsletter</span>
                      <span className={cn('text-sm', 'text-brand-charcoal/40', 'font-semibold', 'block', 'leading-tight')}>Healthy snack articles, recipes, and seasonal fruit arrivals.</span>
                    </div>
                  </label>

                  <label className={cn('flex', 'items-start', 'gap-3', 'p-4', 'border', 'border-brand-charcoal/5', 'rounded-2xl', 'hover:bg-brand-cream/10', 'cursor-pointer')}>
                    <input
                      type="checkbox"
                      checked={notifs.security}
                      onChange={() => setNotifs({ ...notifs, security: !notifs.security })}
                      className={cn('w-4.5', 'h-4.5', 'rounded', 'accent-brand-primary', 'mt-0.5')}
                    />
                    <div>
                      <span className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'block', 'leading-none', 'mb-1')}>Account Security Alerts</span>
                      <span className={cn('text-sm', 'text-brand-charcoal/40', 'font-semibold', 'block', 'leading-tight')}>Login notifications from new devices and password reset verifications.</span>
                    </div>
                  </label>

                  <div className={cn('border-t', 'border-brand-charcoal/5', 'pt-4', 'flex', 'justify-end')}>
                    <button
                      onClick={handleNotifSave}
                      className={cn('text-sm', 'font-bold', 'bg-brand-primary', 'hover:bg-brand-primary-dark', 'text-white', 'rounded-xl', 'px-5', 'py-2.5', 'transition-all', 'shadow-md', 'shadow-brand-primary/10')}
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 8. HELP CENTER PANEL */}
            {activeTab === "help" && (
              <div className={cn('space-y-6', 'animate-fade-in')}>
                <div className={cn('border-b', 'border-brand-charcoal/5', 'pb-4')}>
                  <h2 className={cn('text-xl', 'font-bold', 'text-brand-charcoal')}>Customer Help Center</h2>
                  <p className={cn('text-sm', 'text-brand-charcoal/45', 'font-semibold', 'mt-1')}>Frequently asked questions and support details</p>
                </div>

                <div className="space-y-4">
                  <div className={cn('bg-[#FAF8F5]', 'border', 'border-brand-charcoal/5', 'rounded-2xl', 'p-4')}>
                    <h3 className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'mb-1')}>How can I track my order?</h3>
                    <p className={cn('text-sm', 'text-brand-charcoal/70', 'font-semibold', 'leading-relaxed')}>
                      You can track any active order in the **Orders** tab on this dashboard page. Simply click the **Track Order** button on the corresponding order card to check shipping progress.
                    </p>
                  </div>

                  <div className={cn('bg-[#FAF8F5]', 'border', 'border-brand-charcoal/5', 'rounded-2xl', 'p-4')}>
                    <h3 className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'mb-1')}>What is your refund policy?</h3>
                    <p className={cn('text-sm', 'text-brand-charcoal/70', 'font-semibold', 'leading-relaxed')}>
                      We accept returns on select items within 7 days of delivery. High-fidelity fresh grocery bundles or custom cashew/dry fruits are exempt from standard returns for health/hygiene reasons.
                    </p>
                  </div>

                  <div className={cn('bg-[#FAF8F5]', 'border', 'border-brand-charcoal/5', 'rounded-2xl', 'p-4')}>
                    <h3 className={cn('text-sm', 'font-bold', 'text-brand-charcoal', 'mb-1')}>How do I redeem my bonuses?</h3>
                    <p className={cn('text-sm', 'text-brand-charcoal/70', 'font-semibold', 'leading-relaxed')}>
                      Saved bonuses can be redeemed directly at checkout as discounts. Every 100 bonuses saves you ₹50 on eligible products!
                    </p>
                  </div>
                </div>

                <div className={cn('border-t', 'border-brand-charcoal/5', 'pt-5', 'text-center', 'space-y-3')}>
                  <h4 className={cn('text-sm', 'font-bold', 'text-brand-charcoal')}>Still need help?</h4>
                  <div className={cn('flex', 'justify-center', 'gap-4', 'flex-wrap')}>
                    <Link href="https://wa.me/911234567890" className={cn('inline-flex', 'items-center', 'gap-2', 'px-5', 'py-2.5', 'bg-[#00A859]', 'hover:bg-[#00914c]', 'text-white', 'rounded-xl', 'text-sm', 'font-bold', 'transition-all', 'shadow-md', 'shadow-[#00A859]/10')}>
                      Chat on Whatsapp
                    </Link>
                    <button
                      onClick={() => triggerToast("Support email drafted: support@pravasisouq.in")}
                      className={cn('inline-flex', 'items-center', 'gap-2', 'px-5', 'py-2.5', 'border', 'border-brand-primary', 'text-brand-primary', 'hover:bg-brand-primary/5', 'rounded-xl', 'text-sm', 'font-bold', 'transition-all')}
                    >
                      Email Customer Care
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 9. TERMS & CONDITIONS PANEL */}
            {activeTab === "terms" && (
              <div className={cn('space-y-6', 'animate-fade-in')}>
                <div className={cn('border-b', 'border-brand-charcoal/5', 'pb-4')}>
                  <h2 className={cn('text-xl', 'font-bold', 'text-brand-charcoal')}>Terms and Conditions</h2>
                  <p className={cn('text-sm', 'text-brand-charcoal/45', 'font-semibold', 'mt-1')}>Please read these usage guidelines carefully</p>
                </div>

                <div className={cn('space-y-4', 'text-sm', 'font-semibold', 'text-brand-charcoal/70', 'leading-relaxed', 'overflow-y-auto', 'max-h-96', 'pr-2')}>
                  <p>
                    Welcome to Pravasi Souq. By using our website and account platform, you agree to comply with and be bound by the following terms and conditions of use.
                  </p>
                  <p>
                    <strong>1. Account Security</strong>: You are responsible for maintaining the confidentiality of your account credentials, password, and active sessions. Pravasi Souq cannot be held liable for unauthorized access resulting from user negligence.
                  </p>
                  <p>
                    <strong>2. Orders and Deliveries</strong>: All orders placed on the platform are subject to product availability. Shipping durations are estimates and may vary slightly due to logistics. Cash on Delivery is available on selected postal codes.
                  </p>
                  <p>
                    <strong>3. Bonus Balance Policy</strong>: Bonuses are loyalty tokens with no cash valuation outside product discounts. Bonuses are accrued based on purchase counts and expire 1 year from credit date.
                  </p>
                  <p>
                    <strong>4. Intellectual Property</strong>: All design graphics, logo symbols, brand references, and images displayed on this platform are owned by or licensed to Pravasi Souq. Unauthorized replication is strictly prohibited.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* 4. LOG OUT CONFIRMATION MODAL */}
      {showLogoutModal && (
        <div className={cn('fixed', 'inset-0', 'bg-black/40', 'backdrop-blur-xs', 'z-50', 'flex', 'items-center', 'justify-center', 'p-4')}>
          <div className={cn('bg-white', 'border', 'border-brand-charcoal/5', 'rounded-[24px]', 'p-6', 'max-w-sm', 'w-full', 'space-y-5', 'shadow-2xl', 'animate-scale-up')}>

            <div className={cn('flex', 'gap-4')}>
              <div className={cn('w-12', 'h-12', 'rounded-full', 'bg-red-50', 'flex', 'items-center', 'justify-center', 'text-red-500', 'shrink-0')}>
                <LogOut className={cn('w-6', 'h-6')} />
              </div>
              <div className="space-y-1">
                <h3 className={cn('text-base', 'font-bold', 'text-brand-charcoal', 'leading-tight')}>Confirm Log Out</h3>
                <p className={cn('text-sm', 'text-brand-charcoal/45', 'font-semibold')}>Are you sure you want to log out of your account?</p>
              </div>
            </div>

            <div className={cn('flex', 'justify-end', 'gap-3.5', 'pt-1')}>
              <button
                onClick={() => setShowLogoutModal(false)}
                className={cn('text-sm', 'font-bold', 'text-brand-charcoal/60', 'hover:text-brand-charcoal', 'focus:outline-none')}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowLogoutModal(false);
                  triggerToast("You have logged out successfully.");
                }}
                className={cn('text-sm', 'font-bold', 'bg-red-500', 'hover:bg-red-600', 'text-white', 'rounded-xl', 'px-5', 'py-2.5', 'transition-all', 'shadow-md', 'shadow-red-500/10')}
              >
                Log Out
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 5. ADD NEW ADDRESS MODAL */}
      {showAddAddressModal && (
        <div className={cn('fixed', 'inset-0', 'bg-black/40', 'backdrop-blur-xs', 'z-50', 'flex', 'items-center', 'justify-center', 'p-4')}>
          <div className={cn('bg-white', 'border', 'border-brand-charcoal/5', 'rounded-[24px]', 'p-6', 'max-w-lg', 'w-full', 'max-h-[90vh]', 'overflow-y-auto', 'space-y-5', 'shadow-2xl', 'animate-scale-up', 'scrollbar-thin')}>

            <div className={cn('flex', 'items-center', 'justify-between', 'border-b', 'border-brand-charcoal/5', 'pb-3', 'shrink-0')}>
              <div>
                <h3 className={cn('text-base', 'font-bold', 'text-brand-charcoal', 'leading-tight')}>Add New Delivery Address</h3>
                <p className={cn('text-sm', 'text-brand-charcoal/45', 'font-semibold', 'mt-0.5')}>Please provide delivery address details</p>
              </div>
              <button
                onClick={() => setShowAddAddressModal(false)}
                className={cn('p-1.5', 'rounded-full', 'hover:bg-brand-cream', 'text-brand-charcoal/45', 'hover:text-brand-charcoal', 'transition-colors', 'focus:outline-none')}
              >
                <X className={cn('w-5', 'h-5')} />
              </button>
            </div>

            <form onSubmit={handleAddAddress} className="space-y-4">
              <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                <div className="space-y-1">
                  <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>Address Type</label>
                  <select
                    value={newAddress.type}
                    onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                    className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all', 'appearance-none')}
                  >
                    <option>Home Address</option>
                    <option>Office Address</option>
                    <option>Other Address</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className={cn('text-[12px]', 'font-bold', 'text-[#A70B45]', 'uppercase', 'tracking-wider', 'block')}>Country *</label>
                  <select
                    value={newAddress.country}
                    onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                    required
                    className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-[#A70B45]/30', 'focus:border-brand-primary', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:bg-white', 'transition-all', 'appearance-none', 'text-[#A70B45]', 'font-bold')}
                  >
                    <option value="India">India</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Oman">Oman</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Kuwait">Kuwait</option>
                  </select>
                </div>
              </div>

              <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4')}>
                <div className="space-y-1">
                  <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>Receiver Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Susan Gardner"
                    value={newAddress.name}
                    onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                    required
                    className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                  />
                </div>

                <div className="space-y-1">
                  <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={newAddress.phone}
                    onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                    required
                    className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>Address Line 1 *</label>
                <input
                  type="text"
                  placeholder="e.g. Flat, House no., Building, Company, Apartment"
                  value={newAddress.line1}
                  onChange={(e) => setNewAddress({ ...newAddress, line1: e.target.value })}
                  required
                  className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                />
              </div>

              <div className="space-y-1">
                <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>Address Line 2</label>
                <input
                  type="text"
                  placeholder="e.g. Area, Colony, Street, Sector, Village"
                  value={newAddress.line2}
                  onChange={(e) => setNewAddress({ ...newAddress, line2: e.target.value })}
                  className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                />
              </div>

              <div className={cn('grid', 'grid-cols-1', 'sm:grid-cols-3', 'gap-4')}>
                <div className="space-y-1">
                  <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>City *</label>
                  <input
                    type="text"
                    placeholder="e.g. New Delhi"
                    value={newAddress.city}
                    onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                    required
                    className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                  />
                </div>

                <div className="space-y-1">
                  <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>State *</label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi"
                    value={newAddress.state}
                    onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                    required
                    className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                  />
                </div>

                <div className="space-y-1">
                  <label className={cn('text-[12px]', 'font-bold', 'text-brand-charcoal/45', 'uppercase', 'tracking-wider', 'block')}>ZIP Code *</label>
                  <input
                    type="text"
                    placeholder="e.g. 110075"
                    value={newAddress.zip}
                    onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
                    required
                    className={cn('w-full', 'bg-[#FAF8F5]/60', 'border', 'border-brand-charcoal/10', 'rounded-xl', 'px-4', 'py-2.5', 'text-sm', 'font-semibold', 'focus:outline-none', 'focus:border-brand-primary', 'focus:bg-white', 'transition-all')}
                  />
                </div>
              </div>

              <label className={cn('flex', 'items-center', 'gap-2.5', 'pt-2', 'select-none', 'cursor-pointer')}>
                <input
                  type="checkbox"
                  checked={newAddress.isDefault}
                  onChange={(e) => setNewAddress({ ...newAddress, isDefault: e.target.checked })}
                  className={cn('w-4.5', 'h-4.5', 'rounded', 'accent-brand-primary')}
                />
                <span className={cn('text-sm', 'font-bold', 'text-brand-charcoal/70')}>Set as my default delivery address</span>
              </label>

              <div className={cn('border-t', 'border-brand-charcoal/5', 'pt-4', 'flex', 'justify-end', 'gap-3.5', 'shrink-0')}>
                <button
                  type="button"
                  onClick={() => setShowAddAddressModal(false)}
                  className={cn('text-sm', 'font-bold', 'text-brand-charcoal/60', 'px-4', 'py-2.5', 'hover:text-brand-charcoal', 'focus:outline-none')}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={cn('text-sm', 'font-bold', 'bg-brand-primary', 'hover:bg-brand-primary-dark', 'text-white', 'rounded-xl', 'px-5', 'py-2.5', 'transition-all', 'shadow-md', 'shadow-brand-primary/10')}
                >
                  Add Address
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </main>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div className={cn('min-h-screen', 'flex', 'items-center', 'justify-center', 'bg-[#FAF8F5]', 'text-brand-charcoal', 'font-bold', 'text-base', 'animate-pulse')}>Loading Account...</div>}>
      <AccountContent />
    </Suspense>
  );
}
