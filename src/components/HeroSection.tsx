"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const headlineWords = [
  { text: "Beyond", style: "normal" },
  { text: "silence,", style: "italic" },
  { text: "we", style: "normal" },
  { text: "build", style: "normal" },
  { text: "the", style: "italic" },
  { text: "eternal.", style: "italic" },
];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE_DURATION = 0.5;

    const monitorLoop = () => {
      if (!video || video.paused) {
        rafRef.current = requestAnimationFrame(monitorLoop);
        return;
      }

      const { currentTime, duration } = video;

      if (duration && duration > 0) {
        if (currentTime < FADE_DURATION) {
          setVideoOpacity(currentTime / FADE_DURATION);
        } else if (currentTime > duration - FADE_DURATION) {
          setVideoOpacity((duration - currentTime) / FADE_DURATION);
        } else {
          setVideoOpacity(1);
        }
      }

      rafRef.current = requestAnimationFrame(monitorLoop);
    };

    const handleEnded = () => {
      setVideoOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(() => {});
        }
      }, 100);
    };

    const tryPlay = () => {
      video.play().catch(() => {});
    };

    video.addEventListener("ended", handleEnded);
    video.addEventListener("loadeddata", tryPlay);

    if (video.readyState >= 2) {
      tryPlay();
    }

    rafRef.current = requestAnimationFrame(monitorLoop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

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
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            opacity: videoOpacity,
            transition: "opacity 0.15s linear",
            marginTop: "300px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      </div>

      {/* Hero Content — centered with reveal animations */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        {/* Headline with word-by-word reveal */}
        <h1
          className="max-w-7xl font-normal text-5xl sm:text-7xl md:text-8xl font-instrument-serif flex flex-wrap items-baseline justify-center gap-x-[0.28em]"
          style={{ lineHeight: 0.95, letterSpacing: "-2.46px" }}
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden py-1">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                  delay: 0.15 + i * 0.08,
                }}
                className="inline-block will-change-transform"
                style={{
                  color: word.style === "italic" ? "#6F6F6F" : "#000000",
                  fontStyle: word.style === "italic" ? "italic" : "normal",
                }}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Description with reveal */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            delay: 0.7,
          }}
          className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed font-body-md"
          style={{ color: "#6F6F6F" }}
        >
          Building platforms for brilliant minds, fearless makers, and thoughtful
          souls. Through the noise, we craft digital havens for deep work and
          pure flows.
        </motion.p>

        {/* Hero CTA Button with reveal */}
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            delay: 0.9,
          }}
          onClick={handleScrollDown}
          className="rounded-full px-14 py-5 text-base mt-12 cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-95 font-label-md tracking-wider font-semibold"
          style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
        >
          Begin Journey
        </motion.button>
      </div>
    </section>
  );
}
