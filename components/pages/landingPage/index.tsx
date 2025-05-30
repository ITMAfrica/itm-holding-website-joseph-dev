import AboutLandingPage from '@/components/landing-page/about';
import BannerLandingPage from '@/components/landing-page/banner';
import CountriesLandingPage from '@/components/landing-page/countries';
import ProcessLandingPage from '@/components/landing-page/process';
import StepsLandingPage from '@/components/landing-page/steps';
import HomeCallToAction from '@/components/global/callToAction';

export default function LandingPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <BannerLandingPage params={params} />
      <AboutLandingPage params={params} />
      <ProcessLandingPage params={params} />
      <StepsLandingPage params={params} />
      <CountriesLandingPage />
      <HomeCallToAction params={params} />
    </main>
  );
}
