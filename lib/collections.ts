import type { Collection, Photo } from "./types"

// Collection format mapping
export const collectionFormats = {
  'posters': 'jpg',
  'products': 'jpg',
  'logos': 'png',
}

// Collection folder name mapping (for case sensitivity)
const collectionFolders: Record<string, string> = {
  'posters': 'POTERS',
  'products': 'products',
  'logos': 'logos',
} as const

// Collection image counts and formats
const collectionImages: Record<string, { count: number; formats: string[] }> = {
  'posters': { 
    count: 16,
    formats: ['jpg']
  },
  'products': { 
    count: 21,
    formats: ['jpg']
  },
  'logos': { 
    count: 20,
    formats: ['png']
  },
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
    const format = collectionSlug === 'posters' && index >= 10 && index <= 15 ? 'jpg' : collectionFormats[collectionSlug]
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
  const collectionSlug = folderName.toLowerCase().replace(' ', '-')
  const format = collectionFormats[collectionSlug] || 'jpg'
  return `/${folderName}/cover.${format}`
}

// Collections data
export const collections = {
  'posters': {
    title: "Posters Collection",
    description: "A collection of stunning posters",
    longDescription: "A curated collection of artistic and professional posters showcasing various designs and styles.",
    coverImage: getCoverImagePath("POTERS"),
    slug: "posters",
    photos: getCollectionImages("posters"),
  },
  'products': {
    title: "Products Gallery",
    description: "Showcasing our product designs",
    longDescription: "A showcase of our product designs, highlighting innovation and creativity in product development.",
    coverImage: getCoverImagePath("products"),
    slug: "products",
    photos: getCollectionImages("products"),
  },
  'logos': {
    title: "Logo Designs",
    description: "Professional logo designs",
    longDescription: "A collection of professional logo designs, demonstrating brand identity and creative solutions.",
    coverImage: getCoverImagePath("logos"),
    slug: "logos",
    photos: getCollectionImages("logos"),
  },
}

// Export functions
export const getAllCollections = (): Collection[] => Object.values(collections)
export const getFeaturedCollections = (): Collection[] => Object.values(collections).filter(collection => collection.featured)
export const getCollection = (slug: string): Collection | undefined => collections[slug]
export const getAllTags = (): string[] => Array.from(new Set(Object.values(collections).flatMap(collection => collection.tags)))
