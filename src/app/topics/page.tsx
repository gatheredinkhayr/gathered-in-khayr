"use client";

import Link from "next/link";
import { useState } from "react";
import TopicVisual from "@/components/TopicVisual";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SaveButton from "@/components/SaveButton";
import { useSavedTopics } from "@/hooks/useSavedTopics";
import { topics } from "@/data/topics";

export default function TopicsPage() {
  const [savedOnly, setSavedOnly] = useState(false);
  const { isSaved } = useSavedTopics();

  const visibleTopics = savedOnly ? topics.filter((t) => isSaved(t.slug)) : topics;

  return (
    <div>
      <PageHeader
        kicker="Worth talking about"
        title="Topics"
        description="Contemporary issues young Muslims face, summarized and explored through two or more contributor perspectives per topic."
      />

      <div className="flex justify-center mb-12">
        <button
          onClick={() => setSavedOnly((v) => !v)}
          className={`text-[11px] tracking-widest uppercase px-4 py-2 rounded-full border transition-colors ${
            savedOnly
              ? "bg-dried-thyme text-champagne border-dried-thyme"
              : "border-bisque text-dried-thyme hover:bg-blush"
          }`}
        >
          {savedOnly ? "Showing saved" : "Show saved only"}
        </button>
      </div>

      <section className="px-8 pb-24">
        {visibleTopics.length === 0 ? (
          <p className="text-center text-sm text-foreground/60">
            You haven&apos;t saved any topics yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {visibleTopics.map((topic, i) => (
              <Reveal key={topic.slug} delay={i * 0.08}>
                <Link href={`/topics/${topic.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-sm mb-4">
                    <TopicVisual
                      slug={topic.slug}
                      tone={i % 2 === 0 ? "bisque" : "antique-rose"}
                      pattern={i % 3 === 0 ? "star" : i % 3 === 1 ? "weave" : "arch"}
                      className="h-48 group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <SaveButton
                      slug={topic.slug}
                      className="absolute top-3 right-3 z-10 text-champagne hover:text-antique-rose transition-colors drop-shadow"
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
        )}
      </section>
    </div>
  );
}
