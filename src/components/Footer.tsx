"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "#" },
];

export default function Footer() {
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
    if (video.readyState >= 2) tryPlay();

    rafRef.current = requestAnimationFrame(monitorLoop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  return (
<footer className="relative w-full overflow-hidden bg-white min-h-[80vh]">      {/* Background video layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            opacity: videoOpacity *0.80,
            transition: "opacity 0.15s linear",
          }}
        />
      </div>

      {/* Footer links area */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-desktop pt-66 pb-8 flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Peace of Nature"
            className="h-7 w-7 object-contain"
          />
          <span className="font-headline-sm text-[13px] font-bold tracking-[0.2em] text-primary">
            PEACE OF NATURE
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-primary/90 hover:text-primary transition-colors duration-200 font-label-md text-[11px] tracking-widest uppercase font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-primary/80 font-body-md text-[12px] text-center">
          © {new Date().getFullYear()} Peace of Nature Resorts. All rights
          reserved.
        </p>
      </div>

      {/* Giant text — Instrument Serif, touching the bottom */}
      <div className="relative z-10 w-full overflow-hidden select-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center"
        >
          <h2
            className="font-instrument-serif font-normal leading-[0.75] tracking-tight uppercase whitespace-nowrap"
            style={{
              fontSize: "clamp(58px, 16vw, 280px)",
              marginBottom: "-0.08em",
            }}
          >
            <span
              style={{
                // backgroundImage:
                  // "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1800')",
                // backgroundSize: "cover",
                // backgroundPosition: "center 40%",
                // WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "white",
              }}
            >
              peaceofnature
            </span>
          </h2>
        </motion.div>
      </div>
    </footer>
  );
}
