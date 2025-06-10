import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import img from '@/public/pages/main/main.png';
import Image from 'next/image';

export default function AboutLandingPage({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.about;
  return (
    <section className="md:flex justify-center w-full mx-auto py-10 bg-[url('../public/pages/print.png')] bg-right bg-no-repeat">
      <div className="w-11/12 lg:w-10/12 mx-auto flex md:flex-nowrap flex-wrap items-center  justify-center lg:justify-between">
        <div className="md:flex items-center">
          <div className="w-fit mx-auto md:w-3/5 lg:w-1/2">
            <Image
              src={img}
              alt="About image"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 pt-10 md:pt-0">
            <SectionTitle text={data.title} />
            <h1 className="text-blue_itm_good text-5xl font-bold mb-2">
              {data.subtitle}
            </h1>
            <p className="mb-5 font-open font-lg sm:text-xl text-black_itm">
              {data.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
