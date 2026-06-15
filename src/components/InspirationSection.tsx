"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealWords, RevealFade } from "./ScrollReveal";

const articles = [
  {
    id: 1,
    date: "Mar 12, 2025",
    title: "5 Must-Do Activities at Peace of Nature",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnowW1ZgOmk8RPRE0ubuv-W1ltTydhwf0oFW3OWTtZroCyymmE4rIutAgf0rjaqp-aS419bhzJlGqQlS4GiOtoc-WTbbmUdZXxhulmnmnLfoQJ0gyMEv2nS07-CD9eu0Rkf4TiP0K1zr-lTZoeA2TP125WxaYCBTybiQ2sMSZB3ZuYaJTOvaFnM-OHUpTh3wpgowm8XVi_FKr0hP2uhsDyqmMvxVjSfIs2CHWFwlpdFpUp_euzLW-B9NWL17Wy-4xL9LjrmieW0L8V",
    alt: "Group of friends snorkeling",
    pt: "",
  },
  {
    id: 2,
    date: "Mar 8, 2025",
    title: "A Honeymoon Guide by the Beach",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzO_IJKXLg5YzwVoBJSh7DAfHwB-WHPLDzG7YDWVEXhE9B79lT8LZ393BOnUEBKFpSERWxkRNyJwwf_tB5yDTVsLlElyImur79PEorTabhYuBCK3RAECHzt1i-pTH86dSiu7aGlRpxnMs6VdaxJz_ObpxCleDdPdA6qc9orztlUyYTuq9ijadkt4o4RUTzKUlXPid2ifOhwOfIJ_WdvOWcixKufD9khwD7YCZ7nIBociVE-KKoTSnntZrQm7VL4OV6UUQuA4zk5YBK",
    alt: "Romantic couple walking along beach",
    pt: "md:pt-12", // Column offset as in original layout
  },
  {
    id: 3,
    date: "Feb 7, 2025",
    title: "How to Choose the Perfect Room for Your Stay",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3xACXopbM-XizcNkWStQYFPHxU0S86_dTKQcHflR40gXT-_VBssw0XfuVUHmQ_IV8F-zAtxeYhY2RfRQ1YDHsednPU-5sefEHIUgLNobdNA-OD90ii5NyPA7HZGJEBRwRU-I1gcsC8fgqoDS_1ihO3mjgRqnVHbhGdZsmPm67UH6OdLsG7D6BKvxvP09N-5z8XXB_5NFHGhzXXxHSqB7BxKHQfaT1WLFemWWnmx0OkBjF7Ih9yhLHuGFK7itGXgXHX2HS98iKaKXn",
    alt: "Luxury hotel suite overview",
    pt: "",
  },
];

export default function InspirationSection() {
  return (
    <section className="py-section-gap px-margin-desktop bg-white text-on-surface">
      <div className="max-w-container-max mx-auto">
        {/* Header Block */}
        <div className="text-center mb-20 relative">
          <RevealWords
            text="Explore & Get Inspired"
            className="font-headline-lg text-[36px] md:text-[48px] mb-4 text-primary font-bold justify-center"
          />
          <RevealFade delay={0.15}>
            <p className="font-body-md text-on-surface-variant max-w-lg mx-auto">
              Discover travel tips, destination guides, and guest stories.
            </p>
          </RevealFade>

          <div className="flex justify-end items-center mt-8 gap-4">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest text-[14px]">
              Read more Articles
            </span>
            <button className="w-14 h-14 rounded-full border border-outline/30 flex items-center justify-center hover:bg-surface-container active:scale-95 transition-all duration-300 cursor-pointer">
              <ArrowRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-start">
          {articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * idx, duration: 0.8 }}
              className={`group cursor-pointer ${article.pt}`}
            >
              <div className="arch-card overflow-hidden mb-8 aspect-[4/5] relative shadow-lg">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={article.alt}
                  src={article.src}
                />
              </div>
              <span className="font-label-md text-label-md text-on-surface-variant/60 block text-[13px] tracking-wide">
                {article.date}
              </span>
              <h3 className="font-headline-sm text-[22px] md:text-[24px] mt-2 font-semibold group-hover:text-primary transition-colors duration-300 leading-tight">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
