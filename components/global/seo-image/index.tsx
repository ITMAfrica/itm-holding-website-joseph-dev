import Image, { ImageProps } from 'next/image';

interface SEOImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  quality?: number;
}

/**
 * SEO-optimized Image component
 * - Requires alt text for accessibility and SEO
 * - Uses lazy loading by default
 * - Optimizes quality for web
 * - Provides better structure for search engines
 */
export default function SEOImage({
  alt,
  priority = false,
  loading = 'lazy',
  quality = 85,
  ...props
}: SEOImageProps) {
  if (!alt) {
    console.warn('SEOImage: Alt text is required for SEO and accessibility');
  }

  return (
    <Image
      alt={alt}
      priority={priority}
      loading={priority ? 'eager' : loading}
      quality={quality}
      {...props}
    />
  );
}
