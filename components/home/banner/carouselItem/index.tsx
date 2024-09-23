import Image from 'next/image';
import image1 from '@/public/pages/home/banner/banner1.png';
import image2 from '@/public/pages/home/banner/banner2.png';
import image3 from '@/public/pages/home/banner/banner3.png';
import ButtonBg from '@/components/global/buttons/btn_bg';

export default function CarouselItem({
  title,
  paragraph,
  btnMore,
  indexImage,
  bgWhite,
}: {
  title: string;
  paragraph: string;
  btnMore: any;
  indexImage: number;
  bgWhite: boolean;
}) {
  const images = [image1, image2, image3];
  return (
    <section
      className="w-[90vw] rounded-2xl mx-auto relative overflow-hidden"
      key={2}
    >
      <article className="flex items-center sm:w-1/2 w-full absolute z-10 top-0 right-0 left-0 bottom-0">
        {bgWhite ? (
          <div className="sm:ml-14 ml-4 h-fit">
            <h1 className="text-blue_itm_good md:text-5xl text-3xl font-bold mb-4">
              {title}
            </h1>
            <p className="mb-8">{paragraph}</p>
            <ButtonBg {...btnMore} />
          </div>
        ) : (
          <div className="sm:ml-14 ml-4 h-fit">
            <h1 className="text-white md:text-5xl text-3xl font-bold mb-4">
              {title}
            </h1>
            <p className="text-white mb-8">{paragraph}</p>
            <ButtonBg {...btnMore} />
          </div>
        )}
      </article>
      <Image
        src={images[indexImage]}
        className="h-fit w-full bg-center rounded-lg"
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
