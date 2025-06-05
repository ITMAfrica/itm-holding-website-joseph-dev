import { getDictionary } from '@/get-dictionary';
import { getCountryCode } from '@/helpers';

export default function AboutPageBanner({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const country: string = params.country;
  const code: string = getCountryCode(country);
  const data = dictionary[code].pages.about.banner;
  return (
    <section className="w-full sm:h-[60vh] h-[45vh] sm:py-10 py-5">
      <div className="flex items-center w-11/12 mx-auto text-white bg-cover bg-[url('../public/pages/about/banner.png')] h-full rounded-xl">
        <section className="sm:w-1/2 sm:ml-20 ml-5 mr-4 sm:mr-0">
          <h1 className="md:text-5xl text-3xl font-bold mb-4">{data.title}</h1>
          <p className="font-open sm:text-lg">{data.subtitle}</p>
        </section>
      </div>
    </section>
  );
}
