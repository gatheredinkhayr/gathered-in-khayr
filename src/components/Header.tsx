"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { topics } from "@/data/topics";

const navRight = [
  { href: "/resources", label: "Resources" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

const mobileNav = [
  { href: "/", label: "Home" },
  { href: "/topics", label: "Topics" },
  { href: "/about", label: "About" },
  ...navRight,
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [topicsQuery, setTopicsQuery] = useState("");

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(topicsQuery.toLowerCase())
  );

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
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between gap-4">
        <nav className="hidden md:flex items-center gap-6 text-[11px] tracking-widest uppercase text-dried-thyme">
          <Link href="/" className="hover:text-antique-rose transition-colors">
            Home
          </Link>

          <div className="relative group">
            <Link href="/topics" className="hover:text-antique-rose transition-colors">
              Topics
            </Link>
            <div className="absolute left-0 top-full pt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-champagne border border-bisque rounded-lg shadow-lg p-3 normal-case">
                <input
                  type="text"
                  value={topicsQuery}
                  onChange={(e) => setTopicsQuery(e.target.value)}
                  placeholder="Search topics..."
                  className="w-full bg-transparent border-b border-bisque text-xs text-foreground px-1 py-2 tracking-normal focus:outline-none focus:border-antique-rose transition-colors"
                />
                <div className="mt-2 flex flex-col gap-1 max-h-48 overflow-y-auto">
                  {filteredTopics.length > 0 ? (
                    filteredTopics.map((topic) => (
                      <Link
                        key={topic.slug}
                        href={`/topics/${topic.slug}`}
                        className="text-xs tracking-normal text-foreground/70 hover:text-antique-rose px-1 py-1.5 rounded transition-colors"
                      >
                        {topic.title}
                      </Link>
                    ))
                  ) : (
                    <p className="text-xs tracking-normal text-foreground/40 px-1 py-1.5">
                      No topics found
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-antique-rose transition-colors">
            About
          </Link>
        </nav>

        <Link
          href="/"
          className={`font-serif tracking-widest uppercase text-dried-thyme transition-all duration-300 ${
            scrolled ? "text-base" : "text-lg"
          }`}
        >
          Gathered in Khayr
        </Link>

        <nav className="hidden md:flex gap-6 text-[11px] tracking-widest uppercase text-dried-thyme">
          {navRight.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-antique-rose transition-colors">
              {item.label}
            </Link>
          ))}
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
