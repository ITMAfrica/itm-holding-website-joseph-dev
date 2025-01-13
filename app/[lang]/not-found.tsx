import PageNotFound404 from '@/components/pages/page404';
import { getDictionary } from '@/get-dictionary';

export async function generateMetadata({ params }: any) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data: any = dictionary.globalContent.pages.notFound;

  return data.meta;
}

export default function NotFound({ params }: { params: any }) {
  return <PageNotFound404 params={params} />;
}
