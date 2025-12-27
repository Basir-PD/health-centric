import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VitalPath Health | Comprehensive Blood Testing & Health Insights",
  description:
    "Know your body. Change your future. VitalPath offers comprehensive blood testing with 80+ biomarkers, personalized insights, and expert physician guidance. At-home collection with results in 48 hours.",
  keywords: [
    "blood testing",
    "health testing",
    "biomarkers",
    "preventive health",
    "at-home testing",
    "health insights",
    "wellness",
  ],
  authors: [{ name: "VitalPath Health" }],
  openGraph: {
    title: "VitalPath Health | Comprehensive Blood Testing & Health Insights",
    description:
      "Know your body. Change your future. Comprehensive blood testing with personalized insights from certified health experts.",
    type: "website",
    locale: "en_US",
    siteName: "VitalPath Health",
  },
  twitter: {
    card: "summary_large_image",
    title: "VitalPath Health | Comprehensive Blood Testing & Health Insights",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
