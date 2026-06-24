export type Credit = {
  name: string;
  role: string;
  href?: string;
};

export const credits: Credit[] = [
  { name: "Ruqaiyah Nije", role: "Designated editor" },
  // TODO: replace "#" with Jane's real TikTok link
  { name: "Jane Doe", role: "Contributor", href: "#" },
];
