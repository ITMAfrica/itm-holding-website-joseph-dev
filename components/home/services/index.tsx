import SectionTitle from '@/components/global/section_title';
import HomeServiceCard from './card';

export default function HomeServicesSection({ params }: { params: any }) {
  return (
    <section className="h-screen w-10/12 mx-auto">
      <div className="mb-20">
        <SectionTitle text="NOS SERVICES" center={true} />
        <h2 className="text-blue_itm_good text-5xl font-bold text-center w-2/3 mt-4 mb-8 mx-auto">
          Nous fournissons des services exclusifs pour votre entreprise
        </h2>
      </div>
      <section className="flex justify-between">
        <HomeServiceCard />
        <HomeServiceCard />
        <HomeServiceCard />
      </section>
    </section>
  );
}
