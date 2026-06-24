"use client";

import { motion } from "framer-motion";

export default function FloatingNumber({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.p
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    >
      {children}
    </motion.p>
  );
}
