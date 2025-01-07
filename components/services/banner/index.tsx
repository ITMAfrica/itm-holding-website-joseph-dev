import { getDictionary } from '@/get-dictionary';

export default function ServicesPageBanner({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.services.banner;
  return (
    <section className="w-full md:h-[60vh] h-[45vh] sm:py-10 py-4">
      <div className="flex items-center w-11/12 mx-auto text-white bg-cover bg-[url('../public/assets/bg/bg.banner.services.png')] h-full rounded-xl">
        <section className="md:w-1/2 md:ml-20 ml-5 mr-4 sm:mr-0">
          <h1 className="md:text-5xl text-2xl font-bold sm:mb-4 mb-2">
            {data.title}
          </h1>
          <p className="font-open">{data.subtitle}</p>
        </section>
      </div>
    </section>
  );
}
