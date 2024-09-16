import ButtonOulined from '@/components/global/buttons/btn_outlined';
import Image from 'next/image';
import logo from '@/public/pages/home/services/recruitment.png';

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
    <div className="shadow-md hover:shadow-2xl rounded-lg px-10 py-10 w-[32%] mb-8">
      <div className="flex justify-center">
        <Image src={logo} alt="Icon" width={150} height={150} />
      </div>
      <h1 className="mb-5 text-center text-3xl text-blue_itm_good font-bold">
        {name}
      </h1>
      <p className="mb-10 text-center">{paragraph}</p>
      <div className="flex justify-center">
        <ButtonOulined {...btnMore} />
      </div>
    </div>
  );
}
