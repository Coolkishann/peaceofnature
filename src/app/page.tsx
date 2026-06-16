import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BreatheSection from "@/components/BreatheSection";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import SustainabilitySection from "@/components/SustainabilitySection";
import VideoSanctuarySection from "@/components/VideoSanctuarySection";
import BackToNatureSection from "@/components/BackToNatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialShowcase from "@/components/SocialShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-white font-body-md overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Page */}
      <main className="flex-1 w-full">
        {/* Cinematic Video Hero */}
        <HeroSection />

        {/* Typographic Breathing Intro */}
        <BreatheSection />

        {/* Services Showcase */}
        <ShowcaseGrid />

        {/* Sustainability Inline Text Mask */}
        <SustainabilitySection />

        {/* Expanding Video Sanctuary */}
        <VideoSanctuarySection />

        {/* Nature Image Gallery Grid */}
        <BackToNatureSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Social Showcase */}
        <SocialShowcase />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
