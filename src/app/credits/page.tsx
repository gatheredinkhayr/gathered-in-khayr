import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CreditBubble from "@/components/CreditBubble";
import { credits } from "@/data/credits";

export const metadata: Metadata = {
  title: "Credits | Gathered in Khayr",
};

const offsets = [0, 28, -16, 14, -24, 8];

export default function CreditsPage() {
  return (
    <div>
      <PageHeader
        title="Credits"
        description="Everyone who has contributed their time, knowledge, or perspective to this project. جزاك الله خيرًا"
      />

      <section className="px-8 pb-32 max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center items-start gap-8">
          {credits.map((credit, i) => (
            <Reveal key={`${credit.name}-${i}`} delay={i * 0.08}>
              <CreditBubble
                name={credit.name}
                role={credit.role}
                href={credit.href}
                delay={i * 0.4}
                offset={offsets[i % offsets.length]}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
