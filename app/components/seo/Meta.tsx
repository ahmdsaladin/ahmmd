import type { Metadata } from 'next';

interface MetaProps {
  title: string;
  description: string;
  baseURL: string;
  path: string;
  type?: 'website' | 'article' | 'book' | 'profile';
  image?: string;
  publishedTime?: string;
  author?: {
    name: string;
    url: string;
  };
}

export function generateMetadata({
  title,
  description,
  baseURL,
  path,
  type = 'website',
  image,
  publishedTime,
  author,
}: MetaProps): Metadata {
  const url = `${baseURL}${path}`;
  const imageUrl = image || `${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    ...(publishedTime && {
      publishedTime,
    }),
    ...(author && {
      authors: [
        {
          name: author.name,
          url: author.url,
        },
      ],
    }),
  };
} 