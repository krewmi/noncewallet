import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'NonceWallet Store - Современный интернет-магазин',
    template: '%s | NonceWallet Store',
  },
  description:
    'Откройте для себя уникальную коллекцию качественных товаров. Лучшие цены, быстрая доставка, безупречный сервис.',
  keywords: [
    'интернет-магазин',
    'онлайн покупки',
    'качественные товары',
    'быстрая доставка',
    'электроника',
    'аксессуары',
  ],
  authors: [{ name: 'NonceWallet Team' }],
  creator: 'NonceWallet',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'NonceWallet Store - Современный интернет-магазин',
    description:
      'Откройте для себя уникальную коллекцию качественных товаров. Лучшие цены, быстрая доставка, безупречный сервис.',
    siteName: 'NonceWallet Store',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NonceWallet Store',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NonceWallet Store - Современный интернет-магазин',
    description:
      'Откройте для себя уникальную коллекцию качественных товаров. Лучшие цены, быстрая доставка, безупречный сервис.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'google-verification-code',
    yandex: 'yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}