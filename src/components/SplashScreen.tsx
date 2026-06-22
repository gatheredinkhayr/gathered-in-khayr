"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { palettes, defaultPaletteId } from "@/data/palettes";

const STORAGE_KEY = "gik-palette";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(defaultPaletteId);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && palettes.some((p) => p.id === stored)) {
      setActive(stored);
    }
  }, []);

  function choose(id: string) {
    setActive(id);
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem(STORAGE_KEY, id);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto flex flex-col items-center justify-center bg-dried-thyme px-6 py-16"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.p
            dir="rtl"
            className="font-serif text-4xl md:text-5xl text-champagne mb-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            السلام عليكم
          </motion.p>
          <motion.p
            className="text-[11px] tracking-[0.2em] uppercase text-champagne/70 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gathered in Khayr
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl text-center mb-10"
          >
            <p className="text-base md:text-lg leading-8 text-champagne/85 mb-4">
              The resources compiled here are based upon the authentic
              Sunnah:
            </p>
            <p className="text-base md:text-lg leading-8 text-champagne/85 mb-6">
              This is not a space for debating fiqh, ʿaqīdah, methodology,
              or anything of that nature — it exists to compile sincere
              perspectives and resources, not contest them. Inshā&apos;Allāh,
              every source shared here will be properly vetted; if anything
              is ever found to be inaccurate or in need of correction,
              please reach out — we welcome it.
            </p>
            <p dir="rtl" className="font-serif text-lg text-champagne">
              والله أعلم
            </p>
            <p className="text-[11px] tracking-widest uppercase text-champagne/50 mt-1">
              And Allah knows best
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col items-center gap-4 mb-10"
          >
            <p className="text-[10px] tracking-widest uppercase text-champagne/50">
              Select your theme
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {palettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => choose(palette.id)}
                  aria-label={palette.label}
                  className={`h-10 w-10 rounded-full overflow-hidden flex shrink-0 transition-transform hover:scale-110 ${
                    active === palette.id ? "ring-2 ring-champagne ring-offset-2 ring-offset-dried-thyme" : ""
                  }`}
                >
                  <span className="h-full w-1/2" style={{ backgroundColor: palette.swatches[0] }} />
                  <span className="h-full w-1/2" style={{ backgroundColor: palette.swatches[1] }} />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setVisible(false)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs font-medium tracking-widest uppercase border-2 border-champagne text-champagne px-8 py-4 rounded-full hover:bg-champagne hover:text-dried-thyme transition-colors duration-300"
          >
            Let&apos;s begin
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
