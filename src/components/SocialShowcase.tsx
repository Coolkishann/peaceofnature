"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Play } from "lucide-react";
import { RevealWords, RevealFade } from "./ScrollReveal";

// Self-contained Instagram SVG icon matching Lucide design guidelines
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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
    likes: "12.4K",
    views: "245K",
    title: "Paradise Found 🌴",
  },
  {
    id: 2,
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-swimming-pool-and-palm-trees-41872-large.mp4",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    likes: "8.9K",
    views: "182K",
    title: "Morning Dip ✨",
  },
  {
    id: 3,
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-woman-enjoying-a-yacht-ride-at-sunset-41718-large.mp4",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    likes: "15.2K",
    views: "312K",
    title: "Golden Hour Cruising ⛵",
  },
  {
    id: 4,
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-waves-crashing-on-a-sandy-beach-under-a-blue-sky-42791-large.mp4",
    imgSrc: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=300",
    likes: "6.7K",
    views: "144K",
    title: "Serenity Calls 🌊",
  },
];

function ReelCard({ reel }: { reel: typeof reels[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-neutral-900 shadow-lg group cursor-pointer"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={reel.videoSrc}
        loop
        muted
        playsInline
        poster={reel.imgSrc}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      {/* Play Icon Indicator overlay (fades out when playing) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        </div>
      )}

      {/* Info / Metric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
        {/* Top Header */}
        <div className="flex justify-between items-center text-white/80">
          <Instagram className="w-5 h-5 text-white" />
          <span className="font-label-md text-[11px] tracking-wider uppercase font-semibold">
            @peaceofnature
          </span>
        </div>

        {/* Bottom Metadata */}
        <div className="text-white space-y-3">
          <p className="font-body-md text-[14px] font-medium leading-snug">
            {reel.title}
          </p>

          {/* Social Stats */}
          <div className="flex gap-4 items-center text-white/90 border-t border-white/10 pt-3 text-[12px]">
            <span className="flex items-center gap-1.5 font-label-md font-semibold">
              <Heart className="w-4 h-4 fill-white text-white" />
              {reel.likes}
            </span>
            <span className="flex items-center gap-1.5 font-label-md font-semibold">
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              {reel.views}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SocialShowcase() {
  return (
    <section className="py-section-gap px-margin-desktop bg-white text-on-surface max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <RevealFade>
            <span className="font-label-md text-label-md text-secondary block mb-4 uppercase tracking-[0.2em] text-[13px] font-semibold">
              Social Showcase
            </span>
          </RevealFade>
          <RevealWords
            text="Stories from Our Shores"
            className="font-headline-lg text-[36px] md:text-[48px] font-bold text-primary max-w-xl leading-tight"
          />
        </div>
        <div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-primary px-8 py-3.5 rounded-full font-label-md text-[13px] tracking-widest font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            FOLLOW ON INSTAGRAM <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Reels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
      </div>
    </section>
  );
}
