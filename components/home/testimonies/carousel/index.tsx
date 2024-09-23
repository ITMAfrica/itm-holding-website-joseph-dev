'use client';

import { getDictionary } from '@/get-dictionary';
import { useState } from 'react';
import Carousel from 'react-simply-carousel';
import TestimonyItem from '../carouselItem';

export default function TestimoniesCarousel({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.cd.pages.home.banner.items;
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="w-full h-full py-10">
      <Carousel
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-between',
            userSelect: 'none',
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: 'red',
            position: 'absolute',
            top: 20,
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: '>',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }}
        backwardBtnProps={{
          children: '<',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }}
        itemsToShow={3}
        speed={400}
        centerMode
      >
        {Array.from({ length: 10 }).map((item: any, index: number) => (
          <TestimonyItem item={index} key={index} />
        ))}
      </Carousel>
    </div>
  );
}
