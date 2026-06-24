"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DHIKR = [
  "الحمد لله",
  "سبحان الله",
  "الله أكبر",
  "لا حول ولا قوة إلا بالله",
  "لا إله إلا الله",
];

function Strip({ offset = 0 }: { offset?: number }) {
  const [index, setIndex] = useState(offset % DHIKR.length);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % DHIKR.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          dir="rtl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-sm text-dried-thyme/70"
          style={{ writingMode: "vertical-rl" }}
        >
          {DHIKR[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function DuaBanner() {
  return (
    <>
      <div className="hidden lg:flex fixed inset-y-0 left-0 w-10 bg-blush/15 border-r border-bisque/30 z-20 items-center justify-center">
        <Strip offset={0} />
      </div>
      <div className="hidden lg:flex fixed inset-y-0 right-0 w-10 bg-blush/15 border-l border-bisque/30 z-20 items-center justify-center">
        <Strip offset={2} />
      </div>
    </>
  );
}
