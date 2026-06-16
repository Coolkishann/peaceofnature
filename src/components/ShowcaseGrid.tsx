"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RevealWords, RevealFade } from "./ScrollReveal";

const showcases = [
  {
    id: "staycation",
    number: "01",
    title: "Villas & Private Lodges",
    desc: "Signature villas blending organic architecture with private infinity pools and bespoke butler services.",
    // Premium resort villa image
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "restaurant",
    number: "02",
    title: "Gourmet Coastal Dining",
    desc: "Seasonal organic menus by Michelin-trained chefs. Freshly sourced seafood and starlit dining on the shore.",
    // Premium dining/restaurant image
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "services",
    number: "03",
    title: "Bespoke Resort Services",
    desc: "Holistic spa therapies, private yacht excursions, and beachfront wedding coordination.",
    // Premium wellness/spa/pool image
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function ShowcaseGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse position for the floating image cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="discover"
      className="py-section-gap px-margin-desktop bg-white text-on-surface max-w-[1440px] mx-auto relative"
    >
      {/* Minimal Section Header */}
      <div className="mb-20 max-w-xl">
        <RevealFade>
          <span
            className="font-label-md text-sm block mb-4 tracking-wider uppercase"
            style={{ color: "#6F6F6F" }}
          >
            What we offer
          </span>
        </RevealFade>
        <RevealWords
          text="Curated Escapes, Designed for You"
          className="font-instrument-serif text-[36px] md:text-[48px] font-normal leading-[1.1] tracking-tight"
        />
      </div>

      {/* Minimal Cards — clean list-style layout */}
      <div className="flex flex-col gap-0 relative z-10" onMouseLeave={() => setHoveredIdx(null)}>
        {showcases.map((item, idx) => (
          <motion.div
            key={item.id}
            onMouseEnter={() => setHoveredIdx(idx)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              delay: idx * 0.1,
            }}
            className="group cursor-pointer border-t border-black/10 py-10 md:py-14"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
              {/* Number */}
              <span
                className="font-label-md text-sm tracking-wider shrink-0 w-12 transition-colors duration-500 group-hover:text-black"
                style={{ color: "#6F6F6F" }}
              >
                {item.number}
              </span>

              {/* Title */}
              <h3 className="font-instrument-serif text-[28px] md:text-[36px] font-normal leading-tight flex-1 tracking-tight transition-colors duration-500 group-hover:text-[#6F6F6F]">
                {item.title}
              </h3>

              {/* Description — right side */}
              <p
                className="font-body-md text-sm leading-relaxed max-w-xs shrink-0 hidden md:block transition-colors duration-500 group-hover:text-black"
                style={{ color: "#6F6F6F" }}
              >
                {item.desc}
              </p>

              {/* Arrow */}
              <ArrowUpRight
                className="w-5 h-5 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black"
                style={{ color: "#6F6F6F" }}
              />
            </div>
          </motion.div>
        ))}
        {/* Bottom border */}
        <div className="border-t border-black/10" />
      </div>

      {/* Custom Image Cursor Follower */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none fixed z-50 overflow-hidden shadow-2xl rounded-xl hidden lg:block"
            style={{
              width: "320px",
              height: "200px",
              // Center the image on the cursor
              left: mousePos.x - 160,
              top: mousePos.y - 100,
            }}
          >
            {/* The image itself */}
            <motion.img
              key={hoveredIdx}
              src={showcases[hoveredIdx].src}
              alt="Hover preview"
              className="w-full h-full object-cover"
              // Slight zoom effect when switching images
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
