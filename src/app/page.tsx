import Link from "next/link";
import Motif from "@/components/Motif";
import Reveal from "@/components/Reveal";
import TopicIcon from "@/components/TopicIcon";
import { topics } from "@/data/topics";
import { topicSeals } from "@/data/topicSeals";

const topicIcons: Record<string, "heart" | "brain" | "money"> = {
  "doubts-in-university": "heart",
  "mental-health-and-sabr": "brain",
  "riba-and-alternatives": "money",
};

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <Motif tone="dried-thyme" pattern="arch" className="absolute inset-0 h-full w-full" />
        {/* Drop hero.mp4 into the public/ folder to replace this fallback texture with a real video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/hero.mp4"
        />
        {/* Save your black damask photo to public/images/cream-noir-hero.jpg to enable this */}
        <div
          className="theme-cream-noir-bg absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/cream-noir-hero.jpg)" }}
        />
        {/* Save your rose garden photo to public/images/pink-theme-hero.jpg to enable this */}
        <div
          className="theme-rose-bg absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/pink-theme-hero.jpg)" }}
        />
        {/* Save your floral photo to public/images/chocolate-sakura-hero.jpg to enable this */}
        <div
          className="theme-sakura-bg absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/chocolate-sakura-hero.jpg)" }}
        />
        {/* Save your cloud photo to public/images/navy-brown-hero.jpg to enable this */}
        <div
          className="theme-navy-brown-bg absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/navy-brown-hero.jpg)" }}
        />
        {/* Save your vintage maroon photo to public/images/sky-burgundy-hero.jpg to enable this */}
        <div
          className="theme-sky-burgundy-bg absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/sky-burgundy-hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="group relative inline-grid cursor-default mb-4">
                <span
                  dir="rtl"
                  className="[grid-area:1/1] font-serif italic font-semibold text-3xl md:text-4xl text-champagne transition-opacity duration-300 group-hover:opacity-0"
                >
                  مجموعون في الخير
                </span>
                <span className="[grid-area:1/1] font-serif italic font-semibold text-3xl md:text-4xl text-champagne opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Gathered in Khayr
                </span>
              </span>
              <h1 className="font-serif font-semibold text-6xl md:text-7xl leading-[1.05] text-champagne mb-6">
                Gathering what&apos;s good
              </h1>
              <p className="text-base md:text-lg leading-8 text-champagne/90 mb-10 font-medium">
                A comprehensive overview addressing the issues young Muslims
                face today, through an Islamic lens.
              </p>
              <Link
                href="/topics"
                className="inline-block text-sm font-medium tracking-widest uppercase border-2 border-champagne text-champagne px-8 py-4 rounded-full hover:bg-champagne hover:text-dried-thyme transition-colors duration-300"
              >
                Explore topics
              </Link>
            </Reveal>
          </div>
        </div>
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
                          topic.slug === "mental-health-and-sabr"
                            ? "h-full w-full object-cover"
                            : "h-full w-full object-cover scale-125"
                        }
                        style={
                          topic.slug === "mental-health-and-sabr"
                            ? { objectPosition: "50% 47%", transform: "scale(2.3)" }
                            : undefined
                        }
                      />
                    </div>
                  )}
                </div>
                <p className="font-serif italic text-xs text-antique-rose mb-1">
                  {topic.category}
                </p>
                <p className="font-serif text-xl text-dried-thyme mb-2 group-hover:text-antique-rose transition-colors">
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
