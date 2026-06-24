import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

export default function Footer() {
  return (
    <footer className="bg-dried-thyme text-champagne">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <Link
          href="/topics"
          className="block font-serif text-base tracking-widest uppercase mb-6 hover:text-bisque transition-colors"
        >
          Hear what your peers are saying
        </Link>

        <svg
          viewBox="0 0 40 70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-16 w-10 mx-auto mb-1 text-champagne/80"
        >
          <path d="M20 4 V52" strokeLinecap="round" />
          <path
            d="M8 40 20 54 32 40"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="flex justify-center mb-8">
          <a
            href="https://www.tiktok.com/@gathered.in.khayr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on TikTok"
            className="flex items-center gap-2 rounded-full border border-champagne/40 px-5 py-2.5 text-[11px] tracking-widest uppercase hover:bg-champagne/10 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M16.6 5.82c-.83-.71-1.36-1.74-1.36-2.9h-3.18v13.36c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.27 0 .53.04.78.11V10.6a6 6 0 0 0-.78-.05A5.9 5.9 0 0 0 3.44 16.45 5.9 5.9 0 0 0 9.34 22.4a5.9 5.9 0 0 0 5.9-5.9V9.07a8.18 8.18 0 0 0 4.78 1.53V7.42c-1.13 0-2.18-.36-3.42-1.6z" />
            </svg>
            TikTok
          </a>
        </div>

        <p className="text-[10px] tracking-widest uppercase text-champagne/50 mb-3">
          Know when a new topic drops
        </p>
        <div className="mb-8">
          <EmailSignup />
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[11px] tracking-widest uppercase mb-4">
          <Link href="/topics" className="hover:text-bisque transition-colors">
            Topics
          </Link>
          <Link href="/resources" className="hover:text-bisque transition-colors">
            Library
          </Link>
          <Link href="/shop" className="hover:text-bisque transition-colors">
            Shop
          </Link>
          <Link href="/about" className="hover:text-bisque transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-bisque transition-colors">
            Contact
          </Link>
          <Link href="/credits" className="hover:text-bisque transition-colors">
            Credits
          </Link>
        </div>

        <p className="text-[11px] text-champagne/70">
          © {new Date().getFullYear()} Gathered in Khayr
        </p>
      </div>
    </footer>
  );
}
