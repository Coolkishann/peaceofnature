import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BreatheSection from "@/components/BreatheSection";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import VideoSanctuarySection from "@/components/VideoSanctuarySection";
import BackToNatureSection from "@/components/BackToNatureSection";
import GalleryShowcaseSection from "@/components/GalleryShowcaseSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialShowcase from "@/components/SocialShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background font-body-md overflow-x-hidden">
      {/* Split Navbar */}
      <Navbar />

      {/* Main Page Layout using Semantic HTML */}
      <main className="flex-1 w-full">
        {/* Parallax Image Carousel Hero */}
        <HeroSection />

        {/* Quiet Luxury Breathing typo-graphic intro */}
        <BreatheSection />

        {/* Staycation, Restaurant & Resort Services Showcase */}
        <ShowcaseGrid />

        {/* Cinematic Video Sanctuary */}
        <VideoSanctuarySection />

        {/* Staggered Nature Image Gallery Grid */}
        <BackToNatureSection />

        {/* Immersive Gallery Showcase with Parallax */}
        <GalleryShowcaseSection />

        {/* Pricing Tiers & Packages */}
        <PricingSection />

        {/* Testimonials Quote Slider */}
        <TestimonialsSection />

        {/* Social Instagram Reels Showcase */}
        <SocialShowcase />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
