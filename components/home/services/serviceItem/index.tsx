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
    <article className="border h-[500px] mx-3 lg:w-[31%] group sm:w-[48%] w-full mb-8">
      <div className="flex items-end h-full w-[21rem] relative">
        <div className="absolute h-full w-full">
          <Image src={icon} alt="Image service" className="h-full w-full" />
        </div>
        <div className="absolute z-20 bg-gradient-to-t from-black via-transparent h-full w-full"></div>
        <div className="pl-4 h-fit z-50">
          <h6 className="text-xxs text-white">NOS SERVICES</h6>
          <h1 className="mb-5 text-xl text-white font-bold">
            Gestion du personnel
          </h1>
        </div>
      </div>
    </article>
  );
}
