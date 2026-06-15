"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Star, ChevronDown, ChevronUp, Plus, SlidersHorizontal, Check } from "lucide-react";
import { cn } from "@/lib/utils";

function ProductListingPage() {
  // Filter States
  const [categorySearch, setCategorySearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(["All Categories"]);
  const [selectedHighlights, setSelectedHighlights] = useState([]);
  const [priceRange, setPriceRange] = useState(7500);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("Default Sorting");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Accordion Expand/Collapse States
  const [expandCategories, setExpandCategories] = useState(true);
  const [expandHighlights, setExpandHighlights] = useState(true);
  const [expandPrice, setExpandPrice] = useState(true);
  const [expandTags, setExpandTags] = useState(true);

  // Mobile Filters Modal State
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Subcategories Data
  const subcategories = [
    { name: "@100", image: "/categories/1.png", gradient: "from-[#ff7b7b] to-[#ff4747]", isCropped: false },
    { name: "@150", image: "/categories/2.png", gradient: "from-[#b080ff] to-[#7a3eff]", isCropped: false },
    { name: "@200", image: "/categories/3.png", gradient: "from-[#43a047] to-[#2e7d32]", isCropped: false },
    { name: "@300", image: "/categories/6.png", gradient: "from-[#00b8ff] to-[#0091ea]", isCropped: false },
    { name: "Pantry", image: "/categories/4.png", gradient: "from-[#8d6e63] to-[#5d4037]", isCropped: false },
    { name: "Dates & Nuts", image: "/categories/1.png", gradient: "from-[#ff7b7b] to-[#ff4747]", isCropped: false },
    { name: "Kids & Toys", image: "/categories/2.png", gradient: "from-[#b080ff] to-[#7a3eff]", isCropped: false },
    { name: "Imported", image: "/categories/6.png", gradient: "from-[#00b8ff] to-[#0091ea]", isCropped: false },
    { name: "Fresh Fruit", image: "/categories/5.png", gradient: "", isCropped: true },
    { name: "Pantry", image: "/categories/4.png", gradient: "from-[#8d6e63] to-[#5d4037]", isCropped: false },
    { name: "Kids & Toys", image: "/categories/2.png", gradient: "from-[#b080ff] to-[#7a3eff]", isCropped: false },
    { name: "Imported", image: "/categories/6.png", gradient: "from-[#00b8ff] to-[#0091ea]", isCropped: false },
  ];

  // Categories Filter Data
  const categoriesList = [
    { name: "All Categories", count: 54 },
    { name: "Combo Box", count: 12 },
    { name: "Kerala Products", count: 36 },
    { name: "Gulf Products", count: 30 },
    { name: "Giftings", count: 21 },
  ];

  // Highlights Filter Data
  const highlightsList = [
    { name: "Best Seller", count: 45 },
    { name: "New Arrivals", count: 15 },
    { name: "Offer", count: 32 },
    { name: "Hot Items", count: 35 },
  ];

  // Tags Filter Data
  const tagsList = [
    "furniture", "accessories", "beauty", "clothes", "electronic", "bag", "vegetable", "watches"
  ];

  // Mock Products Data (all Garnier fructis shampoo as in the reference screenshot)
  const mockProducts = [
    { id: 1, name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, rating: 5, stockStatus: "Only 2 items left", isNew: true, isBestSeller: false, image: "/categories/4.png", brand: "Garnier fructis" },
    { id: 2, name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, rating: 5, stockStatus: "2 ITEMS", isNew: true, isBestSeller: true, image: "/categories/4.png", brand: "Garnier fructis" },
    { id: 3, name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, rating: 5, stockStatus: "IN STOCK", isNew: false, isBestSeller: true, image: "/categories/4.png", brand: "Garnier fructis" },
    { id: 4, name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, rating: 5, stockStatus: "IN STOCK", isNew: true, isBestSeller: false, image: "/categories/4.png", brand: "Garnier fructis" },
    { id: 5, name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, rating: 5, stockStatus: "IN STOCK", isNew: true, isBestSeller: true, image: "/categories/4.png", brand: "Garnier fructis" },
    { id: 6, name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, rating: 5, stockStatus: "IN STOCK", isNew: true, isBestSeller: true, image: "/categories/4.png", brand: "Garnier fructis" },
    { id: 7, name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, rating: 5, stockStatus: "IN STOCK", isNew: true, isBestSeller: true, image: "/categories/4.png", brand: "Garnier fructis" },
    { id: 8, name: "Garnier fructis Papaya Hair food shampoo 350ml", price: 257, rating: 5, stockStatus: "IN STOCK", isNew: true, isBestSeller: true, image: "/categories/4.png", brand: "Garnier fructis" },
  ];

  // Toggle Checkbox Helpers
  const handleCategoryToggle = (name) => {
    if (name === "All Categories") {
      setSelectedCategories(["All Categories"]);
    } else {
      let updated = [...selectedCategories];
      // remove "All Categories" if others checked
      updated = updated.filter(item => item !== "All Categories");
      if (updated.includes(name)) {
        updated = updated.filter(item => item !== name);
        if (updated.length === 0) updated = ["All Categories"];
      } else {
        updated.push(name);
      }
      setSelectedCategories(updated);
    }
  };

  const handleHighlightToggle = (name) => {
    if (selectedHighlights.includes(name)) {
      setSelectedHighlights(selectedHighlights.filter(item => item !== name));
    } else {
      setSelectedHighlights([...selectedHighlights, name]);
    }
  };

  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(item => item !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Filter Categories by search term
  const filteredCategoriesList = categoriesList.filter(item =>
    item.name.toLowerCase().includes(categorySearch.toLowerCase())
  );

  return (
    <main className="flex-grow bg-[#FCFBFA] py-8">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Burgundy Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#7A062F] to-[#E30A5C] rounded-[24px] h-[160px] sm:h-[200px] md:h-[220px] flex items-center justify-between px-8 md:px-16 shadow-lg mb-8">
          {/* Left Text content */}
          <div className="flex flex-col text-white max-w-[65%] sm:max-w-[55%] z-10 space-y-1 sm:space-y-2">
            <span className="text-[10px] md:text-[11px] tracking-widest font-black uppercase bg-white/20 px-2.5 py-1 rounded-md self-start border border-white/10">
              Limited time only up to
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-sm">
              60% OFF
            </h2>
            <p className="text-[10px] md:text-xs text-white/80 font-semibold leading-relaxed max-w-md hidden sm:block">
              Limited time only up to 60% OFF. Shop your favorite items now at unbeatable rates!
            </p>
            <button className="px-5 py-2 bg-[#7A062F] hover:bg-[#5E0422] text-white text-[10px] md:text-xs font-black tracking-wider uppercase rounded-full shadow-md transition-all self-start border border-white/10 mt-1">
              ORDER NOW
            </button>
          </div>

          {/* Right Image Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-[42%] h-full z-0 select-none pointer-events-none">
            <Image
              src="/listing_banner.png"
              alt="Promo Banner Illustration"
              fill
              className="object-cover object-right"
              sizes="40vw"
              priority
            />
            {/* Blend Overlay */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#7A062F] to-transparent pointer-events-none" />
          </div>
        </div>

        {/* 2. Subcategories Carousel */}
        <div className="w-full mb-8">
          <div className="flex gap-5 overflow-x-auto pb-3 scrollbar-none snap-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {subcategories.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSubcategory(selectedSubcategory === item.name ? null : item.name)}
                className="flex flex-col items-center gap-2 shrink-0 snap-start cursor-pointer group focus:outline-none"
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-full border-2 overflow-hidden relative shadow-sm transition-all duration-300",
                    selectedSubcategory === item.name 
                      ? "border-brand-primary scale-105 shadow-md ring-2 ring-brand-primary/20" 
                      : "border-white group-hover:scale-105",
                    item.isCropped ? "bg-transparent" : `bg-gradient-to-br ${item.gradient}`
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className={cn(
                      item.isCropped ? "object-cover" : "object-contain p-3.5",
                      "transition-transform duration-500"
                    )}
                    sizes="64px"
                  />
                </div>
                <span 
                  className={cn(
                    "text-[10px] sm:text-xs font-black transition-colors",
                    selectedSubcategory === item.name 
                      ? "text-brand-primary" 
                      : "text-brand-charcoal/85 group-hover:text-brand-primary"
                  )}
                >
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filters Trigger Bar */}
        <div className="flex lg:hidden items-center justify-between bg-white border border-brand-charcoal/5 p-4 rounded-2xl mb-6 shadow-sm">
          <span className="text-sm font-black text-brand-charcoal">Filters</span>
          <button
            onClick={() => setShowMobileFilters(true)}
            className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-full text-xs font-black shadow-md shadow-brand-primary/10"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>FILTER PRODUCTS</span>
          </button>
        </div>

        {/* 3. Main Two-Column Layout */}
        <div className="flex gap-8 items-start">
          
          {/* A. Sidebar Filters (Desktop only) */}
          <aside className="hidden lg:flex flex-col w-[250px] shrink-0 gap-6">
            
            {/* Categories Accordion */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[20px] p-5 shadow-xs">
              <button
                onClick={() => setExpandCategories(!expandCategories)}
                className="flex items-center justify-between w-full font-black text-sm text-brand-charcoal pb-3 border-b border-brand-charcoal/5 focus:outline-none"
              >
                <span>Categories</span>
                {expandCategories ? <ChevronUp className="w-4 h-4 text-brand-charcoal/50" /> : <ChevronDown className="w-4 h-4 text-brand-charcoal/50" />}
              </button>
              
              {expandCategories && (
                <div className="pt-4 space-y-3.5">
                  {/* Category Search */}
                  <div className="relative flex items-center mb-1">
                    <input
                      type="text"
                      placeholder="Search Items..."
                      value={categorySearch}
                      onChange={(e) => setCategorySearch(e.target.value)}
                      className="w-full bg-brand-cream/40 placeholder-brand-charcoal/30 text-xs px-3.5 py-2.5 pr-9 rounded-full border border-brand-charcoal/5 focus:outline-none focus:ring-1 focus:ring-brand-primary focus:bg-white transition-all font-semibold"
                    />
                    <Search className="absolute right-3 w-3.5 h-3.5 text-brand-charcoal/40" />
                  </div>

                  {/* List of Checkboxes */}
                  <div className="space-y-3">
                    {filteredCategoriesList.map((category) => {
                      const isChecked = selectedCategories.includes(category.name);
                      return (
                        <label
                          key={category.name}
                          className="flex items-center justify-between cursor-pointer group text-xs text-brand-charcoal/80 font-bold hover:text-brand-primary transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              onClick={() => handleCategoryToggle(category.name)}
                              className={cn(
                                "w-4.5 h-4.5 rounded border flex items-center justify-center transition-all duration-200",
                                isChecked 
                                  ? "bg-brand-primary border-brand-primary text-white" 
                                  : "border-brand-charcoal/20 bg-white group-hover:border-brand-primary/50"
                              )}
                            >
                              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span>{category.name}</span>
                          </div>
                          <span className="text-[10px] text-brand-charcoal/40 font-bold bg-brand-cream/50 px-2 py-0.5 rounded-md">
                            ({category.count})
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {/* Show More Button */}
                  <button className="w-full py-2 border border-brand-charcoal/10 rounded-xl text-[10px] font-black text-brand-charcoal/70 hover:bg-brand-cream hover:text-brand-primary transition-all">
                    Show More
                  </button>
                </div>
              )}
            </div>

            {/* Highlight Accordion */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[20px] p-5 shadow-xs">
              <button
                onClick={() => setExpandHighlights(!expandHighlights)}
                className="flex items-center justify-between w-full font-black text-sm text-brand-charcoal pb-3 border-b border-brand-charcoal/5 focus:outline-none"
              >
                <span>Highlight</span>
                {expandHighlights ? <ChevronUp className="w-4 h-4 text-brand-charcoal/50" /> : <ChevronDown className="w-4 h-4 text-brand-charcoal/50" />}
              </button>

              {expandHighlights && (
                <div className="pt-4 space-y-3">
                  {highlightsList.map((hl) => {
                    const isChecked = selectedHighlights.includes(hl.name);
                    return (
                      <label
                        key={hl.name}
                        className="flex items-center justify-between cursor-pointer group text-xs text-brand-charcoal/80 font-bold hover:text-brand-primary transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            onClick={() => handleHighlightToggle(hl.name)}
                            className={cn(
                              "w-4.5 h-4.5 rounded border flex items-center justify-center transition-all duration-200",
                              isChecked 
                                ? "bg-brand-primary border-brand-primary text-white" 
                                : "border-brand-charcoal/20 bg-white group-hover:border-brand-primary/50"
                            )}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span>{hl.name}</span>
                        </div>
                        <span className="text-[10px] text-brand-charcoal/40 font-bold bg-brand-cream/50 px-2 py-0.5 rounded-md">
                          ({hl.count})
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Price Accordion */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[20px] p-5 shadow-xs">
              <button
                onClick={() => setExpandPrice(!expandPrice)}
                className="flex items-center justify-between w-full font-black text-sm text-brand-charcoal pb-3 border-b border-brand-charcoal/5 focus:outline-none"
              >
                <span>Price</span>
                {expandPrice ? <ChevronUp className="w-4 h-4 text-brand-charcoal/50" /> : <ChevronDown className="w-4 h-4 text-brand-charcoal/50" />}
              </button>

              {expandPrice && (
                <div className="pt-4 space-y-4">
                  {/* Slider */}
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="2500"
                      max="10000"
                      value={priceRange}
                      onChange={(e) => setPriceRange(Number(e.target.value))}
                      className="w-full accent-brand-primary cursor-pointer h-1.5 bg-brand-cream rounded-lg"
                    />
                    <div className="h-1 bg-brand-primary rounded-full" style={{ width: `${((priceRange - 2500) / 7500) * 100}%` }} />
                  </div>

                  {/* Input Min/Max representation */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-brand-cream/40 border border-brand-charcoal/5 text-center py-2 text-[11px] font-bold text-brand-charcoal/70 rounded-lg">
                      2500
                    </div>
                    <span className="text-brand-charcoal/40 text-[10px]">—</span>
                    <div className="flex-1 bg-brand-cream/40 border border-brand-charcoal/5 text-center py-2 text-[11px] font-bold text-brand-charcoal rounded-lg">
                      {priceRange}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tags Accordion */}
            <div className="bg-white border border-brand-charcoal/5 rounded-[20px] p-5 shadow-xs">
              <button
                onClick={() => setExpandTags(!expandTags)}
                className="flex items-center justify-between w-full font-black text-sm text-brand-charcoal pb-3 border-b border-brand-charcoal/5 focus:outline-none"
              >
                <span>Tags</span>
                {expandTags ? <ChevronUp className="w-4 h-4 text-brand-charcoal/50" /> : <ChevronDown className="w-4 h-4 text-brand-charcoal/50" />}
              </button>

              {expandTags && (
                <div className="pt-4 flex flex-wrap gap-2">
                  {tagsList.map((tag) => {
                    const isActive = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all border",
                          isActive
                            ? "bg-brand-primary border-brand-primary text-white"
                            : "bg-brand-cream/30 border-brand-charcoal/5 text-brand-charcoal/60 hover:border-brand-primary/20 hover:text-brand-primary"
                        )}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

          </aside>

          {/* B. Products Grid & Main content area */}
          <div className="flex-grow">
            
            {/* Header / Results & Sorting info */}
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <span className="text-xs sm:text-sm font-bold text-[#71717A]">
                Showing 1-8 of 52 results
              </span>

              {/* Sorting Select Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#71717A] hidden sm:inline">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-brand-charcoal/5 text-xs font-black text-brand-charcoal py-2 px-3 pr-8 rounded-lg outline-none focus:ring-1 focus:ring-brand-primary appearance-none relative"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2371717a' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundSize: '1.25em 1.25em',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <option>Default Sorting</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Popularity</option>
                  <option>Average Rating</option>
                </select>
              </div>
            </div>

            {/* Products Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-brand-charcoal/5 rounded-[20px] p-3 shadow-xs hover:shadow-lg hover:border-brand-gold/15 transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div>
                    {/* Badges & Image */}
                    <Link href={`/products/${product.id}`} className="block">
                      <div className="relative aspect-square w-full rounded-2xl bg-brand-cream/80 overflow-hidden mb-3 border border-brand-charcoal/5">
                        {/* Badges */}
                        <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1">
                          {product.isNew && (
                            <span className="bg-[#00B0FF] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
                              New Product
                            </span>
                          )}
                          {product.isBestSeller && (
                            <span className="bg-[#E30A5C] text-white text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
                              Best Seller
                            </span>
                          )}
                        </div>

                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-w-sm) 100vw, 200px"
                        />
                      </div>
                    </Link>

                    {/* Ratings */}
                    <div className="flex items-center gap-0.5 mb-1 text-[#FBC02D]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>

                    {/* Product Title */}
                    <Link href={`/products/${product.id}`} className="block">
                      <h4 className="text-xs sm:text-sm font-bold text-brand-charcoal line-clamp-2 mb-3.5 group-hover:text-brand-primary transition-colors min-h-[36px] leading-tight">
                        {product.name}
                      </h4>
                    </Link>
                  </div>

                  {/* Pricing, Stock Status & Add to Cart Button */}
                  <div className="space-y-3.5">
                    
                    {/* Price & Stock Line */}
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm sm:text-base font-extrabold text-brand-charcoal">
                          ₹{product.price}
                        </span>
                        <span className="bg-[#FFD600] text-brand-charcoal text-[9px] font-black px-1.5 py-0.5 rounded-md tracking-wider">
                          7.00 SAR
                        </span>
                      </div>

                      <span
                        className={cn(
                          "text-[9px] font-black uppercase tracking-wider",
                          product.stockStatus === "Only 2 items left" || product.stockStatus === "2 ITEMS"
                            ? "text-[#E30A5C]"
                            : "text-[#00A859]"
                        )}
                      >
                        {product.stockStatus}
                      </span>
                    </div>

                    {/* Wide Burgandy Add Button */}
                    <button
                      className="w-full py-2 bg-brand-primary hover:bg-[#7A062F] text-white text-xs font-black tracking-wider uppercase rounded-xl transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      + ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Grid Controls */}
            <div className="flex items-center justify-center gap-2.5 mt-14 pb-8">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="w-9 h-9 rounded-lg border border-brand-charcoal/10 flex items-center justify-center text-brand-charcoal font-bold hover:bg-brand-cream transition-all"
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              <button
                onClick={() => setCurrentPage(1)}
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center font-bold transition-all",
                  currentPage === 1 
                    ? "bg-brand-primary text-white" 
                    : "border border-brand-charcoal/10 text-brand-charcoal hover:bg-brand-cream"
                )}
              >
                1
              </button>
              <button
                onClick={() => setCurrentPage(2)}
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center font-bold transition-all",
                  currentPage === 2 
                    ? "bg-brand-primary text-white" 
                    : "border border-brand-charcoal/10 text-brand-charcoal hover:bg-brand-cream"
                )}
              >
                2
              </button>
              <button
                onClick={() => setCurrentPage(3)}
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center font-bold transition-all",
                  currentPage === 3 
                    ? "bg-brand-primary text-white" 
                    : "border border-brand-charcoal/10 text-brand-charcoal hover:bg-brand-cream"
                )}
              >
                3
              </button>
              <span className="text-brand-charcoal/40 px-1 font-bold text-xs select-none">...</span>
              <button
                onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                className="w-9 h-9 rounded-lg border border-brand-charcoal/10 flex items-center justify-center text-brand-charcoal font-bold hover:bg-brand-cream transition-all"
                disabled={currentPage === 5}
              >
                &gt;
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Mobile Filters Slide-in Modal Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs">
          
          {/* Modal content */}
          <div className="w-4/5 max-w-sm bg-white h-full flex flex-col p-6 overflow-y-auto space-y-6 animate-slide-in-right relative">
            <button
              onClick={() => setShowMobileFilters(false)}
              className="absolute top-4 right-4 text-brand-charcoal hover:text-brand-primary p-2"
              aria-label="Close filters"
            >
              Close [X]
            </button>
            
            <h3 className="text-lg font-black text-brand-charcoal pt-4">Filters</h3>

            {/* Categories filter */}
            <div className="border-t border-brand-charcoal/5 pt-4">
              <h4 className="font-black text-sm text-brand-charcoal mb-3">Categories</h4>
              <div className="relative flex items-center mb-3">
                <input
                  type="text"
                  placeholder="Search Items..."
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  className="w-full bg-brand-cream/40 placeholder-brand-charcoal/30 text-xs px-3.5 py-2.5 pr-9 rounded-full border border-brand-charcoal/5 focus:outline-none font-semibold"
                />
                <Search className="absolute right-3 w-3.5 h-3.5 text-brand-charcoal/40" />
              </div>
              <div className="space-y-3">
                {filteredCategoriesList.map((category) => {
                  const isChecked = selectedCategories.includes(category.name);
                  return (
                    <label key={category.name} className="flex items-center justify-between cursor-pointer text-xs text-brand-charcoal/80 font-bold">
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCategoryToggle(category.name)}
                          className="w-4 h-4 rounded accent-brand-primary"
                        />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-[10px] text-brand-charcoal/40 font-bold bg-brand-cream/50 px-2 py-0.5 rounded-md">({category.count})</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Highlights filter */}
            <div className="border-t border-brand-charcoal/5 pt-4">
              <h4 className="font-black text-sm text-brand-charcoal mb-3">Highlight</h4>
              <div className="space-y-3">
                {highlightsList.map((hl) => {
                  const isChecked = selectedHighlights.includes(hl.name);
                  return (
                    <label key={hl.name} className="flex items-center justify-between cursor-pointer text-xs text-brand-charcoal/80 font-bold">
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleHighlightToggle(hl.name)}
                          className="w-4 h-4 rounded accent-brand-primary"
                        />
                        <span>{hl.name}</span>
                      </div>
                      <span className="text-[10px] text-brand-charcoal/40 font-bold bg-brand-cream/50 px-2 py-0.5 rounded-md">({hl.count})</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price filter */}
            <div className="border-t border-brand-charcoal/5 pt-4">
              <h4 className="font-black text-sm text-brand-charcoal mb-3">Price</h4>
              <div className="space-y-4">
                <input
                  type="range"
                  min="2500"
                  max="10000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-brand-primary h-1.5 bg-brand-cream rounded-lg"
                />
                <div className="flex items-center justify-between text-xs font-bold text-brand-charcoal/70">
                  <span>Min: 2500</span>
                  <span>Max: {priceRange}</span>
                </div>
              </div>
            </div>

            {/* Tags filter */}
            <div className="border-t border-brand-charcoal/5 pt-4">
              <h4 className="font-black text-sm text-brand-charcoal mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tagsList.map((tag) => {
                  const isActive = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={cn(
                        "px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all",
                        isActive ? "bg-brand-primary border-brand-primary text-white" : "bg-brand-cream/30 border-brand-charcoal/5 text-brand-charcoal/60"
                      )}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => setShowMobileFilters(false)}
              className="w-full py-3 bg-brand-primary hover:bg-[#7A062F] text-white text-xs font-black rounded-xl uppercase tracking-wider shadow-md transition-all mt-4"
            >
              APPLY FILTERS
            </button>
          </div>

        </div>
      )}
    </main>
  );
}

export default ProductListingPage;
