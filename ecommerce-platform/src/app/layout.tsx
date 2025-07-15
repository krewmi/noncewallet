import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Platform - Современный интернет-магазин",
  description: "Профессиональный e-commerce сайт с современным UX/UI дизайном, администраторской панелью и полной функциональностью интернет-магазина.",
  keywords: [
    "интернет-магазин", 
    "e-commerce", 
    "онлайн-покупки", 
    "товары", 
    "заказы", 
    "доставка"
  ],
  authors: [{ name: "E-Commerce Platform" }],
  creator: "E-Commerce Platform",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://ecommerce-platform.com",
    title: "E-Commerce Platform - Современный интернет-магазин",
    description: "Профессиональный e-commerce сайт с современным UX/UI дизайном",
    siteName: "E-Commerce Platform",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Platform",
    description: "Современный интернет-магазин с профессиональным дизайном",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ecommerce-platform.com" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
