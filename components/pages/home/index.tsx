import HomeAbout from '@/components/home/about';
import HomePageBanner from '@/components/home/banner';
import HomeMetrics from '@/components/home/metrics';
import HomeServicesSection from '@/components/home/services';

export default function HomePage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <HomePageBanner params={params} />
      <HomeAbout params={params} />
      <HomeServicesSection params={params} />
      <HomeMetrics params={params} />
    </main>
  );
}
