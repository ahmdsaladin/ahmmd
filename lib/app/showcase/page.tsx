"use client"

import { Suspense } from "react"
import Image from "next/image"
import CollectionGrid from "@/components/collection-grid"
import TagFilters from "@/components/tag-filters"
import Loading from "@/components/loading"
import { motion } from "framer-motion"

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Spacer for header
      <div className="header-height"></div> */}

      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/Morocco/morocco-11.webp?height=800&width=1920"
          alt="Photography collections showcase"
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
          <h1 className="text-4xl md:text-5xl text-white mb-4">Photography Collections</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Explore my diverse portfolio of photography from around the world
          </p>
        </motion.div>
      </section>

      {/* Tags - Centered */}
      <motion.section
        className="py-8 px-4 md:px-8 max-w-7xl mx-auto mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-center mb-8">
          <TagFilters />
        </div>
      </motion.section>

      {/* Collections Grid */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto pb-20">
        <Suspense fallback={<Loading />}>
          <CollectionGrid />
        </Suspense>
      </section>
    </div>
  )
}
