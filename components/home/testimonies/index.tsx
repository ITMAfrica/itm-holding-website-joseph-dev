import { getDictionary } from '@/get-dictionary';

export default function HomeTestimonies({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.testimonies;
  return (
    <section className="min-h-screen py-20">
      <div>
        <h2 className="w-2/6 mx-auto text-5xl font-bold text-blue_itm_primary text-center">
          {data.title}
        </h2>
      </div>
    </section>
  );
}
