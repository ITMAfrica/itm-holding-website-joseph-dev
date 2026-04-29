'use client';

import { testimonies } from '@/lib/data';
import { useCallback, useRef, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import TestimonyItem from '../carouselItem';

const overlayNavBtn =
  'pointer-events-auto z-40 h-11 w-11 rounded-full border border-gray-200 bg-white text-black_itm shadow-md transition-colors duration-200 hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 inline-flex items-center justify-center';

export default function TestimoniesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const count = testimonies.length;

  const goPrev = useCallback(() => {
    if (count <= 1) return;
    swiperRef.current?.slidePrev();
  }, [count]);

  const goNext = useCallback(() => {
    if (count <= 1) return;
    swiperRef.current?.slideNext();
  }, [count]);

  return (
    <div className="w-full max-w-full overflow-x-clip">
      <div className="relative w-full min-h-[320px] py-4 md:min-h-[420px] md:py-8">
        {count > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={goPrev}
              className={`${overlayNavBtn} absolute left-1 top-1/2 -translate-y-1/2 md:left-2`}
            >
              <MdOutlineKeyboardArrowLeft className="text-xl" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={goNext}
              className={`${overlayNavBtn} absolute right-1 top-1/2 -translate-y-1/2 md:right-2`}
            >
              <MdOutlineKeyboardArrowRight className="text-xl" aria-hidden />
            </button>
          </>
        ) : null}

        <Swiper
          modules={[Navigation, A11y]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          rewind
          spaceBetween={16}
          slidesPerView={1}
          speed={500}
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1150: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="testimonies-swiper"
        >
          {testimonies.map((item: any, index: number) => (
            <SwiperSlide key={`${item.name}-${index}`}>
              <TestimonyItem
                item={item}
                setActiveSlide={setActiveSlide}
                index={index}
                activeSlide={activeSlide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {count > 1 ? (
        <div
          className="flex justify-center gap-2 pb-2"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonies.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={activeSlide === index}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? 'w-8 bg-blue_itm_aqua_marine'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
