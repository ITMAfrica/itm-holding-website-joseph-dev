import AboutPage from '@/components/pages/about';
import ContactPage from '@/components/pages/contact';
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

  switch (params.page) {
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
    case 'tz':
      return getComponent({ params });
    case 'tg':
      return getComponent({ params });
    case 'ao':
      return getComponent({ params });
    case 'bn':
      return getComponent({ params });
    case 'bi':
      return getComponent({ params });
    case 'cg':
      return getComponent({ params });
    case 'cm':
      return getComponent({ params });
    case 'de':
      return getComponent({ params });
    case 'gb':
      return getComponent({ params });
    case 'ke':
      return getComponent({ params });
    case 'ng':
      return getComponent({ params });
    case 'ug':
      return getComponent({ params });
    case 'za':
      return getComponent({ params });
    case 'zm':
      return getComponent({ params });
    case 'rw':
      return getComponent({ params });
    case 'about-us':
      return <AboutPage params={params} />;
    case 'a-propos-de-nous':
      return <AboutPage params={params} />;
  }
}
function getComponent({ params }: any) {
  switch (params.page) {
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
