import SectionTitle from '@/components/global/section_title';
import HomeServiceCard from './card';
import { getDictionary } from '@/get-dictionary';
import { servicesHome } from '@/lib/data';

export default function HomeServicesSection({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.services;

  return (
    <section className="w-full bg-white">
      <section className="py-20 xl:w-9/12 w-11/12 mx-auto">
        <div className="md:mb-20 mb-10">
          <SectionTitle text={data.title} center={true} />
          <h2 className="text-blue_itm_good md:text-5xl text-3xl font-bold text-center md:w-3/4 w-full mt-4 mb-8 mx-auto">
            {data.subtitle}
          </h2>
        </div>
        <section className="flex justify-between flex-wrap">
          {servicesHome[lang].map((service: any, index: number) => (
            <HomeServiceCard {...service} key={index} />
          ))}
        </section>
      </section>
    </section>
  );
}
