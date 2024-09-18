import Image from 'next/image';
import image from '@/public/pages/home/news/news.png';

export default function HomeNewsCard() {
  return (
    <article className="w-[32%]">
      <div className="mb-5 w-full h-fit">
        <Image
          src={image}
          alt="Image de la news"
          width={350}
          height={350}
          className="rounded-lg w-full"
        />
      </div>
      <span className="bg-blue_itm_primary text-white py-1 px-2 rounded">
        Offre d'emplois
      </span>
      <h1 className="text-2xl font-bold text-blue_itm_primary py-2">
        Gestionaire de paie
      </h1>
      <p className="text-justify text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
        blanditiis. Veritatis nihil eaque consectetur cumque quos, illum
        voluptatum minima ea ut
      </p>
    </article>
  );
}
