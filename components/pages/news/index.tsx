import CallToAction from '@/components/global/callToAction';
import Faqs from '@/components/global/faqs';
import NewsPageBanner from '@/components/news/banner';
import NewsPageMain from '@/components/news/mainNews';
import NewsPageSecondary from '@/components/news/secondaryNews';

export default function NewsPage({ params }: any) {
  return (
    <main className="w-full">
      <NewsPageBanner />
      <NewsPageMain />
      <NewsPageSecondary />
      <Faqs params={params} />
      <CallToAction params={params} />
    </main>
  );
}
