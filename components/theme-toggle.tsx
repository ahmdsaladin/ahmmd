"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useShutterSound } from "./sound-effects"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { playShutterSound } = useShutterSound()

  // Ensure component is mounted before rendering to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Helper function to update Safari theme color meta tag directly
  const updateSafariThemeColor = (isDark: boolean) => {
    // Only run on the client side
    if (typeof window === 'undefined') return
    
    // Check if it's a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    
    // If not mobile, don't do anything special
    if (!isMobile) return
    
    // Find or create the theme-color meta tag for Safari
    let metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta')
      metaThemeColor.setAttribute('name', 'theme-color')
      document.head.appendChild(metaThemeColor)
    }
    
    // Update color based on theme
    metaThemeColor.setAttribute('content', isDark ? '#000000' : '#ffffff')
  }

  const toggleTheme = () => {
    playShutterSound()
    
    // Get the next theme state
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"
    
    // Immediately update Safari theme color for better mobile experience
    updateSafariThemeColor(nextTheme === "dark")
    
    // Set the theme
    setTheme(nextTheme)
  }

  if (!mounted) {
    return <div className="w-10 h-10"></div> // Placeholder to avoid layout shift
  }

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
      aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: resolvedTheme === "dark" ? 0 : 180,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        {resolvedTheme === "dark" ? (
          <Sun size={20} className="text-primary" />
        ) : (
          <Moon size={20} className="text-primary" />
        )}
      </motion.div>
    </motion.button>
  )
}
