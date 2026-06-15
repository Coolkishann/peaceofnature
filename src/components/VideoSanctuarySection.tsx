"use client";

import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

import { RevealWords, RevealFade } from "./ScrollReveal";

export default function VideoSanctuarySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => console.log(err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-12 px-margin-desktop bg-background max-w-[1440px] mx-auto w-full relative">
      <div className="w-full h-[80vh] rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl relative group bg-neutral-950">
        <video
          ref={videoRef}
          src="https://player.vimeo.com/external/435674703.sd.mp4?s=7fdf70275811b7c02b9213197607a97753ad0c8d&profile_id=165&oauth2_token_id=57447761"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover select-none pointer-events-none"
        />

        {/* Ambient overlay shadows */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none"></div>

        {/* Brand Caption overlay */}
        <div className="absolute bottom-12 left-12 z-10 text-white max-w-lg select-none">
          <RevealFade>
            <span className="font-label-md text-[11px] tracking-[0.25em] text-white/70 block mb-2 uppercase font-semibold">
              Peace of Nature Sanctuary
            </span>
          </RevealFade>
          <RevealWords
            text="An Unmatched Quiet Luxury Sanctuary"
            className="font-headline-lg text-[32px] sm:text-[40px] font-bold leading-tight text-white"
          />
        </div>

        {/* Play/Pause control overlay */}
        <button
          onClick={togglePlay}
          className="absolute bottom-12 right-12 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
        </button>
      </div>
    </section>
  );
}
