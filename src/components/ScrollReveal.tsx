"use client";

import React from "react";
import { motion } from "framer-motion";

interface RevealWordsProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealWords({ text, className = "", delay = 0 }: RevealWordsProps) {
  const words = text.split(" ");

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-1 mr-[0.25em]">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.04,
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface RevealFadeProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
}

export function RevealFade({ children, delay = 0, yOffset = 25 }: RevealFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
