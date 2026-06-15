"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { RevealWords, RevealFade } from "./ScrollReveal";

const pricingPlans = [
  {
    id: "tranquil",
    name: "Tranquil Escape",
    price: "350",
    desc: "A rejuvenating weekend staycation to unwind in organic garden surroundings.",
    features: [
      "Signature Garden View Suite",
      "Daily Gourmet Organic Breakfast",
      "Complimentary Spa Session (60 mins)",
      "Access to Thermal Pools & Gym",
      "Bespoke Concierge Assistant",
    ],
    popular: false,
  },
  {
    id: "oceanic",
    name: "Oceanic Luxury",
    price: "620",
    desc: "Our signature luxury experience featuring private oceanfront infinity pools.",
    features: [
      "Overwater Lagoon Villa",
      "Private Beach Butler & Deck",
      "Exclusive Sunset Dinner on Shore",
      "Gourmet Wine Cellar Tasting",
      "Priority Yacht Excursion Booking",
    ],
    popular: true,
  },
  {
    id: "penthouse",
    name: "The Royal Penthouse",
    price: "1,250",
    desc: "Bespoke quiet luxury for the ultimate retreat with complete privacy.",
    features: [
      "Multi-Bedroom Cliffside Villa",
      "Private Yacht Charter (4 Hours)",
      "Bespoke Chef & Dedicated Butler",
      "Unlimited Holistic Spa Therapies",
      "Exclusive Airport Helipad Transfer",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-section-gap px-margin-desktop bg-white text-on-surface max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="text-center mb-20">
        <RevealFade>
          <span className="font-label-md text-label-md text-secondary block mb-4 uppercase tracking-[0.2em] text-[13px] font-semibold">
            Luxury Packages
          </span>
        </RevealFade>
        <RevealWords
          text="Curated Stays, Unrivaled Tiers"
          className="font-headline-lg text-[36px] md:text-[48px] font-bold text-primary mb-6 justify-center"
        />
        <RevealFade delay={0.15}>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto text-[16px] leading-relaxed font-light">
            Choose a tailored sanctuary package. Every stay at Peace of Nature is
            meticulously arranged to cater to your specific desires.
          </p>
        </RevealFade>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-stretch">
        {pricingPlans.map((plan, idx) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * idx, duration: 0.7 }}
            whileHover={{ y: -8 }}
            className={`flex flex-col justify-between p-8 md:p-10 rounded-3xl border transition-all duration-300 relative ${
              plan.popular
                ? "border-primary bg-primary/5 shadow-xl ring-1 ring-primary"
                : "border-primary/10 bg-transparent hover:border-primary/25 hover:shadow-lg"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute top-0 right-10 -translate-y-1/2 bg-secondary text-on-secondary font-label-md text-[11px] tracking-widest font-semibold px-4 py-1.5 rounded-full shadow-sm">
                RECOMMENDED
              </span>
            )}

            <div>
              {/* Header */}
              <div className="mb-8">
                <h3 className="font-headline-sm text-[22px] font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="font-body-md text-on-surface-variant text-[14px] leading-relaxed font-light mb-6">
                  {plan.desc}
                </p>
                <div className="flex items-baseline text-primary">
                  <span className="font-headline-sm text-[28px] font-semibold">$</span>
                  <span className="font-display-lg text-[56px] font-bold leading-none">
                    {plan.price}
                  </span>
                  <span className="font-label-md text-[13px] text-on-surface-variant ml-2 tracking-wide font-medium">
                    / NIGHT
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 border-t border-primary/10 pt-8 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-[14px]">
                    <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="font-body-md text-on-surface-variant font-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action button */}
            <div className="mt-auto pt-6">
              <Link href="/contact" className="block w-full">
                <button
                  className={`w-full py-4 rounded-full font-label-md text-[12px] tracking-widest font-semibold transition-all active:scale-98 cursor-pointer ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary-container"
                      : "border border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  RESERVE PACKAGE
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
