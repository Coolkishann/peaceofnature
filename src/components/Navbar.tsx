"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

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

  // Animation variants
  const navContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const navItemFade = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <motion.div
        variants={navContainer}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl mx-auto px-8 py-6 flex justify-between items-center"
      >
        {/* Logo — Instrument Serif */}
        <motion.div variants={navItemFade}>
          <Link href="/" className="cursor-pointer">
            <span
              className="text-3xl tracking-tight font-instrument-serif"
              style={{ color: "#000000" }}
            >
              Peace of Nature
              <sup className="text-xs align-super ml-0.5">®</sup>
            </span>
          </Link>
        </motion.div>

        {/* Navigation Menu Items */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div key={item.href} variants={navItemFade}>
                  <Link
                    href={item.href}
                    className="relative text-sm transition-colors duration-300 py-1"
                    style={{
                      color: isActive ? "#000000" : "#6F6F6F",
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 w-full h-[1.5px]"
                        style={{ backgroundColor: "#000000" }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* CTA Button */}
          <motion.div variants={navItemFade}>
            <Link href="/contact">
              <button
                className="rounded-full px-6 py-2.5 text-sm cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-95"
                style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
              >
                Begin Journey
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
