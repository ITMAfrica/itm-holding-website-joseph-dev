import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import { servicesHome } from '@/lib/data';
import HomeServicesCarousel from './carousel';

export default function HomeServicesSection({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.services;

  return (
    <section className="bg-white flex justify-end">
      <div className="flex py-20 w-11/12">
        <div className="w-3/12">
          <div className="md:mb-20 mb-10">
            <SectionTitle text={data.title} />
            <h2 className="text-blue_itm_good md:text-5xl text-3xl font-bold mt-4 mb-4">
              {data.subtitle}
            </h2>
            <p className="text-2xl text-blue_itm_primary">{data.paragraph}</p>
          </div>
        </div>
        <div className="w-9/12">
          <HomeServicesCarousel params={params} />
        </div>
      </div>
    </section>
  );
}
