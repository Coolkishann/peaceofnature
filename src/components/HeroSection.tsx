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
    sideLeft:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=400",
    sideRight:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 1,
    title: "Unwind by Crystal Waters",
    subtitle: "Exclusive Lagoon Suites",
    desc: "Wake up to endless ocean views from a minimalist balcony featuring private beach-deck entrances.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3xACXopbM-XizcNkWStQYFPHxU0S86_dTKQcHflR40gXT-_VBssw0XfuVUHmQ_IV8F-zAtxeYhY2RfRQ1YDHsednPU-5sefEHIUgLNobdNA-OD90ii5NyPA7HZGJEBRwRU-I1gcsC8fgqoDS_1ihO3mjgRqnVHbhGdZsmPm67UH6OdLsG7D6BKvxvP09N-5z8XXB_5NFHGhzXXxHSqB7BxKHQfaT1WLFemWWnmx0OkBjF7Ih9yhLHuGFK7itGXgXHX2HS98iKaKXn",
    sideLeft:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400",
    sideRight:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    title: "Dine Under the Stars",
    subtitle: "Starlit Beachfront Canopy",
    desc: "Indulge in fine wine and organic culinary harvests freshly prepared by gourmet chefs on the sand.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-ncCdNUQAwGZij4ZLvmPintu1N--n1odiZCfrwWUUbjiDUhL_STSMxqiBfaVSpkauKTs6KI7Dps6Jr3LK70BV_Oi82MKma0bhS-L1wZQ5HS0RwbfpRjtpZ_y5moJiehuHl8mHBs7MZhd72C1cGPN6S5tQpjL-FjeMS1EmF2MspeRiG_0_nn4RbqG7fqsyBV_rC8Oev8bMpTSgTXGzpPkbL77R2K3Ds38-NOMMSq5A3JQpcGRMhnctt-zOM_q3Tcmi2MGhrkIiX4fr",
    sideLeft:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400",
    sideRight:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400",
  },
];

const AUTO_PLAY_TIME = 6000;

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
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo("#discover", { offset: 0, duration: 1.5 });
    } else {
      document
        .getElementById("discover")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[850px] w-full bg-black overflow-hidden flex flex-col"
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

      {/* Main content - editorial layout */}
      <div className="relative z-10 flex-1 flex flex-col justify-between max-w-[1440px] mx-auto w-full px-margin-desktop">
        {/* Top: Heading + description in editorial split */}
        <div className="flex flex-col md:flex-row justify-between items-start pt-32 md:pt-36 gap-6 md:gap-12">
          {/* Left: Big editorial heading */}
          <div className="max-w-2xl text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                <span className="font-label-md text-label-md tracking-[0.25em] text-white/75 uppercase block text-[13px] font-semibold">
                  {slides[activeIdx].subtitle}
                </span>
                <h1 className="font-headline-lg text-[42px] sm:text-[56px] md:text-[72px] leading-[1.08] font-bold tracking-tight text-white font-serif italic">
                  {slides[activeIdx].title.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-hidden py-1 mr-3"
                    >
                      <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                          duration: 0.8,
                          ease: [0.16, 1, 0.3, 1],
                          delay: i * 0.04,
                        }}
                        className="inline-block will-change-transform"
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`desc-${activeIdx}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
              className="max-w-[280px] mt-0 md:mt-10"
            >
              <p className="font-body-md text-white/65 text-[14px] md:text-[15px] leading-relaxed font-light italic">
                {slides[activeIdx].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center: Main image with two flanking side images */}
        <div className="flex-1 flex items-center justify-center -mt-4 md:-mt-12 gap-4 md:gap-6 px-4">
          {/* Left side image — tall portrait capsule */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${activeIdx}`}
              initial={{ opacity: 0, x: -30, rotate: -2 }}
              animate={{ opacity: 1, x: 0, rotate: -1 }}
              exit={{ opacity: 0, x: 30, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block w-[90px] lg:w-[110px] h-[120px] lg:h-[150px] rounded-[16px] overflow-hidden shadow-2xl border border-white/10 flex-shrink-0"
            >
              <img
                src={slides[activeIdx].sideLeft}
                alt="Side gallery"
                className="w-full h-full object-cover pointer-events-none select-none"
              />
            </motion.div>
          </AnimatePresence>

          {/* Center main image — large rounded hero card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`center-${activeIdx}`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[520px] lg:max-w-[600px] aspect-[16/10] rounded-[24px] overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src={slides[activeIdx].src}
                alt={slides[activeIdx].title}
                className="w-full h-full object-cover pointer-events-none select-none"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 group">
                  <svg
                    className="w-5 h-5 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right side image — tall portrait capsule */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${activeIdx}`}
              initial={{ opacity: 0, x: 30, rotate: 2 }}
              animate={{ opacity: 1, x: 0, rotate: 1 }}
              exit={{ opacity: 0, x: -30, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block w-[90px] lg:w-[110px] h-[120px] lg:h-[150px] rounded-[16px] overflow-hidden shadow-2xl border border-white/10 flex-shrink-0"
            >
              <img
                src={slides[activeIdx].sideRight}
                alt="Side gallery"
                className="w-full h-full object-cover pointer-events-none select-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Controls / Slide Navigation & Scroll Indicator */}
        <div className="pb-10 flex justify-between items-end">
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
                          animate={{
                            strokeDashoffset: 88 - (88 * progress) / 100,
                          }}
                          transition={{ ease: "linear", duration: 0.05 }}
                        />
                      )}
                    </svg>
                    {/* Inner dot */}
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-white scale-120"
                          : "bg-white/40 group-hover:bg-white/70"
                      }`}
                    />
                  </div>
                  {/* Numeric index display */}
                  <span
                    className={`font-label-md text-[12px] tracking-wider font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-white/40 group-hover:text-white"
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
      </div>

      {/* Decorative botanical corner elements */}
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none z-5 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white/20">
          <circle cx="80" cy="20" r="3" fill="currentColor" />
          <circle cx="90" cy="35" r="2" fill="currentColor" />
          <circle cx="75" cy="10" r="1.5" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
