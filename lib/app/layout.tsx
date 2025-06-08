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
    default: 'Ahmd Saladin | Design Manager / Architect',
    template: '%s | Ahmd Saladin'
  },
  description: 'Portfolio for Ahmd Saladin, Design Manager / Architect.',
  keywords: ['visual designer, design architect, poster designer, cinematic posters, UI/UX designer, branding expert, brand identity, product design, art direction, editorial layout, logo design, creative consultant, modern Egyptian designer, Alexandria artist, digital storytelling, minimal design, glassmorphic design, high-end visuals, experimental design, cultural design, interface aesthetics, strategic design systems, film poster design, music poster artist, award-winning designer'],
  authors: [{ name: 'Ahmd Saladin', url: 'https://ahmdsaladin.vercesl.app' }],
  creator: 'Ahmd Saladin',
  publisher: 'Ahmd Saladin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ahmdsaladin.vercesl.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmdsaladin.vercesl.app',
    siteName: 'Ahmd Saladin Designs',
    title: 'Ahmd Saladin | Design Manager',
    description: 'Explore a selection of my most resonant design works — from cinematic posters to immersive interfaces and brand systems.',
    images: [
      {
        url: '/avatar.png',
        width: 1200,
        height: 630,
        alt: 'Ahmd Saladin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmd Saladin | Design Manager / Architect',
    description: 'Explore a selection of my most resonant design works — from cinematic posters to immersive interfaces and brand systems.',
    creator: '@ahmdsaladin',
    images: ['/avatar.png'],
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
    google: '187045917450-o5v80hdsmj93tdcp52j30b7krrv4a2ko.apps.googleusercontent.com',
    yandex: 'aeaa4e409e43dbff',
    yahoo: '528AA44CDE26AF222116FDB10F516187 ',
  },
  category: 'Design',
}
<meta name="msvalidate.01" content="528AA44CDE26AF222116FDB10F516187" />
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
