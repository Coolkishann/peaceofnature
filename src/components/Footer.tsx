"use client";

import React from "react";
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
  return (
    <footer className="relative w-full bg-primary text-white overflow-hidden">
      {/* Giant clipped text with nature image inside */}
      <div className="relative w-full h-[50vh] md:h-[65vh] flex items-center justify-center overflow-hidden select-none">
        {/* Background nature image */}
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1800"
          alt="Nature scenery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-primary/40" />

        {/* Giant text with mix-blend to create the punch-through effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full text-center px-4"
        >
          <h2
            className="font-headline-lg text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] font-bold leading-[0.9] tracking-tight uppercase"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,255,255,0.35)",
              backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1800')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            PEACE OF
            <br />
            NATURE
          </h2>
        </motion.div>
      </div>

      {/* Footer content area */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-desktop py-12 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Peace of Nature"
            className="h-8 w-8 object-contain brightness-0 invert"
          />
          <span className="font-headline-sm text-[14px] font-bold tracking-[0.2em] text-white">
            PEACE OF NATURE
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white/50 hover:text-white transition-colors duration-200 font-label-md text-[12px] tracking-widest uppercase font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full max-w-md h-[1px] bg-white/10" />

        {/* Copyright */}
        <p className="text-white/30 font-body-md text-[13px] text-center">
          © {new Date().getFullYear()} Peace of Nature Resorts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
