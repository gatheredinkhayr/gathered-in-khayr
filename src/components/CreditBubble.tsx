"use client";

import { motion } from "framer-motion";

export default function CreditBubble({
  name,
  role,
  href,
  delay = 0,
  offset = 0,
}: {
  name: string;
  role: string;
  href?: string;
  delay?: number;
  offset?: number;
}) {
  const content = (
    <div className="flex flex-col items-center justify-center text-center px-7 py-6 min-w-[160px]">
      <p className="text-sm font-medium text-dried-thyme">{name}</p>
      <p className="text-xs text-foreground/60 mt-1">{role}</p>
    </div>
  );

  return (
    <motion.div
      animate={{ y: [offset, offset - 14, offset] }}
      transition={{
        duration: 3.5 + (delay % 3),
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="rounded-full bg-champagne border border-bisque/60 shadow-sm hover:shadow-md transition-shadow"
      style={{ marginTop: offset }}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-full hover:bg-blush/30 transition-colors"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}
