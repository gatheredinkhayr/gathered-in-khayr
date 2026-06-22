export type Palette = {
  id: string;
  label: string;
  swatches: [string, string];
};

export const palettes: Palette[] = [
  { id: "cream-noir", label: "Cream & noir sage", swatches: ["#FAF8F3", "#1C1C1A"] },
  { id: "pink-burgundy", label: "Light pink & burgundy", swatches: ["#F3D7DC", "#7A1F2B"] },
  { id: "sky-burgundy", label: "Sky blue & burgundy", swatches: ["#A6BFD2", "#250A0A"] },
  { id: "navy-brown", label: "Navy & brown", swatches: ["#2F4A73", "#3B2A1E"] },
  { id: "chocolate-sakura", label: "Chocolate & sakura", swatches: ["#EC9C9D", "#443025"] },
];

export const defaultPaletteId = palettes[0].id;
