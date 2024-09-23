import ButtonOulined from '@/components/global/buttons/btn_outlined';
import Image from 'next/image';

export default function HomeServiceCard({
  name,
  icon,
  paragraph,
  btnMore,
}: {
  name: string;
  icon: string;
  paragraph: string;
  btnMore: any;
}) {
  return (
    <article className="shadow-md hover:shadow-xl rounded-lg md:p-10 p-8 lg:w-[31%] sm:w-[48%] w-full  mb-8">
      <div className="flex justify-center">
        <Image src={icon} alt="Icon" width={140} height={150} />
      </div>
      <h1 className="mb-5 text-center text-3xl text-blue_itm_good font-bold">
        {name}
      </h1>
      <p className="md:mb-10 mb-5 text-center font-medium">{paragraph}</p>
      <div className="flex justify-center">
        <ButtonOulined {...btnMore} />
      </div>
    </article>
  );
}
