import AboutPage from '@/components/pages/about';
import ContactPage from '@/components/pages/contact';
import HomePage from '@/components/pages/home';
import NewsPage from '@/components/pages/news';
import ServicesPage from '@/components/pages/services';
import TrainingPage from '@/components/pages/training';
import { getDictionary } from '@/get-dictionary';
import { getCountryCode } from '@/helpers';
import { generateMetadata as generateMeta } from '@/lib/metadata';
import { notFound } from 'next/navigation';

// Map country codes to country names
const COUNTRY_CODES = [
  'cd',
  'tz',
  'tg',
  'ao',
  'bj',
  'bu',
  'cg',
  'cm',
  'de',
  'bi',
  'gb',
  'ke',
  'ng',
  'ug',
  'za',
  'zm',
  'rw',
  'ci',
  'sn',
];

const PAGE_PATHS: Record<string, string> = {
  'about-us': 'about-us',
  'a-propos-de-nous': 'a-propos-de-nous',
  services: 'services',
  training: 'training',
  formations: 'formations',
  news: 'news',
  actualites: 'actualites',
  'contact-us': 'contact-us',
  'contactez-nous': 'contactez-nous',
};

export async function generateMetadata({ params }: any) {
  const lang = params.lang;
  const country = getCountryCode(params.country);
  const dictionary = getDictionary(lang);
  const notFoundData: any = dictionary.globalContent.pages.notFound;

  let metaData: any;
  let pagePath = '';
  let isCountryPage = COUNTRY_CODES.includes(params.country);

  if (isCountryPage) {
    const data: any = dictionary[country].pages;
    metaData = data.home.meta;
  } else {
    // It's a page route
    const data: any = dictionary[country].pages;
    pagePath = PAGE_PATHS[params.country] || params.country;

    switch (params.country) {
      case 'about-us':
      case 'a-propos-de-nous':
        metaData = data.about.meta;
        break;
      case 'services':
        metaData = data.services.meta;
        break;
      case 'training':
      case 'formations':
        metaData = data.training.meta;
        break;
      case 'news':
      case 'actualites':
        metaData = data.news.meta;
        break;
      case 'contact-us':
      case 'contactez-nous':
        metaData = data.contact.meta;
        break;
      default:
        metaData = notFoundData.meta;
    }
  }

  return generateMeta({
    title: metaData?.title || 'ITM Africa',
    description:
      metaData?.description || 'ITM HR - Strategic HR Solutions in Africa',
    keywords: metaData?.keywords || [],
    locale: lang,
    country: isCountryPage ? params.country : undefined,
    path: pagePath || undefined,
    images: ['/assets/logo/logo.png'],
    type: 'website',
  });
}

export default function PageCountry({ params }: { params: any }) {
  switch (params.country) {
    case 'cd':
      return <HomePage params={params} />;
    case 'tz':
      return <HomePage params={params} />;
    case 'tg':
      return <HomePage params={params} />;
    case 'ao':
      return <HomePage params={params} />;
    case 'bj':
      return <HomePage params={params} />;
    case 'bu':
      return <HomePage params={params} />;
    case 'cg':
      return <HomePage params={params} />;
    case 'cm':
      return <HomePage params={params} />;
    case 'de':
      return <HomePage params={params} />;
    case 'bi':
      return <HomePage params={params} />;
    case 'gb':
      return <HomePage params={params} />;
    case 'ke':
      return <HomePage params={params} />;
    case 'ng':
      return <HomePage params={params} />;
    case 'ug':
      return <HomePage params={params} />;
    case 'za':
      return <HomePage params={params} />;
    case 'zm':
      return <HomePage params={params} />;
    case 'rw':
      return <HomePage params={params} />;
    case 'ci':
      return <HomePage params={params} />;
    case 'sn':
      return <HomePage params={params} />;
    case 'about-us':
      return <AboutPage params={params} />;
    case 'a-propos-de-nous':
      return <AboutPage params={params} />;
    case 'services':
      return <ServicesPage params={params} />;
    case 'training':
      return <TrainingPage params={params} />;
    case 'formations':
      return <TrainingPage params={params} />;
    case 'news':
      return <NewsPage params={params} />;
    case 'actualites':
      return <NewsPage params={params} />;
    case 'contact-us':
      return <ContactPage params={params} />;
    case 'contactez-nous':
      return <ContactPage params={params} />;
    default:
      notFound();
  }
}
