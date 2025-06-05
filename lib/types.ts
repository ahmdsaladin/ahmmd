/**
 * Represents a photo in the gallery
 */
export interface Photo {
  /** Unique identifier for the photo */
  id: string
  /** Source path of the photo */
  src: string
  /** Width of the photo in pixels */
  width: number
  /** Height of the photo in pixels */
  height: number
  /** Alt text for accessibility */
  alt: string
  /** Technical metadata about the photo */
  metadata: PhotoMetadata
}

/**
 * Technical metadata for a photo
 */
export interface PhotoMetadata {
  /** Camera model used */
  camera: string
  /** Lens used */
  lens: string
  /** Aperture setting */
  aperture: string
  /** Shutter speed */
  shutterSpeed: string
  /** ISO setting */
  iso: string
  /** Focal length */
  focalLength: string
  /** Date the photo was taken */
  takenAt: string
}

/**
 * Represents a photo collection
 */
export interface Collection {
  /** Unique identifier for the collection */
  id: string
  /** URL-friendly slug for the collection */
  slug: string
  /** Title of the collection */
  title: string
  /** Short description for previews */
  description: string
  /** Full description for the collection page */
  fullDescription: string
  /** Path to the cover image */
  coverImage: string
  /** Array of tags for categorization */
  tags: string[]
  /** Whether the collection is featured on the homepage */
  featured: boolean
  /** Array of photos in the collection */
  photos: Photo[]
}

/**
 * Contact form data
 */
export interface ContactFormData {
  /** Name of the person contacting */
  name: string
  /** Email address for response */
  email: string
  /** Subject of the message */
  subject: string
  /** Message content */
  message: string
}

/**
 * Response from the contact form submission
 */
export interface ContactFormResponse {
  /** Whether the submission was successful */
  success: boolean
  /** Message to display to the user */
  message: string
}
