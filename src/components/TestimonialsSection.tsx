"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { RevealWords, RevealFade } from "./ScrollReveal";

const reviews = [
  {
    id: 1,
    name: "Sarah Henderson",
    role: "Luxury Travel Editor",
    rating: 5,
    quote:
      "Peace of Nature redefined quiet luxury for us. The Overwater Lagoon Villa with private beach butler access was breathtaking. Every culinary dish at the beachfront diner was a masterclass in coastal flavors.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Marcus Vane",
    role: "Creative Director",
    rating: 5,
    quote:
      "As a designer, I was wowed by the organic integration of architecture and coastal cliffs. The attention to materials and light throughout the resort creates a calming, aesthetic environment. A masterpiece.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Wellness Consultant",
    rating: 5,
    quote:
      "The holistic spa therapies at Peace of Nature were completely restorative. From personalized organic botanical treatments to the sound of ocean waves beneath the floor, this is the ultimate wellness sanctuary.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
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

  // Auto-advance every 6s
  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  const review = reviews[activeIdx];

  return (
    <section className="py-section-gap px-margin-desktop bg-surface-container-low text-on-surface max-w-[1440px] mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16 flex flex-col items-center">
        <RevealFade>
          <span className="font-label-md text-label-md text-secondary block mb-3 uppercase tracking-[0.2em] text-[13px] font-semibold">
            Guest Experiences
          </span>
        </RevealFade>
        <RevealWords
          text="Loved by Discerning Travelers"
          className="font-headline-lg text-[32px] md:text-[40px] font-bold text-primary justify-center"
        />
      </div>

      {/* Modern Split Testimonial Card */}
      <div className="max-w-5xl mx-auto">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={activeIdx}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-[32px] overflow-hidden bg-white shadow-xl border border-primary/5"
          >
            {/* Left: Image */}
            <div className="relative h-[300px] md:h-[460px] overflow-hidden">
              <motion.img
                key={review.image}
                src={review.image}
                alt={`${review.name} experience`}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              {/* Subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 pointer-events-none" />
            </div>

            {/* Right: Quote & Details */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-headline-sm text-[18px] md:text-[20px] leading-relaxed text-primary font-light italic mb-8">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-primary/10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-primary/10"
                />
                <div>
                  <h4 className="font-headline-sm text-[15px] font-bold text-primary">
                    {review.name}
                  </h4>
                  <span className="font-label-md text-[12px] text-on-surface-variant tracking-wide font-light">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-primary/15 hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center text-primary active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIdx
                    ? "bg-primary w-8"
                    : "bg-primary/20 hover:bg-primary/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-primary/15 hover:border-primary/40 hover:bg-primary/5 flex items-center justify-center text-primary active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
