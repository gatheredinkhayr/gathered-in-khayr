import Reveal from "@/components/Reveal";

export default function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="px-8 py-20 text-center">
      <Reveal>
        {kicker && (
          <p className="font-serif italic text-sm text-antique-rose mb-2">{kicker}</p>
        )}
        <h1 className="font-serif text-4xl text-dried-thyme mb-5">{title}</h1>
        {description && (
          <p className="max-w-xl mx-auto text-sm leading-7 text-foreground/70">
            {description}
          </p>
        )}
      </Reveal>
    </section>
  );
}
