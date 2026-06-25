import { topics } from "./topics";

export type Resource = {
  title: string;
  category: string;
  description: string;
  href: string;
};

const bookRecommendations: Resource[] = [
  {
    title: "The Qur'an",
    category: "Book recommendations",
    description: "The final revelation — read, listen, and search the Arabic text alongside trusted English translations.",
    href: "https://quran.com",
  },
  {
    title: "Tafsir Ibn Kathir (Volume 1)",
    category: "Book recommendations",
    description: "One of the most widely referenced classical commentaries on the Qur'an, explaining verses through hadith, the views of the companions, and the understanding of the early scholars.",
    href: "https://archive.org/details/TafsirIbnKathirVolume0110English_201702/page/n579/mode/2up",
  },
  {
    title: "Explanation of the Creed",
    category: "Book recommendations",
    description: "A concise classical text on the foundations of belief ('aqīdah), with explanation, covering the core tenets of what Muslims believe.",
    href: "https://maktabahassunnahblog.wordpress.com/wp-content/uploads/2015/11/explanation-of-the-creed.pdf",
  },
  {
    title: "A Summary of Islamic Jurisprudence (Volume 1)",
    category: "Book recommendations",
    description: "A two-volume summary covering the essentials of Islamic jurisprudence (fiqh) — worship, transactions, and daily rulings — written for accessible, practical reference.",
    href: "https://www.kalamullah.com/Books/A%20Summary%20of%20Islamic%20Jurisprudence%201.pdf",
  },
  {
    title: "A Summary of Islamic Jurisprudence (Volume 2)",
    category: "Book recommendations",
    description: "The second volume continuing the same accessible overview of Islamic jurisprudence (fiqh).",
    href: "https://www.guidancecollege.org/wp-content/uploads/2021/09/a-summary-of-islamic-jurisprudence-volume-2-2.pdf",
  },
];

const websiteRecommendations: Resource[] = [
  {
    title: "Sunnah.com",
    category: "Websites",
    description: "A searchable database of authentic hadith collections, with Arabic text and English translations.",
    href: "https://sunnah.com",
  },
];

const podcastRecommendations: Resource[] = [
  {
    title: "Podcast recommendation",
    category: "Podcast recommendations",
    // TODO: replace with a real podcast name, link, and description
    description: "Recommended listening — details coming soon.",
    href: "#",
  },
];

const topicResources: Resource[] = topics.map((topic) => ({
  title: topic.title,
  category: "Gathered in Khayr Topics",
  description: topic.summary,
  href: `/topics/${topic.slug}`,
}));

export const resources: Resource[] = [
  ...bookRecommendations,
  ...websiteRecommendations,
  ...podcastRecommendations,
  ...topicResources,
];

export const resourceCategories = Array.from(
  new Set(resources.map((resource) => resource.category))
);
