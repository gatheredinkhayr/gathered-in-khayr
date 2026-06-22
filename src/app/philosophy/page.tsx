import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Motif from "@/components/Motif";

export const metadata: Metadata = {
  title: "Our philosophy | Gathered in Khayr",
};

export default function PhilosophyPage() {
  return (
    <div>
      <section className="px-8 py-20 text-center">
        <Reveal>
          <p className="font-serif italic text-sm text-antique-rose mb-2">
            Gathered in Khayr
          </p>
          <h1 className="font-serif text-4xl text-dried-thyme">
            A khayr philosophy
          </h1>
        </Reveal>
      </section>

      <section className="px-8 pb-24 max-w-2xl mx-auto">
        <Reveal>
          <Motif tone="bisque" pattern="weave" className="h-64 mb-12" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-sm leading-8 text-foreground/80 mb-6">
            We compile beneficial perspectives, resources, and references that
            address contemporary issues through an Islamic lens, while remaining
            within the boundaries of the Sharī&apos;ah.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-sm leading-8 text-foreground/80 mb-6">
            Each topic begins as a discussion prompt, gathered from five
            contributors with different areas of knowledge and experience. Their
            insights are summarized and shared alongside related resources — a
            one-stop shop for young Muslims navigating issues that often don&apos;t
            get addressed enough.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="font-serif italic text-base text-dried-thyme/80 text-center mt-12">
            every topic is gathered with care, and lingers like a memory of the
            season
          </p>
        </Reveal>
      </section>
    </div>
  );
}
