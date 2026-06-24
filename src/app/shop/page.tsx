"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import CreditBubble from "@/components/CreditBubble";
import { brands } from "@/data/brands";

const leftBrands = brands.filter((_, i) => i % 2 === 0);
const rightBrands = brands.filter((_, i) => i % 2 === 1);
const offsets = [0, 28, -16, 14, -24, 8];

const fieldClass =
  "w-full bg-transparent border-0 border-b border-bisque px-0 py-3 text-sm focus:outline-none focus:border-antique-rose transition-colors";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrewegpq";

export default function ShopPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div>
      <section className="px-8 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,42rem)_1fr] gap-8 items-start">
          <div className="hidden lg:flex flex-col items-center gap-6 pt-10">
            {leftBrands.map((brand, i) => (
              <CreditBubble
                key={brand.name}
                name={brand.name}
                role="Visit shop"
                href={brand.href}
                delay={i * 0.4}
                offset={offsets[i % offsets.length]}
              />
            ))}
          </div>

          <div>
        <Reveal>
          <p className="font-serif italic text-sm text-antique-rose text-center mb-2">
            Know a brand we should feature?
          </p>
          <h2 className="font-serif text-3xl text-dried-thyme text-center mb-6">
            Submit or recommend a brand
          </h2>
          <p className="max-w-lg mx-auto text-sm leading-7 text-foreground/70 text-center mb-10">
            Whether it&apos;s your own brand or one you trust, we&apos;re happy
            to take a look. To be featured, a brand must meet all of the
            following:
          </p>
          <ul className="max-w-md mx-auto flex flex-col gap-2 text-sm text-foreground/80 mb-12">
            <li className="flex gap-2">
              <span className="text-antique-rose">—</span>
              No music featured in any product photos, videos, or ads
            </li>
            <li className="flex gap-2">
              <span className="text-antique-rose">—</span>
              Modest in what it sells and how it&apos;s presented
            </li>
            <li className="flex gap-2">
              <span className="text-antique-rose">—</span>
              No improper or inappropriate messaging
            </li>
            <li className="flex gap-2">
              <span className="text-antique-rose">—</span>
              Halal — products and business practices alike
            </li>
          </ul>
        </Reveal>

        <div className="max-w-lg mx-auto">
          {submitted ? (
            <Reveal>
              <div className="text-center py-10">
                <p className="font-serif text-2xl text-dried-thyme mb-2">
                  Jazākum Allāhu khayran
                </p>
                <p className="text-sm text-foreground/70">
                  Your submission has been received. We&apos;ll take a look
                  and follow up if it&apos;s a good fit.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div className="flex flex-col gap-1">
                  <label htmlFor="submission-type" className="text-xs text-foreground/50">
                    I&apos;m
                  </label>
                  <select id="submission-type" name="submission-type" required className={fieldClass}>
                    <option value="own">Submitting my own brand</option>
                    <option value="recommend">Recommending a brand</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="brand-name" className="text-xs text-foreground/50">
                    Brand name
                  </label>
                  <input id="brand-name" name="brand-name" type="text" required className={fieldClass} />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="brand-link" className="text-xs text-foreground/50">
                    Website or shop link
                  </label>
                  <input id="brand-link" name="brand-link" type="url" required className={fieldClass} />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="contact-email" className="text-xs text-foreground/50">
                    Your email
                  </label>
                  <input id="contact-email" name="contact-email" type="email" required className={fieldClass} />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="brand-note" className="text-xs text-foreground/50">
                    Anything else we should know? (optional)
                  </label>
                  <textarea id="brand-note" name="brand-note" rows={3} className={`${fieldClass} resize-none`} />
                </div>

                {error && (
                  <p className="text-xs text-antique-rose">
                    Something went wrong submitting this — please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="self-start text-xs tracking-widest uppercase bg-dried-thyme text-champagne px-6 py-3 rounded-full hover:bg-antique-rose transition-colors duration-300 mt-2 disabled:opacity-50"
                >
                  {sending ? "Sending..." : "Submit"}
                </button>
              </form>
            </Reveal>
          )}
        </div>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-6 pt-10">
            {rightBrands.map((brand, i) => (
              <CreditBubble
                key={brand.name}
                name={brand.name}
                role="Visit shop"
                href={brand.href}
                delay={i * 0.4 + 0.2}
                offset={offsets[i % offsets.length]}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
