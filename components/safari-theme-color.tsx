"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export default function SafariThemeColor() {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    // Function to update meta tag
    const updateThemeColor = () => {
      // Find existing theme-color meta tag
      let metaThemeColor = document.querySelector('meta[name="theme-color"]')
      
      // If it doesn't exist, create it
      if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta')
        metaThemeColor.setAttribute('name', 'theme-color')
        document.head.appendChild(metaThemeColor)
      }
      
      // Set the content based on the theme
      if (resolvedTheme === 'dark') {
        metaThemeColor.setAttribute('content', '#000000') // Black for dark mode
      } else {
        metaThemeColor.setAttribute('content', '#ffffff') // White for light mode
      }
    }
    
    // Update on theme change
    updateThemeColor()
    
    // Also update when user switches between apps and returns
    // This helps with Safari's behavior on iOS
    window.addEventListener('focus', updateThemeColor)
    window.addEventListener('pageshow', updateThemeColor)
    
    return () => {
      window.removeEventListener('focus', updateThemeColor)
      window.removeEventListener('pageshow', updateThemeColor)
    }
  }, [resolvedTheme])
  
  // This component doesn't render anything
  return null
} 