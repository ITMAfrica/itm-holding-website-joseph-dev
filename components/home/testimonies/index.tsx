import { getDictionary } from '@/get-dictionary';
import TestimoniesCarousel from './carousel';

export default function HomeTestimonies({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.home.testimonies;
  return (
    <section className="md:pt-20 bg-white md:pb-10 py-8">
      <div>
        <h2 className="lg:w-2/6 md:w-1/2 w-full mx-auto md:text-5xl text-4xl font-bold text-blue_itm_primary text-center">
          {data.title}
        </h2>
        <div className="md:w-10/12 w-11/12 mx-auto">
          <TestimoniesCarousel params={params} />
        </div>
      </div>
    </section>
  );
}
