import React from "react";
import HeroSection from "./sections/HeroSection";
import TrendingProducts from "./sections/TrendingProducts";
import FeaturesRow from "./sections/FeaturesRow";
import Categories from "./sections/Categories";
import ImportedProducts from "./sections/ImportedProducts";
import ValueBundles from "./sections/ValueBundles";
import BudgetBoxBanner from "./sections/BudgetBoxBanner";
import BestSellers from "./sections/BestSellers";
import AirportHomeBanner from "./sections/AirportHomeBanner";
import Testimonials from "./sections/Testimonials";
import TopRatedProducts from "./sections/TopRatedProducts";
import AppDownload from "./sections/AppDownload";
import InstagramGallery from "./sections/InstagramGallery";

function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <TrendingProducts />
      <FeaturesRow />
      <Categories />
      <ImportedProducts />
      <ValueBundles />
      <BudgetBoxBanner />
      <BestSellers />
      <ValueBundles />
      <AirportHomeBanner />
      <Testimonials />
      <TopRatedProducts />
      <AppDownload />
      <InstagramGallery />
    </main>
  );
}

export default Home;
