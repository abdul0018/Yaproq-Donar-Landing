// Business facts from the official site (yaproq-donar.uz: About, Branches, ordering config; read 2026-10-02).
// Open questions are tracked in PRODUCT.md: the Nurafshon branch address, and which opening hours are current.

export type Branch = {
  id: string;
  name: string;
  district?: string;
  /** Unknown addresses stay undefined: never guessed. */
  address?: string;
  /** Undefined when the branch's hours are not confirmed: no hours and no "open now" badge are shown. */
  hours?: string;
  /** Opening hours in 24h format (an end past 24 means after midnight), for the "open now" badge. */
  open?: [number, number];
  phone: string;
  lat?: number;
  lng?: number;
  /** Whether the branch takes orders through the official website. */
  onlineOrders: boolean;
};

export const branches: Branch[] = [
  {
    id: "kukcha",
    name: "Kukcha",
    address: "Ko‘kcha-Darvoza ko‘chasi, 345",
    hours: "10:00 – 02:40",
    open: [10, 26 + 40 / 60],
    phone: "+998 71 200 84 44",
    lat: 41.32202,
    lng: 69.20572,
    onlineOrders: true,
  },
  {
    id: "yunusobod",
    name: "Yunusobod",
    district: "Yunusobod tumani",
    address: "Iftixor ko‘chasi, 1",
    hours: "10:00 – 02:40",
    open: [10, 26 + 40 / 60],
    phone: "+998 71 200 84 44",
    lat: 41.347733,
    lng: 69.286792,
    onlineOrders: true,
  },
  {
    id: "nurafshon",
    name: "Nurafshon",
    phone: "+998 71 200 84 44",
    onlineOrders: false,
  },
];

export const contacts = {
  phone: "+998 71 200 84 44",
  website: "https://yaproq-donar.uz",
  orderUrl: "https://yaproq-donar.uz/uz/menu",
  instagram: "https://www.instagram.com/yaproqdonar/",
  instagramHandle: "@yaproqdonar",
  appStore: "https://apps.apple.com/uz/app/yaproq-donar/id6755135029",
  googlePlay: "https://play.google.com/store/apps/details?id=uz.yaproqdonar.app",
  vacancyPhone: "+998 94 502 03 13",
  reviews: {
    yandex: "https://yandex.com/maps/org/yaproq_donar/235698824081/reviews/",
    gis: "https://2gis.uz/uz/tashkent/branches/70000001096825779",
  },
};

export const facts = {
  founded: 2021,
  delivery: "Eng yaqin filialdan 1 soat ichida",
  /** Single displayed opening-hours value until the owner confirms which official figure is current. */
  hours: "10:00 – 02:40",
  payments: ["Naqd", "Karta", "Bank o‘tkazmasi", "Click", "Payme"],
};

export const navLinks = [
  { href: "#menyu", label: "Menyu" },
  { href: "#aksiyalar", label: "Aksiyalar" },
  { href: "#filiallar", label: "Filiallar" },
  { href: "#biz-haqimizda", label: "Biz haqimizda" },
  { href: "#aloqa", label: "Aloqa" },
];

/** Projects a coordinate onto the schematic Tashkent map (0–100 on both axes). */
export const toMap = (lat: number, lng: number) => ({
  x: Math.min(95, Math.max(5, ((lng - 69.13) / 0.27) * 100)),
  y: Math.min(95, Math.max(5, ((41.4 - lat) / 0.16) * 100)),
});

/** Great-circle distance in km. */
export function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export const hasLocation = (b: Branch): b is Branch & { lat: number; lng: number } => b.lat !== undefined && b.lng !== undefined;

export const directionsUrl = (b: Branch & { lat: number; lng: number }) => `https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`;

export const yandexUrl = (b: Branch & { lat: number; lng: number }) => `https://yandex.uz/maps/?rtext=~${b.lat},${b.lng}&rtt=auto`;

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export function isOpenNow(b: Branch, date = new Date()) {
  if (!b.open) return null;
  const [from, to] = b.open;
  if (to - from >= 24) return true;
  // Always evaluate in Tashkent time, regardless of the visitor's timezone.
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Tashkent", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(date);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  const h = get("hour") + get("minute") / 60;
  return (h >= from && h < to) || (to > 24 && h < to - 24);
}

export const formatNumber = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
export const formatPrice = (n: number) => (n === 0 ? "Bepul" : `${formatNumber(n)} so‘m`);
