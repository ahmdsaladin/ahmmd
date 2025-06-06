"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getFeaturedCollections } from "@/lib/collections"
import { motion } from "framer-motion"
import { useShutterSound } from "./sound-effects"

export default function FeaturedCollections() {
  const collections = getFeaturedCollections()
  const { playShutterSound } = useShutterSound()

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {collections.map((collection, index) => (
        <motion.div
          key={collection.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Link href={`/collections/${collection.slug}`} className="group block h-full" onClick={playShutterSound}>
            <div className="relative h-full overflow-hidden bg-black rounded-lg shadow-md">
              {/* Image container with overlay */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={collection.coverImage || "/placeholder.svg?height=600&width=800"}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content positioned at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl text-white mb-2 group-hover:text-white/90 transition-colors">
                  {collection.title}
                </h3>
                <p className="text-white/80 mb-4 line-clamp-2 text-sm group-hover:text-white/90 transition-colors">
                  {collection.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {collection.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-xs bg-white/20 text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-white opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
