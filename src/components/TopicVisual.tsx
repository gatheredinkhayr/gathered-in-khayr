import Motif from "@/components/Motif";
import { topicSeals } from "@/data/topicSeals";

type Tone = "bisque" | "antique-rose" | "blush" | "champagne" | "dried-thyme";
type Pattern = "star" | "weave" | "arch";

export default function TopicVisual({
  slug,
  tone,
  pattern,
  className = "",
}: {
  slug: string;
  tone: Tone;
  pattern: Pattern;
  className?: string;
}) {
  const seal = topicSeals[slug];

  return (
    <div className={`relative ${className}`}>
      <Motif tone={tone} pattern={pattern} className="topic-icon-default h-full w-full" />
      {seal && (
        <div className="topic-icon-seal absolute inset-0 items-center justify-center">
          <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden shadow-md shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={seal}
              alt=""
              className={
                slug === "mental-health-and-sabr"
                  ? "h-full w-full object-cover"
                  : "h-full w-full object-cover scale-125"
              }
              style={
                slug === "mental-health-and-sabr"
                  ? { objectPosition: "50% 47%", transform: "scale(2.3)" }
                  : undefined
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}
