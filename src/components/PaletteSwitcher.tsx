"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { palettes, defaultPaletteId } from "@/data/palettes";

const STORAGE_KEY = "gik-palette";

export default function PaletteSwitcher() {
  const [open, setOpen] = useState(false);
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
    setOpen(false);
  }

  return (
    <div className="fixed top-28 left-6 z-30">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 left-0 bg-champagne border border-bisque rounded-xl shadow-lg p-3 w-56"
          >
            <p className="text-[10px] tracking-widest uppercase text-foreground/50 mb-3 px-1">
              Select your theme
            </p>
            <div className="flex flex-col gap-1">
              {palettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => choose(palette.id)}
                  className={`flex items-center gap-3 px-2 py-2 rounded-lg text-left text-xs hover:bg-bisque/40 transition-colors ${
                    active === palette.id ? "bg-bisque/60" : ""
                  }`}
                >
                  <span className="flex shrink-0">
                    <span
                      className="h-4 w-4 rounded-full border border-foreground/10"
                      style={{ backgroundColor: palette.swatches[0] }}
                    />
                    <span
                      className="h-4 w-4 rounded-full border border-foreground/10 -ml-1.5"
                      style={{ backgroundColor: palette.swatches[1] }}
                    />
                  </span>
                  <span className="text-foreground/80">{palette.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label="Choose color theme"
        onClick={() => setOpen((v) => !v)}
        className="h-10 w-10 rounded-full bg-dried-thyme flex items-center justify-center shadow-md hover:bg-antique-rose transition-colors"
      >
        <span className="relative h-4 w-4 rounded-full overflow-hidden block">
          <span className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            {palettes.map((p) => (
              <span key={p.id} style={{ backgroundColor: p.swatches[0] }} />
            ))}
          </span>
        </span>
      </button>
    </div>
  );
}
