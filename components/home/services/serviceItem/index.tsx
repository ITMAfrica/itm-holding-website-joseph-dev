'use client';

import ButtonOulined from '@/components/global/buttons/btn_outlined';
import Image from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';

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
    <article className="group border h-[500px] sm:mx-3 mx-1 md:w-[25.5vw] lg:w-[20.5vw] mb-8 transition ease-in-out duration-700">
      <div className="flex items-end h-full w-full relative">
        <div className="absolute h-full w-full">
          <Image
            src={icon}
            alt="Image service"
            className="h-full w-full"
            objectFit="cover"
          />
        </div>
        <div className="absolute z-20 bg-gradient-to-t from-black h-full w-full"></div>
        <div className="px-4 h-fit z-50 text-white pb-10">
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
              className="group-hover:inline text-xs border border-white p-3 hover:bg-white hover:text-blue_itm_primary"
            >
              {btnMore.text}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
