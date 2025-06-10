// Collection format mapping
const collectionFormats: Record<string, string> = {
  'posters': 'png',
  'products': 'png',
  'logos': 'png',
  'chronoslate': 'png',
  'synthform': 'png'
} as const

// Collection folder name mapping (for case sensitivity)
const collectionFolders: Record<string, string> = {
  'posters': 'POSTERS',
  'products': 'products',
  'logos': 'logos',
  'chronoslate': 'ChronoSlate',
  'synthform': 'Synthform'
} as const

// Collection image counts and formats
const collectionImages: Record<string, { count: number; formats: string[] }> = {
  'posters': { count: 0, formats: ['png'] },
  'products': { count: 0, formats: ['png'] },
  'logos': { count: 0, formats: ['png'] },
  'chronoslate': { count: 0, formats: ['png'] },
  'synthform': { count: 0, formats: ['png'] }
} as const

// Common metadata for photos
const defaultMetadata = {
  camera: "Sony Alpha A7 IV",
  lens: "24-70mm f/2.8",
  aperture: "f/8.0",
  shutterSpeed: "1/250",
  iso: "100",
  focalLength: "35mm",
  takenAt: new Date().toISOString().split("T")[0],
} as const

// Aspect ratios for different image types
const aspectRatios = [
  { width: 1800, height: 1200 }, // 3:2
  { width: 1800, height: 1350 }, // 4:3
  { width: 1800, height: 1080 }, // 16:9
  { width: 1200, height: 1800 }, // 2:3 (portrait)
] as const

// Function to get images for a collection
function getCollectionImages(collectionSlug: string): Photo[] {
  // Get the proper folder name from our mapping instead of generating it
  const folderName = collectionFolders[collectionSlug]
  if (!folderName) return []

  const collectionInfo = collectionImages[collectionSlug]
  if (!collectionInfo) return []
  
  return Array.from({ length: collectionInfo.count }, (_, i) => {
    const index = i + 1
    const format = collectionSlug === 'bali' && index >= 10 && index <= 15 ? 'jpg' : collectionFormats[collectionSlug]
    const imagePath = `/${folderName}/${collectionSlug}-${index}.${format}`
    const dimensions = aspectRatios[index % aspectRatios.length]

    return {
      id: `${collectionSlug}-${index}`,
      src: imagePath,
      width: dimensions.width,
      height: dimensions.height,
      alt: `${collectionSlug} image ${index}`,
      metadata: defaultMetadata,
    }
  })
}

// Function to get cover image path
function getCoverImagePath(folderName: string): string {
  const coverMap: { [key: string]: string } = {
    'POSTERS': '/Covers/cover.png',
    'products': '/Covers/coverc.png',
    'logos': '/Covers/logos.png'
  };
  return coverMap[folderName] || '/Covers/cover.png';
}

// Collections data
const collections: Collection[] = [
  {
    id: "1",
    slug: "posters",
    title: "Posters",
    description: "A collection of posters.",
    fullDescription: "A curated selection of design posters.",
    coverImage: getCoverImagePath("POSTERS"),
    tags: ["Design", "Art"],
    featured: true,
    photos: getCollectionImages("posters"),
  },
  {
    id: "2",
    slug: "products",
    title: "Products",
    description: "A collection of products.",
    fullDescription: "A curated selection of products.",
    coverImage: getCoverImagePath("products"),
    tags: ["Product", "Design"],
    featured: true,
    photos: getCollectionImages("products"),
  },
  {
    id: "3",
    slug: "logos",
    title: "Logos",
    description: "A collection of logos.",
    fullDescription: "A curated selection of logo designs.",
    coverImage: getCoverImagePath("logos"),
    tags: ["Logo", "Branding"],
    featured: true,
    photos: getCollectionImages("logos"),
  }
]

// Export functions
export const getAllCollections = (): Collection[] => collections
export const getFeaturedCollections = (): Collection[] => collections.filter(collection => collection.featured)
export const getCollection = (slug: string): Collection | undefined => collections.find(collection => collection.slug === slug)
export const getAllTags = (): string[] => Array.from(new Set(collections.flatMap(collection => collection.tags)))
