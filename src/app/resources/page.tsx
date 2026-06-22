"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { resources, resourceCategories } from "@/data/resources";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? resources.filter((r) => r.category === activeCategory)
    : resources;

  return (
    <div>
      <PageHeader
        kicker="Reads and references"
        title="Resource library"
        description="References, reads, and reminders — organized so you can find what's relevant to you."
      />

      <section className="px-8 pb-24 max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`text-[11px] tracking-widest uppercase px-4 py-2 rounded-full border transition-colors ${
              activeCategory === null
                ? "bg-dried-thyme text-champagne border-dried-thyme"
                : "border-bisque text-dried-thyme hover:bg-blush"
            }`}
          >
            All
          </button>
          {resourceCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-[11px] tracking-widest uppercase px-4 py-2 rounded-full border transition-colors ${
                activeCategory === category
                  ? "bg-dried-thyme text-champagne border-dried-thyme"
                  : "border-bisque text-dried-thyme hover:bg-blush"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {filtered.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              className="bg-champagne border border-bisque/60 rounded-lg px-5 py-4 flex items-center justify-between gap-4 hover:bg-blush/40 transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-dried-thyme mb-1">
                  {resource.title}
                </p>
                <p className="text-xs text-foreground/60">
                  {resource.category} · {resource.description}
                </p>
              </div>
              <span className="text-dried-thyme/60 text-sm shrink-0">→</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
