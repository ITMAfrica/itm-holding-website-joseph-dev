import ContactPageBanner from '@/components/contact/banner';

export default function ContactPage({ params }: { params: any }) {
  return (
    <main className="w-full h-screen bg-white">
      <ContactPageBanner params={params} />
    </main>
  );
}
