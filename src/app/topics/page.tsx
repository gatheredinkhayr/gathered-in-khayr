import Link from "next/link";
import type { Metadata } from "next";
import TopicVisual from "@/components/TopicVisual";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { topics } from "@/data/topics";

export const metadata: Metadata = {
  title: "Topics | Gathered in Khayr",
};

export default function TopicsPage() {
  return (
    <div>
      <PageHeader
        kicker="Worth talking about"
        title="Topics"
        description="Contemporary issues young Muslims face, summarized and explored through five contributor perspectives per topic."
      />

      <section className="px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {topics.map((topic, i) => (
            <Reveal key={topic.slug} delay={i * 0.08}>
              <Link href={`/topics/${topic.slug}`} className="group block">
                <div className="overflow-hidden rounded-sm mb-4">
                  <TopicVisual
                    slug={topic.slug}
                    tone={i % 2 === 0 ? "bisque" : "antique-rose"}
                    pattern={i % 3 === 0 ? "star" : i % 3 === 1 ? "weave" : "arch"}
                    className="h-48 group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <p className="font-serif italic text-xs text-antique-rose mb-1">
                  {topic.category}
                </p>
                <p className="font-serif text-xl text-dried-thyme mb-2">
                  {topic.title}
                </p>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {topic.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
