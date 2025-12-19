import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Lato, Cinzel_Decorative, Quicksand } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const cinzel = Cinzel_Decorative({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "LITTLE LAO | Est. Niseko 2016 - Premium Cocktails & Japanese Whisky",
  description:
    "Experience the finest Japanese whisky and premium cocktails at LITTLE LAO in Niseko. Established in 2016, we offer an intimate speakeasy atmosphere.",
  keywords: "Niseko bar, Japanese whisky, premium cocktails, speakeasy, luxury bar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${greatVibes.variable} ${lato.variable} ${cinzel.variable} ${quicksand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
