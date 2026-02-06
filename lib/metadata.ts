import { Metadata } from 'next';

interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  locale: string;
  country?: string;
  path?: string;
  images?: string[];
  type?: 'website' | 'article';
}

const BASE_URL = 'https://itmafrica.com';
const DEFAULT_IMAGE = '/assets/logo/logo.png';

export function generateMetadata(config: MetadataConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    locale,
    country = '',
    path = '',
    images = [DEFAULT_IMAGE],
    type = 'website',
  } = config;

  const url = country
    ? `${BASE_URL}/${locale}/${country}${path ? `/${path}` : ''}`
    : `${BASE_URL}/${locale}${path ? `/${path}` : ''}`;

  const imageUrl = images[0].startsWith('http')
    ? images[0]
    : `${BASE_URL}${images[0]}`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    generator: 'Next.js',
    applicationName: 'ITM Africa',
    referrer: 'origin-when-cross-origin',
    authors: [{ name: 'ITM Africa', url: BASE_URL }],
    creator: 'ITM Africa',
    publisher: 'ITM Africa',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      languages: {
        en: country
          ? `/${locale}/${country}${path ? `/${path}` : ''}`
          : `/${locale}${path ? `/${path}` : ''}`,
        fr: country
          ? `/fr/${country}${path ? `/${path}` : ''}`
          : `/fr${path ? `/${path}` : ''}`,
      },
    },
    openGraph: {
      type,
      locale: locale === 'en' ? 'en_US' : 'fr_FR',
      alternateLocale: locale === 'en' ? 'fr_FR' : 'en_US',
      url,
      title,
      description,
      siteName: 'ITM Africa',
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
      creator: '@ITMAfrica',
      site: '@ITMAfrica',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };
}

export function generateAlternateLinks(
  locale: string,
  country: string,
  path?: string,
): { rel: string; hreflang: string; href: string }[] {
  const languages = ['en', 'fr'];
  const links: { rel: string; hreflang: string; href: string }[] = [];

  languages.forEach((lang) => {
    const href = path
      ? `${BASE_URL}/${lang}/${country}/${path}`
      : `${BASE_URL}/${lang}/${country}`;

    links.push({
      rel: 'alternate',
      hreflang: lang,
      href,
    });
  });

  // Add x-default
  links.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: `${BASE_URL}/en/${country}`,
  });

  return links;
}
