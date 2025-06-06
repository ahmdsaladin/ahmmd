"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { getAllTags } from "@/lib/collections"
import { motion } from "framer-motion"

export default function TagFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentTag = searchParams.get("tag") || ""
  const tags = getAllTags()

  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (currentTag === tag) {
      params.delete("tag")
    } else {
      params.set("tag", tag)
    }

    router.push(`/showcase?${params.toString()}`)
  }

  return (
    <motion.div
      className="flex flex-wrap gap-2 justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {tags.map((tag, index) => (
        <motion.button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`px-3 py-1 rounded-full transition-colors text-md ${
            currentTag === tag
              ? "bg-primary text-primary-foreground font-semibold hover:font-bold"
              : " bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tag}
        </motion.button>
      ))}
    </motion.div>
  )
}
