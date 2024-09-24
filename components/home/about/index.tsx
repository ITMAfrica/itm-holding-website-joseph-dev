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
    <section className="md:flex justify-between xl:w-10/12 w-11/12 mx-auto lg:py-20 py-10">
      <div className="w-9/12 sm:mx-auto mx-0 md:w-3/5 lg:w-1/2">
        <div className="flex flex-wrap justify-end">
          <div className="w-1/2 md:w-1/3 flex justify-end items-end">
            <div className="relative md:w-[200px] w-[120px] h-fit shadow-xl rounded-md mr-3">
              <Image
                src={image1}
                alt="Design"
                width={10000}
                height={10000}
                style={{ objectFit: 'cover' }}
                className="md:w-[200px] w-[120px] h-[120px] md:h-[200px] rounded-lg"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
            </div>
          </div>
          <div className="w-1/2 md:w-2/3">
            <div className="relative md:w-[300px] w-[200px] md:h-[300px] h-[200px] bg-blue_itm_good rounded-lg">
              <Image
                src={image2}
                alt="Design"
                width={10000}
                height={10000}
                style={{ objectFit: 'cover' }}
                className="md:w-[300px] w-[200px] md:h-[300px] h-[200px] rounded-lg"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
            </div>
          </div>
          <div className="w-1/2 md:w-1/3 flex justify-end">
            <div className="relative md:w-[150px] w-[80px] md:h-[150px] h-[80px] bg-red-500 shadow-md rounded-lg mt-3 mr-3">
              <Image
                src={image3}
                alt="Design"
                width={10000}
                height={10000}
                style={{ objectFit: 'cover' }}
                className="md:w-[150px] w-[80px] md:h-[150px] h-[80px] rounded-lg"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-blue_itm_primary/20 rounded-lg duration-700"></div>
            </div>
          </div>
          <div className="w-1/2 md:w-2/3">
            <div className="md:w-[200px] w-[150px] md:h-[200px] h-[150px] bg-green-500 rounded-lg mt-3">
              <Image
                src={image4}
                alt="Design"
                width={10000}
                height={10000}
                style={{ objectFit: 'cover' }}
                className="w-[200px] md:h-[200px] h-[150px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/5 lg:w-1/2">
        <div className="md:border-l-2 pt-10 md:pt-0 md:pl-10 pl-4 md:mr-14">
          <SectionTitle text={data.title} />
          <h1 className="text-blue_itm_good text-5xl font-bold mb-2">
            {data.subtitle}
          </h1>
          <p className="mb-10">{data.paragraph}</p>

          <ButtonOulined {...data.btnMore} />
        </div>
      </div>
    </section>
  );
}
