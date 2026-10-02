import type { ArtKind } from "@/components/DishArt";

export type CategoryId =
  | "setlar"
  | "asosiy"
  | "donar"
  | "tovuq"
  | "shaurma"
  | "pide"
  | "salatlar"
  | "desertlar"
  | "ichimliklar"
  | "souslar";

export type Category = { id: CategoryId; name: string; short: string };

export type Dish = {
  id: string;
  category: CategoryId;
  name: string;
  description: string;
  price: number;
  /** Portion size shown next to the price, e.g. "380 g" or "0,4 l". */
  portion: string;
  art: ArtKind;
  /** Optional real photo path (e.g. "/images/donar-klassik.jpg"). Falls back to the illustration. */
  image?: string;
  tags?: Array<"top" | "yangi" | "achchiq" | "vegetarian">;
};

export const categories: Category[] = [
  { id: "setlar", name: "Setlar", short: "Set" },
  { id: "asosiy", name: "Asosiy taomlar", short: "Asosiy" },
  { id: "donar", name: "Donar", short: "Donar" },
  { id: "tovuq", name: "Tovuq", short: "Tovuq" },
  { id: "shaurma", name: "Shaurma", short: "Shaurma" },
  { id: "pide", name: "Pide", short: "Pide" },
  { id: "salatlar", name: "Salatlar", short: "Salat" },
  { id: "desertlar", name: "Desertlar", short: "Desert" },
  { id: "ichimliklar", name: "Ichimliklar", short: "Ichimlik" },
  { id: "souslar", name: "Souslar", short: "Sous" },
];

export const dishes: Dish[] = [
  // Setlar
  {
    id: "set-oilaviy",
    category: "setlar",
    name: "Oilaviy set",
    description: "4 ta donar, katta porsiya fri, 2 ta salat va 1 litr ayron. 3–4 kishiga.",
    price: 189000,
    portion: "2,1 kg",
    art: "set",
    tags: ["top"],
  },
  {
    id: "set-dostlar",
    category: "setlar",
    name: "Do‘stlar seti",
    description: "2 ta donar, 2 ta tovuq shaurma, fri, uchta sous va ikki ichimlik.",
    price: 139000,
    portion: "1,5 kg",
    art: "set",
  },
  {
    id: "set-tushlik",
    category: "setlar",
    name: "Tushlik seti",
    description: "Donar, kichik fri, choban salati va ayron — ish kunlari 11:00–16:00.",
    price: 54000,
    portion: "720 g",
    art: "plate",
    tags: ["yangi"],
  },

  // Asosiy
  {
    id: "iskender",
    category: "asosiy",
    name: "Iskandar kabob",
    description: "Pide bo‘laklari ustida yupqa go‘sht, pomidor sousi, sariyog‘ va qatiq.",
    price: 72000,
    portion: "450 g",
    art: "plate",
    tags: ["top"],
  },
  {
    id: "donar-tarelka",
    category: "asosiy",
    name: "Donar tarelka",
    description: "Mol go‘shti donari, guruch, fri, yangi sabzavotlar va sarimsoqli sous.",
    price: 64000,
    portion: "520 g",
    art: "plate",
  },
  {
    id: "adana",
    category: "asosiy",
    name: "Adana kabob",
    description: "Ko‘mirda pishgan achchiq qiyma kabob, lavash, piyoz-sumax va grill qalampir.",
    price: 68000,
    portion: "400 g",
    art: "plate",
    tags: ["achchiq"],
  },

  // Donar
  {
    id: "donar-klassik",
    category: "donar",
    name: "Klassik donar",
    description: "Mol go‘shti, yangi lavash, pomidor, bodring, piyoz va firmaviy oq sous.",
    price: 38000,
    portion: "380 g",
    art: "wrap",
    tags: ["top"],
  },
  {
    id: "donar-pishloqli",
    category: "donar",
    name: "Pishloqli donar",
    description: "Klassik retsept, eritilgan chedder va qizartirilgan tandir noni.",
    price: 43000,
    portion: "410 g",
    art: "wrap",
  },
  {
    id: "donar-achchiq",
    category: "donar",
    name: "Olovli donar",
    description: "Jalapeño, achchiq qizil sous va dudlangan paprika bilan mol go‘shti.",
    price: 41000,
    portion: "390 g",
    art: "wrap",
    tags: ["achchiq", "yangi"],
  },
  {
    id: "donar-katta",
    category: "donar",
    name: "Katta donar",
    description: "Ikki barobar go‘sht, katta lavash va ichida fri — juda och bo‘lsangiz.",
    price: 52000,
    portion: "560 g",
    art: "wrap",
  },

  // Tovuq
  {
    id: "tovuq-grill",
    category: "tovuq",
    name: "Grill tovuq",
    description: "Butun tovuqning yarmi, 12 soat marinadlangan, ko‘mirda pishirilgan.",
    price: 49000,
    portion: "550 g",
    art: "chicken",
    tags: ["top"],
  },
  {
    id: "tovuq-qanot",
    category: "tovuq",
    name: "Qanotchalar",
    description: "8 dona qarsildoq qanot, asal-qalampir glazuri va ranch sous.",
    price: 42000,
    portion: "8 dona",
    art: "chicken",
    tags: ["achchiq"],
  },
  {
    id: "tovuq-donar",
    category: "tovuq",
    name: "Tovuq donar",
    description: "Tovuq soni go‘shti, salat bargi, tuzlangan bodring va sarimsoqli sous.",
    price: 34000,
    portion: "360 g",
    art: "wrap",
  },

  // Shaurma
  {
    id: "shaurma-klassik",
    category: "shaurma",
    name: "Klassik shaurma",
    description: "Tovuq, karam, sabzi, pomidor va qaymoqli sous yupqa lavashda.",
    price: 32000,
    portion: "350 g",
    art: "shawarma",
    tags: ["top"],
  },
  {
    id: "shaurma-mol",
    category: "shaurma",
    name: "Mol go‘shtli shaurma",
    description: "Mol go‘shti, qovurilgan piyoz, kartoshka fri va pomidor sousi.",
    price: 37000,
    portion: "380 g",
    art: "shawarma",
  },
  {
    id: "shaurma-mini",
    category: "shaurma",
    name: "Mini shaurma",
    description: "Bolalar va yengil tamaddi uchun kichik porsiya.",
    price: 24000,
    portion: "230 g",
    art: "shawarma",
  },

  // Pide
  {
    id: "pide-gosht",
    category: "pide",
    name: "Go‘shtli pide",
    description: "Qayiq shaklidagi tandir non, mol qiymasi, pomidor va qalampir.",
    price: 46000,
    portion: "420 g",
    art: "pide",
    tags: ["top"],
  },
  {
    id: "pide-pishloq",
    category: "pide",
    name: "Pishloqli pide",
    description: "Sulguni, mozzarella va tuxum — ichi cho‘ziladigan, issiq holda.",
    price: 39000,
    portion: "380 g",
    art: "pide",
    tags: ["vegetarian"],
  },
  {
    id: "pide-aralash",
    category: "pide",
    name: "Aralash pide",
    description: "Donar go‘shti, pishloq va qo‘ziqorin. Ikki kishiga yetadi.",
    price: 54000,
    portion: "520 g",
    art: "pide",
    tags: ["yangi"],
  },

  // Salatlar
  {
    id: "salat-choban",
    category: "salatlar",
    name: "Choban salati",
    description: "Pomidor, bodring, bulg‘or qalampiri, piyoz, ko‘katlar va limonli zaytun moyi.",
    price: 22000,
    portion: "250 g",
    art: "salad",
    tags: ["vegetarian"],
  },
  {
    id: "salat-sezar",
    category: "salatlar",
    name: "Tovuqli Sezar",
    description: "Romen bargi, grill tovuq, parmezan, krutonlar va Sezar sousi.",
    price: 36000,
    portion: "280 g",
    art: "salad",
  },
  {
    id: "salat-yaproq",
    category: "salatlar",
    name: "Yaproq salati",
    description: "Ismaloq, rukola, anor, yong‘oq va nordon anor sousi.",
    price: 29000,
    portion: "220 g",
    art: "salad",
    tags: ["vegetarian", "yangi"],
  },

  // Desertlar
  {
    id: "paxlava",
    category: "desertlar",
    name: "Pistali paxlava",
    description: "Yupqa xamir qatlamlari, pista va asal sharbati. 4 bo‘lak.",
    price: 28000,
    portion: "160 g",
    art: "dessert",
    tags: ["top"],
  },
  {
    id: "kunefe",
    category: "desertlar",
    name: "Kunefe",
    description: "Issiq kadayif, ichida eriydigan pishloq, ustida pista.",
    price: 34000,
    portion: "200 g",
    art: "dessert",
  },
  {
    id: "sutlach",
    category: "desertlar",
    name: "Sutlach",
    description: "Pechda pishirilgan sutli guruch, ustida dolchin.",
    price: 18000,
    portion: "180 g",
    art: "dessert",
    tags: ["vegetarian"],
  },

  // Ichimliklar
  {
    id: "ayron",
    category: "ichimliklar",
    name: "Uy ayroni",
    description: "Har kuni tayyorlanadigan, ko‘pikli va salqin.",
    price: 9000,
    portion: "0,4 l",
    art: "drink",
    tags: ["top"],
  },
  {
    id: "limonad",
    category: "ichimliklar",
    name: "Yalpizli limonad",
    description: "Limon, yalpiz va ozgina asal. Muz bilan.",
    price: 16000,
    portion: "0,5 l",
    art: "drink",
  },
  {
    id: "choy",
    category: "ichimliklar",
    name: "Turk choyi",
    description: "Ince belli stakanda, qand bilan.",
    price: 6000,
    portion: "0,2 l",
    art: "drink",
  },
  {
    id: "kola",
    category: "ichimliklar",
    name: "Coca-Cola",
    description: "Sovutilgan, shisha idishda.",
    price: 10000,
    portion: "0,33 l",
    art: "drink",
  },

  // Souslar
  {
    id: "sous-oq",
    category: "souslar",
    name: "Firmaviy oq sous",
    description: "Qatiq, sarimsoq va ukrop. Bizning eng mashhur sousimiz.",
    price: 4000,
    portion: "50 g",
    art: "sauce",
    tags: ["top"],
  },
  {
    id: "sous-achchiq",
    category: "souslar",
    name: "Achchiq qizil sous",
    description: "Qizil qalampir pastasi va dudlangan paprika.",
    price: 4000,
    portion: "50 g",
    art: "sauce",
    tags: ["achchiq"],
  },
  {
    id: "sous-pishloq",
    category: "souslar",
    name: "Pishloqli sous",
    description: "Chedder asosidagi quyuq va iliq sous.",
    price: 5000,
    portion: "50 g",
    art: "sauce",
  },
];

export const featuredIds = ["donar-klassik", "iskender", "tovuq-grill", "pide-gosht"];

export const featuredCopy: Record<string, { kicker: string; story: string }> = {
  "donar-klassik": {
    kicker: "Eng ko‘p buyurtma qilinadi",
    story:
      "Har kuni tongda marinadlanadigan mol go‘shti vertikal olovda sekin aylanadi. Lavash buyurtmadan keyin isitiladi — shuning uchun u doim yumshoq.",
  },
  iskender: {
    kicker: "Oshpaz tavsiyasi",
    story: "Issiq sariyog‘ stol oldida quyiladi.",
  },
  "tovuq-grill": {
    kicker: "Ko‘mirda",
    story: "12 soatlik marinad, tutun hidi.",
  },
  "pide-gosht": {
    kicker: "Tandirdan",
    story: "Xamir har kuni filialda qoriladi.",
  },
};

export const getDish = (id: string) => dishes.find((d) => d.id === id);
