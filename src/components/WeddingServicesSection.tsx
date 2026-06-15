"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Star, Phone, Mail, Award } from "lucide-react";
import { RevealWords, RevealFade } from "./ScrollReveal";

type TabKey = "reception" | "catering" | "accommodation";

const tabsData = {
  reception: {
    title: "Reception",
    desc: "From small ceremonies to full-weekend gatherings, we create weddings that feel relaxed, beautiful, and thoughtfully arranged, with every detail handled with care.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj60WBOXOJ7Hg1J-f_Y8gmXklbetJwbvI_qrRImvzIl_98yyc5ddq4j2QfJhzv--ulw8w6xxX_R8N1ogr96RhvqFlkzRFnN0wUnBGnSffC8paNOuy7f2dnb91ywgCREBWwLsDBFg8xkn2Ai7jsJkh1pb5QZk_RWd8ZLqDxOLb6ep36ttmy9spGzS3voiAc0iry3Pmjh6WGsUR4_FWSl6fbuvGoe6HsutzIRnEa4Qi-GvA7lVFXnRDXr6utZ9KjtNyYRCQLsGmtlsYN",
    alt: "Wedding chairs reception space",
    sqm: "220 sqm",
    capacity: "Max 300 people",
  },
  catering: {
    title: "Catering",
    desc: "Savor gourmet seasonal menus curated by our world-class chefs. From fresh ocean catches to organic garden harvests, every dish is a celebration of taste.",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800",
    alt: "Gourmet catering food presentation",
    sqm: "Kitchen 150 sqm",
    capacity: "Up to 500 guests",
  },
  accommodation: {
    title: "Accommodation",
    desc: "Offer your guests the ultimate retreat with our private suites. Wake up to ocean views and enjoy unparalleled hospitality throughout your stay.",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    alt: "Luxury suite accommodation overview",
    sqm: "80-140 sqm",
    capacity: "2-4 people per suite",
  },
};

export default function WeddingServicesSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("reception");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-section-gap px-margin-desktop bg-white text-on-surface">
      <div className="max-w-container-max mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <RevealWords
            text="The perfect wedding day that you will always remember"
            className="font-headline-lg text-[36px] md:text-[48px] max-w-2xl font-bold text-primary leading-tight"
          />
          <div className="text-left md:text-right max-w-xs">
            <RevealFade delay={0.2}>
              <p className="font-body-md text-on-surface-variant leading-relaxed font-light">
                Natural scenery, seasonal cuisine, and warm, attentive service
                come together to create a memorable wedding experience.
              </p>
            </RevealFade>
          </div>
        </div>

        {/* Video / Photo Flanking Grid */}
        <div className="flex items-center justify-between gap-gutter mb-32">
          {/* Left Pill Photo */}
          <div className="hidden lg:block w-48 h-80 rounded-full overflow-hidden shrink-0 mt-20 shadow-lg">
            <img
              className="w-full h-full object-cover"
              alt="Close up wedding gown walking hand-in-hand"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9SO_6vhzdqAG2rIintTQ1IBFrL6yuaVPqTE7ApVkqmaqonJu9Y1U_hjfhGEXkq7WFbIZGR93gbnQV-OQ5wi_JO2DCQS35sSTRiCRXzuueUe8RtXOPEEo-lfkkGMvYNCydPLnVECsXEnczdDjJWL814siq1yooyHMGmrx111Fq3W4eep4aQgOqRvRs_E8m8KnltuuH1g8AS9I-TJSFJeZHFpTQKKcRFvhpz2Re2QbuLtRlQnFvaA6ldBmLLy64K7a-FoJlLEvx1krD"
            />
          </div>

          {/* Central Video Frame */}
          <div className="relative flex-grow h-[500px] rounded-3xl overflow-hidden group shadow-2xl">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              alt="Panoramic view of couple walking on rugged coast at sunset"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy85B8iqXKi82OsOFBIsNnA0-M2q0FQG1EgxyUAtmkZbnddepr9pv0MYtP0-_y929lVWOlAOV-V7UK4viEc9W8yhTF71VPC4uo7kbK_SUuL2H60Dk2OGaqht_GqrimshRu-vRfJUij2u_9ezqIYVOiEoe3aVECi6wDeLBMQ9_E3msa0S7hLhcGe7If9IwA_Fz68d-LqNes9OXEIe4uuTXjfy1Fxs1na8Qcx3Ho8W3E-4U7NpQIRYeebomPfHDFvetETca3BKt2-dMU"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-500">
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-24 h-24 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center ring-2 ring-white/50 group-hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer shadow-lg"
                aria-label="Play promotional video"
              >
                <Play className="w-8 h-8 text-white fill-white" />
              </button>
            </div>
          </div>

          {/* Right Pill Photo */}
          <div className="hidden lg:block w-48 h-80 rounded-full overflow-hidden shrink-0 mb-20 shadow-lg">
            <img
              className="w-full h-full object-cover"
              alt="Outdoor garden wedding ceremony chairs set up by ocean"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ2a5Ehe2omfzptQY8nkKWfw5T3nitXnct5oGiQe4-ZOgwuEt2BT1vJT5cLYvuqJIWoy48rubRGym9QeL9N_78tuNDEIY-AC8Ng0BICA_7GJC_VmS9xkdLEqvfAT5T8dGlF-C3ucN4WdMaisw80MHFrB0r5GAJinB3KRZcrjbeiQDlJEhnmrJ9VRIJx8RBVcErMdkaqwgniAgpzrEbMLf8z-Y7EbDx-400CDiQ4-qKj4R1h9FPSvLGzh1DxS09QnKg3MjCB2utAx9K"
            />
          </div>
        </div>

        {/* Descriptive Stats and Vows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-section-gap items-center mb-24">
          <RevealFade>
            <p className="font-headline-sm text-[22px] md:text-[24px] text-on-surface-variant leading-relaxed font-light">
              Exchange vows against a backdrop of mountains, forests, or open
              skies. Our spaces offer an intimate, elegant setting for
              celebrations that feel personal, calm, and deeply connected to
              nature.
            </p>
          </RevealFade>
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <RevealFade delay={0.1}>
              <Award className="w-10 h-10 text-secondary mb-2 inline-block" />
            </RevealFade>
            <RevealWords
              text="2,250+"
              className="font-display-lg text-[64px] md:text-[72px] leading-none text-primary font-bold justify-start md:justify-end"
            />
            <RevealFade delay={0.2}>
              <span className="font-label-md text-label-md text-on-surface-variant tracking-widest uppercase text-[12px] font-medium">
                successful events
              </span>
            </RevealFade>
          </div>
        </div>

        {/* Dynamic Tabs System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Tab buttons */}
          <div className="lg:col-span-3 flex lg:flex-col justify-around lg:justify-start gap-4 py-8 border-b lg:border-b-0 lg:border-l border-outline/20 lg:pl-8">
            {(Object.keys(tabsData) as TabKey[]).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`block font-headline-sm text-[20px] md:text-[24px] text-left hover:text-primary transition-all duration-300 cursor-pointer ${
                  activeTab === tabKey
                    ? "text-secondary font-semibold border-b-2 lg:border-b-0 lg:border-l-2 border-secondary lg:pl-4"
                    : "text-on-surface-variant/40 hover:text-on-surface"
                }`}
              >
                {tabsData[tabKey].title}
              </button>
            ))}
          </div>

          {/* Tab Image display with animated details */}
          <div className="lg:col-span-6 relative aspect-square lg:aspect-auto h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-xl mt-6 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
                alt={tabsData[activeTab].alt}
                src={tabsData[activeTab].img}
              />
            </AnimatePresence>

            {/* Float badges */}
            <div className="absolute bottom-6 left-6 flex gap-3 z-10">
              <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-label-md shadow-sm font-medium text-primary">
                {tabsData[activeTab].sqm}
              </span>
              <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-label-md shadow-sm font-medium text-primary">
                {tabsData[activeTab].capacity}
              </span>
            </div>
          </div>

          {/* Right descriptions */}
          <div className="lg:col-span-3 py-8 flex flex-col justify-between h-full gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex-grow"
              >
                <h4 className="font-headline-sm text-[22px] font-bold mb-6 text-primary">
                  {tabsData[activeTab].title}
                </h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-[15px]">
                  {tabsData[activeTab].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-outline/10 pt-8 mt-auto">
              <p className="font-label-md text-label-md text-on-surface-variant/80 mb-4 uppercase text-[11px] tracking-widest font-medium">
                Contact us for reservations:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-on-surface">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="font-label-md text-label-md text-[14px]">
                    +1 234 56 789
                  </span>
                </div>
                <div className="flex items-center gap-3 text-on-surface">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span className="font-label-md text-label-md text-[14px]">
                    info@peaceofnature.in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-secondary transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-4xl aspect-video bg-neutral-900 rounded-2xl overflow-hidden relative shadow-2xl"
            >
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-aerial-view-of-a-resort-in-maldives-41870-large.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
