"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: 1, title: "Oceanfront Sanctuary", category: "STAYS", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, title: "Michelin Dining Deck", category: "DINING", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Holistic Spa Retreat", category: "WELLNESS", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Private Yacht Cruise", category: "WELLNESS", image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Sunset Lagoon Suite", category: "STAYS", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200" },
  { id: 6, title: "Lagoon Canopy Dinner", category: "DINING", image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800" },
  { id: 7, title: "Infinity Thermal Soak", category: "WELLNESS", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Tropical Gardens Lodge", category: "STAYS", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200" },
];

const categories = ["ALL", "STAYS", "DINING", "WELLNESS"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredItems = activeCategory === "ALL" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-black font-body-md overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 w-full pt-[180px] pb-32 px-6">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-label-md text-sm tracking-wider uppercase mb-6"
              style={{ color: "#6F6F6F" }}
            >
              The Visuals
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-instrument-serif text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] tracking-tight"
            >
              A glimpse into <br />
              <em className="italic" style={{ color: "#6F6F6F" }}>
                eternity.
              </em>
            </motion.h1>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label-md text-[11px] tracking-widest uppercase transition-colors duration-300 ${
                  activeCategory === cat
                    ? "text-black border-b border-black pb-1"
                    : "text-[#6F6F6F] hover:text-black pb-1"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Minimalist Masonry Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group break-inside-avoid overflow-hidden rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Caption */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="font-label-md text-[10px] text-white/70 tracking-widest uppercase mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-instrument-serif text-white text-2xl font-normal tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
