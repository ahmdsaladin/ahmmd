import { Suspense } from "react"
import Image from "next/image"
import Loading from "@/components/loading"
import { getPosts } from "@/app/utils/utils"
import Link from "next/link"
import BlogHero from "@/components/BlogHero"
import BlogPostCard from "@/components/BlogPostCard"

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
      <BlogHero />

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto pb-20">
        <Suspense fallback={<Loading />}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                <BlogPostCard post={post} />
              </Link>
            ))}
          </div>
        </Suspense>
      </section>
    </div>
  )
}
