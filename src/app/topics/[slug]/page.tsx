import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TopicVisual from "@/components/TopicVisual";
import Reveal from "@/components/Reveal";
import { topics } from "@/data/topics";

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
  return { title: topic ? `${topic.title} | Gathered in Khayr` : "Topic not found" };
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

  return (
    <div>
      <section className="px-8 py-20 text-center">
        <Reveal>
          <p className="font-serif italic text-sm text-antique-rose mb-2">
            {topic.category}
          </p>
          <h1 className="font-serif text-4xl text-dried-thyme mb-5">
            {topic.title}
          </h1>
          <p className="max-w-xl mx-auto text-sm leading-7 text-foreground/70">
            {topic.summary}
          </p>
        </Reveal>
      </section>

      <section className="px-8 pb-20 max-w-2xl mx-auto">
        <Reveal>
          <TopicVisual slug={topic.slug} tone="bisque" pattern="arch" className="h-64 mb-10" />
        </Reveal>
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
