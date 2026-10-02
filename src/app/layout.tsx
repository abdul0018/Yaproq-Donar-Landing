import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  axes: ["SOFT", "opsz"],
  display: "swap",
});
const sans = Manrope({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "YAPROQ DONAR — olovda pishgan donar, Toshkentda 3 filial",
  description:
    "YAPROQ DONAR: har kuni yangi marinadlanadigan donar, ko‘mirda pishgan tovuq, tandir pide va uy ayroni. Toshkentdagi 3 filialimizga keling yoki onlayn buyurtma bering.",
  openGraph: {
    title: "YAPROQ DONAR",
    description: "Olovda pishgan donar. Toshkentda 3 filial.",
    locale: "uz_UZ",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#173F2E", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        <a href="#asosiy" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-cream">
          Asosiy kontentga o‘tish
        </a>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
