"use client";

import { motion, useScroll } from "framer-motion";

export default function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-antique-rose origin-left z-50"
    />
  );
}
