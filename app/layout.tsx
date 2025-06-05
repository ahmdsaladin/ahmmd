import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SoundEffects from "@/components/sound-effects"
import SafariThemeColor from "@/components/safari-theme-color"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Ahmd Saladin | Design Architect portfolio",
  description: "A Design Architect working across visual identity, product, and interface design. My work spans the tactile world of posters and magazines to the dynamic realms of UI/UX. I believe design should not only function—it should resonate. Every layout, every pixel, every interaction is a moment of dialogue between object and observer.",
  // Set initial theme-color meta tag for iOS Safari
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
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
