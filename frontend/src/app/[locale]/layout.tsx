import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import ConditionalNavbar from "@/components/layout/ConditionalNavbar";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Elevate Digital - Social Media Boosts for Algerian E-commercants",
  description: "Boost your social media presence with high-quality followers, likes, and more. Modern, bubbly, and efficient.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${cairo.variable} font-sans antialiased overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AuthProvider>
            <ThemeProvider>
              <ConditionalNavbar />
              {children}
            </ThemeProvider>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
