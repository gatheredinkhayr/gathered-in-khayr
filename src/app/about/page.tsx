import Link from "next/link";
import type { Metadata } from "next";
import Motif from "@/components/Motif";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About | Gathered in Khayr",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        kicker="The story behind it"
        title="About"
        description="A resource network for young Muslims, built on public health research and community insight."
      />

      <section className="px-8 pb-20 max-w-2xl mx-auto">
        <Reveal>
          <Motif tone="bisque" pattern="star" className="h-64 mb-12" />
        </Reveal>

        <div className="flex flex-col gap-6 text-sm leading-7 text-foreground/80">
          <Reveal>
            <p>
              Gathered in Khayr is a project aimed at creating a resource network for
              young Muslims through TikTok and this website. With a background in
              public health and data analytics, this project compiles and organizes
              beneficial perspectives, resources, and references that address
              contemporary issues through an Islamic lens — while remaining within the
              boundaries of the Sharī&apos;ah.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Each topic begins as a discussion prompt. Five contributors, each with
              different areas of knowledge and experience, share their thoughts in
              whatever format is easiest for them — a written document, a video, or
              something else entirely. Those perspectives are compiled into a summary,
              alongside related resources, articles, and references.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Contributors can choose to remain anonymous or be credited for their
              contribution.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-bisque/40 px-8 py-24 text-center">
        <Reveal>
          <p className="font-serif italic text-sm text-antique-rose mb-2">
            Have something to share?
          </p>
          <h2 className="font-serif text-3xl text-dried-thyme mb-5">
            Become a contributor
          </h2>
          <p className="max-w-md mx-auto text-sm leading-7 text-foreground/70 mb-8">
            If you&apos;d like to contribute a perspective on an upcoming topic, reach
            out and we&apos;ll send you a discussion prompt.
          </p>
          <Link
            href="/contact"
            className="inline-block text-xs tracking-widest uppercase bg-dried-thyme text-champagne px-6 py-3 rounded-full hover:bg-antique-rose transition-colors duration-300"
          >
            Submit your perspective
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
