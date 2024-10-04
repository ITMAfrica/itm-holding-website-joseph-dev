import ContactPageBanner from '@/components/contact/banner';
import ContactPageAboutSection from '@/components/contact/about';
import CallToAction from '@/components/global/callToAction';
import Faqs from '@/components/global/faqs';
import ContactPageContactSection from '@/components/contact/contact';

export default function ContactPage({ params }: { params: any }) {
  return (
    <main className="w-full">
      <ContactPageBanner params={params} />
      <ContactPageAboutSection params={params} />
      <ContactPageContactSection params={params} />
      <Faqs />
      <CallToAction params={params} />
    </main>
  );
}
