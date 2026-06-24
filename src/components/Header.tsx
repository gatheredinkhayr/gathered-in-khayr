"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { topics } from "@/data/topics";
import { resources } from "@/data/resources";
import { credits } from "@/data/credits";
import { usePrayerTimes, PRAYER_ORDER } from "@/hooks/usePrayerTimes";

const navRight = [
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Let's talk" },
  { href: "/credits", label: "Credits" },
];

const mobileNav = [
  { href: "/", label: "Home" },
  { href: "/topics", label: "Topics" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Library" },
  ...navRight,
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [topicsQuery, setTopicsQuery] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(topicsQuery.toLowerCase())
  );

  const filteredResources = topicsQuery
    ? resources.filter(
        (resource) =>
          resource.category !== "Gathered in Khayr Topics" &&
          resource.title.toLowerCase().includes(topicsQuery.toLowerCase())
      )
    : [];

  const { data: prayerData, nextPrayer } = usePrayerTimes();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "bg-champagne/90 backdrop-blur-sm border-bisque/60 py-2"
          : "bg-champagne border-transparent py-4"
      }`}
    >
      <div className="relative mx-auto max-w-6xl px-6 flex items-center justify-between gap-4">
        <nav className="hidden md:flex items-center gap-6 text-[11px] tracking-widest uppercase text-dried-thyme">
          <Link href="/" className="hover:text-antique-rose transition-colors">
            Home
          </Link>

          <div className="relative group">
            <Link href="/topics" className="hover:text-antique-rose transition-colors">
              Topics
            </Link>
            <div className="absolute left-0 top-full pt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-champagne border border-bisque rounded-lg shadow-lg p-3 normal-case">
                <input
                  type="text"
                  value={topicsQuery}
                  onChange={(e) => setTopicsQuery(e.target.value)}
                  placeholder="Search topics & library..."
                  className="w-full bg-transparent border-b border-bisque text-xs text-foreground px-1 py-2 tracking-normal focus:outline-none focus:border-antique-rose transition-colors"
                />
                <div className="mt-2 flex flex-col gap-1 max-h-64 overflow-y-auto">
                  {filteredTopics.length === 0 && filteredResources.length === 0 ? (
                    topicsQuery ? (
                      <Link
                        href="/contact"
                        className="text-xs tracking-normal text-antique-rose hover:text-dried-thyme px-1 py-1.5 rounded transition-colors"
                      >
                        Don&apos;t see a topic? Suggest one →
                      </Link>
                    ) : (
                      <p className="text-xs tracking-normal text-foreground/40 px-1 py-1.5">
                        No results found
                      </p>
                    )
                  ) : (
                    <>
                      {filteredTopics.map((topic) => (
                        <Link
                          key={topic.slug}
                          href={`/topics/${topic.slug}`}
                          className="flex items-center justify-between text-xs tracking-normal text-foreground/70 hover:text-antique-rose px-1 py-1.5 rounded transition-colors"
                        >
                          <span>{topic.title}</span>
                          <span className="text-[9px] tracking-wide uppercase text-foreground/30">Topic</span>
                        </Link>
                      ))}
                      {filteredResources.map((resource) => {
                        const isInternal = resource.href.startsWith("/");
                        const itemClass =
                          "flex items-center justify-between text-xs tracking-normal text-foreground/70 hover:text-antique-rose px-1 py-1.5 rounded transition-colors";
                        return isInternal ? (
                          <Link key={resource.title} href={resource.href} className={itemClass}>
                            <span>{resource.title}</span>
                            <span className="text-[9px] tracking-wide uppercase text-foreground/30">
                              {resource.category}
                            </span>
                          </Link>
                        ) : (
                          <a
                            key={resource.title}
                            href={resource.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={itemClass}
                          >
                            <span>{resource.title}</span>
                            <span className="text-[9px] tracking-wide uppercase text-foreground/30">
                              {resource.category}
                            </span>
                          </a>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-antique-rose transition-colors">
            About
          </Link>

          <Link href="/resources" className="hover:text-antique-rose transition-colors">
            Library
          </Link>
        </nav>

        <div className="absolute left-1/2 -translate-x-1/2 group flex flex-col items-center cursor-default">
          <Link
            href="/"
            className={`font-serif tracking-widest uppercase text-dried-thyme transition-all duration-300 ${
              scrolled ? "text-base" : "text-lg"
            }`}
          >
            Gathered in Khayr
          </Link>
          {prayerData && (
            <p className="text-[10px] tracking-widest text-dried-thyme/50 mt-0.5">
              {prayerData.hijri.day} {prayerData.hijri.month} {prayerData.hijri.year} AH
            </p>
          )}

          {prayerData && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-champagne border border-bisque rounded-lg shadow-lg p-4">
                <p className="text-[10px] tracking-widest uppercase text-foreground/50 mb-3 text-center">
                  Prayer times
                </p>
                <div className="grid grid-cols-5 gap-1">
                  {PRAYER_ORDER.map((name) => (
                    <div
                      key={name}
                      className={`rounded px-1 py-2 text-center ${
                        name === nextPrayer ? "bg-dried-thyme text-champagne" : "text-dried-thyme"
                      }`}
                    >
                      <p className="text-[9px] tracking-wide uppercase opacity-70">{name}</p>
                      <p className="text-xs font-medium">{prayerData.timings[name]}</p>
                    </div>
                  ))}
                </div>
                <p className="font-serif italic text-xs text-antique-rose text-center mt-3">
                  Wherever you are, remember your salah comes first.
                </p>
              </div>
            </div>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-6 text-[11px] tracking-widest uppercase text-dried-thyme">
          <Link href="/shop" className="hover:text-antique-rose transition-colors">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-antique-rose transition-colors">
            Let&apos;s talk
          </Link>

          <div className="relative group">
            <Link href="/credits" className="hover:text-antique-rose transition-colors">
              Credits
            </Link>
            <div className="absolute right-0 top-full pt-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-champagne border border-bisque rounded-lg shadow-lg p-3 normal-case">
                <p className="text-[10px] tracking-widest uppercase text-foreground/40 mb-2 px-1">
                  With gratitude
                </p>
                <div className="flex flex-col gap-1">
                  {credits.slice(0, 4).map((credit) => (
                    <div key={credit.name} className="px-1 py-1.5">
                      <p className="text-xs text-dried-thyme">{credit.name}</p>
                      <p className="text-[10px] text-foreground/50">{credit.role}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/credits"
                  className="block text-xs text-antique-rose hover:text-dried-thyme transition-colors mt-2 px-1"
                >
                  View all →
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 w-6 z-50"
        >
          <motion.span
            className="h-[1.5px] w-full bg-dried-thyme block"
            animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="h-[1.5px] w-full bg-dried-thyme block"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="h-[1.5px] w-full bg-dried-thyme block"
            animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-0 z-40 bg-dried-thyme/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
          >
            {mobileNav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + i * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif italic text-2xl text-champagne hover:text-blush transition-colors"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
