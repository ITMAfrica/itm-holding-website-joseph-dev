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
          spaceBetween={30}
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
              spaceBetween: 60,
            },
          }}
          className="h-full w-full my-auto"
        >
          {servicesHome[lang].map((item: any, index: number) => (
            <SwiperSlide key={index}>
              <HomeServiceCard
                {...item}
                activeSlide={activeSlide}
                key={index}
              />
            </SwiperSlide>
          ))}
          <div className="flex items-center justify-start pl-3 z-20">
            <SlidePrevButton />
            <div className="px-2"></div>
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </>
  );
}

const slideNavBtnClass =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-black_itm transition-colors hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2';

export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      aria-label="Next slide"
      onClick={() => swiper.slideNext()}
      className={slideNavBtnClass}
    >
      <MdOutlineKeyboardArrowRight className="text-xl" aria-hidden />
    </button>
  );
}

export function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      aria-label="Previous slide"
      onClick={() => swiper.slidePrev()}
      className={slideNavBtnClass}
    >
      <MdOutlineKeyboardArrowLeft className="text-xl" aria-hidden />
    </button>
  );
}
