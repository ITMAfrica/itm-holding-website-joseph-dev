import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import HomeNewsCard from './card';

export default function HomeNews({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.news;
  return (
    <section className="flex items-center min-h-screen bg-blue_itm_aqua_marine/10">
      <div className="w-full">
        <div className="w-9/12 mx-auto py-16">
          <SectionTitle text={data.title} center={true} />
          <h3 className="w-3/5 mx-auto text-5xl font-bold text-blue_itm_primary text-center mb-4">
            {data.subtitle}
          </h3>
          <div className="flex justify-between mt-10">
            <HomeNewsCard />
            <HomeNewsCard />
            <HomeNewsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
