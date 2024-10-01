import ButtonOulined from '@/components/global/buttons/btn_outlined';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeServiceCard({
  name,
  icon,
  paragraph,
  btnMore,
  activeSlide,
}: {
  name: string;
  icon: string;
  paragraph: string;
  btnMore: any;
  activeSlide: any;
}) {
  return (
    <article className="border h-[500px] mx-3 lg:w-[33%] group sm:w-[48%] w-full mb-8 transition ease-in-out duration-700">
      <div className="flex items-end h-full w-[23rem] relative">
        <div className="absolute h-full w-full">
          <Image src={icon} alt="Image service" className="h-full w-full" />
        </div>
        <div className="absolute z-20 bg-gradient-to-t from-black h-full w-full"></div>
        <div className="px-4 h-fit z-50 text-white pb-10">
          <h6 className="text-xxs text-white group-hover:animate-slow-display">
            NOS SERVICES
          </h6>
          <h1 className="mb-2 text-xl group-hover:animate-slow-display text-white font-bold">
            {name}
          </h1>
          <div className="hidden group-hover:block transition animate-slow-display ease-in-out duration-700">
            <p className="opacity-0 text-xs mb-6 group-hover:opacity-100 transition ease-in-out duration-700">
              {paragraph}
            </p>
            <Link
              href={btnMore.link}
              title={btnMore.title}
              className="group-hover:inline text-xs border border-white p-2 hover:bg-white hover:text-blue_itm_primary"
            >
              {btnMore.text}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
