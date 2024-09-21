import AboutPageBanner from '@/components/about/banner';
import AboutPageMain from '@/components/about/main';

export default function AboutPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <AboutPageBanner params={params} />
      <AboutPageMain params={params} />
    </main>
  );
}
