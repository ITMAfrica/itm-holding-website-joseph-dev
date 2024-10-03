import ContactPageBanner from '@/components/contact/banner';
import ContactPageOfficesSection from '@/components/contact/offices';
import CallToAction from '@/components/global/callToAction';
import Faqs from '@/components/global/faqs';

export default function ContactPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <ContactPageBanner params={params} />
      <ContactPageOfficesSection params={params} />
      <Faqs />
      <CallToAction params={params} />
    </main>
  );
}
