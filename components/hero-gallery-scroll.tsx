'use client'

import { BentoCell, BentoGrid, ContainerScale, ContainerScroll } from "@/components/hero-gallery-scroll-animation"
import { Button } from "@/components/ui/button"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

const IMAGES = [
  {
    src: "/Covers/coverc.png",
    alt: "Products Collection Cover"
  },
  {
    src: "/Covers/cove2r.png",
    alt: "Posters Collection Cover"
  },
  {
    src: "/Covers/logos.png",
    alt: "Logos Collection Cover"
  },
  {
    src: "/Covers/img1.jpg",
    alt: "Featured Work"
  },
  {
    src: "/Covers/cover.png",
    alt: "Main Cover"
  }
]

export function HeroGalleryScroll() {
  return (
    <ContainerScroll className="h-[350vh]">
      <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
        {IMAGES.map((image, index) => (
          <BentoCell
            key={index}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                priority={index < 2}
              />
            </div>
          </BentoCell>
        ))}
      </BentoGrid>

      <ContainerScale className="relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ahmd Saladin
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I craft meaningful design experiences across posters, products, and digital interfaces.
        </motion.p>
        <div className="flex items-center flex-col md:flex-row justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <AnimatedButton href="/showcase" variant="outline" icon={<ArrowRight size={16} />}>
              Showcase
            </AnimatedButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <AnimatedButton href="/about" variant="outline" icon={<ArrowRight size={16} />}>
              About
            </AnimatedButton>
          </motion.div>
        </div>
      </ContainerScale>
    </ContainerScroll>
  )
} 