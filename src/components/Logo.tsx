export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none">
      <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" />
      <text
        x="30"
        y="38"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="22"
        fill="currentColor"
      >
        GK
      </text>
    </svg>
  );
}
