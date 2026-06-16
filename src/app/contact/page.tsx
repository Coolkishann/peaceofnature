"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-black font-body-md overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 w-full pt-[180px] pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Minimal Header */}
          <div className="flex flex-col items-center text-center mb-24">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-label-md text-sm tracking-wider uppercase mb-6"
              style={{ color: "#6F6F6F" }}
            >
              Get in touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-instrument-serif text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] tracking-tight"
            >
              Let's create <br />
              <em className="italic" style={{ color: "#6F6F6F" }}>
                the eternal.
              </em>
            </motion.h1>
          </div>

          {/* Contact Layout: Info left, Form right */}
          <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-24 max-w-5xl mx-auto">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full md:w-1/3 space-y-12"
            >
              {/* Block 1 */}
              <div>
                <h3 className="font-instrument-serif text-2xl mb-4">Location</h3>
                <p className="font-body-md text-base leading-relaxed text-[#6F6F6F]">
                  100 Horizon Cliffside Road,
                  <br />
                  Oceanic Sanctuary Bay,
                  <br />
                  OS 8094
                </p>
              </div>

              {/* Block 2 */}
              <div>
                <h3 className="font-instrument-serif text-2xl mb-4">Contact</h3>
                <p className="font-body-md text-base leading-relaxed text-[#6F6F6F] flex flex-col gap-1">
                  <a
                    href="mailto:reservations@horizonbay.com"
                    className="hover:text-black transition-colors"
                  >
                    reservations@horizonbay.com
                  </a>
                  <a
                    href="tel:+123456789"
                    className="hover:text-black transition-colors"
                  >
                    +1 234 56 789
                  </a>
                </p>
              </div>

              {/* Block 3 */}
              <div>
                <h3 className="font-instrument-serif text-2xl mb-4">Socials</h3>
                <p className="font-body-md text-base leading-relaxed text-[#6F6F6F] flex flex-col gap-1">
                  <a href="#" className="hover:text-black transition-colors">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-black transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-black transition-colors">
                    Pinterest
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Right: Minimal Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="w-full md:w-[55%]"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-10"
                  >
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full bg-transparent border-b border-black/20 py-4 font-instrument-serif text-2xl md:text-3xl outline-none transition-colors focus:border-black placeholder:text-[#6F6F6F]/50"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-black/20 py-4 font-instrument-serif text-2xl md:text-3xl outline-none transition-colors focus:border-black placeholder:text-[#6F6F6F]/50"
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we assist you?"
                        className="w-full bg-transparent border-b border-black/20 py-4 font-instrument-serif text-2xl md:text-3xl outline-none transition-colors focus:border-black resize-none placeholder:text-[#6F6F6F]/50"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="mt-6 self-start bg-black text-white font-label-md text-[13px] tracking-widest font-semibold px-10 py-4 rounded-full flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
                    >
                      SEND INQUIRY <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 flex flex-col items-start gap-6 h-full justify-center"
                  >
                    <h3 className="font-instrument-serif text-4xl md:text-5xl text-black">
                      Thank you.
                    </h3>
                    <p className="font-body-md text-base leading-relaxed text-[#6F6F6F] max-w-sm">
                      Your inquiry has been received, {formData.name}. Our
                      concierge team will reach out to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 border border-black/20 text-black hover:border-black font-label-md text-[12px] tracking-widest font-semibold px-8 py-3 rounded-full transition-all active:scale-95 cursor-pointer"
                    >
                      SEND ANOTHER
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Minimalist Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="max-w-6xl mx-auto mt-32 h-[50vh] min-h-[400px] w-full relative overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52862.98064972793!2d-118.82441999999998!3d34.02892595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e81da9f908d63f%3A0x93b75824c930b50e!2sMalibu%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "grayscale(1) contrast(1.1) brightness(0.95)",
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peace of Nature Resort Location Map"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay border for framing */}
          <div className="absolute inset-0 border border-black/10 pointer-events-none" />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
