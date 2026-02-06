import HomeHeader from '@/components/global/header';
import { GoogleAnalytics } from '@next/third-parties/google';
import { type Locale } from '@/i18n-config';
import localFont from 'next/font/local';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/global/footer';
import { Analytics } from '@vercel/analytics/next';
import { generateMetadata as generateSEOMetadata } from '@/lib/metadata';
import { getDictionary } from '@/get-dictionary';
import StructuredData from '@/components/global/structured-data';
import { Metadata } from 'next';
import '@/styles/global.css';

const candara = localFont({
  src: [
    {
      path: '../../fonts/Candara.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Candara.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../fonts/Candara_Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../fonts/Candara_Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const lang = (await params).lang;
  const dictionary = getDictionary(lang);
  const metaData = dictionary.globalContent.pages.hr.meta;

  return generateSEOMetadata({
    title: metaData.title || 'ITM Africa | Welcome to the ITM Africa web site',
    description:
      metaData.description ||
      'ITM HR is your strategic partner in HR solutions in Africa.',
    keywords: metaData.keywords || [],
    locale: lang,
    images: ['/assets/logo/logo.png'],
    type: 'website',
  });
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const lang = (await params).lang;
  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <StructuredData locale={lang} />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${openSans.variable} ${candara.className}`}
      >
        <HomeHeader params={params} />
        <main className="w-full bg-gray_itm_bg/40 text-black_itm">
          {children}
        </main>
        <Footer params={params} />
        <GoogleAnalytics gaId="AW-16880582497" />
        <Analytics />
      </body>
    </html>
  );
}
