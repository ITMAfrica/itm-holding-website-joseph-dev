import AboutPageBanner from '@/components/about/banner';
import AboutPageMain from '@/components/about/main';
import AboutPageMetrics from '@/components/about/metrics';
import AboutPageMileStone from '@/components/about/mileStone';

export default function AboutPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <AboutPageBanner params={params} />
      <AboutPageMain params={params} />
      <AboutPageMetrics params={params} />
      <AboutPageMileStone params={params} />
    </main>
  );
}
