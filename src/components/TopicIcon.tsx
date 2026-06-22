type IconName = "heart" | "brain" | "money";

const icons: Record<IconName, React.ReactNode> = {
  heart: (
    <path
      d="M12 21s-7.5-4.8-10-9.5C0.3 7.5 2 4 5.5 4c2 0 3.5 1.2 4.5 2.8C11 5.2 12.5 4 14.5 4 18 4 19.7 7.5 22 11.5 19.5 16.2 12 21 12 21z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  brain: (
    <path
      d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5h0a3 3 0 0 0 3 3M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3M9 4c0-1.1.9-2 2-2M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5h0a3 3 0 0 1-3 3M15 4a3 3 0 0 0-3 3M6.5 9.5h2M6.5 14.5h2M15.5 9.5h2M15.5 14.5h2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  money: (
    <>
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.5 14.5c.5 1 1.5 1.5 2.5 1.5 1.5 0 2.5-.8 2.5-2s-1-1.7-2.5-2-2.5-.8-2.5-2 1-2 2.5-2c1 0 2 .5 2.5 1.5M12 7v1.5M12 15.5V17"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
};

export default function TopicIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      className={className}
    >
      {icons[name]}
    </svg>
  );
}
