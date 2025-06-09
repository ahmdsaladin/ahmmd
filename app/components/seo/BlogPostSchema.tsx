interface BlogPostSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
  authorName: string;
  authorUrl: string;
  authorImage: string;
}

export function BlogPostSchema({
  title,
  description,
  datePublished,
  dateModified,
  image,
  url,
  authorName,
  authorUrl,
  authorImage,
}: BlogPostSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
      image: authorImage,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Your Organization Name',
      logo: {
        '@type': 'ImageObject',
        url: `${url}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 