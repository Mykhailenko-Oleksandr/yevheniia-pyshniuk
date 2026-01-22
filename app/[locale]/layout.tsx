import "modern-normalize";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Playfair_Display, Lora, Rubik } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Header from "@/components/Header/Header";
import ThemeInit from "@/components/ThemeInit/ThemeInit";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "",
//   description: "",
//   openGraph: {
//     title: "",
//     description: "",
//     url: "https://",
//     images: [{ url: "" }],
//   },
// };

interface MetadataProps {
  params: Promise<{ locale: string }>;
}

// export async function generateMetadata({ params }: MetadataProps) {
//   const { locale } = await params;
//   const t = await getTranslations({ locale, namespace: "Metadata" });

//   return {
//     title: t("title"),
//   };
// }

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${playfairDisplay.variable} ${lora.variable} ${rubik.variable}`}>
        <TanStackProvider>
          <ThemeInit />
          <NextIntlClientProvider>
            <Header />
            {children}
          </NextIntlClientProvider>
          {/* <Footer /> */}
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </TanStackProvider>
      </body>
    </html>
  );
}
