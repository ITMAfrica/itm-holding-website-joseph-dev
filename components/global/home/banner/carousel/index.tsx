'use client';

import { useState } from 'react';
import Carousel from 'react-simply-carousel';
import Image from 'next/image';
import image from '@/public/pages/home/banner/banner1.png';

export default function HomeBannerCarousel({ toShow }: { toShow: number }) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="w-full h-full border-red-700 py-10">
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
        activeSlideProps={{
          style: {
            background: 'blue',
          },
        }}
        onRequestChange={setActiveSlide}
        itemsToShow={toShow}
        speed={1000}
        delay={4000}
        centerMode
      >
        {Array.from({ length: 3 }).map((item, index) => (
          <div className="w-[90vw] rounded-2xl mx-auto relative" key={index}>
            <div className="absolute z-10 top-0 right-0 left-0 bottom-0">
              {index}
            </div>
            <Image
              src={image}
              className="h-fit w-full bg-center rounded-lg"
              fill
              alt="Bg"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
