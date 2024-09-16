import client1 from '@/public/pages/home/partners/client1.png';
import client2 from '@/public/pages/home/partners/client2.png';
import client3 from '@/public/pages/home/partners/client3.png';
import client4 from '@/public/pages/home/partners/client4.png';
import client8 from '@/public/pages/home/partners/client8.png';
import client6 from '@/public/pages/home/partners/client6.png';
import client7 from '@/public/pages/home/partners/client7.png';
import client9 from '@/public/pages/home/partners/client9.png';
import Image from 'next/image';

export default function HomePartners({ params }: { params: any }) {
  return (
    <section className="flex items-center min-h-screen bg-blue_itm_aqua_marine/10">
      <div className="w-full">
        <div className="w-10/12 mx-auto py-16">
          <h1 className="text-5xl font-bold text-blue_itm_primary text-center mb-4">
            Nos partenaires
          </h1>
          <h3 className="text-xl text-center w-3/5 mx-auto">
            Nous sommes le choix de plus de 500 entreprises satisfaites;
            rejoignez-nous et bénéficiez de notre expertise
          </h3>
        </div>
        <div className="w-8/12 mx-auto mt-10">
          <ul className="flex justify-between">
            <li>
              <Image src={client1} alt="Client" width={100} height={100} />
            </li>
            <li>
              <Image src={client2} alt="Client" width={130} height={130} />
            </li>
            <li>
              <Image src={client3} alt="Client" width={130} height={130} />
            </li>
            <li>
              <Image src={client4} alt="Client" width={130} height={130} />
            </li>
            <li>
              <Image src={client8} alt="Client" width={130} height={130} />
            </li>
          </ul>
          <ul className="flex justify-evenly mt-14 px-20">
            <li>
              <Image src={client6} alt="Client" width={130} height={130} />
            </li>
            <li>
              <Image src={client7} alt="Client" width={130} height={130} />
            </li>
            <li>
              <Image src={client9} alt="Client" width={130} height={130} />
            </li>
          </ul>
          <ul className="flex justify-evenly mt-14 px-20">
            <li>
              <Image src={client9} alt="Client" width={100} height={100} />
            </li>
            <li>
              <Image src={client6} alt="Client" width={100} height={100} />
            </li>
            <li>
              <Image src={client7} alt="Client" width={100} height={100} />
            </li>
            <li>
              <Image src={client6} alt="Client" width={100} height={100} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
