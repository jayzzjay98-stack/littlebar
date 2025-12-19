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
  metadataBase: new URL("https://littlelao.la"),
  title: "LITTLE LAO | Original Taste of Luang Prabang - Premium Cocktails & Culture",
  description:
    "Experience the heart of Luang Prabang at LITTLE LAO. Authentic Lao cuisine, signature artisanal cocktails, and a vibrant cultural atmosphere. Established in 2016.",
  keywords: "Luang Prabang bar, Laos cocktails, authentic Lao food, Little Lao bar, best bar in Luang Prabang, Laos travel, Niseko origins",
  openGraph: {
    title: "LITTLE LAO | Original Taste of Luang Prabang",
    description: "Premium cocktails and authentic Lao culture in the heart of Luang Prabang.",
    url: "https://littlelao.la",
    siteName: "LITTLE LAO",
    images: [
      {
        url: "/about-lao-bar.webp",
        width: 1200,
        height: 630,
        alt: "LITTLE LAO Bar Atmosphere",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LITTLE LAO | Original Taste of Luang Prabang",
    description: "Premium cocktails and authentic Lao culture in the heart of Luang Prabang.",
    images: ["/about-lao-bar.webp"],
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrRestaurant",
    "name": "LITTLE LAO",
    "image": "https://littlelao.la/about-lao-bar.webp",
    "@id": "https://littlelao.la",
    "url": "https://littlelao.la",
    "telephone": "+85671254678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sisavangvong Road",
      "addressLocality": "Luang Prabang",
      "addressCountry": "LA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.892,
      "longitude": 102.134
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "18:00",
        "closes": "01:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "18:00",
        "closes": "02:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "15:00",
        "closes": "02:00"
      }
    ],
    "servesCuisine": "Lao",
    "priceRange": "$$"
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${greatVibes.variable} ${lato.variable} ${cinzel.variable} ${quicksand.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
