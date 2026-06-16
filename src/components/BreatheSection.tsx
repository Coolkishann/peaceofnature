"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BreatheSection() {
  const line1Words = ["Open", "your", "eyes,"];
  const line2Left = ["breath", "in"];
  const line2Right = ["and", "live"];

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: i * 0.06,
      },
    }),
  };

  return (
    <section className="py-24 md:py-32 px-margin-desktop bg-background text-on-surface max-w-[1440px] mx-auto overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <div className="text-center font-serif italic font-light text-primary tracking-tight leading-[1.3] text-[34px] sm:text-[48px] md:text-[62px] lg:text-[76px] select-none">
          
          {/* Row 1: Animated word-by-word */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-x-[0.3em]">
            {line1Words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden py-1">
                <motion.span
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10%" }}
                  variants={wordVariants}
                  className="inline-block will-change-transform"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>
          
          {/* Row 2: Animated word-by-word with inline images */}
          <div className="flex flex-wrap items-center justify-center gap-x-[0.3em] gap-y-3">
            {line2Left.map((word, i) => (
              <span key={`l-${i}`} className="inline-block overflow-hidden py-1">
                <motion.span
                  custom={line1Words.length + i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10%" }}
                  variants={wordVariants}
                  className="inline-block will-change-transform"
                >
                  {word}
                </motion.span>
              </span>
            ))}
            
            {/* Inline Gallery Capsule */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="inline-flex items-center gap-2 md:gap-3 mx-1 align-middle"
            >
              {/* Image 1 */}
              <span className="w-[48px] h-[60px] sm:w-[65px] sm:h-[82px] md:w-[78px] md:h-[98px] rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-sm inline-block bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1545235621-546b4754ba73?auto=format&fit=crop&q=80&w=300"
                  alt="Lush tropical valley"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </span>

              {/* Animated spacer block */}
              <span className="w-[48px] h-[60px] sm:w-[65px] sm:h-[82px] md:w-[78px] md:h-[98px] rounded-[14px] sm:rounded-[20px] inline-block bg-surface-container-high border border-primary/5 relative">
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-secondary/25 animate-ping" />
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary absolute" />
                </span>
              </span>

              {/* Image 2 */}
              <span className="w-[48px] h-[60px] sm:w-[65px] sm:h-[82px] md:w-[78px] md:h-[98px] rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-sm inline-block bg-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=300"
                  alt="Serene tropical path"
                  className="w-full h-full object-cover pointer-events-none"
                />
              </span>
            </motion.span>

            {line2Right.map((word, i) => (
              <span key={`r-${i}`} className="inline-block overflow-hidden py-1">
                <motion.span
                  custom={line1Words.length + line2Left.length + i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10%" }}
                  variants={wordVariants}
                  className="inline-block will-change-transform"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
