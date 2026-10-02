import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  action,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  action?: ReactNode;
  id?: string;
}) {
  const light = tone === "light";
  return (
    <Reveal className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${align === "center" ? "items-center text-center md:flex-col md:items-center" : ""}`}>
      <div className={align === "center" ? "max-w-2xl" : "max-w-3xl"}>
        <p className={`eyebrow ${light ? "text-leaf" : "text-ember"}`}>{eyebrow}</p>
        <h2 id={id} className={`mt-4 font-display text-display-lg font-medium ${light ? "text-cream" : "text-ink"}`}>
          {title}
        </h2>
        {lead && <p className={`mt-5 max-w-xl text-[17px] leading-relaxed ${light ? "text-cream/70" : "text-ink-500"} ${align === "center" ? "mx-auto" : ""}`}>{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
