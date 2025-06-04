import Link from 'next/link';
import Image from 'next/image';
import banner from '@/public/pages/main/bannerMain.png';
import { getDictionary } from '@/get-dictionary';

export default function BannerLandingPage({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.hr.banner;
  return (
    <section className="h-[75vh] mx-auto relative">
      <div className="w-10/12 mx-auto">
        <div className="h-full py-5">
          <article className="flex items-center md:w-1/2 w-full absolute z-10 top-0 right-0 left-0 bottom-0">
            <div className="sm:ml-14 ml-4 h-fit">
              <h1 className="text-white md:text-5xl text-3xl font-bold mb-20">
                {data.text}
              </h1>
              <Link
                href="#countries"
                className="block w-fit p-3 text-lg font-semibold text-center text-blue_itm_good bg-white hover:bg-blue_itm_aqua_marine hover:text-white border rounded-full border-white hover:border-blue_itm_aqua_marine"
              >
                {data.btn}
              </Link>
            </div>
          </article>
        </div>
        <Image
          src={banner}
          className="inline w-full bg-center rounded-xl"
          fill
          alt="Bg"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
    </section>
  );
}
