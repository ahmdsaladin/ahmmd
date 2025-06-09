'use server';

import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface PostMetadata {
  title: string;
  summary: string;
  publishedAt: string;
  tag?: string;
  image?: string;
  images?: string[];
  team?: Array<{
    name: string;
    role: string;
    avatar: string;
    linkedIn: string;
  }>;
}

interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

export async function getPosts(pathSegments: string[]): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), ...pathSegments)
  const files = await fs.readdir(postsDirectory)

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(postsDirectory, file)
        const fileContents = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        const slug = file.replace(/\.mdx$/, '')

        return {
          slug,
          metadata: data as PostMetadata,
          content,
        }
      })
  )

  return posts.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt).getTime()
    const dateB = new Date(b.metadata.publishedAt).getTime()
    return dateB - dateA
  })
} 