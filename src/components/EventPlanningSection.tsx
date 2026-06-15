"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { RevealWords, RevealFade } from "./ScrollReveal";

const carouselImages = [
  {
    id: 0,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCB6-zIBSdSGgdRq7oZQOuA9gZgNrj0I4wlZPOHjKYd-j2wf-wnXaX9IejfD9tdXBiY_4_zG0HA6xUSQLk73yrZe_CWkQ2FM2ZIhPDQTVsKnKKiaQwS4aPNjIu3de8HQyh8oo8hDkDpGmJn7FeR4k5WYBrR-bpaAqCxPDUrNPzS8eBJpDo1CAiqBvpXQ83U3gHrv6apKs9Ft7UJB8aA_UyHnNmGHfJcq5b0xi6soOf_hXK4dVUYUKzzjQTb0jsNsk2rCZz68CIm90kL",
    alt: "Grand wedding reception ballroom decorated with chandeliers",
    title: "Grand Ballroom Receptions",
  },
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmOstcB676lcUA3A4VXmDjFoHAVd4jT9e9nanx4i7Q-CP72v3R8XqZAW6nVUKetzs6dmANgGYtpCCI4LyDrV3QbOAZczm538G-9TKb53pRFgY4Qb1PKRZ78yDKEtBFRJW8tkYARgfZ1zayfJWl0MPoZ5nL5ne5v7XPxlIR5sZA0RZBr31Fuo05lImGoZnBSEO_TixLT4SMx5962bmQN0EFTVqTxurbT67PKttfbTHFN6US5yDck13xAu9qvrzK7czn60tpMkKY6KEe",
    alt: "Bride preparing in natural light suite",
    title: "Elegant Bridal Suites",
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaEtgpDkJFWmpbfUPeBFbAA_erP3_NOoUqC_bfHmtyjhC3YvDl6uIezwPnYU5UoRsQ18rcA4ux8i_1LRjui9n_WiDIYmwkpyr20SiHaQvhp2fp3V3kvbTLUySsRcYB2L6yofKZa24oLLV_An5aYIyRnbKuds9r4ar6pOWwRSKxblfbU1FzoNOqxcDWFgIkbFUxPXpYFCjR_sn5K2HU4sce-JZx6SsQbm8cESXQRykmjfkgli0dVUZyoRB0blrzd28af_sUqJ_QX92b",
    alt: "Woman looking out from lodge balcony with mountain backdrop",
    title: "Scenic Balcony Settings",
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrEYQEaSQnVsDhuj8BVdtuobBb7ywWx5oxYvRXGVgABzavQiZxlOBpjqyTzN2J7TM6x_DF0u_6ANJJMPEzSqiyuJWJCVUunXq2juh0viIFKUQ2FFX8m3RkV3C58KAoAZIVwclOoPLJC6fih17ahA27PQzB7lWV3hjL3P5jVWYJ_2ST9oLkiPe7gTziQRtwV4gxMGZY8K3fT21vvkUy1fo9UZvGLqnkNe1THGGx7wXoDb2l7G56mBkyETxNraoyJYjyLp68SlDQAJ1_",
    alt: "Guests mingling at outdoor pool cocktail event",
    title: "Golden Hour Cocktails",
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD76TpwOU04ZLj7LvEQOvsHC1o7tKcSjT5pkU6zvxWZBdNnELfjPKmisJGkA2Pf-OzOTVI_tFKqdw5xIUGYeFy8KvVy0cQrrD-ZbVqjdytpk_JKQN-jH6K8-_ddrIP3qHm04aWWsooCqT8Eflv7WUfS1f4hl6BqsGrA6goq13wF0Ve8aWZEij7DWuGwC5R28aJpr8SyWFuOLklHXhdDqntX8TT_D_VAwEfV47Pn7tkfTDfMYsT0YsugGEoqCPYgHNaW42yXmCM6YSeZ",
    alt: "Wedding table setting close-up",
    title: "Bespoke Table Layouts",
  },
];

export default function EventPlanningSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Middle element active initially

  const total = carouselImages.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const getCardStyle = (index: number) => {
    // Relative position from the active index with wrapping
    let diff = index - activeIndex;

    if (diff < -2) diff += total;
    if (diff > 2) diff -= total;

    // Styles based on position in stack
    let x = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 20;
    let blur = "blur(0px)";

    if (diff === -1) {
      x = -160;
      scale = 0.88;
      opacity = 0.6;
      zIndex = 10;
    } else if (diff === 1) {
      x = 160;
      scale = 0.88;
      opacity = 0.6;
      zIndex = 10;
    } else if (diff === -2) {
      x = -300;
      scale = 0.75;
      opacity = 0.2;
      zIndex = 5;
      blur = "blur(2px)";
    } else if (diff === 2) {
      x = 300;
      scale = 0.75;
      opacity = 0.2;
      zIndex = 5;
      blur = "blur(2px)";
    }

    return {
      x,
      scale,
      opacity,
      zIndex,
      filter: blur,
    };
  };

  return (
    <section className="py-section-gap px-margin-desktop bg-surface-container-low overflow-hidden text-on-surface">
      <div className="max-w-container-max mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <RevealFade>
            <span className="font-label-md text-label-md text-on-surface-variant block mb-4 italic text-[15px] tracking-wider">
              Create Unforgettable Moments in Extraordinary Spaces
            </span>
          </RevealFade>
          <RevealWords
            text="Wedding & Event Planning"
            className="font-headline-lg text-[36px] md:text-[48px] font-bold mb-6 text-primary justify-center"
          />
          <RevealFade delay={0.15}>
            <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto text-[16px] leading-relaxed font-light">
              From intimate beachfront vows to grand ballroom celebrations, we
              specialize in turning your dream event into a stunning reality — all
              with the touch of luxury and seamless planning.
            </p>
          </RevealFade>
        </div>

        {/* 3D Interactive Carousel Container */}
        <div className="relative w-full max-w-5xl h-[560px] flex justify-center items-center select-none">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-12 z-45 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-primary shadow-lg border border-outline/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Previous event space"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:right-12 z-45 w-12 h-12 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-primary shadow-lg border border-outline/10 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label="Next event space"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Fanned stack items */}
          <div className="relative w-[340px] md:w-[420px] h-[480px] flex items-center justify-center">
            {carouselImages.map((card) => {
              const { x, scale, opacity, zIndex, filter } = getCardStyle(
                card.id
              );
              const isActive = card.id === activeIndex;

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    x,
                    scale,
                    opacity,
                    zIndex,
                    filter,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                  }}
                  onClick={() => setActiveIndex(card.id)}
                  className={`absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer ${
                    isActive ? "ring-4 ring-white/20" : ""
                  }`}
                >
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none"></div>

                  {/* Title overlay */}
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-6 left-6 right-6 text-white text-left pointer-events-none"
                  >
                    <h3 className="font-headline-sm text-headline-sm font-bold">
                      {card.title}
                    </h3>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Details block */}
        <div className="text-center mt-6">
          <RevealWords
            text="Custom Event Planning"
            className="font-headline-sm text-[24px] font-semibold mb-4 text-primary justify-center"
          />
          <RevealFade delay={0.15}>
            <p className="font-body-md text-on-surface-variant max-w-lg mx-auto mb-8 leading-relaxed font-light">
              From decor to dining, our planners coordinate every detail to match
              your vision — ensuring a stress-free and luxurious experience.
            </p>
          </RevealFade>
          <button className="bg-secondary text-on-secondary hover:bg-secondary/90 px-10 py-4 rounded-full font-label-md text-label-md flex items-center gap-2 mx-auto active:scale-95 transition-all shadow-md cursor-pointer">
            Explore More <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
