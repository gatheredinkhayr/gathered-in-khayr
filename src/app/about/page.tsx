import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import AboutBackground from "@/components/AboutBackground";

export const metadata: Metadata = {
  title: "About | Gathered in Khayr",
};

export default function AboutPage() {
  return (
    <div className="relative">
      <AboutBackground />

      <div className="relative z-10">
      <PageHeader
        kicker="The story behind it"
        title="About"
        description="A resource network for young Muslims"
      />

      <section className="px-8 pb-20 max-w-4xl mx-auto">
        <div className="flex flex-col gap-6 text-sm leading-7 text-foreground/80">
          <Reveal>
            <p>
              Gathered in Khayr is a community initiative aimed at building a
              resource network for young Muslims. It compiles and organizes
              beneficial perspectives, resources, and references on contemporary
              issues, examined through an Islamic lens and bound by the limits of
              the Sharīʿah. It is offered as a supplement to one&apos;s pursuit of
              knowledge — not a replacement for it nor a tool for teaching in its
              own right.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              Each topic begins as a discussion prompt or video. Two or more
              contributors, each bringing a different area of knowledge or lived
              experience, share their reflections in whichever format suits them
              best — a written document, a video, or something else entirely.
              Those perspectives are then compiled into a summary, alongside
              related resources, articles, and references.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Contributors may choose to remain anonymous or to be credited for
              their contribution.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              In our Library tab, you&apos;ll find recommendations to take
              from, which should only be done with the aid of a trusted advisor.
              Our Shop tab features a multitude of modest brands and
              Muslim-owned companies, gathered in one encompassing directory.
              This platform will continue to grow — becoming more inclusive of
              different ages and regions, and targeting more specific issues
              with time, inshā&apos;Allāh.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              Please note that this platform — and any other Gathered in Khayr
              platform — is not a space for debate. Questions regarding fiqh,
              ʿaqīdah, and so on will be referred back to a credible ustādh
              rather than settled here. Any disruptive behavior will result in
              being blocked.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="text-center pt-4">
              <p dir="rtl" className="font-serif text-lg text-dried-thyme mb-1">
                نسأل الله أن ينفع به وأن يتقبله منا
              </p>
              <p className="text-xs text-foreground/50">
                We ask Allah to make this beneficial, and to accept it from us.
              </p>
            </div>
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
    </div>
  );
}
