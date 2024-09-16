import SectionTitle from '@/components/global/section_title';
import HomeServiceCard from './card';
import { getDictionary } from '@/get-dictionary';

export default function HomeServicesSection({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.services;

  return (
    <section className="h-screen w-10/12 mx-auto">
      <div className="mb-20">
        <SectionTitle text="NOS SERVICES" center={true} />
        <h2 className="text-blue_itm_good text-5xl font-bold text-center w-2/3 mt-4 mb-8 mx-auto">
          Nous fournissons des services exclusifs pour votre entreprise
        </h2>
      </div>
      <section className="flex justify-between flex-wrap">
        {data.services.map((service: any, index: number) => (
          <HomeServiceCard {...service} key={index} />
        ))}
      </section>
    </section>
  );
}
