import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Section title + optional lead and action. Headings carry their own weight: no eyebrow labels. */
export default function SectionHeading({
  title,
  lead,
  tone = "dark",
  action,
  id,
}: {
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  action?: ReactNode;
  id?: string;
}) {
  const light = tone === "light";
  return (
    <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <h2 id={id} className={`font-display text-display-lg ${light ? "text-white" : "text-green-900"}`}>
          {title}
        </h2>
        {lead && <p className={`mt-4 max-w-[60ch] text-[17px] leading-relaxed ${light ? "text-green-100" : "text-ink-600"}`}>{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
