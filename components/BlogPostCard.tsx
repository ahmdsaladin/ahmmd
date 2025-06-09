"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface BlogPostCardProps {
  post: {
    slug: string;
    metadata: {
      title: string;
      summary: string;
      publishedAt: string;
      tag?: string;
    };
    content: string;
  }
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const metadata = post.metadata
  const coverImage = `/posts/${post.slug} Thumbnail.jpg`
  return (
    <motion.div
      className="bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={coverImage}
          alt={metadata.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {metadata.tag && (
            <span className="text-sm text-primary/80">{metadata.tag}</span>
          )}
          <span className="text-sm text-muted-foreground">
            {new Date(metadata.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {metadata.title}
        </h2>
        <p className="text-muted-foreground line-clamp-3">
          {metadata.summary}
        </p>
      </div>
    </motion.div>
  )
} 