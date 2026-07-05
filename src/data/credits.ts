export type Credit = {
  name: string;
  role: string;
  href?: string;
  topics?: string[];
};

export const credits: Credit[] = [
  { name: "Ruqaiyah Nije", role: "Designated editor" },
  {
    name: "Aminata bint Muhammad",
    role: "Contributor",
    topics: ["Doubts during university", "Mental health & sabr"],
  },
  {
    name: "Ahmed",
    role: "Contributor",
    topics: ["Riba & practical alternatives", "Halal finance"],
  },
  {
    name: "Anonymous",
    role: "Contributor",
    topics: ["Debates, Rage & Clickbait", "Sincere intentions"],
  },
  {
    name: "Anonymous",
    role: "Contributor",
    topics: ["Cheating your government", "Adab — manners of a Muslim"],
  },
];
