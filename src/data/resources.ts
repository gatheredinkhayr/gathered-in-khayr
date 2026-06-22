export type Resource = {
  title: string;
  category: string;
  description: string;
  href: string;
};

export const resources: Resource[] = [
  {
    title: "Understanding khulʿ: a practical guide",
    category: "Family",
    description: "What khulʿ is, how it differs from talaq, and what to expect from the process.",
    href: "#",
  },
  {
    title: "A primer on riba-free banking",
    category: "Finance",
    description: "An overview of halal banking alternatives available today.",
    href: "#",
  },
  {
    title: "Therapy directory for Muslim clients",
    category: "Wellbeing",
    description: "A list of therapists who understand the intersection of faith and mental health.",
    href: "#",
  },
  {
    title: "Du'as for difficult seasons",
    category: "Wellbeing",
    description: "Short supplications for grief, anxiety, and uncertainty, with translations.",
    href: "#",
  },
  {
    title: "Zakat calculation, simplified",
    category: "Finance",
    description: "A step-by-step breakdown of calculating zakat on savings and investments.",
    href: "#",
  },
];

export const resourceCategories = Array.from(
  new Set(resources.map((resource) => resource.category))
);
