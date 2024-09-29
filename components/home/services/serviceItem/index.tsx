import ButtonOulined from '@/components/global/buttons/btn_outlined';
import Image from 'next/image';

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
    <article className="border h-[400px] mx-3 bg-black/70 md:p-10 p-8 lg:w-[31%] group sm:w-[48%] w-full mb-8">
      <h1 className="mb-5 text-center text-3xl text-blue_itm_good font-bold">
        Gestion du personnel
      </h1>

      <div className="flex justify-center">
        <ButtonOulined {...btnMore} />
      </div>
    </article>
  );
}
