import type { Metadata } from "next";
import Motif from "@/components/Motif";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Shop | Gathered in Khayr",
};

const tones = ["bisque", "antique-rose", "blush"] as const;
const patterns = ["star", "weave", "arch"] as const;

export default function ShopPage() {
  return (
    <div>
      <PageHeader
        kicker="Curated with care"
        title="Shop"
        description="Modest brands we trust, curated in one place. Links lead to each brand's own site."
      />

      <section className="px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {brands.map((brand, i) => (
            <Reveal key={brand.name + i} delay={i * 0.08}>
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="overflow-hidden rounded-sm mb-4">
                  <Motif
                    tone={tones[i % tones.length]}
                    pattern={patterns[i % patterns.length]}
                    className="h-56 group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <p className="font-serif italic text-xs text-antique-rose mb-1">
                  {brand.category}
                </p>
                <p className="font-serif text-xl text-dried-thyme mb-2">
                  {brand.name}
                </p>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {brand.description}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
