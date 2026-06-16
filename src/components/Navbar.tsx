"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkHeroPage = pathname === "/" && !isScrolled;

  // Always transparent — no background, no blur, no border, no shadow
  const bgClass = "bg-transparent py-5";

  const textClass = isDarkHeroPage ? "text-white" : "text-primary";
  const linkClass = isDarkHeroPage
    ? "text-white/60 hover:text-white"
    : "text-primary/60 hover:text-primary";
  const lineClass = isDarkHeroPage ? "bg-white" : "bg-primary";
  const buttonClass = isDarkHeroPage
    ? "bg-white text-primary hover:bg-white/90"
    : "bg-primary text-white hover:bg-primary/95";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center ${bgClass}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-margin-desktop flex justify-between items-center">
        {/* Left Side: Logo image + text */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <img
            src="/logo.png"
            alt="Peace of Nature logo"
            className={`h-8 w-8 object-contain transition-all duration-500 ${isDarkHeroPage ? "brightness-0 invert" : ""}`}
          />
          <span
            className={`font-headline-md text-[14px] font-bold tracking-[0.2em] transition-colors duration-500 hidden sm:block ${textClass}`}
          >
            PEACE OF NATURE
          </span>
        </Link>

        {/* Right Side: Navigation & Button */}
        <div className="flex items-center gap-8 md:gap-12">
          <nav className="flex items-center gap-6 md:gap-8">
            {[
              { label: "HOME", href: "/" },
              { label: "GALLERY", href: "/gallery" },
              { label: "CONTACT", href: "/contact" },
            ].map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-label-md text-[12px] tracking-widest font-semibold transition-colors duration-300 py-1 ${
                    isActive ? textClass : linkClass
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavLine"
                      className={`absolute bottom-0 left-0 w-full h-[2px] ${lineClass}`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <Link href="/contact">
            <button
              className={`px-5 py-2.5 rounded-full font-label-md text-[11px] tracking-widest font-semibold active:scale-95 transition-all duration-300 cursor-pointer shadow-sm ${buttonClass}`}
            >
              BOOK STAY
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
