"use client"

import { useEffect, useState, useRef } from "react"

// Helper function to detect mobile devices
function isMobileDevice() {
  if (typeof window === 'undefined') return false
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || (window.innerWidth <= 768)
}

// Singleton for audio element to prevent multiple instances
let globalAudioElement: HTMLAudioElement | null = null
let globalAudioContainer: HTMLDivElement | null = null
let setupComplete = false

// Create a singleton audio element that can be reused across the app
function getOrCreateAudioElement(): HTMLAudioElement | null {
  // Early return if we're in a mobile environment
  if (typeof window !== 'undefined' && isMobileDevice()) {
    return null
  }

  // Return existing instance if already created
  if (globalAudioElement) {
    return globalAudioElement
  }

  try {
    // First time setup - create container and audio element
    if (!globalAudioContainer) {
      globalAudioContainer = document.createElement('div')
      globalAudioContainer.style.display = 'none'
      document.body.appendChild(globalAudioContainer)
    }

    globalAudioElement = document.createElement('audio')
    globalAudioElement.src = "/Fuji Camera Shutter Sound.mp3"
    globalAudioElement.preload = "auto"
    globalAudioElement.style.display = "none"
    globalAudioElement.setAttribute('playsinline', 'true')
    globalAudioElement.setAttribute('webkit-playsinline', 'true')
    globalAudioElement.volume = 0.4
    
    // Append to container
    globalAudioContainer.appendChild(globalAudioElement)
    setupComplete = true
    
    return globalAudioElement
  } catch (error) {
    console.warn("Error creating audio singleton:", error)
    return null
  }
}

// SoundEffects component that adds click listeners to the document
export default function SoundEffects() {
  // Track if sound is enabled
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Check if device is mobile on mount
    const mobile = isMobileDevice()
    setIsMobile(mobile)
    
    if (!mobile && !audioRef.current) {
      // Use the singleton audio element
      audioRef.current = getOrCreateAudioElement()
    }

    // Also listen for resize events in case of orientation changes
    const handleResize = () => {
      setIsMobile(isMobileDevice())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Skip setting up listeners if on mobile
    if (isMobile) return

    // Click handler for links
    const handleLinkClick = (e: MouseEvent) => {
      if (!soundEnabled || !audioRef.current) return

      const target = e.target as HTMLElement
      const link = target.closest("a")

      // Only play sound for links
      if (link && !link.classList.contains("no-sound")) {
        try {
          // Reset and play
          audioRef.current.currentTime = 0
          audioRef.current.play().catch((err) => {
            console.warn("Could not play sound, disabling sound effects:", err)
            setSoundEnabled(false)
          })
        } catch (error) {
          console.warn("Error with audio, disabling sound effects:", error)
          setSoundEnabled(false)
        }
      }
    }

    // Add event listener
    document.addEventListener("click", handleLinkClick)

    // Cleanup
    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [soundEnabled, isMobile])

  // Don't render anything - we're using the singleton audio element
  // that was created in the useEffect
  return null
}

// Cleanup function to be called on app unmount (rarely needed)
export function cleanupAudioSingleton() {
  if (globalAudioContainer && globalAudioContainer.parentNode) {
    try {
      globalAudioContainer.parentNode.removeChild(globalAudioContainer)
      globalAudioElement = null
      globalAudioContainer = null
      setupComplete = false
    } catch (e) {
      console.warn("Error cleaning up audio:", e)
    }
  }
}

// Export the hook for direct use in components
export function useShutterSound() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Check if device is mobile on mount
    setIsMobile(isMobileDevice())
    
    // Initialize the audio element if not mobile and not already setup
    if (!isMobileDevice() && !setupComplete) {
      getOrCreateAudioElement()
    }
  }, [])

  // Simple function to play sound with error handling
  const playShutterSound = () => {
    // Don't play sounds on mobile
    if (isMobile) return
    
    // Get the singleton audio element
    const audio = globalAudioElement
    if (!audio) return

    try {
      audio.currentTime = 0
      audio.play().catch((err) => {
        console.warn("Could not play sound:", err)
      })
    } catch (error) {
      console.warn("Error playing audio:", error)
    }
  }

  return { playShutterSound }
}
