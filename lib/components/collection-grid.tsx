"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getAllCollections } from "@/lib/collections"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { useShutterSound } from "./sound-effects"

export default function CollectionGrid() {
  const collections = getAllCollections()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("q") || ""
  const tagFilter = searchParams.get("tag") || ""
  const { playShutterSound } = useShutterSound()

  const [filteredCollections, setFilteredCollections] = useState(collections)

  useEffect(() => {
    let filtered = collections

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (collection) =>
          collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          collection.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          collection.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Apply tag filter
    if (tagFilter) {
      filtered = filtered.filter((collection) =>
        collection.tags.some((tag) => tag.toLowerCase() === tagFilter.toLowerCase()),
      )
    }

    setFilteredCollections(filtered)
  }, [collections, searchQuery, tagFilter])

  if (filteredCollections.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No collections found</h3>
        <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filters</p>
      </div>
    )
  }

  // Group collections into sets of 7 (1 featured + 6 regular)
  const groupedCollections = []
  for (let i = 0; i < filteredCollections.length; i += 7) {
    const group = filteredCollections.slice(i, i + 7)
    if (group.length > 0) {
      groupedCollections.push(group)
    }
  }

  return (
    <div className="space-y-16">
      {groupedCollections.map((group, groupIndex) => (
        <div key={`group-${groupIndex}`} className="space-y-8">
          {/* Featured Collection */}
          {group.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="w-full"
            >
              <Link href={`/collections/${group[0].slug}`} className="group block" onClick={playShutterSound}>
                <div className="relative overflow-hidden bg-black rounded-lg shadow-lg">
                  {/* Image container with overlay */}
                  <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
                    <Image
                      src={group[0].coverImage || "/placeholder.svg?height=1200&width=2000"}
                      alt={group[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>

                  {/* Content positioned at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs bg-white/30 text-white backdrop-blur-sm">
                        Featured Collection
                      </span>
                      {group[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs bg-white/20 text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl md:text-4xl text-white mb-3 group-hover:text-white/90 transition-colors">
                      {group[0].title}
                    </h3>
                    <p className="text-white/80 mb-6 max-w-2xl text-sm md:text-base group-hover:text-white/90 transition-colors">
                      {group[0].description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                      <span>Explore Collection</span>
                      <ArrowRight
                        size={16}
                        className="transform translate-x-0 transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Regular Collections Grid */}
          {group.length > 1 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.slice(1).map((collection, index) => (
                <motion.div
                  key={collection.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
          )}
        </div>
      ))}
    </div>
  )
}
