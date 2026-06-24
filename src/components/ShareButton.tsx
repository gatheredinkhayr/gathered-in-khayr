"use client";

import { useState } from "react";

export default function ShareButton({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled the native share sheet — no action needed
      }
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button type="button" onClick={handleShare} className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
        <path
          d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0 .14 1.94L8.91 9.26a3 3 0 1 0 0 5.48l6.23 3.32A3 3 0 1 0 18 16a2.99 2.99 0 0 0-2.06.82l-6.2-3.3a3 3 0 0 0 0-.04l6.2-3.3c.55.51 1.28.82 2.06.82Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {copied ? "Copied!" : "Share"}
    </button>
  );
}
