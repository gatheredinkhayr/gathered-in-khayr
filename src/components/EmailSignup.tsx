"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire this up to a real email list service (e.g. Mailchimp, ConvertKit, Formspree) once one is chosen.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-xs text-champagne/80">
        Jazākum Allāhu khayran — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-xs mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="flex-1 bg-transparent border-b border-champagne/40 text-xs text-champagne placeholder:text-champagne/40 px-1 py-2 focus:outline-none focus:border-champagne transition-colors"
      />
      <button
        type="submit"
        className="text-[10px] tracking-widest uppercase border border-champagne/40 text-champagne px-3 py-2 rounded-full hover:bg-champagne/10 transition-colors shrink-0"
      >
        Notify me
      </button>
    </form>
  );
}
