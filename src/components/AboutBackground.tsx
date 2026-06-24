export default function AboutBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className="theme-cream-noir-bg absolute inset-0 h-full w-full bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url(/images/cream-noir-hero.jpg)" }}
      />
      <div
        className="theme-rose-bg absolute inset-0 h-full w-full bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url(/images/pink-theme-hero.jpg)" }}
      />
      <div
        className="theme-sakura-bg absolute inset-0 h-full w-full bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url(/images/chocolate-sakura-hero.jpg)" }}
      />
      <div
        className="theme-navy-brown-bg absolute inset-0 h-full w-full bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url(/images/navy-brown-hero.jpg)" }}
      />
      <div
        className="theme-sky-burgundy-bg absolute inset-0 h-full w-full bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url(/images/sky-burgundy-hero.jpg)" }}
      />
    </div>
  );
}
