// Menu data mirrors the official YAPROQ DONAR menu (yaproq-donar.uz, read 2026-10-02).
// Prices are in so‘m. Variant ids are the official product slugs.

export type CategoryId = "setlar" | "asosiy" | "tovuq" | "shorvalar" | "pide" | "salatlar" | "desertlar" | "ichimliklar" | "souslar";

export type Category = { id: CategoryId; name: string };

export type Variant = {
  id: string;
  /** Size name shown on the size switch, e.g. "1,5" or "Klassik". */
  label?: string;
  price: number;
  /** Weight or volume, e.g. "110 g" (meat weight for donar dishes) or "0,5 l". */
  portion?: string;
};

export type Dish = {
  id: string;
  category: CategoryId;
  name: string;
  description: string;
  image?: string;
  variants: Variant[];
  tags?: Array<"yangi" | "bepul">;
};

export const categories: Category[] = [
  { id: "setlar", name: "Setlar" },
  { id: "asosiy", name: "Asosiy taomlar" },
  { id: "tovuq", name: "Tovuqli donar" },
  { id: "shorvalar", name: "Sho‘rvalar" },
  { id: "pide", name: "Pide" },
  { id: "salatlar", name: "Salatlar" },
  { id: "desertlar", name: "Desertlar" },
  { id: "ichimliklar", name: "Ichimliklar" },
  { id: "souslar", name: "Souslar" },
];

export const dishes: Dish[] = [
  {
    id: "durum-set",
    category: "setlar",
    name: "Durum seti (tovuqli)",
    description: "Tovuq go‘shti, salat bargi, bodring va sous lavash xamirida. Yonida kartoshka fri va Coca-Cola 0,5 l.",
    image: "/images/menu/durum-set.webp",
    variants: [{ id: "dorum-tovuk-li", price: 54000, portion: "120 g" }], tags: ["yangi"],
  },
  {
    id: "pita-set",
    category: "setlar",
    name: "Pita seti (tovuqli)",
    description: "Tovuq go‘shti, salat bargi, bodring va sous baton nonda. Yonida kartoshka fri va Coca-Cola 0,5 l.",
    image: "/images/menu/pita-set.webp",
    variants: [{ id: "pita-tovuk-li", price: 56000, portion: "120 g" }], tags: ["yangi"],
  },
  {
    id: "yaproq-donar",
    category: "asosiy",
    name: "Yaproq donar",
    description: "Mol go‘shti, qovurilgan kartoshka va lavash noni.",
    image: "/images/menu/yaproq-donar.webp",
    variants: [{ id: "yaproq-donar-2", label: "Oddiy", price: 79000, portion: "110 g" }, { id: "yaproq-donar-1-5-3", label: "1,0", price: 96000 }, { id: "yaproq-donar-1-5-4", label: "1,5", price: 120000, portion: "200 g" }],
  },
  {
    id: "pilav-ustu-donar",
    category: "asosiy",
    name: "Pilav ustu donar",
    description: "Mol go‘shti, guruch, qovurilgan kartoshka va lavash noni.",
    image: "/images/menu/pilav-ustu-donar.webp",
    variants: [{ id: "pilav-ustu-donar-1-5-1", label: "Oddiy", price: 82000, portion: "110 g" }, { id: "pilav-ustu-donar-1-5-3", label: "1,0", price: 106000, portion: "160 g" }, { id: "pilav-ustu-donar-1-5-4", label: "1,5", price: 132000, portion: "200 g" }],
  },
  {
    id: "iskender-kabob",
    category: "asosiy",
    name: "Iskender kabob",
    description: "Mol go‘shti, tomat qaylasi, iskender noni va suzma.",
    image: "/images/menu/iskender-kabob.webp",
    variants: [{ id: "iskender-kabob-2", price: 109000, portion: "140 g" }],
  },
  {
    id: "donar-beyti",
    category: "asosiy",
    name: "Donar beyti",
    description: "Mol go‘shti, tomat qaylasi, sariyog‘, suzma va lavash noni.",
    image: "/images/menu/donar-beyti.webp",
    variants: [{ id: "donar-beyti-5", label: "Oddiy", price: 95000, portion: "110 g" }, { id: "donar-beyti-6", label: "1,5", price: 140000, portion: "160 g" }],
  },
  {
    id: "tandir-beyti",
    category: "asosiy",
    name: "Tandir beyti",
    description: "Mol go‘shti, tomat qaylasi, sariyog‘, suzma va lavash noni.",
    image: "/images/menu/tandir-beyti.webp",
    variants: [{ id: "tandir-beyti-7", price: 105000, portion: "110 g" }],
  },
  {
    id: "tombik-donar",
    category: "asosiy",
    name: "Tombik donar",
    description: "Mol go‘shti non ichida, yonida qovurilgan kartoshka.",
    image: "/images/menu/tombik-donar.webp",
    variants: [{ id: "tombik-donar-2", label: "Oddiy", price: 59000, portion: "80 g" }, { id: "tombik-donar-1-5-2", label: "1,5", price: 75000, portion: "120 g" }],
  },
  {
    id: "yaproq-burger",
    category: "asosiy",
    name: "Yaproq burger",
    description: "Mol go‘shti, maxsus qayla, qizil piyoz, pomidor, tuzlangan bodring, qovurilgan kartoshka va non.",
    image: "/images/menu/yaproq-burger.webp",
    variants: [{ id: "yaproq-burger-2", price: 75000, portion: "110 g" }],
  },
  {
    id: "smash-burger",
    category: "asosiy",
    name: "Smash burger",
    description: "Mol go‘shtidan kotlet, yonida kartoshka fri.",
    image: "/images/menu/smash-burger.webp",
    variants: [{ id: "smash-burger", label: "Katta", price: 84000, portion: "200 g" }, { id: "smash-burger-kidsr", label: "Bolalar uchun", price: 57000 }],
  },
  {
    id: "donar-vaznda",
    category: "asosiy",
    name: "Donar go‘shti (vaznda)",
    description: "Mol go‘shtidan donar — uyga, oilaga yoki mehmonlarga.",
    image: "/images/menu/donar-vaznda.webp",
    variants: [{ id: "donar-500gr-2", label: "0,5 kg", price: 320000 }, { id: "donar-1000gr-2", label: "1 kg", price: 635000 }],
  },
  {
    id: "fri",
    category: "asosiy",
    name: "Kartoshka fri",
    description: "Qovurilgan kartoshka.",
    image: "/images/menu/fri.webp",
    variants: [{ id: "Fri", price: 19000, portion: "100 g" }],
  },
  {
    id: "guruch",
    category: "asosiy",
    name: "Guruch",
    description: "Garnir uchun.",
    image: "/images/menu/guruch.webp",
    variants: [{ id: "guruch", price: 15000, portion: "100 g" }],
  },
  {
    id: "non",
    category: "asosiy",
    name: "Non",
    description: "Tandir noni.",
    image: "/images/menu/non.webp",
    variants: [{ id: "non-2", label: "Non", price: 5000, portion: "150 g" }, { id: "non-lavas-2", label: "Lavash", price: 5000, portion: "100 g" }],
  },
  {
    id: "tovuq-yaproq-donar",
    category: "tovuq",
    name: "Tovuqli Yaproq donar",
    description: "Tovuq go‘shti, qovurilgan kartoshka va lavash noni.",
    image: "/images/menu/tovuq-yaproq-donar.webp",
    variants: [{ id: "tovuq-yaproq-donar-120-gr", price: 59000, portion: "120 g" }, { id: "tovuq-yaproq-donar-160-gr", price: 68000, portion: "160 g" }, { id: "tovuq-yaproq-donar-200-gr", price: 84000, portion: "200 g" }], tags: ["yangi"],
  },
  {
    id: "tovuq-pilav-usti",
    category: "tovuq",
    name: "Tovuqli pilav usti",
    description: "Tovuq go‘shti, guruch, qovurilgan kartoshka va lavash noni.",
    image: "/images/menu/tovuq-pilav-usti.webp",
    variants: [{ id: "tovuq-pilav-usti-120-gr", price: 62000, portion: "120 g" }, { id: "tovuq-pilav-usti-160-gr", price: 74000, portion: "160 g" }, { id: "tovuq-pilav-usti-200-gr", price: 90000, portion: "200 g" }],
  },
  {
    id: "tovuq-iskender",
    category: "tovuq",
    name: "Tovuqli Iskender kabob",
    description: "Tovuq go‘shti, tomat qaylasi, iskender noni va suzma.",
    image: "/images/menu/tovuq-iskender.webp",
    variants: [{ id: "tovuq-iskandar-kabob-140-gr", price: 71000, portion: "140 g" }, { id: "tovuq-iskandar-kabob-210-gr", price: 80000, portion: "210 g" }],
  },
  {
    id: "tovuq-donar-beyti",
    category: "tovuq",
    name: "Tovuqli donar beyti",
    description: "Tovuq go‘shti, tomat qaylasi, sariyog‘, suzma va lavash noni.",
    image: "/images/menu/tovuq-donar-beyti.webp",
    variants: [{ id: "tovuq-donar-beyti-110-gr", price: 79000, portion: "110 g" }, { id: "tovuq-donar-beyti-160-gr", price: 88000, portion: "160 g" }],
  },
  {
    id: "tovuq-tandir-beyti",
    category: "tovuq",
    name: "Tovuqli tandir beyti",
    description: "Tovuq go‘shti, tomat qaylasi, sariyog‘, suzma va lavash noni.",
    image: "/images/menu/tovuq-tandir-beyti.webp",
    variants: [{ id: "tovuq-tandir-beyti-110-gr", price: 81000, portion: "110 g" }, { id: "tovuq-tandir-beyti-160-gr", price: 90000, portion: "160 g" }],
  },
  {
    id: "tovuq-durum",
    category: "tovuq",
    name: "Tovuqli durum",
    description: "Tovuq go‘shti va bodring lavash xamirida.",
    image: "/images/menu/tovuq-durum.webp",
    variants: [{ id: "tovuq-durum", price: 54000, portion: "120 g" }],
  },
  {
    id: "tovuq-pita",
    category: "tovuq",
    name: "Tovuqli pita",
    description: "Tovuq go‘shti va bodring baton nonda.",
    image: "/images/menu/tovuq-pita.webp",
    variants: [{ id: "tovuq-pita", price: 56000, portion: "120 g" }],
  },
  {
    id: "tovuq-donar-vaznda",
    category: "tovuq",
    name: "Tovuq donar (vaznda)",
    description: "Tovuq go‘shtidan donar — uyga, oilaga yoki mehmonlarga.",
    image: "/images/menu/tovuq-donar-vaznda.webp",
    variants: [{ id: "tovuq-donar-500-gr", label: "0,5 kg", price: 210000 }, { id: "tovuq-donar-1000-gr", label: "1 kg", price: 402000 }],
  },
  {
    id: "ezogelin",
    category: "shorvalar",
    name: "Ezogelin sho‘rvasi",
    description: "Qizil yasmiq va kartoshkadan quyuq turk sho‘rvasi.",
    image: "/images/menu/ezogelin.webp",
    variants: [{ id: "ezogelin-2", price: 19000, portion: "200 g" }],
  },
  {
    id: "mercimek",
    category: "shorvalar",
    name: "Merjimek sho‘rvasi",
    description: "Yasmiqdan sho‘rva, limon bo‘lagi va krutonlar bilan.",
    image: "/images/menu/mercimek.webp",
    variants: [{ id: "mercimek-chechevitsa-2", price: 19000, portion: "200 g" }],
  },
  {
    id: "sirli-pide",
    category: "pide",
    name: "Sirli pide",
    description: "Xamir, pishloq va tuxum.",
    image: "/images/menu/sirli-pide.webp",
    variants: [{ id: "syrli-pide-2", price: 60000, portion: "200 g" }],
  },
  {
    id: "yaproq-pide",
    category: "pide",
    name: "Yaproq pide",
    description: "Xamir, pishloq va tuxum.",
    image: "/images/menu/yaproq-pide.webp",
    variants: [{ id: "iaprok-pide-2", price: 70000, portion: "200 g" }],
  },
  {
    id: "choban",
    category: "salatlar",
    name: "Choban salati",
    description: "Yangi sabzavotlardan turkcha salat.",
    image: "/images/menu/choban.webp",
    variants: [{ id: "choban-2", price: 24000, portion: "200 g" }],
  },
  {
    id: "yaproq-salati",
    category: "salatlar",
    name: "Yaproq salati",
    description: "Avokado, apelsin, ko‘katlar aralashmasi, cherri pomidor, tovuq go‘shti va parmezan.",
    image: "/images/menu/yaproq-salati.webp",
    variants: [{ id: "yaproq-salati", price: 67000, portion: "300 g" }],
  },
  {
    id: "motsarella-salati",
    category: "salatlar",
    name: "Motsarella salati",
    description: "Rukkola, cherri pomidor, mini motsarella, pesto sousi, kedr yong‘og‘i va krem.",
    image: "/images/menu/motsarella-salati.webp",
    variants: [{ id: "motsarella-salati", price: 75000, portion: "300 g" }],
  },
  {
    id: "baqlajon-salati",
    category: "salatlar",
    name: "Qarsildoq baqlajon salati",
    description: "Tempurada baqlajon, shirin chili va teriyaki souslari, kashnich, kunjut, krem-pishloq va qaymoq.",
    image: "/images/menu/baqlajon-salati.webp",
    variants: [{ id: "qarsildoq-baqlajon-salati", price: 69001, portion: "200 g" }],
  },
  {
    id: "suzma",
    category: "salatlar",
    name: "Suzma",
    description: "Qo‘shimcha sifatida.",
    image: "/images/menu/suzma.webp",
    variants: [{ id: "suzma-2", price: 5000, portion: "300 g" }],
  },
  {
    id: "qalampir",
    category: "salatlar",
    name: "Qalampir",
    description: "Qo‘shimcha sifatida.",
    image: "/images/menu/qalampir.webp",
    variants: [{ id: "qalampir-2", price: 5000, portion: "100 g" }],
  },
  {
    id: "san-sebastyan",
    category: "desertlar",
    name: "San Sebastyan",
    description: "Kuydirilgan cheesecake.",
    image: "/images/menu/san-sebastyan.webp",
    variants: [{ id: "san-sebastyan-2", price: 57000, portion: "80 g" }],
  },
  {
    id: "havuch",
    category: "desertlar",
    name: "Havuch dilim",
    description: "Pistali turk shirinligi.",
    image: "/images/menu/havuch.webp",
    variants: [{ id: "havuch-2", price: 29000, portion: "100 g" }],
  },
  {
    id: "trilece",
    category: "desertlar",
    name: "Trileche",
    description: "Sutga botirilgan biskvit va karamel.",
    image: "/images/menu/trilece.webp",
    variants: [{ id: "triliche-2", price: 19000, portion: "110 g" }],
  },
  {
    id: "sutlach",
    category: "desertlar",
    name: "Sutlach",
    description: "Pechda pishirilgan sutli guruch.",
    image: "/images/menu/sutlach.webp",
    variants: [{ id: "sutlach-2", price: 25000, portion: "110 g" }],
  },
  {
    id: "durum-paxlava",
    category: "desertlar",
    name: "Durum paxlava",
    description: "Paxlava. Narx bir dona uchun.",
    image: "/images/menu/durum-paxlava.webp",
    variants: [{ id: "durum-2", price: 18000, portion: "40 g" }],
  },
  {
    id: "maras",
    category: "desertlar",
    name: "Maraş paxlava",
    description: "Paxlava. Narx bir dona uchun.",
    image: "/images/menu/maras.webp",
    variants: [{ id: "maras-2", price: 18000, portion: "40 g" }],
  },
  {
    id: "ayron",
    category: "ichimliklar",
    name: "Ayron",
    description: "Bir stakan.",
    variants: [{ id: "ayron-stakan-2", price: 10000 }],
  },
  {
    id: "mojito",
    category: "ichimliklar",
    name: "Mojito",
    description: "Laym va yalpizli salqin ichimlik.",
    image: "/images/menu/mojito.webp",
    variants: [{ id: "mokhito-klassik-0-5l-2", label: "Klassik", price: 29000, portion: "0,5 l" }, { id: "mokhito-klubnichnyi-0-5l-2", label: "Qulupnay", price: 35000, portion: "0,5 l" }],
  },
  {
    id: "mango-marakuya",
    category: "ichimliklar",
    name: "Mango–marakuya",
    description: "Mango va marakuyadan salqin ichimlik.",
    image: "/images/menu/mango-marakuya.webp",
    variants: [{ id: "mango-marakuiia-0-5l-2", price: 35000, portion: "0,5 l" }],
  },
  {
    id: "ice-tea",
    category: "ichimliklar",
    name: "Rezavorli ice tea",
    description: "O‘rmon rezavorlari ta’mi bilan salqin choy.",
    image: "/images/menu/ice-tea.webp",
    variants: [{ id: "aisti-iagodnyi-0-5l-2", price: 29000, portion: "0,5 l" }],
  },
  {
    id: "ice-americano",
    category: "ichimliklar",
    name: "Ice Americano",
    description: "Muzli klassik amerikano.",
    image: "/images/menu/ice-americano.webp",
    variants: [{ id: "ais-amerikano", price: 25000, portion: "0,5 l" }],
  },
  {
    id: "ice-cappuccino",
    category: "ichimliklar",
    name: "Ice Cappuccino",
    description: "Espresso, sut ko‘pigi va muz.",
    image: "/images/menu/ice-cappuccino.webp",
    variants: [{ id: "ais-kapuchinno", price: 30000, portion: "0,5 l" }],
  },
  {
    id: "coca-cola",
    category: "ichimliklar",
    name: "Coca-Cola",
    description: "Gazlangan ichimlik.",
    image: "/images/menu/coca-cola.webp",
    variants: [{ id: "coca-cola-0-25l-2", label: "Banka", price: 8000, portion: "0,25 l" }, { id: "koka-kola-0-5-l", label: "Shisha", price: 10000, portion: "0,5 l" }],
  },
  {
    id: "fanta",
    category: "ichimliklar",
    name: "Fanta",
    description: "Gazlangan ichimlik.",
    image: "/images/menu/fanta.webp",
    variants: [{ id: "fanta-0-25l-2", price: 8000, portion: "0,25 l" }],
  },
  {
    id: "hydrolife",
    category: "ichimliklar",
    name: "Hydrolife suvi",
    description: "Ichimlik suvi.",
    image: "/images/menu/hydrolife.webp",
    variants: [{ id: "hydrolife-0-5l-2", price: 5000, portion: "0,5 l" }],
  },
  {
    id: "sarimsoq-sous",
    category: "souslar",
    name: "Sarimsoqli sous",
    description: "Asosiy taomga bepul.",
    image: "/images/menu/sarimsoq-sous.webp",
    variants: [{ id: "chisnochniy-sous", price: 0, portion: "80 g" }], tags: ["bepul"],
  },
  {
    id: "tomat-sous",
    category: "souslar",
    name: "Tomatli sous",
    description: "Asosiy taomga bepul.",
    image: "/images/menu/tomat-sous.webp",
    variants: [{ id: "tomatniy-sous", price: 0, portion: "80 g" }], tags: ["bepul"],
  },
];

/** Signature dishes for the "Yaproq’ning asosiylari" section. */
export const featuredIds = ["yaproq-donar", "iskender-kabob", "pilav-ustu-donar", "yaproq-pide"];

export const getDish = (id: string) => dishes.find((d) => d.id === id);

const variantIndex = new Map(dishes.flatMap((d) => d.variants.map((v) => [v.id, { dish: d, variant: v }] as const)));

/** Resolves a cart line id (an official product slug) to its dish and size. */
export const getVariant = (id: string) => variantIndex.get(id);

/** "Yaproq donar · 1,5" — the name of a specific size for carts and toasts. */
export const variantName = (dish: Dish, v: Variant) => (dish.variants.length > 1 && v.label ? `${dish.name} · ${v.label}` : dish.name);
