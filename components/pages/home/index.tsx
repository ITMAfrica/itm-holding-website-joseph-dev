import HomeAbout from '@/components/global/home/about';
import HomePageBanner from '@/components/global/home/banner';

export default function HomePage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <HomePageBanner params={params} />
      <HomeAbout params={params} />
    </main>
  );
}
