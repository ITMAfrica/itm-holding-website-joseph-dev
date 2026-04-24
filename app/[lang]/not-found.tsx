import PageNotFound404 from '@/components/pages/page404';
import { getDictionary } from '@/get-dictionary';

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dictionary = getDictionary(lang);
  const data: any = dictionary.globalContent.pages.notFound;

  return data.meta;
}

export default async function NotFound({ params }: { params: any }) {
  return <PageNotFound404 />;
}
