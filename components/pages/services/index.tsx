import CallToAction from '@/components/global/callToAction';
import Faqs from '@/components/global/faqs';
import Teams from '@/components/global/teams';
import ServicesPageAbout from '@/components/services/about';
import ServicesPageBanner from '@/components/services/banner';
import ServicesPageServices from '@/components/services/services';

export default function ServicesPage({ params }: any) {
  return (
    <main className="w-full">
      <ServicesPageBanner params={params} />
      <ServicesPageAbout params={params} />
      <ServicesPageServices params={params} />
      <Teams />
      <Faqs params={params} />
      <CallToAction params={params} />
    </main>
  );
}
