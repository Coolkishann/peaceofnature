"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Henderson",
    role: "Luxury Travel Editor",
    quote:
      "Peace of Nature redefined quiet luxury for us. The Overwater Lagoon Villa with private beach butler access was breathtaking.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120",
  },
  {
    id: 2,
    name: "Marcus Vane",
    role: "Creative Director",
    quote:
      "As a designer, I was wowed by the organic integration of architecture and coastal cliffs. A calming, aesthetic masterpiece.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Wellness Consultant",
    quote:
      "The holistic spa therapies were completely restorative. From organic botanical treatments to ocean waves beneath — the ultimate sanctuary.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120",
  },
];

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % reviews.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const review = reviews[activeIdx];

  return (
    <section className="py-section-gap px-margin-desktop bg-white text-on-surface max-w-[1440px] mx-auto overflow-hidden">
      {/* Section Header — minimal */}
      <div className="mb-20 max-w-xl">
        <span
          className="font-label-md text-sm block mb-4 tracking-wider"
          style={{ color: "#6F6F6F" }}
        >
          Testimonials
        </span>
        <h2 className="font-instrument-serif text-[36px] md:text-[48px] font-normal leading-[1.1] tracking-tight">
          What our guests say
        </h2>
      </div>

      {/* Minimal Quote Card */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeIdx}
            custom={direction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            {/* Quote */}
            <p className="font-instrument-serif text-[24px] sm:text-[32px] md:text-[40px] font-normal leading-[1.2] tracking-tight max-w-3xl mx-auto italic">
              &ldquo;{review.quote}&rdquo;
            </p>

            {/* Profile — minimal */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="font-label-md text-sm font-medium">
                  {review.name}
                </h4>
                <span
                  className="font-label-md text-xs"
                  style={{ color: "#6F6F6F" }}
                >
                  {review.role}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation — minimal arrows + dots */}
        <div className="flex items-center justify-center gap-8 mt-14">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-black/10 hover:border-black/30 flex items-center justify-center active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeIdx ? 1 : -1);
                  setActiveIdx(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIdx
                    ? "bg-black w-8"
                    : "bg-black/15 w-2 hover:bg-black/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-black/10 hover:border-black/30 flex items-center justify-center active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
