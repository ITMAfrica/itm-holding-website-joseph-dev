import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import HomeNewsCard from './card';

export default function HomeNews({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.news;
  return (
    <section className="flex items-center ">
      <div className="w-full">
        <div className="md:w-10/12 w-11/12 mx-auto md:py-16 py-6">
          <SectionTitle text={data.title} center={true} />
          <h3 className="md:w-3/5 w-full mx-auto md:text-5xl text-3xl font-bold text-blue_itm_primary text-center mb-4">
            {data.subtitle}
          </h3>
          <div className="flex justify-between flex-wrap mt-10">
            <HomeNewsCard />
            <HomeNewsCard />
            <HomeNewsCard />
          </div>
        </div>
      </div>
    </section>
  );
}
