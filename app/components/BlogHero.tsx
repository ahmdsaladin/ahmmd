"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function BlogHero() {
  return (
    <section className="relative h-[50vh] w-full">
      <Image
        src="/posts/Designing for Ghosts Thumbnail.jpg"
        alt="Blog posts showcase"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl text-white mb-4">Blog</h1>
        <p className="text-white/90 text-lg max-w-2xl">
          Insights, stories, and resources from the world of design and development.
        </p>
      </motion.div>
    </section>
  )
} 