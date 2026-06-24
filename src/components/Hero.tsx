"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Motif from "@/components/Motif";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const captionOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={sectionRef} className="relative h-screen min-h-[640px] overflow-hidden">
      <Motif tone="dried-thyme" pattern="arch" className="absolute inset-0 h-full w-full" />
      {/* Drop hero.mp4 into the public/ folder to replace this fallback texture with a real video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/hero.mp4"
      />
      {/* Save your black damask photo to public/images/cream-noir-hero.jpg to enable this */}
      <div
        className="theme-cream-noir-bg absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/cream-noir-hero.jpg)" }}
      />
      {/* Save your rose garden photo to public/images/pink-theme-hero.jpg to enable this */}
      <div
        className="theme-rose-bg absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/pink-theme-hero.jpg)" }}
      />
      {/* Save your floral photo to public/images/chocolate-sakura-hero.jpg to enable this */}
      <div
        className="theme-sakura-bg absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/chocolate-sakura-hero.jpg)" }}
      />
      {/* Save your cloud photo to public/images/navy-brown-hero.jpg to enable this */}
      <div
        className="theme-navy-brown-bg absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/navy-brown-hero.jpg)" }}
      />
      {/* Save your vintage maroon photo to public/images/sky-burgundy-hero.jpg to enable this */}
      <div
        className="theme-sky-burgundy-bg absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url(/images/sky-burgundy-hero.jpg)" }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        style={{ opacity: captionOpacity }}
        className="absolute inset-0 flex items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="group relative inline-grid cursor-default mb-4">
            <span
              dir="rtl"
              className="[grid-area:1/1] font-serif italic font-semibold text-3xl md:text-4xl text-champagne transition-opacity duration-300 group-hover:opacity-0"
            >
              مجموعون في الخير
            </span>
            <span className="[grid-area:1/1] font-serif italic font-semibold text-3xl md:text-4xl text-champagne opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Gathered in Khayr
            </span>
          </span>
          <h1 className="font-serif font-semibold text-6xl md:text-7xl leading-[1.05] text-champagne mb-6">
            Gathering what&apos;s good
          </h1>
          <p className="text-base md:text-lg leading-8 text-champagne/90 mb-10 font-medium">
            A comprehensive overview addressing the issues young Muslims
            face today, through an Islamic lens.
          </p>
          <Link
            href="/topics"
            className="inline-block text-sm font-medium tracking-widest uppercase border-2 border-champagne text-champagne px-8 py-4 rounded-full hover:bg-champagne hover:text-dried-thyme transition-colors duration-300"
          >
            Explore topics
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
