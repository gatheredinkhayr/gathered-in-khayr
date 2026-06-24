import Link from "next/link";
import Reveal from "@/components/Reveal";
import TopicIcon from "@/components/TopicIcon";
import FloatingPeersCTA from "@/components/FloatingPeersCTA";
import FloatingNumber from "@/components/FloatingNumber";
import Hero from "@/components/Hero";
import SaveButton from "@/components/SaveButton";
import { topics } from "@/data/topics";
import { topicSeals } from "@/data/topicSeals";
import { topicPinkIcons } from "@/data/topicPinkIcons";
import { topicNavyIcons } from "@/data/topicNavyIcons";
import { toArabicNumeral } from "@/lib/arabicNumerals";

const topicIcons: Record<string, "heart" | "brain" | "money"> = {
  "doubts-in-university": "heart",
  "mental-health-and-sabr": "brain",
  "riba-and-alternatives": "money",
};

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="px-6 py-16 text-center">
        <Reveal>
          <p className="max-w-3xl mx-auto text-sm leading-7 text-foreground/70 mb-8">
            The resources compiled here are bound upon the authentic Sunnah,
            understood through the lens of the righteous predecessors
            (al-Salaf al-Sālih). This is not a space for debate — it exists
            to compile sincere perspectives, not contest them. All matters
            of worship and guidance should be carried out with a trusted
            advisor or ustādh, and inshā&apos;Allāh, every source here will
            be properly vetted.
          </p>
          <p dir="rtl" className="font-serif text-2xl text-dried-thyme mb-3">
            اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي
          </p>
          <p className="text-sm text-foreground/60 italic max-w-md mx-auto">
            &ldquo;O Allah, benefit me with what You have taught me, and
            teach me that which will benefit me.&rdquo;
          </p>
        </Reveal>
      </section>

      {/* Featured topics — no card blocks, link reveals on hover */}
      <section className="px-6 md:px-16 py-24">
        <Reveal>
          <p className="font-serif italic text-sm text-antique-rose mb-2 text-center">
            Currently in the works
          </p>
          <h2 className="font-serif text-3xl text-dried-thyme text-center mb-16">
            Featured topics
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {topics.map((topic, i) => (
            <Reveal key={topic.slug} delay={i * 0.1}>
              <Link
                href={`/topics/${topic.slug}`}
                className="group flex flex-col items-center text-center px-4 py-6"
              >
                <div className="relative h-16 w-16 mb-6 group-hover:scale-110 transition-transform duration-300 ease-out">
                  <TopicIcon
                    name={topicIcons[topic.slug] ?? "heart"}
                    className="topic-icon-default h-16 w-16 text-dried-thyme group-hover:text-antique-rose transition-colors"
                  />
                  {topicSeals[topic.slug] && (
                    <div className="topic-icon-seal absolute inset-0 h-16 w-16 rounded-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={topicSeals[topic.slug]}
                        alt={topic.title}
                        className={
                          topicSeals[topic.slug].includes("seal-mental-health")
                            ? "h-full w-full object-cover"
                            : "h-full w-full object-cover scale-125"
                        }
                        style={
                          topicSeals[topic.slug].includes("seal-mental-health")
                            ? { objectPosition: "50% 47%", transform: "scale(2.3)" }
                            : undefined
                        }
                      />
                    </div>
                  )}
                  {topicPinkIcons[topic.slug] && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={topicPinkIcons[topic.slug]}
                      alt={topic.title}
                      className="topic-icon-pink absolute inset-0 h-16 w-16 object-contain"
                    />
                  )}
                  {topicNavyIcons[topic.slug] && (
                    <div className="topic-icon-navy absolute -inset-4 items-center justify-center">
                      <FloatingNumber delay={i * 0.2} className="block">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={topicNavyIcons[topic.slug]}
                          alt={topic.title}
                          className="h-28 w-28 object-contain"
                        />
                      </FloatingNumber>
                    </div>
                  )}
                  <div className="topic-icon-number absolute -inset-4 items-center justify-center">
                    <FloatingNumber
                      delay={i * 0.2}
                      className="font-serif italic font-semibold text-6xl text-dried-thyme group-hover:text-antique-rose transition-colors"
                    >
                      {toArabicNumeral(i + 1)}
                    </FloatingNumber>
                  </div>
                </div>
                <p className="font-serif italic text-xs text-antique-rose mb-1">
                  {topic.category}
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-serif text-xl text-dried-thyme group-hover:text-antique-rose transition-colors">
                    {topic.title}
                  </p>
                  <SaveButton slug={topic.slug} className="text-dried-thyme/40 hover:text-antique-rose transition-colors" />
                </div>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {topic.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FloatingPeersCTA />
    </div>
  );
}
