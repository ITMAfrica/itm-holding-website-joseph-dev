import AboutLandingPage from '@/components/landing-page/about';
import BannerLandingPage from '@/components/landing-page/banner';

export default function LandingPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <BannerLandingPage params={params} />
      <AboutLandingPage params={params} />
    </main>
  );
}
