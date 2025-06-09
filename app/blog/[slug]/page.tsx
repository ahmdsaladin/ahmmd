export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/app/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { AvatarGroup, Button, Column, Heading, HeadingNav, Icon, Row, Text } from "@/app/components/ui";
import { about, blog, baseURL } from "@/app/resources";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/app/components/ScrollToHash";
import type { Metadata } from 'next';
import type { ResolvingMetadata } from 'next';
import { generateMetadata as generateMeta } from "@/app/components/seo/Meta";
import { BlogPostSchema } from "@/app/components/seo/BlogPostSchema";
import BlogClientPage from "@/app/components/BlogClientPage";

function cleanString(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string') return value.trim();
  return String(value).trim();
}

function cleanUrl(url: string): string {
  const cleaned = cleanString(url);
  return cleaned ? cleaned.replace(/\s+/g, '-') : '';
}

interface PostMetadata {
  title: string;
  summary: string;
  publishedAt: string;
  image?: string;
  images?: string[];
  tag?: string;
  team?: Array<{
    name: string;
    role: string;
    avatar: string;
    linkedIn: string;
  }>;
}

function cleanMetadata(metadata: Partial<PostMetadata>): PostMetadata {
  return {
    title: cleanString(metadata.title || ''),
    summary: cleanString(metadata.summary || ''),
    publishedAt: cleanString(metadata.publishedAt || ''),
    image: cleanString(metadata.image || ''),
    tag: cleanString(metadata.tag || ''),
    images: (metadata.images || []).map(img => cleanString(img)),
    team: (metadata.team || []).map(member => ({
      name: cleanString(member.name || ''),
      role: cleanString(member.role || ''),
      avatar: cleanString(member.avatar || ''),
      linkedIn: cleanString(member.linkedIn || ''),
    })),
  };
}

export async function generateStaticParams() {
  const posts = await getPosts(["app", "blog", "posts"]);
  return posts.map((post) => ({
    slug: cleanUrl(post.slug),
  }));
}

type PageParams = { slug: string };

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  try {
    const slugPath = cleanString(params.slug);
    const posts = await getPosts(["app", "blog", "posts"]);
    const post = posts.find((post) => post.slug === slugPath);

    if (!post) return {};

    const metadata = cleanMetadata(post.metadata);
    
    return generateMeta({
      title: metadata.title,
      description: metadata.summary,
      baseURL: baseURL || '',
      path: `${blog.path || ''}/${post.slug || ''}`,
      type: "article",
      image: metadata.image,
      publishedTime: metadata.publishedAt,
      author: metadata.team?.[0] ? {
        name: metadata.team[0].name,
        url: metadata.team[0].linkedIn,
      } : undefined,
    });
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {};
  }
}

export default async function Blog({ params }: { params: PageParams }) {
  try {
    const slugPath = cleanString(params.slug);
    const posts = await getPosts(["app", "blog", "posts"]);
    const post = posts.find((post) => post.slug === slugPath);

    if (!post) {
      notFound();
    }

    const metadata = cleanMetadata(post.metadata);
    const author = metadata.team?.[0] || {
      name: '',
      role: '',
      avatar: '',
      linkedIn: '',
    };

    const avatars = metadata.team?.map((person) => ({
      src: cleanUrl(person.avatar),
    })) || [];

    const schemaData = {
      title: metadata.title,
      description: metadata.summary,
      datePublished: metadata.publishedAt,
      dateModified: metadata.publishedAt,
      image: metadata.image 
        ? `${baseURL || ''}${metadata.image}`
        : `${baseURL || ''}/og?title=${encodeURIComponent(metadata.title)}`,
      url: `${baseURL || ''}${blog.path || ''}/${post.slug || ''}`,
      authorName: author.name,
      authorUrl: author.linkedIn || `${baseURL || ''}${about.path || ''}`,
      authorImage: `${baseURL || ''}${author.avatar}`,
    };

    return <BlogClientPage 
      metadata={metadata}
      avatars={avatars}
      schemaData={schemaData}
      postContent={post.content}
    />;
  } catch (error) {
    console.error('Error rendering blog post:', error);
    notFound();
  }
}
