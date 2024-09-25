import { getDictionary } from '@/get-dictionary';
import ButtonOulined from '@/components/global/buttons/btn_outlined';
import SectionTitle from '@/components/global/section_title';
import Image from 'next/image';
import image1 from '@/public/pages/home/about/image1.png';
import image2 from '@/public/pages/home/about/image2.png';
import image3 from '@/public/pages/home/about/image3.png';
import image4 from '@/public/pages/home/about/image4.png';

export default function HomeAbout({ params }: { params: any }) {
  const lang: string = params.lang;
  const dictionary: any = getDictionary(lang);
  const data: any = dictionary?.cd?.pages.home.about;
  return (
    <section className="md:flex bg-white justify-center w-full mx-auto lg:py-20 py-10">
      <div className="w-full lg:w-11/12 flex md:flex-nowrap flex-wrap items-center justify-between">
        <div className="w-full sm:mx-auto mx-0 md:w-3/5 lg:w-1/2">
          <div className="w-full flex w-fit mx-auto flex-wrap justify-center">
            <div className="w-1/2 md:w-1/2 flex justify-end items-end">
              <div className="relative md:w-[205px] w-[120px] h-fit shadow-xl rounded-md mr-3">
                <Image
                  src={image1}
                  alt="Design"
                  width={10000}
                  height={10000}
                  style={{ objectFit: 'cover' }}
                  className="md:w-[205px] w-[120px] h-[120px] md:h-[205px] rounded-lg"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
              </div>
            </div>
            <div className="w-1/2 md:w-1/2">
              <div className="relative md:w-[300px] w-[225px] md:h-[300px] h-[225px] bg-blue_itm_good rounded-lg">
                <Image
                  src={image2}
                  alt="Design"
                  width={10000}
                  height={10000}
                  style={{ objectFit: 'cover' }}
                  className="md:w-[300px] w-[225px] md:h-[300px] h-[225px] rounded-lg"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
              </div>
            </div>
            <div className="w-1/2 md:w-1/2 flex justify-end">
              <div className="relative md:w-[155px] w-[80px] md:h-[155px] h-[80px] bg-red-500 shadow-md rounded-lg mt-3 mr-3">
                <Image
                  src={image3}
                  alt="Design"
                  width={10000}
                  height={10000}
                  style={{ objectFit: 'cover' }}
                  className="md:w-[155px] w-[80px] md:h-[155px] h-[80px] rounded-lg"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
              </div>
            </div>
            <div className="w-1/2 md:w-1/2">
              <div className="md:w-[225px] relative w-[200px] md:h-[225px] h-[200px] bg-green-500 rounded-lg mt-3">
                <Image
                  src={image4}
                  alt="Design"
                  width={10000}
                  height={10000}
                  style={{ objectFit: 'cover' }}
                  className="w-[225px] md:h-[225px] h-[200px] rounded-lg"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit h-full md:px-5 px-3"></div>
        <div className="w-full md:w-2/5 lg:w-1/2 group">
          <div className=" pt-10 md:pt-0  md:mr-14">
            <SectionTitle text={data.title} />
            <h1 className="text-blue_itm_good text-5xl font-bold mb-2">
              {data.subtitle}
            </h1>
            <p className="mb-10">{data.paragraph}</p>
            <ButtonOulined {...data.btnMore} />
          </div>
        </div>
      </div>
    </section>
  );
}
