"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { surahs, type Surah } from "@/data/surahs";

function audioUrl(surahNumber: number) {
  // Mishary Alafasy recitation, served via the islamic.network CDN (used by the alquran.cloud API).
  return `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahNumber}.mp3`;
}

export default function QuranPlayer() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState<Surah>(surahs[0]);
  const [query, setQuery] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);

  const filtered = surahs.filter(
    (s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      String(s.number).includes(query)
  );

  function play(surah: Surah) {
    setCurrent(surah);
    setPlaying(true);
    setOpen(false);
    setTimeout(() => audioRef.current?.play(), 0);
  }

  function togglePlayPause() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="fixed bottom-6 left-20 z-30">
      <audio
        ref={audioRef}
        src={audioUrl(current.number)}
        onEnded={() => setPlaying(false)}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-14 left-0 bg-champagne border border-bisque rounded-xl shadow-lg p-3 w-64"
          >
            <p className="text-[10px] tracking-widest uppercase text-foreground/50 mb-2 px-1">
              Qur&apos;an — Mishary Alafasy
            </p>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search surah..."
              className="w-full bg-transparent border-b border-bisque text-xs text-foreground px-1 py-2 mb-2 focus:outline-none focus:border-antique-rose transition-colors"
            />
            <div className="flex flex-col gap-1 max-h-56 overflow-y-auto">
              {filtered.length > 0 ? (
                filtered.map((surah) => (
                  <button
                    key={surah.number}
                    onClick={() => play(surah)}
                    className={`flex items-center justify-between text-left text-xs px-2 py-1.5 rounded-lg hover:bg-bisque/40 transition-colors ${
                      current.number === surah.number
                        ? "bg-bisque/60 text-dried-thyme"
                        : "text-foreground/70"
                    }`}
                  >
                    <span>{surah.name}</span>
                    <span className="text-foreground/40">{surah.number}</span>
                  </button>
                ))
              ) : (
                <p className="text-xs text-foreground/40 px-2 py-1.5">No matches</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={playing ? "Pause recitation" : "Play recitation"}
          onClick={togglePlayPause}
          className="h-10 w-10 rounded-full bg-dried-thyme flex items-center justify-center shadow-md hover:bg-antique-rose transition-colors"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-champagne">
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-champagne">
              <path d="M7 5v14l12-7z" />
            </svg>
          )}
        </button>
        <button
          type="button"
          aria-label="Search surahs"
          onClick={() => setOpen((v) => !v)}
          className="text-[10px] tracking-widest uppercase text-dried-thyme/70 hover:text-antique-rose transition-colors"
        >
          {current.name}
        </button>
      </div>
    </div>
  );
}
