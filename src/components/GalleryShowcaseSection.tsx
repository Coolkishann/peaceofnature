"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=400",
    alt: "Luxury villa exterior with pool",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1545235621-546b4754ba73?auto=format&fit=crop&q=80&w=400",
    alt: "Lush green hillside path",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400",
    alt: "Fine dining experience",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400",
    alt: "Tropical bungalow retreat",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400",
    alt: "Resort facade with lawns",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=400",
    alt: "Open-air pavilion lounge",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=400",
    alt: "Temple in lush forest",
  },
];

export default function GalleryShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the background image
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 0.98]);

  // Gallery strip slides in from the right
  const stripX = useTransform(scrollYProgress, [0.15, 0.55], ["30%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-primary"
    >
      {/* Full-bleed background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1800"
          alt="Luxury resort aerial view"
          className="w-full h-full object-cover pointer-events-none select-none"
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </motion.div>

      {/* Top-left heading text */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-margin-desktop pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start gap-6"
        >
          <div>
            <h2 className="font-headline-lg text-[36px] sm:text-[44px] md:text-[52px] font-bold text-white leading-[1.1] tracking-tight max-w-lg">
              See the Beauty of
              <br />
              <span className="text-secondary">Peace of Nature</span>
            </h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="font-body-md text-white/70 text-[14px] md:text-[15px] max-w-xs leading-relaxed font-light mt-2"
          >
            Let the pictures speak—take a glimpse of the paradise waiting for
            you.
          </motion.p>
        </motion.div>
      </div>

      {/* Floating gallery thumbnail strip at the bottom */}
      <div className="absolute bottom-10 md:bottom-16 left-0 right-0 z-20">
        <div className="max-w-[1440px] mx-auto px-margin-desktop">
          <motion.div
            style={{ x: stripX }}
            className="flex items-center gap-4"
          >
            {galleryImages.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.08,
                }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="flex-shrink-0 w-[100px] h-[130px] md:w-[120px] md:h-[155px] rounded-[20px] overflow-hidden shadow-lg cursor-pointer relative group border-2 border-white/20"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            ))}

            {/* "Explore Our Gallery" CTA capsule */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.6,
              }}
              className="flex-shrink-0 w-[100px] h-[130px] md:w-[120px] md:h-[155px] rounded-[20px] bg-white/15 backdrop-blur-md border border-white/25 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-white/25 transition-colors duration-300 group"
            >
              <span className="font-label-md text-[10px] md:text-[11px] tracking-wider text-white/90 font-semibold text-center leading-tight uppercase">
                Explore
                <br />
                Our Gallery
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
