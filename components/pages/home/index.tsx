import HomeAbout from '@/components/home/about';
import HomePageBanner from '@/components/home/banner';
import HomeServicesSection from '@/components/home/services';

export default function HomePage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <HomePageBanner params={params} />
      <HomeAbout params={params} />
      <HomeServicesSection params={params} />
    </main>
  );
}
