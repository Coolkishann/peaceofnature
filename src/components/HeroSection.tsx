"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ChevronRight, ArrowDown } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const slides = [
  {
    id: 0,
    title: "Escape to Quiet Luxury",
    subtitle: "Peace of Nature Villa",
    desc: "Discover cliffside modern villas with oceanfront infinity pools overlooking the pristine tropical bay.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKYEeQzjzYp3rVqPuyY47xOgUEmfno_g3iWSqPETsLX9kIEiXXYLkPmCKZRQlWKxHewhMegonrEVrm8CdS2dIx4uMDNUIE-rw3XBmpoufOTaTIfKKxD3TN_Sn_Zl5uS0ITf3e_w3rSbPEtkNWCgWL-4rWacqTZSsBXr4GGl801wV3E5GODnhJmHvOOuj2KaAl0f15YYQDHvqkKuvaL5GwGEAGXp2eFpG_qq1NGohYnfbOAATqWKmqi7_mZWHasHpnv8rYXlZM3KwGN",
  },
  {
    id: 1,
    title: "Unwind by Crystal Waters",
    subtitle: "Exclusive Lagoon Suites",
    desc: "Wake up to endless ocean views from a minimalist balcony featuring private beach-deck entrances.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3xACXopbM-XizcNkWStQYFPHxU0S86_dTKQcHflR40gXT-_VBssw0XfuVUHmQ_IV8F-zAtxeYhY2RfRQ1YDHsednPU-5sefEHIUgLNobdNA-OD90ii5NyPA7HZGJEBRwRU-I1gcsC8fgqoDS_1ihO3mjgRqnVHbhGdZsmPm67UH6OdLsG7D6BKvxvP09N-5z8XXB_5NFHGhzXXxHSqB7BxKHQfaT1WLFemWWnmx0OkBjF7Ih9yhLHuGFK7itGXgXHX2HS98iKaKXn",
  },
  {
    id: 2,
    title: "Dine Under the Stars",
    subtitle: "Starlit Beachfront Canopy",
    desc: "Indulge in fine wine and organic culinary harvests freshly prepared by gourmet chefs on the sand.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-ncCdNUQAwGZij4ZLvmPintu1N--n1odiZCfrwWUUbjiDUhL_STSMxqiBfaVSpkauKTs6KI7Dps6Jr3LK70BV_Oi82MKma0bhS-L1wZQ5HS0RwbfpRjtpZ_y5moJiehuHl8mHBs7MZhd72C1cGPN6S5tQpjL-FjeMS1EmF2MspeRiG_0_nn4RbqG7fqsyBV_rC8Oev8bMpTSgTXGzpPkbL77R2K3Ds38-NOMMSq5A3JQpcGRMhnctt-zOM_q3Tcmi2MGhrkIiX4fr",
  },
];

const AUTO_PLAY_TIME = 6000; // 6 seconds

export default function HeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Auto-play timer implementation
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / AUTO_PLAY_TIME) * 100);
      setProgress(pct);

      if (elapsed >= AUTO_PLAY_TIME) {
        setActiveIdx((prev) => (prev + 1) % slides.length);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [activeIdx]);

  // GSAP Parallax background logic
  useGSAP(
    () => {
      gsap.fromTo(
        bgRef.current,
        { yPercent: -8 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  const handleManualChange = (index: number) => {
    setActiveIdx(index);
  };

  const handleScrollDown = () => {
    // Lenis integration: smooth scroll to home sections
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo("#discover", { offset: 0, duration: 1.5 });
    } else {
      document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[850px] w-full bg-black overflow-hidden flex flex-col justify-between"
    >
      {/* Background Images with Zoom & Parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0 h-[115%] w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIdx}
            src={slides[activeIdx].src}
            alt={slides[activeIdx].title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.75, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover select-none"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/75"></div>
      </div>

      {/* Hero Text Overlay Content */}
      <div className="relative z-10 px-margin-desktop md:px-margin-desktop flex-1 flex flex-col justify-center items-start pt-32 max-w-[1440px] mx-auto w-full">
        <div className="max-w-2xl text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <span className="font-label-md text-label-md tracking-[0.25em] text-white/75 uppercase block text-[13px] font-semibold">
                {slides[activeIdx].subtitle}
              </span>
              <h1 className="font-headline-lg text-[48px] sm:text-[64px] md:text-[80px] leading-[1.1] font-bold tracking-tight text-white flex flex-wrap">
                {slides[activeIdx].title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden py-1 mr-4">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
                      className="inline-block will-change-transform"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>
              <p className="font-body-md text-white/80 text-[16px] md:text-[18px] max-w-md mt-4 leading-relaxed font-light">
                {slides[activeIdx].desc}
              </p>
              <div className="pt-6">
                <button
                  onClick={handleScrollDown}
                  className="group bg-white text-primary px-8 py-3.5 rounded-full font-label-md text-[13px] tracking-widest font-semibold flex items-center gap-2 hover:bg-white/90 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer"
                >
                  EXPLORE RESORT <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Controls / Slide Navigation & Scroll Indicator */}
      <div className="relative z-10 px-margin-desktop md:px-margin-desktop pb-12 max-w-[1440px] mx-auto w-full flex justify-between items-end">
        {/* Manual Index Indicators with Radial Timers */}
        <div className="flex items-center gap-6">
          {slides.map((slide, index) => {
            const isActive = index === activeIdx;
            return (
              <button
                key={slide.id}
                onClick={() => handleManualChange(index)}
                className="group relative flex items-center gap-3 cursor-pointer py-2 focus:outline-none"
              >
                {/* Visual Circle Indicator */}
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center relative">
                  {/* SVG circular track for progress */}
                  <svg className="w-full h-full absolute inset-0 -rotate-90">
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      className="stroke-white/20 stroke-1 fill-none"
                    />
                    {isActive && (
                      <motion.circle
                        cx="16"
                        cy="16"
                        r="14"
                        className="stroke-white stroke-[1.5] fill-none"
                        strokeDasharray={88}
                        animate={{ strokeDashoffset: 88 - (88 * progress) / 100 }}
                        transition={{ ease: "linear", duration: 0.05 }}
                      />
                    )}
                  </svg>
                  {/* Inner dot */}
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActive ? "bg-white scale-120" : "bg-white/40 group-hover:bg-white/70"
                    }`}
                  />
                </div>
                {/* Numeric index display */}
                <span
                  className={`font-label-md text-[12px] tracking-wider font-semibold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/40 group-hover:text-white"
                  }`}
                >
                  0{index + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Scroll Indicator */}
        <button
          onClick={handleScrollDown}
          className="group flex flex-col items-center gap-3 text-white/50 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          <span className="font-label-md text-[11px] tracking-[0.2em] font-semibold uppercase">
            SCROLL DOWN
          </span>
          <div className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center relative overflow-hidden group-hover:border-white transition-colors">
            <ArrowDown className="w-4 h-4 text-white animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
