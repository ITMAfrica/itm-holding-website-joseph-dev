'use client';
import { getDictionary } from '@/get-dictionary';
import { useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import HomeServiceCard from '../serviceItem';
import { servicesHome } from '@/lib/data';

import { Mousewheel, Controller, A11y, FreeMode } from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/controller';
import 'swiper/css/mousewheel';

export default function HomeServicesCarousel({
  params,
  toShow = 3,
}: {
  params: any;
  toShow?: any;
}) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.home.services;
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className="w-full relative h-fit">
        <Swiper
          // install Swiper modules
          direction={'horizontal'}
          cssMode={true}
          modules={[Mousewheel, A11y, FreeMode, Controller]}
          spaceBetween={50}
          slidesPerView={1}
          longSwipesMs={1500}
          mousewheel={true}
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1080: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
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
          <div className="flex items-center justify-start pl-3 z-20">
            <SlidePrevButton />
            <div className="px-2">
              <span>{activeSlide + 1} - </span>
              <span>{servicesHome[lang].length}</span>
            </div>
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </>
  );
}

export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300"
    >
      <MdOutlineKeyboardArrowRight />
    </button>
  );
}

export function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300"
    >
      <MdOutlineKeyboardArrowLeft />
    </button>
  );
}
