"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { resources, resourceCategories } from "@/data/resources";

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = resources
    .filter((r) => (activeCategory ? r.category === activeCategory : true))
    .filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <PageHeader
        kicker="Reads and references"
        title="Library"
        description="References, reads, and reminders — organized so you can find what's relevant to you."
      />

      <section className="px-8 pb-24 max-w-3xl mx-auto">
        <div className="max-w-sm mx-auto mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources..."
            className="w-full bg-transparent border-b border-bisque text-sm text-foreground px-1 py-2 focus:outline-none focus:border-antique-rose transition-colors"
          />
        </div>

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

        {filtered.length === 0 ? (
          <p className="text-center text-sm text-foreground/50">
            No resources match your search.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((resource) => {
              const isInternal = resource.href.startsWith("/");
              const content = (
                <>
                  <div>
                    <p className="text-sm font-medium text-dried-thyme mb-1">
                      {resource.title}
                    </p>
                    <p className="text-xs text-foreground/60">
                      {resource.category} · {resource.description}
                    </p>
                  </div>
                  <span className="text-dried-thyme/60 text-sm shrink-0">→</span>
                </>
              );
              const className =
                "bg-champagne border border-bisque/60 rounded-lg px-5 py-4 flex items-center justify-between gap-4 hover:bg-blush/40 transition-colors";

              return isInternal ? (
                <Link key={resource.title} href={resource.href} className={className}>
                  {content}
                </Link>
              ) : (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {content}
                </a>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
