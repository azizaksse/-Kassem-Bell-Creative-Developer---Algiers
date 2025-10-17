import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kassem Bell — Liquid Glass Web Experiences",
  description:
    "Kassem Bell crafts liquid-glass web experiences that combine motion, clarity, and high-performance engineering for ambitious brands.",
  keywords: [
    "liquid glass",
    "creative developer",
    "next.js portfolio",
    "motion design",
    "frontend engineer",
    "UI UX designer",
  ],
  authors: [{ name: "Kassem Bell" }],
  openGraph: {
    title: "Kassem Bell — Liquid Glass Web Experiences",
    description:
      "Immersive digital products designed with narrative, motion, and engineering polish.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
