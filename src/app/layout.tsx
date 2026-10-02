import type { Metadata, Viewport } from "next";
import { Caveat, Figtree, Young_Serif } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

// Soft, heavy serif for headlines (the user's reference look); Figtree for reading; Caveat for a few hand-lettered notes.
const display = Young_Serif({ subsets: ["latin", "latin-ext"], weight: "400", variable: "--font-display", display: "swap" });
const hand = Caveat({ subsets: ["latin", "latin-ext"], weight: ["600", "700"], variable: "--font-hand", display: "swap" });
const sans = Figtree({ subsets: ["latin", "latin-ext"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "YAPROQ DONAR — turk taomlari va donar, Toshkent",
  description:
    "YAPROQ DONAR: 100% mahalliy mol go‘shtidan donar, Iskender kabob, pide, sho‘rvalar va turk desertlari. Toshkentda 3 filial, eng yaqin filialdan 1 soatda yetkazib berish.",
  openGraph: {
    title: "YAPROQ DONAR",
    description: "Ta’mga yangicha yondashuv. Toshkentda 3 filial.",
    locale: "uz_UZ",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#115A2E", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${display.variable} ${sans.variable} ${hand.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <a href="#asosiy" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-yellow focus:px-4 focus:py-2 focus:font-bold focus:text-green-950">
          Asosiy kontentga o‘tish
        </a>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
