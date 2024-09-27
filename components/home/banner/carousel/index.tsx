'use client';
import { getDictionary } from '@/get-dictionary';
import { useState } from 'react';
import Carousel from 'react-simply-carousel';
import CarouselItem from '../carouselItem';

export default function HomeBannerCarousel({
  params,
  toShow,
}: {
  toShow: number;
  params: any;
}) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.banner.items;
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="w-[90vw] mx-auto overflow-hidden h-full relative py-10 rounded-2xl">
      <Carousel
        infinite={true}
        containerProps={{
          style: {
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            borderRadius: 20,
            overflow: 'hidden',
          },
        }}
        itemsToShow={toShow}
        onRequestChange={setActiveSlide}
        easing="linear"
        responsiveProps={[
          {
            itemsToShow: toShow,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        preventScrollOnSwipe
        activeSlideIndex={activeSlide}
        speed={1000}
        centerMode
      >
        {data.map((item: any, index: number) => (
          <CarouselItem {...item} indexImage={index} key={index} />
        ))}
      </Carousel>
      <div className="w-fit cursor-pointer h-5 z-10 absolute flex items-center m-auto left-0 right-0 bottom-16">
        {data.map((item: any, index: number) =>
          index === activeSlide ? (
            <div
              key={index}
              onClick={() => setActiveSlide(index)}
              className="mr-1 md:w-14 w-10 h-2 rounded-full bg-white"
            ></div>
          ) : (
            <div
              key={index}
              onClick={() => setActiveSlide(index)}
              className="mr-1 w-2 h-2 rounded-full bg-white"
            ></div>
          ),
        )}
      </div>
    </div>
  );
}
