"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

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

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    show: { 
      opacity: 1, 
      y: "0%",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
    exit: { 
      opacity: 0, 
      y: "-100%",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <motion.div
        variants={navContainer}
        initial="hidden"
        animate="show"
        className="w-full max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6 flex justify-between items-center relative z-50"
      >
        {/* Logo — Instrument Serif */}
        <motion.div variants={navItemFade} className="z-50">
          <Link href="/" className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
            <span
              className="text-2xl md:text-3xl tracking-tight font-instrument-serif"
              style={{ color: "#000000" }}
            >
              Peace of Nature
              <sup className="text-[10px] md:text-xs align-super ml-0.5">®</sup>
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7">
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

          {/* Desktop CTA Button */}
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

        {/* Mobile Hamburger Button */}
        <motion.button 
          variants={navItemFade}
          className="md:hidden z-50 p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </motion.button>
      </motion.div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 bg-[#F9F9F9] z-40 flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col gap-8 mb-12">
              {navItems.map((item, i) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div 
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-instrument-serif text-[40px] tracking-tight block"
                      style={{
                        color: isActive ? "#000000" : "#6F6F6F",
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  className="rounded-full px-8 py-4 text-base w-full cursor-pointer transition-transform duration-300 active:scale-95"
                  style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
                >
                  Begin Journey
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
