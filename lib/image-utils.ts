/**
 * Utility functions for handling image URLs
 * Supports both local images and Vercel Blob Storage
 */

// Vercel Blob Storage base URL for algooweb project
export const VERCEL_BLOB_BASE_URL = process.env.NEXT_PUBLIC_BLOB_URL || 'https://algooweb.public.blob.vercel-storage.com'

/**
 * Get the full image URL
 * Checks if the image path is a full URL or a local path
 */
export function getImageUrl(imagePath: string): string {
  // If it's already a full URL (starts with http:// or https://), return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }
  
  // If it starts with blob:// prefix, use Vercel Blob Storage
  if (imagePath.startsWith('blob://')) {
    const filename = imagePath.replace('blob://', '')
    return `${VERCEL_BLOB_BASE_URL}/${filename}`
  }
  
  // Otherwise, use local public folder
  return `/products/${imagePath}`
}

/**
 * Check if image is from Vercel Blob Storage
 */
export function isVercelBlobImage(imagePath: string): boolean {
  return imagePath.startsWith('blob://') || 
         imagePath.includes('blob.vercel-storage.com')
}

/**
 * Convert local image path to Vercel Blob format
 */
export function toVercelBlobPath(filename: string): string {
  return `blob://${filename}`
}
