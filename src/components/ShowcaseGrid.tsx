"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { RevealWords, RevealFade } from "./ScrollReveal";

const showcases = [
  {
    id: "staycation",
    category: "01",
    title: "Villas & Private Lodges",
    desc: "Experience ultimate quiet luxury. Our signature villas blend organic architecture with floor-to-ceiling vistas, private infinity pools, and round-the-clock bespoke butler services.",
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000",
    linkText: "EXPLORE VILLAS",
  },
  {
    id: "restaurant",
    category: "02",
    title: "Gourmet Coastal Dining",
    desc: "Indulge in seasonal organic menus curated by Michelin-trained chefs. Savor freshly sourced seafood, fine local vintages, and starlit private dining experiences directly on the shore.",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
    linkText: "VIEW MENUS",
  },
  {
    id: "services",
    category: "03",
    title: "Bespoke Resort Services",
    desc: "Elevate your escape. Enjoy custom wellness therapies at our holistic spa, schedule private yacht excursions, or coordinate special beachfront wedding ceremonies with our events planners.",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000",
    linkText: "EXPLORE SERVICES",
  },
];

export default function ShowcaseGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="discover"
      className="py-section-gap px-margin-desktop bg-white text-on-surface max-w-[1440px] mx-auto"
    >
      {/* Section Header */}
      <div className="mb-16">
        <RevealFade>
          <span className="font-label-md text-label-md text-secondary block mb-4 uppercase tracking-[0.2em] text-[13px] font-semibold">
            Discover Peace of Nature
          </span>
        </RevealFade>
        <RevealWords
          text="Curated Escapes, Designed for You"
          className="font-headline-lg text-[36px] md:text-[48px] font-bold text-primary leading-tight"
        />
      </div>

      {/* Modern Expanding Cards Row */}
      <div className="flex flex-col md:flex-row gap-5 w-full">
        {showcases.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          const hasHover = hoveredIdx !== null;

          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative overflow-hidden rounded-[28px] cursor-pointer group shadow-lg"
              style={{
                flex: isHovered ? 2.5 : hasHover ? 0.75 : 1,
                transition: "flex 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Image */}
              <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
                <motion.img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  animate={{ scale: isHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                {/* Category Number */}
                <span className="font-label-md text-[11px] tracking-[0.3em] text-white/50 font-semibold uppercase block mb-3">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="font-headline-sm text-[22px] md:text-[26px] font-bold text-white leading-tight mb-3">
                  {item.title}
                </h3>

                {/* Description - only visible on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-body-md text-white/70 text-[14px] leading-relaxed font-light mb-4 max-w-md">
                        {item.desc}
                      </p>
                      <button className="flex items-center gap-2 font-label-md text-[12px] tracking-widest font-semibold text-white hover:text-secondary group/btn transition-colors">
                        {item.linkText}{" "}
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
