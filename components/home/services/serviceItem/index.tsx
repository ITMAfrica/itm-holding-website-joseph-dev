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
    <article className="border h-[500px] mx-3 lg:w-[31%] group sm:w-[48%] w-full mb-8 transition ease-in-out duration-700">
      <div className="flex items-end h-full w-[21rem] relative">
        <div className="absolute h-full w-full">
          <Image src={icon} alt="Image service" className="h-full w-full" />
        </div>
        <div className="absolute z-20 bg-gradient-to-t from-black h-full w-full"></div>
        <div className="px-4 h-fit z-50 text-white pb-6">
          <h6 className="text-xxs text-white">NOS SERVICES</h6>
          <h1 className="mb-2 text-xl text-white font-bold">{name}</h1>
          <p className="hidden opacity-0 text-xs mb-6 group-hover:block group-hover:opacity-100 transition ease-in-out duration-700">
            {paragraph}
          </p>
          <Link
            href={'/'}
            title={name}
            className="hidden group-hover:inline text-xs border border-white p-2 hover:bg-white hover:text-blue_itm_primary"
          >
            LIRE D'AVANTAGE
          </Link>
        </div>
      </div>
    </article>
  );
}
