import { topics } from "./topics";

// Only 3 seal photos exist — cycle through them across all topics.
const baseSeals = [
  "/images/seal-doubts.jpg",
  "/images/seal-mental-health.jpg",
  "/images/seal-riba.jpg",
];

export const topicSeals: Record<string, string> = {};
topics.forEach((topic, i) => {
  topicSeals[topic.slug] = baseSeals[i % baseSeals.length];
});
