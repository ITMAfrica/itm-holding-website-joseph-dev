import { getDictionary } from '@/get-dictionary';
import { dictionary } from '@/types';
import ButtonOulined from '@/components/global/buttons/btn_outlined';
import SectionTitle from '@/components/global/section_title';
import Image from 'next/image';
import image1 from '@/public/pages/home/about/image1.png';
import image2 from '@/public/pages/home/about/image2.png';
import image3 from '@/public/pages/home/about/image3.png';
import image4 from '@/public/pages/home/about/image4.png';

export default function HomeAbout({ params }: { params: any }) {
  const lang: string = params.lang;
  const dictionary: dictionary = getDictionary(lang);
  const data: any = dictionary?.cd?.pages.home.about;
  return (
    <section className="flex justify-between w-10/12 mx-auto h-screen py-20">
      <div className="w-1/2">
        <div className="flex flex-wrap justify-end">
          <div className="w-1/3 flex justify-end items-end">
            <div className="w-[200px] h-fit bg-black/75 shadow-xl rounded-md mr-3">
              <Image
                src={image1}
                alt="Design"
                width={10000}
                height={10000}
                style={{ objectFit: 'cover' }}
                className="w-[200px] h-[200px] rounded-lg"
              />
            </div>
          </div>
          <div className="w-2/3">
            <div className="w-[300px] h-[300px] bg-blue_itm_good rounded-lg">
              <Image
                src={image2}
                alt="Design"
                width={10000}
                height={10000}
                style={{ objectFit: 'cover' }}
                className="w-[300px] h-[300px] rounded-lg"
              />
            </div>
          </div>
          <div className="w-1/3 flex justify-end">
            <div className="w-[150px] h-[150px] bg-red-500 shadow-md rounded-lg mt-3 mr-3">
              <Image
                src={image3}
                alt="Design"
                width={10000}
                height={10000}
                style={{ objectFit: 'cover' }}
                className="w-[150px] h-[150px] rounded-lg"
              />
            </div>
          </div>
          <div className="w-2/3">
            <div className="w-[200px] h-[200px] bg-green-500 rounded-lg mt-3">
              <Image
                src={image4}
                alt="Design"
                width={10000}
                height={10000}
                style={{ objectFit: 'cover' }}
                className="w-[200px] h-[200px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="border-l-2 pl-10 mr-20">
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
