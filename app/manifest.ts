import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ITM Africa - HR Solutions in Africa',
    short_name: 'ITM Africa',
    description:
      'ITM HR is your strategic partner in HR solutions in Africa. Managing over 15,000 employees across 18 countries.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0066cc',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/logo/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'hr'],
    lang: 'en',
    dir: 'ltr',
  };
}
