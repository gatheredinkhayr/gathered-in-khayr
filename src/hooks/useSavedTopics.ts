"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "gik-saved-topics";

export function useSavedTopics() {
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (Array.isArray(stored)) setSaved(stored);
    } catch {
      // ignore malformed storage
    }
  }, []);

  function toggle(slug: string) {
    setSaved((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  function isSaved(slug: string) {
    return saved.includes(slug);
  }

  return { saved, toggle, isSaved };
}
