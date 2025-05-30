import AboutPage from '@/components/pages/about';
import ContactPage from '@/components/pages/contact';
import HomePage from '@/components/pages/home';
import NewsPage from '@/components/pages/news';
import ServicesPage from '@/components/pages/services';
import TrainingPage from '@/components/pages/training';
import { getDictionary } from '@/get-dictionary';
import { getCountryCode } from '@/helpers';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: any) {
  const lang = params.lang;
  const country = getCountryCode(params.country);
  const dictionary = getDictionary(lang);
  const data: any = dictionary[country].pages;
  const notFound: any = dictionary.globalContent.pages.notFound;

  switch (params.country) {
    case 'cd':
      return data.home.meta;
    case 'tz':
      return data.home.meta;
    case 'tg':
      return data.home.meta;
    case 'ao':
      return data.home.meta;
    case 'bn':
      return data.home.meta;
    case 'bu':
      return data.home.meta;
    case 'cg':
      return data.home.meta;
    case 'cm':
      return data.home.meta;
    case 'de':
      return data.home.meta;
    case 'bi':
      return data.home.meta;
    case 'gb':
      return data.home.meta;
    case 'ke':
      return data.home.meta;
    case 'ng':
      return data.home.meta;
    case 'ug':
      return data.home.meta;
    case 'za':
      return data.home.meta;
    case 'zm':
      return data.home.meta;
    case 'rw':
      return data.home.meta;
    case 'ci':
      return data.home.meta;
    case 'sn':
      return data.home.meta;
    case 'about-us':
      return data.about.meta;
    case 'a-propos-de-nous':
      return data.about.meta;
    case 'services':
      return data.services.meta;
    case 'training':
      return data.training.meta;
    case 'formations':
      return data.training.meta;
    case 'news':
      return data.news.meta;
    case 'actualites':
      return data.news.meta;
    case 'contact-us':
      return data.contact.meta;
    case 'contactez-nous':
      return data.contact.meta;
    default:
      return notFound.meta;
  }
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
    case 'bn':
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
