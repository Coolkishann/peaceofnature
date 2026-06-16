"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const wordsAndMedia = [
  "At", "Peace", "of", "Nature,", "we", "are", "deeply", "committed", "to", "sustainability.", "We", "believe", "in", "a", "greener,", "more", "sustainable", "future,",
  { type: "image", src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400", alt: "Nature Leaves", w: "w-[80px] sm:w-[100px] md:w-[140px]" },
  "it's", "at", "the", "core", "of", "everything", "we", "do.", "Our", "practices", "are", "designed", "with", "environmental",
  { type: "image", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400", alt: "Mountain Landscape", w: "w-[100px] sm:w-[120px] md:w-[160px]" },
  "responsibility", "in", "mind,", "from", "sourcing", "eco-friendly", "materials",
  { type: "image", src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400", alt: "Sustainable Earth", w: "w-[70px] sm:w-[90px] md:w-[120px]" },
  "to", "reducing", "our", "carbon", "footprint."
];

export default function SustainabilitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use Framer Motion's useScroll for scrub-based animation (GSAP ScrollTrigger equivalent)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start animating when the top of the section is at 80% of viewport
    // End animating when the bottom of the section is at 40% of viewport
    offset: ["start 80%", "end 40%"],
  });

  return (
    <section 
      ref={containerRef} 
      className="px-6 md:px-margin-desktop bg-[#F9F9F9] text-black overflow-hidden flex items-center justify-center min-h-[100vh]"
    >
      <div className="max-w-[1200px] mx-auto text-center md:text-justify leading-[1.6] md:leading-[1.8]">
        <p className="font-instrument-serif text-[22px] sm:text-[40px] md:text-[56px] lg:text-[34px] tracking-tight">
          {wordsAndMedia.map((item, i) => {
            // Calculate the specific progress range for this word/image
            const start = i / wordsAndMedia.length;
            const end = start + (1 / wordsAndMedia.length);

            if (typeof item === 'string') {
              return (
                <React.Fragment key={i}>
                  <Word progress={scrollYProgress} range={[start, end]}>
                    {item}
                  </Word>
                  {/* Space after each word to maintain inline wrapping */}
                  {" "}
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={i}>
                  <ImageMask 
                    item={item} 
                    progress={scrollYProgress} 
                    range={[start, end]} 
                  />
                  {" "}
                </React.Fragment>
              );
            }
          })}
        </p>
      </div>
    </section>
  );
}

// Subcomponent for animating individual text words
interface WordProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  // Mapping scroll progress to opacity, equivalent to GSAP color fade
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="transition-opacity duration-75 inline-block">
      {children}
    </motion.span>
  );
};

// Subcomponent for animating inline pill images
interface ImageProps {
  item: { src: string; alt: string; w: string };
  progress: MotionValue<number>;
  range: [number, number];
}

const ImageMask = ({ item, progress, range }: ImageProps) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  // Optional: fade from grayscale to color as it scrubs
  const filter = useTransform(progress, range, ["grayscale(100%)", "grayscale(0%)"]);
  
  return (
    <motion.span
      className={`inline-block align-middle mx-1 overflow-hidden rounded-full h-[40px] sm:h-[50px] md:h-[70px] ${item.w}`}
      style={{ opacity, filter }}
    >
      <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
    </motion.span>
  );
};
