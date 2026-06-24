import { topics } from "./topics";

// Only 3 cloud icons exist — cycle through them across all topics.
const baseIcons = [
  "/images/navy-icon-doubts.png",
  "/images/navy-icon-mental-health.png",
  "/images/navy-icon-riba.png",
];

export const topicNavyIcons: Record<string, string> = {};
topics.forEach((topic, i) => {
  topicNavyIcons[topic.slug] = baseIcons[i % baseIcons.length];
});
