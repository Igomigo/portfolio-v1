import type { Metadata } from "next";
import { Caveat, Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fatai Igomigo — Thoughtfully engineered.",
  description:
    "Software engineer and AI agents & automation specialist. A portfolio told as a journey between worlds: engineering, intelligence, automation, motion.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
