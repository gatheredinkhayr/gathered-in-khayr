export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 75" className={className} fill="none">
      <circle cx="22" cy="29" r="16" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="54" cy="21" r="13" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="40" cy="51" r="14" fill="currentColor" />
      <circle cx="62" cy="45" r="9" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}
