"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const fieldClass =
  "w-full bg-transparent border-0 border-b border-bisque px-0 py-3 text-sm focus:outline-none focus:border-antique-rose transition-colors";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <PageHeader
        kicker="Let's talk"
        title="Contact & submissions"
        description="Want to contribute a perspective, suggest a topic, or just say hello? Send a message below."
      />

      <section className="px-8 pb-24 max-w-lg mx-auto">
        {submitted ? (
          <Reveal>
            <div className="text-center py-10">
              <p className="font-serif text-2xl text-dried-thyme mb-2">
                Jazākum Allāhu khayran
              </p>
              <p className="text-sm text-foreground/70">
                Your message has been received. We&apos;ll be in touch soon.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              <div className="flex flex-col gap-1">
                <label htmlFor="reason" className="text-xs text-foreground/50">
                  I&apos;m reaching out about
                </label>
                <select id="reason" name="reason" required className={fieldClass}>
                  <option value="contribute">Contributing a perspective</option>
                  <option value="topic">Suggesting a topic</option>
                  <option value="brand">Recommending a modest brand</option>
                  <option value="general">A general question</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xs text-foreground/50">
                  Name
                </label>
                <input id="name" name="name" type="text" required className={fieldClass} />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs text-foreground/50">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={fieldClass} />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="link" className="text-xs text-foreground/50">
                  Link to your submission (optional)
                </label>
                <input
                  id="link"
                  name="link"
                  type="url"
                  placeholder="Google Doc, video, or other link"
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-xs text-foreground/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <label className="flex items-center gap-2 text-xs text-foreground/60">
                <input type="checkbox" name="anonymous" className="accent-antique-rose" />
                I&apos;d like to remain anonymous if featured
              </label>

              <button
                type="submit"
                className="self-start text-xs tracking-widest uppercase bg-dried-thyme text-champagne px-6 py-3 rounded-full hover:bg-antique-rose transition-colors duration-300 mt-2"
              >
                Send message
              </button>
            </form>
          </Reveal>
        )}
      </section>
    </div>
  );
}
