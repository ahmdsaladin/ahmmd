"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

// Helper to fetch posts from your API or utility
async function fetchPosts(): Promise<Post[]> {
  const { getPosts } = await import("@/app/utils/utils");
  return getPosts(["app", "blog", "posts"]);
}

function getImagePath(slug: string) {
  const baseSlug = slug.replace(/-2025$/, "");
  const titleCase = baseSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return `/posts/${titleCase} Thumbnail.jpg`;
}

export default function RecentBlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data.slice(0, 2)));
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-16">
      <div className="md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-4xl font-bold leading-tight">
          Latest from<br />the blog
        </h2>
      </div>
      <div className="md:w-2/3 flex flex-col md:flex-row gap-8 justify-center">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="bg-transparent rounded-lg flex-1 group"
          >
            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
              <Image
                src={getImagePath(post.slug)}
                alt={post.metadata.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/posts/Designing for Ghosts Thumbnail.jpg";
                }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {post.metadata.title}
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              {new Date(post.metadata.publishedAt).toLocaleDateString()}
            </p>
            {post.metadata.tag && (
              <span className="inline-block px-3 py-1 rounded-full text-xs border border-gray-600 text-white">
                {post.metadata.tag}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
} 