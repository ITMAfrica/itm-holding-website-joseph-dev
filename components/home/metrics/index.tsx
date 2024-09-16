import { getDictionary } from '@/get-dictionary';
import HomeMetricsCard from './card';

export default function HomeMetrics({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.metrics;
  return (
    <section className="flex items-center w-10/12 mx-auto min-h-screen">
      <div className="m-auto">
        <div className="flex justify-between mb-16">
          <h3 className="text-4xl font-bold w-1/4 text-blue_itm_primary">
            {data.title}
          </h3>
          <p className="w-2/5 text-blue_itm_primary">{data.paragraph}</p>
        </div>
        <div className="flex justify-between">
          {data.metricsItems.map((item: any, index: number) => (
            <HomeMetricsCard {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
