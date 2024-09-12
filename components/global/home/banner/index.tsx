import HomeBannerCarousel from './carousel';

export default function HomePageBanner({ params }: { params: any }) {
  return (
    <>
      <section className="bg-blue_itm_aqua_marine/10 h-[87vh] w-full">
        <HomeBannerCarousel params={params} toShow={1} />
      </section>
    </>
  );
}
