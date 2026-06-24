"use client";

import { useSavedTopics } from "@/hooks/useSavedTopics";

export default function SaveButton({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  const { isSaved, toggle } = useSavedTopics();
  const saved = isSaved(slug);

  return (
    <button
      type="button"
      aria-label={saved ? "Remove from saved topics" : "Save for later"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      className={className}
    >
      <svg
        viewBox="0 0 24 24"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
      >
        <path
          d="M12 21s-7.5-4.8-10-9.5C0.3 7.5 2 4 5.5 4c2 0 3.5 1.2 4.5 2.8C11 5.2 12.5 4 14.5 4 18 4 19.7 7.5 22 11.5 19.5 16.2 12 21 12 21z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
