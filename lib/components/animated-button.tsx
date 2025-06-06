"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { useShutterSound } from "./sound-effects"
import { cva } from "class-variance-authority"

interface AnimatedButtonProps {
  href: string
  children: ReactNode
  icon?: ReactNode
  variant?: "primary" | "secondary" | "outline"
  className?: string
  onClick?: () => void
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 border-none",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-none",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground border-none",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-none",
        ghost: "hover:bg-accent hover:text-accent-foreground border-none",
        link: "text-primary underline-offset-4 hover:underline border-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export default function AnimatedButton({
  href,
  children,
  icon,
  variant = "primary",
  className = "",
  onClick,
}: AnimatedButtonProps) {
  const baseStyles = "btn inline-flex items-center gap-2 rounded-full transition-colors"
  const { playShutterSound } = useShutterSound()

  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-secondary px-6 py-3",
    secondary:
      "bg-white text-black hover:bg-white/90 dark:bg-gray-800 dark:text-white dark:hover:bg-gray/90 px-6 py-3",
    outline:
      "border border-black bg-transparent text-primary hover:bg-primary-secondary hover:text-primary-secondary px-6 py-3",
  }

  const handleClick = () => {
    try {
      // Play sound manually for buttons
      playShutterSound()
    } catch (error) {
      console.warn("Error playing sound on button click:", error)
    }

    // Call the original onClick if provided
    if (onClick) onClick()
  }

  return (
    <Link href={href} className={`group ${baseStyles} ${variantStyles[variant]} ${className}`} onClick={handleClick}>
      <span>{children}</span>
      {icon && <span className="btn-icon overflow-hidden">{icon}</span>}
    </Link>
  )
}
