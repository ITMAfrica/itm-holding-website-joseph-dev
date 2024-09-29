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
    <article className="border h-[400px] mx-3 bg-black/70 lg:w-[31%] group sm:w-[48%] w-full mb-8">
      <div className="w-[18rem]">
        <h1 className="mb-5 text-xl text-center text-white font-bold">
          Gestion du personnel
        </h1>
        <div className="flex justify-center">
          <Link className="border-white py-2 px-3 rounded-foull" href={'/'}>
            Lire plus
          </Link>
        </div>
      </div>
    </article>
  );
}
