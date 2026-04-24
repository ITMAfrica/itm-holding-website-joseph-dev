import LandingPage from '@/components/pages/landingPage';
import { getDictionary } from '@/get-dictionary';
import { generateMetadata as generateMeta } from '@/lib/metadata';

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dictionary = getDictionary(lang);
  const data: any = dictionary.globalContent.pages.hr;
  const metaData = data.meta;

  return generateMeta({
    title: metaData?.title || 'ITM Africa | Welcome to ITM Africa',
    description:
      metaData?.description ||
      'ITM HR - Your strategic partner in HR solutions in Africa',
    keywords: metaData?.keywords || [],
    locale: lang,
    images: ['/assets/logo/logo.png'],
    type: 'website',
  });
}

export default async function IndexPage({ params }: { params: any }) {
  const resolvedParams = await params;
  return <LandingPage params={resolvedParams} />;
}
