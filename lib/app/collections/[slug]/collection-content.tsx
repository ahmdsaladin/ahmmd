"use client"

import Image from "next/image"
import { PhotoGallery } from "@/components/photo-gallery"
import TagList from "@/components/tag-list"
import { motion } from "framer-motion"
import type { Collection } from "@/lib/types"
import { useEffect } from "react"
import FeaturedCollections from "@/components/featured-collections"
import AnimatedButton from "@/components/animated-button"
import { ArrowRight } from "lucide-react"

interface Props {
  collection: Collection
}

export function CollectionContent({ collection }: Props) {
  useEffect(() => {
    console.log("Collection:", collection)
  }, [collection])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src={collection.coverImage || "/Morocco/morocco-8.webp?height=800&width=1920"}
          alt={collection.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl text-white mb-4">{collection.title}</h1>
          <p className="text-white/90 text-lg max-w-2xl mb-6">{collection.description}</p>
          <TagList tags={collection.tags} variant="light" />
        </motion.div>
      </section>

      {/* Collection Info */}
      <motion.section
        className="py-12 px-4 md:px-8 max-w-5xl mx-auto mb-10 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="prose max-w-none dark:prose-invert">
          <p className="text-lg text-primary leading-relaxed">
            {collection.fullDescription || collection.description}
          </p>
        </div>
      </motion.section>

      {/* Photo Gallery */}
      <section className="py-8 px-4 md:px-8 max-w-[90%] mx-auto mb-20">
        <PhotoGallery photos={collection.photos} />
      </section>

      {/* Featured Collections */}
      <section className="mt-20 mb-20 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4">Featured Collections</h2>
            <p className="text-primary max-w-2xl mx-auto">
              Explore some of my most popular photography collections from around the world
            </p>
          </motion.div>
          <FeaturedCollections />
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AnimatedButton href="/showcase" variant="primary" icon={<ArrowRight size={18} />}>
              View All Collections
            </AnimatedButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 