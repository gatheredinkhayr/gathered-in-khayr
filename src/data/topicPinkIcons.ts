import { topics } from "./topics";

// Only 3 decorative icons exist — cycle through them across all topics.
const baseIcons = [
  "/images/pink-icon-doubts.png",
  "/images/pink-icon-mental-health.png",
  "/images/pink-icon-riba.png",
];

export const topicPinkIcons: Record<string, string> = {};
topics.forEach((topic, i) => {
  topicPinkIcons[topic.slug] = baseIcons[i % baseIcons.length];
});
