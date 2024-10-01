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
    <>
      <div className="w-full relative h-fit">
        <Carousel
          activeSlideIndex={activeSlide}
          containerProps={{
            style: {
              flex: '1',
              alignItems: 'end',
              alignContent: 'end',
              paddingLeft: 2,
            },
          }}
          onRequestChange={setActiveSlide}
          easing="linear"
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
          preventScrollOnSwipe={true}
        >
          {servicesHome[lang].map((item: any, index: number) => (
            <HomeServiceCard {...item} activeSlide={activeSlide} key={index} />
          ))}
        </Carousel>
      </div>
      <div className="flex items-center pl-10 z-20">
        <button
          onClick={() => {
            if (activeSlide < servicesHome[lang].length - 1 && activeSlide > 0)
              setActiveSlide(activeSlide - 1);
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
            if (activeSlide < servicesHome[lang].length)
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
