import HomePage from '@/components/pages/home';
import { getDictionary } from '@/get-dictionary';

export async function generateMetadata({ params }: any) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data: any = dictionary.cd.pages;

  return data.home.meta;
}

export default function IndexPage({ params }: { params: any }) {
  return <HomePage params={params} />;
}
