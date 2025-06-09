import { Suspense } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Loading from "@/components/loading"
import { getPosts } from "@/app/utils/utils"
import Link from "next/link"

interface Post {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    publishedAt: string;
    tag?: string;
  };
  content: string;
}

export default async function BlogPage() {
  const posts: Post[] = await getPosts(["app", "blog", "posts"])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto pb-20">
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const metadata = post.metadata
              const coverImage = `/posts/${post.slug} Thumbnail.jpg`
              return (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
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
                </Link>
              )
            })}
          </div>
        </Suspense>
      </section>
    </div>
  )
}
