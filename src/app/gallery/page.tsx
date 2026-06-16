"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: 1, title: "Oceanfront Sanctuary", category: "STAYS", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200" },
  { id: 2, title: "Michelin Dining Deck", category: "DINING", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Sunset Lagoon Suite", category: "STAYS", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200" },
  { id: 6, title: "Lagoon Canopy Dinner", category: "DINING", image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800" },
  { id: 8, title: "Tropical Gardens Lodge", category: "STAYS", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200" },
  {
    id: 1,
    title: "Beachfront Resort Escape",
    category: "STAYS",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Open-Air Dining Pavilion",
    category: "DINING",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Infinity Pool Retreat",
    category: "WELLNESS",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Resort Pool Adventure",
    category: "EXPERIENCES",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "Palm Grove Villas",
    category: "STAYS",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 6,
    title: "Beachside Sunset Dining",
    category: "DINING",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 7,
    title: "Garden Wellness Escape",
    category: "WELLNESS",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 8,
    title: "Palm Tree Garden Walk",
    category: "STAYS",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
  },

  // Wedding Celebration
  {
    id: 9,
    title: "Destination Wedding Celebration",
    category: "WEDDINGS",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 10,
    title: "Elegant Wedding Reception",
    category: "WEDDINGS",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
  },

  // Waterslides & Pool
  {
    id: 11,
    title: "Swimming Pool With Slides",
    category: "EXPERIENCES",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 12,
    title: "Family Pool Adventure",
    category: "EXPERIENCES",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80&w=1200",
  },

  // Brown + Golden Restaurant
  {
    id: 13,
    title: "Golden Lantern Restaurant",
    category: "DINING",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 14,
    title: "Rustic Wooden Dining Hall",
    category: "DINING",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200",
  },

  // Heritage Garden
  {
    id: 15,
    title: "Heritage Garden Courtyard",
    category: "GARDENS",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 16,
    title: "Palm Heritage Walk",
    category: "GARDENS",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200",
  },

  // Beach Vibes
  {
    id: 17,
    title: "Coconut Beach Sunset",
    category: "BEACH",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 18,
    title: "Palm-Lined Coastline",
    category: "BEACH",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 1,
    title: "Beachfront Resort Escape",
    category: "STAYS",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Open-Air Dining Pavilion",
    category: "DINING",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Tropical Pool Retreat",
    category: "WELLNESS",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Pool Slides Adventure",
    category: "EXPERIENCES",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "Palm Grove Villas",
    category: "STAYS",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 6,
    title: "Beachside Sunset Dining",
    category: "DINING",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 7,
    title: "Garden Wellness Escape",
    category: "WELLNESS",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 8,
    title: "Palm Tree Garden Walk",
    category: "STAYS",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200",
  },
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
                className={`font-label-md text-[11px] tracking-widest uppercase transition-colors duration-300 ${activeCategory === cat
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
