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
    <div className="w-full relative h-fit">
      <Carousel
        activeSlideIndex={activeSlide}
        containerProps={{
          style: {
            flex: '1',
            alignItems: 'center',
            alignContent: 'right',
            padding: 20,
          },
        }}
        onRequestChange={setActiveSlide}
        easing="linear"
        forwardBtnProps={{
          onClick() {
            if (activeSlide != 0) setActiveSlide(activeSlide - 1);
          },
          //here you can also pass className, or any other button element attributes
          children:
            Array.from({ length: 10 }).length > 1 ? (
              <></>
            ) : (
              //   <div className="absolute right-0  z-30 -translate-y-1/2 md:h-14 h-10 md:w-14 w-10 hover:bg-blue_itm_good bg-blue_itm_good/50  text-white flex items-center justify-center rounded-full">
              //     <MdOutlineKeyboardArrowRight />
              //   </div>
              <></>
            ),
        }}
        backwardBtnProps={{
          onClick() {
            if (activeSlide != Array.from({ length: 10 }).length - 1)
              setActiveSlide(activeSlide + 1);
          },
          //here you can also pass className, or any other button element attributes
          children:
            Array.from({ length: 10 }).length > 1 ? (
              <></>
            ) : (
              //   <div className="absolute z-30 left-0 -translate-y-1/2  md:h-14 h-10 md:w-14 w-10 hover:bg-blue_itm_good bg-blue_itm_good/50 text-white flex items-center justify-center rounded-full">
              //     <MdOutlineKeyboardArrowLeft />
              //   </div>
              <></>
            ),
        }}
        responsiveProps={[
          {
            itemsToShow: toShow,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        itemsToShow={toShow}
        itemsToScroll={1}
        speed={1000}
      >
        {servicesHome[lang].map((item: any, index: number) => (
          <HomeServiceCard {...item} activeSlide={activeSlide} key={index} />
        ))}
      </Carousel>
    </div>
  );
}
