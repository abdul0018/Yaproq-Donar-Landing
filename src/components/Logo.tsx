export default function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const word = tone === "light" ? "text-cream" : "text-forest";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden>
        <circle cx="20" cy="20" r="20" fill={tone === "light" ? "#F5EFE3" : "#173F2E"} />
        <path d="M11 27C11 17 17 11 29 10c0 12-6 18-16 18" fill="#8DBF6A" />
        <path d="M11 29 22 18" stroke={tone === "light" ? "#173F2E" : "#F5EFE3"} strokeWidth="2" strokeLinecap="round" />
        <circle cx="29" cy="28" r="3" fill="#E2622B" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[22px] font-semibold tracking-[-0.02em] ${word}`}>yaproq</span>
        <span className={`mt-0.5 text-[9.5px] font-bold uppercase tracking-[0.42em] ${tone === "light" ? "text-leaf" : "text-ember"}`}>donar</span>
      </span>
    </span>
  );
}
