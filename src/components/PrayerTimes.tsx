"use client";

import Reveal from "@/components/Reveal";
import { usePrayerTimes, PRAYER_ORDER } from "@/hooks/usePrayerTimes";

export default function PrayerTimes() {
  const { data, error, nextPrayer } = usePrayerTimes();

  return (
    <section className="px-6 md:px-16 py-10 bg-bisque/30">
      <Reveal>
        <p className="font-serif italic text-sm text-antique-rose text-center mb-6">
          Wherever you are, remember your salah comes first.
        </p>
      </Reveal>

      {error ? (
        <p className="text-center text-xs text-foreground/60">
          Couldn&apos;t load prayer times right now — please try again later.
        </p>
      ) : !data ? (
        <p className="text-center text-xs text-foreground/60">Loading times…</p>
      ) : (
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl mx-auto">
            {PRAYER_ORDER.map((name) => (
              <div
                key={name}
                className={`rounded-lg px-3 py-3 text-center border transition-colors ${
                  name === nextPrayer
                    ? "bg-dried-thyme text-champagne border-dried-thyme"
                    : "bg-champagne border-bisque/60 text-dried-thyme"
                }`}
              >
                <p className="text-[10px] tracking-widest uppercase mb-1 opacity-70">
                  {name}
                </p>
                <p className="font-serif text-sm">{data.timings[name]}</p>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </section>
  );
}
