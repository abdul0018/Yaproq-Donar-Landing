// NOTE: addresses, phone numbers and coordinates below are representative content for the
// design. Replace them with the confirmed details of each YAPROQ DONAR branch before launch.

export type Branch = {
  id: string;
  name: string;
  district: string;
  address: string;
  landmark: string;
  hours: string;
  /** Opening hours in 24h format, used for the "open now" indicator. */
  open: [number, number];
  phone: string;
  lat: number;
  lng: number;
  seats: number;
  features: string[];
};

export const branches: Branch[] = [
  {
    id: "chilonzor",
    name: "Chilonzor",
    district: "Chilonzor tumani",
    address: "Bunyodkor shoh ko‘chasi, 18",
    landmark: "Chilonzor metro bekati yonida",
    hours: "09:00 – 02:00",
    open: [9, 26],
    phone: "+998 71 200 11 01",
    lat: 41.2757,
    lng: 69.2036,
    seats: 80,
    features: ["Avtoturargoh", "Bolalar burchagi", "Olib ketish"],
  },
  {
    id: "yunusobod",
    name: "Yunusobod",
    district: "Yunusobod tumani",
    address: "Amir Temur shoh ko‘chasi, 107",
    landmark: "Minor masjidi ro‘parasida",
    hours: "10:00 – 01:00",
    open: [10, 25],
    phone: "+998 71 200 11 02",
    lat: 41.3489,
    lng: 69.2869,
    seats: 120,
    features: ["Yozgi terrasa", "Wi‑Fi", "Avtoturargoh"],
  },
  {
    id: "buyuk-ipak",
    name: "Buyuk Ipak Yo‘li",
    district: "Mirzo Ulug‘bek tumani",
    address: "Mirzo Ulug‘bek ko‘chasi, 56",
    landmark: "Buyuk Ipak Yo‘li metro bekatidan 3 daqiqa",
    hours: "24 soat",
    open: [0, 24],
    phone: "+998 71 200 11 03",
    lat: 41.3263,
    lng: 69.3346,
    seats: 60,
    features: ["24/7", "Drive-thru", "Olib ketish"],
  },
];

export const contacts = {
  callCenter: "+998 71 200 11 00",
  callCenterShort: "1100",
  telegram: "https://t.me/yaproqdonar",
  instagram: "https://instagram.com/yaproqdonar",
  instagramHandle: "@yaproqdonar",
  email: "salom@yaproq.uz",
};

export const navLinks = [
  { href: "#menyu", label: "Menyu" },
  { href: "#aksiyalar", label: "Aksiyalar" },
  { href: "#filiallar", label: "Filiallar" },
  { href: "#biz-haqimizda", label: "Biz haqimizda" },
  { href: "#aloqa", label: "Aloqa" },
];

/** Projects a coordinate onto the stylised Tashkent map (0–100 on both axes). */
export const toMap = (lat: number, lng: number) => ({
  x: Math.min(97, Math.max(3, ((lng - 69.13) / 0.27) * 100)),
  y: Math.min(97, Math.max(3, ((41.4 - lat) / 0.16) * 100)),
});

/** Great-circle distance in km. */
export function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos((a.lat * Math.PI) / 180) * Math.cos((b.lat * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export const directionsUrl = (b: Branch) =>
  `https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`;

export const yandexUrl = (b: Branch) => `https://yandex.uz/maps/?rtext=~${b.lat},${b.lng}&rtt=auto`;

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export function isOpenNow(b: Branch, date = new Date()) {
  const [from, to] = b.open;
  if (to - from >= 24) return true;
  // Always evaluate in Tashkent time, regardless of the visitor's timezone.
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Tashkent", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(date);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  const h = get("hour") + get("minute") / 60;
  return (h >= from && h < to) || (to > 24 && h < to - 24);
}

export const formatNumber = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
export const formatPrice = (n: number) => `${formatNumber(n)} so‘m`;
