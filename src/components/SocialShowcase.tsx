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

// We must use local or direct media files for the minimal custom cards. 
// Instagram's official embed does not allow hiding the header/footer UI.
// Replace these with your actual downloaded reel videos/covers in your public folder!
const reels = [
  {
    id: 1,
    videoSrc: "/reel1.mp4",
    href: "/reel1.mp4",
  },
  {
    id: 2,
    videoSrc: "/reel2.mp4",
    href: "/reel2.mp4",
  },
  {
    id: 3,
    videoSrc: "/reel1.mp4",
    href: "/reel1.mp4",
  },
  {
    id: 4,
    videoSrc: "/reel2.mp4",
    href: "/reel2.mp4",
  },
];

function ReelCard({ reel, index }: { reel: typeof reels[0]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const handleMouseEnter = () => {
    setPlaying(true);

    if (videoRef.current) {
      videoRef.current.muted = muted;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setPlaying(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }

    setMuted(true);
  };

  const toggleSound = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!videoRef.current) return;

    const nextMuted = !muted;
    videoRef.current.muted = nextMuted;
    setMuted(nextMuted);
  };

  return (
    <a
      href={reel.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: index * 0.15,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black group cursor-pointer"
      >
        {/* Reel Cover/Video */}
        <video
          ref={videoRef}
          src={reel.videoSrc}
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Instagram Icon Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div
            className={`w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 ${
              playing ? "opacity-0" : "opacity-100"
            }`}
          >
            <Instagram />
          </div>
        </div>

        {/* Sound Button */}
        {playing && (
          <button
            onClick={toggleSound}
            className="absolute bottom-3 right-3 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            {muted ? "🔇" : "🔊"}
          </button>
        )}
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

      {/* Reels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reels.map((reel, index) => (
          <ReelCard key={reel.id} reel={reel} index={index} />
        ))}
      </div>
    </section>
  );
}