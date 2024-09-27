import HomeBannerCarousel from '@/components/home/banner/carousel';

export default function HomePageBanner({ params }: { params: any }) {
  return (
    <section className="h-[80vh] w-full">
      <HomeBannerCarousel params={params} toShow={1} />
    </section>
  );
}
