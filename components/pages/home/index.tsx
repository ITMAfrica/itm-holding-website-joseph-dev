import HomeAbout from '@/components/home/about';
import HomePageBanner from '@/components/home/banner';
import HomeCallToAction from '@/components/global/callToAction';
import HomeMetrics from '@/components/home/metrics';
import HomeNews from '@/components/home/news';
import HomePartners from '@/components/home/partners';
import HomeServicesSection from '@/components/home/services';
import HomeTestimonies from '@/components/home/testimonies';

export default function HomePage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <HomePageBanner params={params} />
      <HomeAbout params={params} />
      <HomeServicesSection params={params} />
      <HomeMetrics params={params} />
      <HomePartners params={params} />
      <HomeTestimonies params={params} />
      <HomeNews params={params} />
      <HomeCallToAction params={params} />
    </main>
  );
}
