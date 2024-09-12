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
    <div className="w-full h-full py-10">
      <Carousel
        autoplay={true}
        containerProps={{
          style: {
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            userSelect: 'none',
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        itemsToShow={toShow}
        speed={1000}
        delay={4000}
        centerMode
      >
        {data.map((item: any, index: number) => (
          <CarouselItem {...item} indexImage={index} />
        ))}
      </Carousel>
    </div>
  );
}
