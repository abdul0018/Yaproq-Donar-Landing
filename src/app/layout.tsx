import type { Metadata, Viewport } from "next";
import { Figtree, Yeseva_One } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

// Karagöz-theatre world: Yeseva One, a high-contrast display serif with the swell of a cut-leather
// silhouette, for headlines and prices; Figtree for reading.
const display = Yeseva_One({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--font-display", display: "swap" });
const sans = Figtree({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "YAPROQ DONAR — turk taomlari va donar, Toshkent",
  description:
    "YAPROQ DONAR: 100% mahalliy mol go‘shtidan tayyorlangan donar, Iskender kabob, pide, sho‘rvalar va turk desertlari. Toshkentda 3 ta filial mavjud, eng yaqin filialdan 1 soat ichida yetkazib beramiz.",
  openGraph: {
    title: "YAPROQ DONAR",
    description: "Ta’mga yangicha yondashuv. Toshkentda 3 filial.",
    locale: "uz_UZ",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#115A2E", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <a href="#asosiy" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-green-950">
          Asosiy kontentga o‘tish
        </a>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
