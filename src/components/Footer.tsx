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
    <footer className="relative w-full bg-white overflow-hidden">
      {/* Giant full-screen text section */}
      <div className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col items-center justify-center overflow-hidden select-none px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full text-center"
        >
          {/* "PEACEOF" line — smooth light green gradient */}
          <h2
            className="font-headline-lg font-bold leading-[0.85] tracking-tighter uppercase"
            style={{
              fontSize: "clamp(56px, 15vw, 280px)",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #6ab187 0%, #3d9b6b 30%, #2d8659 55%, #4aab78 80%, #8ecba5 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              PEACEOF
            </span>
          </h2>

          {/* "NATURE" line — nature image clipped into text */}
          <h2
            className="font-headline-lg font-bold leading-[0.85] tracking-tighter uppercase -mt-1 md:-mt-3"
            style={{
              fontSize: "clamp(56px, 15vw, 280px)",
              backgroundImage:
                "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1800')",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            NATURE
          </h2>
        </motion.div>

        {/* Subtle decorative radial blobs */}
        <div
          className="absolute top-10 right-16 w-52 h-52 rounded-full pointer-events-none opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #3d9b6b 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-16 left-10 w-72 h-72 rounded-full pointer-events-none opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #6ab187 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Footer content area — minimal */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-desktop pb-12 pt-4 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Peace of Nature"
            className="h-7 w-7 object-contain"
          />
          <span className="font-headline-sm text-[13px] font-bold tracking-[0.2em] text-primary/80">
            PEACE OF NATURE
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-primary/40 hover:text-primary transition-colors duration-200 font-label-md text-[11px] tracking-widest uppercase font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full max-w-sm h-[1px] bg-primary/10" />

        {/* Copyright */}
        <p className="text-primary/30 font-body-md text-[12px] text-center">
          © {new Date().getFullYear()} Peace of Nature Resorts. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
