"use client";

import React from "react";
import { motion } from "framer-motion";
import { RevealWords, RevealFade } from "./ScrollReveal";

const natureImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
    alt: "Outdoor jungle fire pit deck at night",
    className: "md:col-start-4 md:col-end-7 aspect-[4/3]",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800",
    alt: "Palms surrounding luxury resort villa exterior",
    className: "md:col-start-7 md:col-end-10 aspect-[4/3]",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800",
    alt: "Tropical palms on hill overlooking bungalow",
    className: "md:col-start-1 md:col-end-4 aspect-[3/4]",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    alt: "Resort villa facade with beautiful terraced lawns",
    className: "md:col-start-4 md:col-end-10 aspect-[16/10]",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    alt: "Ornate stone temple gate in lush forest scenery",
    className: "md:col-start-10 md:col-end-13 aspect-[3/4]",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1545235621-546b4754ba73?auto=format&fit=crop&q=80&w=800",
    alt: "Steps climbing a lush green hillside",
    className: "md:col-start-2 md:col-end-5 aspect-[3/5]",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
    alt: "Open-air resort pavilion lounge seating area",
    className: "md:col-start-5 md:col-end-9 aspect-[4/3]",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    alt: "Luxury suite interior with woven bamboo screen divider",
    className: "md:col-start-9 md:col-end-12 aspect-[3/5]",
  },
];

export default function BackToNatureSection() {
  return (
    <section className="py-section-gap px-margin-desktop bg-background text-on-surface max-w-[1440px] mx-auto overflow-hidden">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <RevealWords
            text="Back to the nature"
            className="font-headline-lg text-[40px] md:text-[56px] lg:text-[68px] text-primary font-light tracking-tight justify-center"
          />
        </div>

        {/* Asymmetrical Staggered Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch w-full">
          {natureImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: idx * 0.05,
              }}
              className={`w-full overflow-hidden rounded-[24px] shadow-sm relative group bg-surface-container-low border border-primary/5 ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 select-none pointer-events-none"
              />
              {/* Subtle visual lighting shadow */}
              <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
