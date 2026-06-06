import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

import ConditionalNavbar from "@/components/layout/ConditionalNavbar";

export const metadata: Metadata = {
  title: "Elevate Digital - Social Media Boosts for Algerian E-commercants",
  description: "Boost your social media presence with high-quality followers, likes, and more. Modern, bubbly, and efficient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans antialiased overflow-x-hidden`}>
        <ConditionalNavbar />
        {children}
      </body>
    </html>
  );
}
