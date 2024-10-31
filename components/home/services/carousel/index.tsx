'use client';
import { getDictionary } from '@/get-dictionary';
import { useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import Carousel from 'react-simply-carousel';
import HomeServiceCard from '../serviceItem';
import { servicesHome } from '@/lib/data';

import {
  Mousewheel,
  Controller,
  A11y,
  Parallax,
  EffectFade,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { duration } from 'moment';

export default function HomeServicesCarousel({
  params,
  toShow = 3,
}: {
  params: any;
  toShow?: any;
}) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.services;
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className="w-full relative h-fit">
        <Swiper
          // install Swiper modules
          direction={'horizontal'}
          cssMode={true}
          modules={[Mousewheel, A11y, Parallax, Controller]}
          spaceBetween={50}
          slidesPerView={3}
          longSwipesMs={1500}
          mousewheel={true}
          className="h-full w-full my-auto"
        >
          {servicesHome[lang].map((item: any, index: number) => (
            <SwiperSlide>
              <HomeServiceCard
                {...item}
                activeSlide={activeSlide}
                key={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-start pl-3 z-20">
        <button
          onClick={() => {
            if (activeSlide != 0) setActiveSlide(activeSlide - 1);
          }}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <div className="px-2">
          <span>{activeSlide + 1} - </span>
          <span>{servicesHome[lang].length}</span>
        </div>
        <button
          onClick={() => {
            if (activeSlide != servicesHome[lang].length - 1)
              setActiveSlide(activeSlide + 1);
          }}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </>
  );
}
