import AboutPageBanner from '@/components/about/banner';
import AboutPageMain from '@/components/about/main';
import AboutPageMetrics from '@/components/about/metrics';
import AboutPageMileStone from '@/components/about/mileStone';
import CallToAction from '@/components/global/callToAction';
import Faqs from '@/components/global/faqs';
import Teams from '@/components/global/teams';

export default function AboutPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <AboutPageBanner params={params} />
      <AboutPageMain params={params} />
      <AboutPageMetrics params={params} />
      <AboutPageMileStone params={params} />
      <Teams />
      <Faqs />
      <CallToAction params={params} />
    </main>
  );
}
