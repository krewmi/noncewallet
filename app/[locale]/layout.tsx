import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { StoreProvider } from '@/components/providers/store-provider';
import { QueryProvider } from '@/components/providers/query-provider';
import { Toaster } from '@/components/ui/toaster';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Modern Ecommerce',
    default: 'Modern Ecommerce - Your Shopping Destination',
  },
  description: 'A modern, scalable ecommerce platform built with Next.js 15',
  keywords: ['ecommerce', 'shopping', 'online store', 'products'],
  authors: [{ name: 'Modern Ecommerce Team' }],
  creator: 'Modern Ecommerce',
  metadataBase: new URL('https://ecommerce.example.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ecommerce.example.com',
    title: 'Modern Ecommerce',
    description: 'A modern, scalable ecommerce platform built with Next.js 15',
    siteName: 'Modern Ecommerce',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Ecommerce',
    description: 'A modern, scalable ecommerce platform built with Next.js 15',
    creator: '@modernecommerce',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const locales = ['en', 'ru'];

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <StoreProvider>
          <QueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <NextIntlClientProvider messages={messages}>
                <div className="min-h-screen bg-background font-sans antialiased">
                  {children}
                </div>
                <Toaster />
              </NextIntlClientProvider>
            </ThemeProvider>
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}