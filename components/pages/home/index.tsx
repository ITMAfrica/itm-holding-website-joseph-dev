import HomePageBanner from '@/components/global/home/banner';

export default function HomePage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <HomePageBanner params={params} />
    </main>
  );
}
