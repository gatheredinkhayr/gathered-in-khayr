"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdldbvo";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
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

  if (submitted) {
    return (
      <p className="text-xs text-champagne/80">
        Jazākum Allāhu khayran — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 max-w-xs mx-auto">
      <div className="flex items-center gap-2 w-full">
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="flex-1 bg-transparent border-b border-champagne/40 text-xs text-champagne placeholder:text-champagne/40 px-1 py-2 focus:outline-none focus:border-champagne transition-colors"
        />
        <button
          type="submit"
          disabled={sending}
          className="text-[10px] tracking-widest uppercase border border-champagne/40 text-champagne px-3 py-2 rounded-full hover:bg-champagne/10 transition-colors shrink-0 disabled:opacity-50"
        >
          {sending ? "..." : "Notify me"}
        </button>
      </div>
      {error && (
        <p className="text-[10px] text-champagne/60">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
