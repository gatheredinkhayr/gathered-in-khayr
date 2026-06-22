export type Contributor = {
  name: string;
  anonymous: boolean;
  format: "doc" | "video" | "other";
  excerpt: string;
};

export type Topic = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: string;
  contributors: Contributor[];
};

export const topics: Topic[] = [
  {
    slug: "doubts-in-university",
    title: "Doubts during university",
    category: "Faith & identity",
    summary:
      "University and college can be a breeding ground for doubts (shukūk) — new ideas, new independence, and questions that rarely get asked out loud. Learning to navigate them isn't a sign of weak īmān; it's essential to strengthening it.",
    body: "College brings new ideas, new independence, and often the first real test of belief outside a familiar community. This topic gathers contributor perspectives on facing doubt honestly, where to take real questions, and what it looks like to stay grounded in īmān without pretending the questions don't exist.",
    contributors: [],
  },
  {
    slug: "mental-health-and-sabr",
    title: "Mental health & sabr",
    category: "Wellbeing",
    summary:
      "Mental health is not a foreign concept to this dīn. Grief (ḥuzn), fear, and hardship have always been part of the human experience. This topic holds space for real struggles, pointing toward resources for care that remain within the bounds of the Sharīʿah, without losing sight of sabr as a practice — not a substitute for care.",
    body: "A compiled look at mental health through an Islamic lens — drawing on contributor perspectives, contemporary research, and classical reminders on sabr, to make space for both faith and professional support.",
    contributors: [],
  },
  {
    slug: "riba-and-alternatives",
    title: "Riba & practical alternatives",
    category: "Finance",
    summary:
      "Student loans, mortgages, and interest-based financing are treated as just 'how things work' in the West — but riba doesn't become permissible because of where we live. This topic unpacks what riba actually means in everyday decisions, and the practical halal alternatives available to students in the U.S. and UK.",
    body: "Five contributors weigh in on what riba actually means in everyday financial decisions, and the real alternatives students in the U.S. and UK have for banking, financing education, and building savings without compromising on what's halal.",
    contributors: [],
  },
];
