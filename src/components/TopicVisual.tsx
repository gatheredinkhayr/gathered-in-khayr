import Motif from "@/components/Motif";
import FloatingNumber from "@/components/FloatingNumber";
import { topicSeals } from "@/data/topicSeals";
import { topicPinkIcons } from "@/data/topicPinkIcons";
import { topicNavyIcons } from "@/data/topicNavyIcons";
import { topics } from "@/data/topics";
import { toArabicNumeral } from "@/lib/arabicNumerals";

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
  const pinkIcon = topicPinkIcons[slug];
  const navyIcon = topicNavyIcons[slug];
  const number = topics.findIndex((t) => t.slug === slug) + 1;

  return (
    <div className={`relative ${className}`}>
      <Motif tone={tone} pattern={pattern} className="topic-icon-default h-full w-full" />
      <div className="topic-icon-number absolute inset-0 items-center justify-center">
        <FloatingNumber className="font-serif italic font-semibold text-7xl text-dried-thyme">
          {toArabicNumeral(number)}
        </FloatingNumber>
      </div>
      {pinkIcon && (
        <div className="topic-icon-pink absolute inset-0 items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={pinkIcon} alt="" className="h-28 w-28 sm:h-36 sm:w-36 object-contain" />
        </div>
      )}
      {navyIcon && (
        <div className="topic-icon-navy absolute inset-0 items-center justify-center">
          <FloatingNumber className="block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={navyIcon} alt="" className="h-40 w-40 sm:h-48 sm:w-48 object-contain" />
          </FloatingNumber>
        </div>
      )}
      {seal && (
        <div className="topic-icon-seal absolute inset-0 items-center justify-center">
          <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden shadow-md shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={seal}
              alt=""
              className={
                seal.includes("seal-mental-health")
                  ? "h-full w-full object-cover"
                  : "h-full w-full object-cover scale-125"
              }
              style={
                seal.includes("seal-mental-health")
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
