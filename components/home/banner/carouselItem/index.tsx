import Image from 'next/image';
import image1 from '@/public/pages/home/banner/banner1.png';
import image2 from '@/public/pages/home/banner/banner2.png';
import image3 from '@/public/pages/home/banner/banner3.png';
import ButtonBg from '@/components/global/buttons/btn_bg';
import { CODE, getCookie, TALENTPRO_HREF } from '@/helpers';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CarouselItem({
  title,
  paragraph,
  btnMore,
  indexImage,
  bgWhite,
  index,
}: {
  title: string;
  paragraph: string;
  btnMore: any;
  indexImage: number;
  bgWhite: boolean;
  index: number;
}) {
  const images = [image1, image3];
  const params = useParams();
  const href = usePathname();
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);

  function getHref() {
    const current = btnMore.key;
    if (CURRENT_CODE && CURRENT_CODE != CODE) {
      return `/${params.lang}/${
        params.country ? params.country : CURRENT_CODE
      }/${current}`;
    } else {
      return href;
    }
  }

  useEffect(
    function () {
      SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
    },
    [params.lang, params.country]
  );

  return (
    <section className="w-full mx-auto">
      <article className="flex items-center sm:w-1/2 w-full absolute z-10 top-0 right-0 left-0 bottom-0">
        {bgWhite ? (
          <div className="sm:ml-14 ml-4 h-fit">
            <h1 className="text-blue_itm_good md:text-5xl text-3xl font-bold mb-4">
              {title}
            </h1>
            <p className="mb-8">{paragraph}</p>
            <ButtonBg {...btnMore} link={getHref()} key={index} />
          </div>
        ) : (
          <div className="sm:ml-14 ml-4 h-fit">
            <h1 className="text-white md:text-5xl text-3xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-white mb-8 font-open">{paragraph}</p>
            <ButtonBg {...btnMore} link={getHref()} key={index + 1} />
          </div>
        )}
      </article>
      <Image
        src={images[indexImage]}
        className="w-full bg-center rounded-xl"
        fill
        alt="Bg"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </section>
  );
}
