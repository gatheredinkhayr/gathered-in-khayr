import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ShariaDisclaimer() {
  return (
    <section className="px-6 md:px-16 py-16 bg-blush/40">
      <Reveal>
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif italic text-sm text-antique-rose mb-3">
            A note on every topic
          </p>
          <p className="text-sm leading-7 text-foreground/75 mb-4">
            Every topic on this page is approached upon the methodology of
            the Salaf and Ahl as-Sunnah — grounded in the Qur&apos;an, the
            authentic Sunnah, and the understanding of the Prophet&apos;s ﷺ
            companions, along with anything that affirms that way.
          </p>
          <p className="text-sm leading-7 text-foreground/75 mb-6">
            This is not a space for debate — it exists to compile sincere
            perspectives and resources, not contest them. If anything shared
            here is found to be inaccurate or in need of correction, please{" "}
            <Link
              href="/contact"
              className="text-dried-thyme border-b border-dried-thyme hover:text-antique-rose hover:border-antique-rose transition-colors"
            >
              reach out
            </Link>{" "}
            — we welcome it.
          </p>
          <p dir="rtl" className="font-serif text-lg text-dried-thyme">
            والله أعلم
          </p>
          <p className="text-[11px] tracking-widest uppercase text-foreground/40 mt-1">
            And Allah knows best
          </p>
        </div>
      </Reveal>
    </section>
  );
}
