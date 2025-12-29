import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Premium display font for hero headlines
const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Premium body font
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Health Centric | Comprehensive Blood Testing & Health Insights",
  description:
    "Know your body. Change your future. Health Centric offers comprehensive blood testing with 80+ biomarkers, personalized insights, and expert physician guidance. At-home collection with results in 48 hours.",
  keywords: [
    "blood testing",
    "health testing",
    "biomarkers",
    "preventive health",
    "at-home testing",
    "health insights",
    "wellness",
  ],
  authors: [{ name: "Health Centric" }],
  openGraph: {
    title: "Health Centric | Comprehensive Blood Testing & Health Insights",
    description:
      "Know your body. Change your future. Comprehensive blood testing with personalized insights from certified health experts.",
    type: "website",
    locale: "en_US",
    siteName: "Health Centric",
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Centric | Comprehensive Blood Testing & Health Insights",
    description:
      "Know your body. Change your future. Comprehensive blood testing with personalized insights.",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${plusJakarta.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
