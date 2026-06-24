import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TopicVisual from "@/components/TopicVisual";
import Reveal from "@/components/Reveal";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import SaveButton from "@/components/SaveButton";
import ShareButton from "@/components/ShareButton";
import { topics } from "@/data/topics";
import { topicSeals } from "@/data/topicSeals";

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    return { title: "Topic not found" };
  }

  const title = `${topic.title} | Gathered in Khayr`;
  const image = topicSeals[topic.slug];

  return {
    title,
    description: topic.summary,
    openGraph: {
      title,
      description: topic.summary,
      type: "article",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description: topic.summary,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    notFound();
  }

  const currentIndex = topics.findIndex((t) => t.slug === slug);
  const related = [...topics.slice(currentIndex + 1), ...topics.slice(0, currentIndex)].slice(0, 3);

  return (
    <div>
      <ReadingProgressBar />
      <section className="px-8 py-20 text-center">
        <Reveal>
          <TopicVisual
            slug={topic.slug}
            tone="bisque"
            pattern="arch"
            className="h-40 mb-8 max-w-md mx-auto"
          />
        </Reveal>
        <Reveal>
          <p className="font-serif italic text-sm text-antique-rose mb-2">
            {topic.category}
          </p>
          <div className="flex items-center justify-center gap-3 mb-5">
            <h1 className="font-serif text-4xl text-dried-thyme">
              {topic.title}
            </h1>
            <SaveButton slug={topic.slug} className="text-dried-thyme/50 hover:text-antique-rose transition-colors" />
          </div>
          <p className="max-w-xl mx-auto text-sm leading-7 text-foreground/70 mb-4">
            {topic.summary}
          </p>
          <ShareButton
            title={topic.title}
            className="inline-flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-dried-thyme/60 hover:text-antique-rose transition-colors mb-8"
          />
          {topic.contributorLinks.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
              {/* TODO: replace each href="#" with the real TikTok link for that contributor's piece */}
              {topic.contributorLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-dried-thyme/30 px-4 py-2 text-[11px] tracking-widest uppercase text-dried-thyme hover:bg-dried-thyme hover:text-champagne transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M16.6 5.82c-.83-.71-1.36-1.74-1.36-2.9h-3.18v13.36c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.27 0 .53.04.78.11V10.6a6 6 0 0 0-.78-.05A5.9 5.9 0 0 0 3.44 16.45 5.9 5.9 0 0 0 9.34 22.4a5.9 5.9 0 0 0 5.9-5.9V9.07a8.18 8.18 0 0 0 4.78 1.53V7.42c-1.13 0-2.18-.36-3.42-1.6z" />
                  </svg>
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </Reveal>
      </section>

      <section className="px-8 pb-20 max-w-2xl mx-auto">
        <Reveal delay={0.1}>
          <p className="font-serif italic text-base text-dried-thyme mb-3">Summary</p>
          <p className="text-sm leading-7 text-foreground/80">{topic.body}</p>
        </Reveal>
      </section>

      <section className="bg-bisque/30 px-8 py-24">
        <Reveal>
          <p className="font-serif italic text-sm text-antique-rose text-center mb-2">
            In their own words
          </p>
          <h2 className="font-serif text-3xl text-dried-thyme text-center mb-14">
            Contributor perspectives
          </h2>
        </Reveal>
        {topic.contributors.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {topic.contributors.map((contributor, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-champagne p-6">
                  <p className="font-serif italic text-xs text-antique-rose mb-3">
                    {contributor.format === "video" ? "Video" : contributor.format === "doc" ? "Written" : "Submission"}
                  </p>
                  <p className="text-sm leading-7 text-foreground/80 italic mb-3">
                    &ldquo;{contributor.excerpt}&rdquo;
                  </p>
                  <p className="text-xs text-dried-thyme/70">{contributor.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <p className="text-center text-sm text-foreground/60 max-w-md mx-auto">
              Contributor perspectives for this topic are being gathered now.
              Check back soon — or{" "}
              <Link href="/contact" className="text-dried-thyme border-b border-dried-thyme hover:text-antique-rose hover:border-antique-rose transition-colors">
                reach out to contribute
              </Link>
              .
            </p>
          </Reveal>
        )}
      </section>

      {related.length > 0 && (
        <section className="px-8 py-24">
          <Reveal>
            <p className="font-serif italic text-sm text-antique-rose text-center mb-2">
              Keep exploring
            </p>
            <h2 className="font-serif text-3xl text-dried-thyme text-center mb-14">
              Related topics
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {related.map((relatedTopic, i) => (
              <Reveal key={relatedTopic.slug} delay={i * 0.08}>
                <Link
                  href={`/topics/${relatedTopic.slug}`}
                  className="group flex flex-col items-center text-center px-2"
                >
                  <TopicVisual
                    slug={relatedTopic.slug}
                    tone="bisque"
                    pattern="arch"
                    className="h-28 w-28 mb-4 rounded-full overflow-hidden"
                  />
                  <p className="font-serif italic text-xs text-antique-rose mb-1">
                    {relatedTopic.category}
                  </p>
                  <p className="font-serif text-lg text-dried-thyme group-hover:text-antique-rose transition-colors">
                    {relatedTopic.title}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="px-8 py-16 text-center">
        <Link
          href="/topics"
          className="text-xs tracking-wide text-dried-thyme border-b border-dried-thyme pb-1 hover:text-antique-rose hover:border-antique-rose transition-colors"
        >
          ← Back to all topics
        </Link>
      </section>
    </div>
  );
}
