import { getDictionary } from '@/get-dictionary';
import HomeMetricsCard from './card';

export default function HomeMetrics({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.metrics;
  return (
    <section className="bg-white w-full">
      <div className="flex items-center md:w-10/12 w-11/12 mx-auto py-20">
        <div className="m-auto">
          <div className="md:flex justify-between md:mb-16 mb-10">
            <h3 className="text-4xl font-bold md:w-1/4 w-4/5 mx-auto md:mx-0 text-blue_itm_primary">
              {data.title}
            </h3>
            <p className="md:w-2/5 w-full text-blue_itm_primary">
              {data.paragraph}
            </p>
          </div>
          <div className="flex justify-between flex-wrap">
            {data.metricsItems.map((item: any, index: number) => (
              <HomeMetricsCard {...item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
