"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const reels = [
  {
    id: 1,
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-beautiful-aerial-view-of-a-resort-in-maldives-41870-large.mp4",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
    href: "https://www.instagram.com/peaceofnatureresort/reel/DYzToBpiQoT/",
  },
  {
    id: 2,
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-swimming-pool-and-palm-trees-41872-large.mp4",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    href: "https://www.instagram.com/peaceofnatureresort/p/DWDdSTYApPX/",
  },
  {
    id: 3,
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-woman-enjoying-a-yacht-ride-at-sunset-41718-large.mp4",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    href: "https://www.instagram.com/peaceofnatureresort/p/DWDdSTYApPX/",
  },
  {
    id: 4,
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-waves-crashing-on-a-sandy-beach-under-a-blue-sky-42791-large.mp4",
    imgSrc: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=300",
    href: "https://www.instagram.com/peaceofnatureresort/p/DWDdSTYApPX/",
  },
];

function ReelCard({ reel, index }: { reel: typeof reels[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a href={reel.href} target="_blank" rel="noopener noreferrer" className="block">
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
        className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 cursor-pointer group"
      >
        <video
          ref={videoRef}
          src={reel.videoSrc}
          loop
          muted
          playsInline
          poster={reel.imgSrc}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
        />
        {/* Minimal Overlay for Instagram icon on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
            <Instagram />
          </div>
        </div>
      </motion.div>
    </a>
  );
}

export default function SocialShowcase() {
  return (
    <section className="py-32 px-6 md:px-margin-desktop bg-white text-black max-w-[1440px] mx-auto">
      {/* Minimal Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-label-md text-sm block mb-4 tracking-wider uppercase"
            style={{ color: "#6F6F6F" }}
          >
            Socials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-instrument-serif text-[40px] md:text-[56px] font-normal leading-[1.1] tracking-tight"
          >
            Stories from <br />
            <em className="italic" style={{ color: "#6F6F6F" }}>our shores.</em>
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <a
            href="https://www.instagram.com/peaceofnatureresort/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-label-md text-[12px] tracking-widest uppercase transition-transform hover:scale-[1.03] active:scale-95"
          >
            @peaceofnature <Instagram className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      </div>

      {/* Reels Grid with Staggered Animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reels.map((reel, index) => (
          <ReelCard key={reel.id} reel={reel} index={index} />
        ))}
      </div>
    </section>
  );
}
