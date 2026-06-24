const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

export function toArabicNumeral(n: number) {
  return String(n)
    .split("")
    .map((digit) => arabicNumerals[Number(digit)])
    .join("");
}
