import LandingPage from '@/components/pages/landingPage';
import { getDictionary } from '@/get-dictionary';

export async function generateMetadata({ params }: any) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data: any = dictionary.globalContent.pages.hr;

  return data.meta;
}

export default function IndexPage({ params }: { params: any }) {
  return <LandingPage params={params} />;
}
