import SectionTitle from '@/components/global/section_title';
import { getDictionary } from '@/get-dictionary';
import img from '@/public/pages/main/main2.png';
import Image from 'next/image';

export default function ProcessLandingPage({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.process;
  return (
    <section className="md:flex justify-center w-full mx-auto py-14 ">
      <div className="w-10/12 mx-auto flex md:flex-nowrap flex-wrap items-center  justify-center lg:justify-between">
        <div className="md:flex items-center">
          <div className="md:w-1/2 pt-10 md:pt-0 md:mr-14">
            <SectionTitle text="ITM HR" />
            <h1 className="text-blue_itm_good text-4xl font-bold mb-2">
              {data.subtitle}
            </h1>
            <p className="mb-2 lg:w-11/12 font-open text-xl font-lg text-black_itm">
              {data.text}
            </p>
            <div>
              <h5 className="text-2xl text-blue_itm_primary font-bold mb-2">
                {data.services.title}
              </h5>
              <div>
                <ul className="ml-4">
                  {data.services.items.map((item: any, index: number) => {
                    return (
                      <li
                        className="text-xl text-blue_itm_aqua_marine font-semibold"
                        key={index}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-fit mx-auto md:w-3/5 lg:w-1/2">
            <Image
              src={img}
              alt="About image"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
