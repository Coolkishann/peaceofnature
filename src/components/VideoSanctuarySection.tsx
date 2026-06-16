"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { RevealWords, RevealFade } from "./ScrollReveal";

export default function VideoSanctuarySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Scroll-driven scale: starts small, grows to full size
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Less aggressive scale-down on mobile to prevent squishing
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [32, 16]);

  // Auto-play when video reaches full scale
  const handleViewportEnter = () => {
    if (!hasStarted && videoRef.current) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
      setHasStarted(true);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-32 px-4 md:px-margin-desktop bg-white max-w-[1440px] mx-auto w-full relative"
    >
      {/* Scale-up container driven by scroll */}
      <motion.div
        style={{ scale, borderRadius }}
        className="w-full aspect-[4/3] md:aspect-video overflow-hidden shadow-2xl relative group bg-neutral-950 origin-center"
        onViewportEnter={handleViewportEnter}
      >
        <video
          ref={videoRef}
          src="video.mp4"
          muted
          loop
          playsInline
          className="w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Ambient overlay shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Brand Caption overlay */}
        <div className="absolute bottom-6 left-6 md:bottom-14 md:left-14 z-10 text-white max-w-[80%] select-none">
          <RevealFade>
            <span className="font-label-md text-[9px] md:text-[11px] tracking-[0.2em] text-white/80 block mb-1.5 md:mb-2 uppercase font-semibold">
              Peace of Nature Sanctuary
            </span>
          </RevealFade>
          <RevealWords
            text="An Unmatched Quiet Luxury Sanctuary"
            className="font-headline-lg text-[20px] sm:text-[28px] md:text-[40px] font-bold leading-tight text-white"
          />
        </div>

        {/* Play/Pause control */}
        <button
          onClick={togglePlay}
          className="absolute bottom-6 right-6 md:bottom-14 md:right-14 z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 md:w-5 md:h-5" />
          ) : (
            <Play className="w-4 h-4 md:w-5 md:h-5 fill-white ml-0.5" />
          )}
        </button>
      </motion.div>
    </section>
  );
}
