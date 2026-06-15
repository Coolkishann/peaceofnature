"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { RevealWords, RevealFade } from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Staycation Reservation",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-on-surface">
      <Navbar />

      <main className="flex-1 w-full pt-[80px]">
        {/* Responsive Layout: Content flows left, Map is sticky right */}
        <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[calc(100vh-80px)]">
          
          {/* Left Column: Form & Info */}
          <div className="w-full lg:w-[45%] px-6 md:px-margin-desktop py-12 space-y-12 flex flex-col justify-between">
            <div className="space-y-12">
              <div>
                <RevealFade>
                  <span className="font-label-md text-label-md text-secondary block mb-4 uppercase tracking-[0.25em] text-[13px] font-semibold">
                    Inquiries & Booking
                  </span>
                </RevealFade>
                <RevealWords
                  text="Connect With Us"
                  className="font-headline-lg text-[48px] md:text-[64px] font-bold text-primary mb-6"
                />
                <RevealFade delay={0.2}>
                  <p className="font-body-md text-on-surface-variant text-[16px] leading-relaxed font-light max-w-xl">
                    Ready to coordinate your escape? Submit your details below, and
                    our dedicated concierge team will reach out within 24 hours to
                    confirm your reservations.
                  </p>
                </RevealFade>
              </div>

              {/* Inquiry Form */}
              <div className="bg-surface-container/50 border border-primary/5 p-8 md:p-10 rounded-3xl shadow-sm">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="font-label-md text-[11px] tracking-wider uppercase font-semibold text-primary/75"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full bg-white border border-primary/10 hover:border-primary/25 focus:border-primary rounded-xl px-5 py-3.5 font-body-md text-[15px] outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className="font-label-md text-[11px] tracking-wider uppercase font-semibold text-primary/75"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="w-full bg-white border border-primary/10 hover:border-primary/25 focus:border-primary rounded-xl px-5 py-3.5 font-body-md text-[15px] outline-none transition-colors"
                        />
                      </div>

                      {/* Inquiry Type */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="inquiryType"
                          className="font-label-md text-[11px] tracking-wider uppercase font-semibold text-primary/75"
                        >
                          Inquiry Type
                        </label>
                        <select
                          name="inquiryType"
                          id="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-primary/10 hover:border-primary/25 focus:border-primary rounded-xl px-5 py-3.5 font-body-md text-[15px] outline-none transition-colors cursor-pointer appearance-none"
                        >
                          <option value="Staycation Reservation">
                            Staycation Reservation
                          </option>
                          <option value="Restaurant Booking">
                            Restaurant Booking
                          </option>
                          <option value="Bespoke Event & Wedding">
                            Bespoke Event & Wedding
                          </option>
                          <option value="General Question">General Question</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="message"
                          className="font-label-md text-[11px] tracking-wider uppercase font-semibold text-primary/75"
                        >
                          Message / Specific Desires
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about dates, dietary requests, or custom wishes..."
                          className="w-full bg-white border border-primary/10 hover:border-primary/25 focus:border-primary rounded-xl px-5 py-3.5 font-body-md text-[15px] outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/95 text-white font-label-md text-[12px] tracking-widest font-semibold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer shadow-md"
                      >
                        SUBMIT REQUEST <Send className="w-4 h-4" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 flex flex-col items-center gap-6"
                    >
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-headline-sm text-[22px] font-bold text-primary">
                          Request Received
                        </h3>
                        <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed max-w-sm font-light">
                          Thank you, <span className="font-medium text-primary">{formData.name}</span>. Our concierge team is already reviewing your inquiry for <span className="font-medium text-primary">{formData.inquiryType}</span> and will call or email you shortly.
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 border border-primary text-primary hover:bg-primary hover:text-white font-label-md text-[12px] tracking-widest font-semibold px-8 py-3 rounded-full transition-all active:scale-95 cursor-pointer"
                      >
                        SEND ANOTHER REQUEST
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact details */}
              <div className="space-y-6 pt-6">
                <RevealWords
                  text="Resort Details"
                  className="font-headline-sm text-[22px] font-bold text-primary"
                />
                
                <RevealFade delay={0.1}>
                  <div className="flex gap-4 items-start">
                    <MapPin className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-label-md text-[12px] uppercase font-semibold text-primary/75 tracking-wider">
                        Location Address
                      </h4>
                      <p className="font-body-md text-on-surface-variant text-[15px] font-light mt-1">
                        100 Horizon Cliffside Road, <br />
                        Oceanic Sanctuary Bay, OS 8094
                      </p>
                    </div>
                  </div>
                </RevealFade>

                <RevealFade delay={0.2}>
                  <div className="flex gap-4 items-start">
                    <Phone className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-label-md text-[12px] uppercase font-semibold text-primary/75 tracking-wider">
                        Direct Concierge Line
                      </h4>
                      <p className="font-body-md text-on-surface-variant text-[15px] font-medium mt-1">
                        +1 234 56 789 (24/7 Service)
                      </p>
                    </div>
                  </div>
                </RevealFade>

                <RevealFade delay={0.3}>
                  <div className="flex gap-4 items-start">
                    <Mail className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-label-md text-[12px] uppercase font-semibold text-primary/75 tracking-wider">
                        Email Reservations
                      </h4>
                      <p className="font-body-md text-on-surface-variant text-[15px] font-medium mt-1">
                        reservations@horizonbay.com
                      </p>
                    </div>
                  </div>
                </RevealFade>
              </div>
            </div>
          </div>

          {/* Right Column: Full Screen Size Interactive Map */}
          <div className="w-full lg:w-[55%] h-[60vh] lg:h-[calc(100vh-80px)] lg:sticky lg:top-[80px] overflow-hidden relative shadow-inner">
            {/* Google Map stylized using CSS filter matrices for high-end luxury resort branding */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52862.98064972793!2d-118.82441999999998!3d34.02892595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e81da9f908d63f%3A0x93b75824c930b50e!2sMalibu%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.95) contrast(1.1) brightness(0.9) sepia(0.12) hue-rotate(85deg)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peace of Nature Resort Location Map"
              className="w-full h-full object-cover"
            />
            {/* Ambient vignette and overlay to tie standard iframe cleanly into UI */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 bg-primary text-white font-mono text-[9px] tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md bg-opacity-80 shadow-md">
              LAT 34.02° N / LON 118.49° W
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
