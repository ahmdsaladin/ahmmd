"use client"

import type React from "react"
import { useState, useCallback, useEffect, useRef } from "react"
import Image from "next/image"
import PhotoAlbum from "react-photo-album"
import "react-photo-album/masonry.css"
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react"
import type { Photo } from "@/lib/types"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PhotoGalleryProps {
  photos: Photo[]
  className?: string
}

// Define types for the NextJsImageComponent props
interface CustomPhotoProps {
  src: string
  width: number
  height: number
  blurDataUrl?: string
  [key: string]: any
}

interface ImageProps {
  alt?: string
  title?: string
  sizes?: string
  className?: string
  onClick?: (event: React.MouseEvent) => void
}

interface RenderPhotoProps {
  photo: CustomPhotoProps
  imageProps: ImageProps
  wrapperStyle: React.CSSProperties
}

// Custom renderer for Next.js Image
const NextJsImageComponent = ({ 
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) => {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo.src}
        placeholder={photo.blurDataUrl ? "blur" : undefined}
        blurDataURL={photo.blurDataUrl}
        alt={alt || "Photo"}
        title={title}
        sizes={sizes}
        className={className}
        onClick={onClick}
        style={{ objectFit: "cover" }}
        quality={85}
      />
    </div>
  );
};

export function PhotoGallery({ photos, className }: PhotoGalleryProps) {
  const [error, setError] = useState<string | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const lightboxRef = useRef<HTMLDivElement>(null)
  const thumbnailsRef = useRef<HTMLDivElement>(null)

  // Filter out invalid photos
  const validPhotos = photos.filter(photo => {
    if (!photo.src || !photo.width || !photo.height) {
      console.warn('Invalid photo:', photo)
      return false
    }
    return true
  })

  // Handle image error
  const handlePhotoError = useCallback(() => {
    console.error('Error loading photo')
    setError('Failed to load some images. Please try refreshing the page.')
  }, [])

  if (error) {
    return (
      <div className="flex items-center justify-center p-8 text-red-500">
        <p>{error}</p>
      </div>
    )
  }

  if (validPhotos.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 text-gray-500">
        <p>No photos available</p>
      </div>
    )
  }

  // Format photos for the PhotoAlbum component
  const photoAlbumPhotos = validPhotos.map((photo, index) => {
    const metadata = {
      camera: "No capture data recorded",
      focalLength: "",
      aperture: "",
      shutterSpeed: "",
      iso: "",
      lens: "",
      takenAt: ""
    }

    return {
      src: photo.src,
      width: photo.width,
      height: photo.height,
      alt: photo.alt || "Photo",
      photo: { ...photo, metadata },
      key: photo.id || `photo-${index}-${photo.src}-${photo.width}-${photo.height}`,
      onError: handlePhotoError,
    }
  })

  // Lightbox handlers
  const openLightbox = useCallback((index: number) => {
    setCurrentPhotoIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? validPhotos.length - 1 : prevIndex - 1))
  }, [validPhotos.length])

  const goToNext = useCallback(() => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === validPhotos.length - 1 ? 0 : prevIndex + 1))
  }, [validPhotos.length])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrevious()
      if (e.key === "ArrowRight") goToNext()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen, closeLightbox, goToPrevious, goToNext])

  // Scroll thumbnails to center the current photo
  useEffect(() => {
    if (lightboxOpen && thumbnailsRef.current) {
      const thumbnailWidth = 80
      const scrollPosition =
        currentPhotoIndex * thumbnailWidth - thumbnailsRef.current.clientWidth / 2 + thumbnailWidth / 2

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      })
    }
  }, [currentPhotoIndex, lightboxOpen])

  // Get the current photo safely
  const currentPhoto = validPhotos[currentPhotoIndex] || validPhotos[0]

  // Handle click on the lightbox background for navigation
  const handleLightboxClick = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return

    const rect = lightboxRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const width = rect.width

    if (x < width / 3) {
      goToPrevious()
    } else if (x > (width * 2) / 3) {
      goToNext()
    }
  }

  return (
    <>
      <style jsx global>{`
        .react-photo-album--photo-container {
          position: relative !important;
          overflow: hidden;
          border-radius: 20px !important;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .react-photo-album--image {
          border-radius: 20px !important;
        }

        .react-photo-album--photo-container:hover {
          transform: scale(1.02);
          border-radius: 20px !important;
        }

        .react-photo-album--photo {
          display: block !important;
          box-sizing: border-box !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          border-radius: 20px !important;
        }

        .photo-metadata {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: 10;
        }

        .react-photo-album--photo-container:hover .photo-metadata {
          opacity: 1;
        }

        .react-photo-album--photo-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          border-radius: 20px;
          z-index: 5;
        }

        .react-photo-album--photo-container:hover::after {
          opacity: 1;
        }

        /* Ensure masonry layout maintains aspect ratio */
        .react-photo-album--photo-container > div {
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
        }

        /* Force image to fill container */
        .react-photo-album--photo-container img {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          border-radius: 20px !important;
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .react-photo-album {
            columns: 1 !important;
          }
        }

        /* Additional styles for Next.js Image wrapper */
        .next-js-img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px !important;
          overflow: hidden;
        }
      `}</style>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className={cn('relative', className)}>
          <PhotoAlbum
            photos={photoAlbumPhotos}
            layout="masonry"
            columns={(containerWidth) => {
              if (containerWidth < 768) return 1;
              return 3;
            }}
            padding={8}
            spacing={8}
            onClick={({ index }) => openLightbox(index)}
            renderPhoto={NextJsImageComponent as any}
            // Using "any" type to avoid TypeScript errors with third-party library
            {...{
              componentsProps: {
                imageProps: {
                  className: "object-cover rounded-[20px]",
                  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                }
              }
            } as any}
          />
          {/* Metadata overlays */}
          {photoAlbumPhotos.map((photo, index) => (
            <div
              key={`metadata-${index}`}
              className="photo-metadata"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm mb-2">{photo.alt}</p>
                {photo.photo.metadata && (
                  <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 text-xs text-white/90">
                    <div className="flex gap-1 mb-1">
                      <Camera size={12} className="text-white/70" />
                      <span>{photo.photo.metadata.camera || "Unknown camera"}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {photo.photo.metadata.lens && (
                        <div>
                          <span className="text-white/70">Lens:</span> {photo.photo.metadata.lens}
                        </div>
                      )}
                      {photo.photo.metadata.aperture && (
                        <div>
                          <span className="text-white/70">Aperture:</span> {photo.photo.metadata.aperture}
                        </div>
                      )}
                      {photo.photo.metadata.shutterSpeed && (
                        <div>
                          <span className="text-white/70">Shutter:</span> {photo.photo.metadata.shutterSpeed}
                        </div>
                      )}
                      {photo.photo.metadata.iso && (
                        <div>
                          <span className="text-white/70">ISO:</span> {photo.photo.metadata.iso}
                        </div>
                      )}
                      {photo.photo.metadata.focalLength && (
                        <div>
                          <span className="text-white/70">Focal Length:</span> {photo.photo.metadata.focalLength}
                        </div>
                      )}
                      {photo.photo.metadata.takenAt && (
                        <div>
                          <span className="text-white/70">Date:</span> {photo.photo.metadata.takenAt}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-30"
            onClick={closeLightbox}
          >
            <X size={24} />
            <span className="sr-only">Close</span>
          </button>

          {/* Main image container */}
          <div
            ref={lightboxRef}
            className="relative w-full h-[calc(100%-120px)] flex items-center justify-center p-4 cursor-pointer rounded-3xl"
            onClick={handleLightboxClick}
          >
            <div className="relative max-h-full max-w-[90vw] z-10 rounded-3xl">
              <Image
                src={currentPhoto.src || "/placeholder.svg"}
                alt={currentPhoto.alt || "Photo"}
                width={currentPhoto.width}
                height={currentPhoto.height}
                className="max-h-[calc(100vh-180px)] max-w-[90vw] object-contain"
                quality={90}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-white/70">
                    {currentPhotoIndex + 1} of {validPhotos.length}
                  </p>
                  {currentPhoto.metadata && (
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <Camera size={14} />
                      {/* <span>{currentPhoto.metadata.camera}</span> */}
                      <span>X100VI</span>
                      {currentPhoto.metadata.focalLength && <span>| {currentPhoto.metadata.focalLength}</span>}
                      <span>|</span>
                      {currentPhoto.metadata.aperture && <span>| {currentPhoto.metadata.aperture}</span>}
                      <span>|</span>
                      {currentPhoto.metadata.shutterSpeed && <span>| {currentPhoto.metadata.shutterSpeed}</span>}
                      {currentPhoto.metadata.iso && <span>| ISO {currentPhoto.metadata.iso}</span>}
                      {(!currentPhoto.metadata.camera && !currentPhoto.metadata.focalLength && !currentPhoto.metadata.aperture && !currentPhoto.metadata.shutterSpeed && !currentPhoto.metadata.iso) && (
                        <span>No capture data recorded</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="relative w-full h-[100px] bg-black/50 flex items-center justify-center">
            {/* Left scroll button */}
            <button
              className="absolute left-2 z-10 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Thumbnails container */}
            <div
              ref={thumbnailsRef}
              className="flex overflow-x-auto hide-scrollbar py-3 px-12 max-w-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {validPhotos.map((photo, index) => (
                <div
                  key={`thumb-${index}`}
                  className={`relative flex-shrink-0 mx-1 cursor-pointer transition-all duration-200 ${
                    index === currentPhotoIndex
                      ? "border-2 border-white scale-110 z-10"
                      : "border border-transparent opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => setCurrentPhotoIndex(index)}
                >
                  <div className="w-[70px] h-[70px] relative">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover rounded"
                      sizes="70px"
                      quality={50}
                    />
                  </div>
                  {index === currentPhotoIndex && (
                    <div className="absolute inset-0 bg-white/20 rounded pointer-events-none" />
                  )}
                </div>
              ))}
            </div>

            {/* Right scroll button */}
            <button
              className="absolute right-2 z-10 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
