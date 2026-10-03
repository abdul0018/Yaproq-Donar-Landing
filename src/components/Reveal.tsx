import type { CSSProperties, ElementType, ReactNode } from "react";

/**
 * Layout wrapper kept for structure. Scroll-triggered entrances were removed on purpose:
 * the hero's lamp-and-puppets show is the page's single authored entrance.
 */
export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  style,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
}
