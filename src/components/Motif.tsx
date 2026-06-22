type Tone = "bisque" | "antique-rose" | "blush" | "champagne" | "dried-thyme";

type Props = {
  className?: string;
  tone?: Tone;
  pattern?: "star" | "weave" | "arch";
};

const fillVar: Record<Tone, string> = {
  bisque: "var(--color-bisque)",
  "antique-rose": "var(--color-antique-rose)",
  blush: "var(--color-blush)",
  champagne: "var(--color-champagne)",
  "dried-thyme": "var(--color-dried-thyme)",
};

const lineVar: Record<Tone, string> = {
  bisque: "var(--color-dried-thyme)",
  "antique-rose": "var(--color-champagne)",
  blush: "var(--color-antique-rose)",
  champagne: "var(--color-antique-rose)",
  "dried-thyme": "var(--color-bisque)",
};

/**
 * Tinted abstract texture used in place of real photography —
 * keeps the site's no-faces/anonymity stance while still feeling warm and finished.
 */
export default function Motif({
  className = "",
  tone = "bisque",
  pattern = "star",
}: Props) {
  const fill = fillVar[tone];
  const line = lineVar[tone];
  const id = `${pattern}-${tone}`;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: fill }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 200 200"
      >
        <defs>
          {pattern === "star" && (
            <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M20 4 L26 16 L20 12 L14 16 Z M36 20 L24 26 L28 20 L24 14 Z M20 36 L14 24 L20 28 L26 24 Z M4 20 L16 14 L12 20 L16 26 Z"
                fill={line}
              />
            </pattern>
          )}
          {pattern === "weave" && (
            <pattern id={id} width="36" height="36" patternUnits="userSpaceOnUse">
              <path
                d="M0 18 Q9 0 18 18 T36 18"
                fill="none"
                stroke={line}
                strokeWidth="1.5"
              />
              <path
                d="M0 0 Q9 18 18 0 T36 0"
                fill="none"
                stroke={line}
                strokeWidth="1.5"
              />
            </pattern>
          )}
          {pattern === "arch" && (
            <pattern id={id} width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M5 50 V25 A20 20 0 0 1 45 25 V50"
                fill="none"
                stroke={line}
                strokeWidth="1.5"
              />
            </pattern>
          )}
        </defs>
        <rect width="200" height="200" fill={`url(#${id})`} />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${fill}00, ${fill}cc 75%)`,
        }}
      />
    </div>
  );
}
