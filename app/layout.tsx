import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RestaurantSchema from "@/components/seo/RestaurantSchema";
import WhatsAppFloatingButton from "@/components/contact/WhatAppFloatingButton";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kokkoscafe.com"),

  title: {
    default: "Kokkos Café & Bistro | Diani Beach",
    template: "%s | Kokkos Café & Bistro",
  },

  description:
    "Kokkos Café & Bistro in Diani Beach, Kenya. Fresh food, homemade dishes, coffee, cakes and international flavours, served since 2000.",

  applicationName: "Kokkos Café & Bistro",

  keywords: [
    "Kokkos Cafe",
    "Kokkos Cafe Bistro",
    "Kokkos Diani",
    "Diani Beach cafe",
    "Diani Beach restaurant",
    "restaurants in Diani Beach",
    "cafes in Diani Beach",
    "Diani breakfast",
    "Diani cakes",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://www.kokkoscafe.com",
    siteName: "Kokkos Café & Bistro",
    title: "Kokkos Café & Bistro | Diani Beach",
    description:
      "Fresh food, homemade dishes and flavours inspired by travel in Diani Beach, Kenya. Serving the Diani community since 2000.",
    images: [
      {
        url: "/images/kokkos/hero.jpg",
        width: 1600,
        height: 1000,
        alt: "Kokkos Café & Bistro in Diani Beach",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kokkos Café & Bistro | Diani Beach",
    description:
      "Fresh food, homemade dishes and flavours inspired by travel in Diani Beach, Kenya.",
    images: ["/images/kokkos/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <RestaurantSchema />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
