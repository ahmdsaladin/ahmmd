import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SoundEffects from "@/components/sound-effects"
import SafariThemeColor from "@/components/safari-theme-color"
import { Viewport } from "next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
};

export const metadata: Metadata = {
  title: {
    default: 'Ahmd Saladin | Photographer & Visual Storyteller',
    template: '%s | Ahmd Saladin'
  },
  description: 'Explore the world through my lens. Professional photographer specializing in travel, landscape, and urban photography. Based in Egypt, capturing moments worldwide.',
  keywords: ['photography', 'travel photography', 'landscape photography', 'urban photography', 'Egypt photographer', 'visual storytelling'],
  authors: [{ name: 'Ahmd Saladin', url: 'https://ahmdsaladin.com' }],
  creator: 'Ahmd Saladin',
  publisher: 'Ahmd Saladin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ahmdsaladin.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmdsaladin.com',
    siteName: 'Ahmd Saladin Photography',
    title: 'Ahmd Saladin | Photographer & Visual Storyteller',
    description: 'Explore the world through my lens. Professional photographer specializing in travel, landscape, and urban photography. Based in Egypt, capturing moments worldwide.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmd Saladin Photography'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmd Saladin | Photographer & Visual Storyteller',
    description: 'Explore the world through my lens. Professional photographer specializing in travel, landscape, and urban photography. Based in Egypt, capturing moments worldwide.',
    creator: '@ahmdsaladin',
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
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
  },
  category: 'photography',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SafariThemeColor />
          <SoundEffects />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
