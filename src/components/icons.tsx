import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({ width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true, ...p });

export const IconBag = (p: P) => (<svg {...base(p)}><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>);
export const IconMenu = (p: P) => (<svg {...base(p)}><path d="M4 7h16M4 12h16M4 17h10" /></svg>);
export const IconClose = (p: P) => (<svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>);
export const IconArrow = (p: P) => (<svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const IconArrowUpRight = (p: P) => (<svg {...base(p)}><path d="M7 17 17 7M8 7h9v9" /></svg>);
export const IconPin = (p: P) => (<svg {...base(p)}><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>);
export const IconClock = (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>);
export const IconPhone = (p: P) => (<svg {...base(p)}><path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4 1.5V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>);
export const IconPlus = (p: P) => (<svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>);
export const IconMinus = (p: P) => (<svg {...base(p)}><path d="M5 12h14" /></svg>);
export const IconStar = (p: P) => (<svg {...base(p)} fill="currentColor" stroke="none"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" /></svg>);
export const IconSearch = (p: P) => (<svg {...base(p)}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4-4" /></svg>);
export const IconNavigate = (p: P) => (<svg {...base(p)}><path d="M3 11 21 3l-8 18-2-8-8-2Z" /></svg>);
export const IconFlame = (p: P) => (<svg {...base(p)}><path d="M12 21c-4 0-7-2.8-7-6.6C5 10 9 8 9 3c3 2 4.5 4 5 6.5.8-.8 1.3-2 1.4-3C18 9 19 11.5 19 14.4 19 18.2 16 21 12 21Z" /></svg>);
export const IconLeaf = (p: P) => (<svg {...base(p)}><path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15" /><path d="M5 19 13 11" /></svg>);
export const IconCheck = (p: P) => (<svg {...base(p)}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>);
export const IconInstagram = (p: P) => (<svg {...base(p)}><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".8" fill="currentColor" /></svg>);
export const IconTelegram = (p: P) => (<svg {...base(p)}><path d="M21 4 3 11l6 2 2 6 3-4 5 4 2-15Z" /><path d="m9 13 8-6" /></svg>);
export const IconTruck = (p: P) => (<svg {...base(p)}><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17.5" cy="17.5" r="1.8" /></svg>);
export const IconLocate = (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2" /></svg>);
export const IconQuote = (p: P) => (<svg {...base(p)} fill="currentColor" stroke="none"><path d="M10 7H6a2 2 0 0 0-2 2v4h4v4l2-4V7Zm10 0h-4a2 2 0 0 0-2 2v4h4v4l2-4V7Z" /></svg>);
export const IconCopy = (p: P) => (<svg {...base(p)}><rect x="8" y="8" width="12" height="12" rx="2.5" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>);
export const IconGlobe = (p: P) => (<svg {...base(p)}><circle cx="12" cy="12" r="8.5" /><path d="M3.5 12h17M12 3.5c2.5 2.6 3.5 5.4 3.5 8.5s-1 5.9-3.5 8.5c-2.5-2.6-3.5-5.4-3.5-8.5s1-5.9 3.5-8.5Z" /></svg>);
export const IconDevice = (p: P) => (<svg {...base(p)}><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></svg>);
export const IconStore = (p: P) => (<svg {...base(p)}><path d="M4 9.5 5.5 4h13L20 9.5" /><path d="M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0" /><path d="M5.5 12v8h13v-8M10 20v-4.5h4V20" /></svg>);
export const IconGift = (p: P) => (<svg {...base(p)}><rect x="3.5" y="8.5" width="17" height="4" rx="1" /><path d="M5 12.5V20h14v-7.5M12 8.5V20M12 8.5C10.5 5 7 5 7 7s3 1.5 5 1.5ZM12 8.5C13.5 5 17 5 17 7s-3 1.5-5 1.5Z" /></svg>);
export const IconCard = (p: P) => (<svg {...base(p)}><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="M3 10h18M7 15h4" /></svg>);
/** Sprout leaf, the device YAPROQ uses in its campaign artwork. */
export const IconSprout = (p: P) => (<svg {...base(p)} fill="currentColor" stroke="none"><path d="M11.2 21.5v-6.2C6.4 15 3.5 12 3.6 7.2c4.7-.1 7.4 2.4 7.9 6.4.5-5.3 3.6-9 9-9.4.3 6.4-3.2 10.2-8.3 10.9v6.4h-1Z" /></svg>);
