'use client';
import { testimonies } from '@/lib/data';
import { useCallback, useState } from 'react';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import Carousel from 'react-simply-carousel';
import TestimonyItem from '../carouselItem';

const overlayNavBtn =
  'pointer-events-auto absolute z-40 top-1/2 h-11 w-11 -translate-y-1/2 rounded-full border border-gray-200 bg-white text-black_itm shadow-md transition-colors hover:border-gray-300 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 inline-flex items-center justify-center';

export default function TestimoniesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const count = testimonies.length;

  const goPrev = useCallback(() => {
    if (count <= 1) return;
    setActiveSlide((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    if (count <= 1) return;
    setActiveSlide((i) => (i + 1) % count);
  }, [count]);

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="relative w-full min-h-[280px] md:min-h-[380px] py-4 md:py-8">
        {count > 1 ? (
          <>
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={goPrev}
              className={`${overlayNavBtn} left-1 md:left-2`}
            >
              <MdOutlineKeyboardArrowLeft className="text-xl" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={goNext}
              className={`${overlayNavBtn} right-1 md:right-2`}
            >
              <MdOutlineKeyboardArrowRight className="text-xl" aria-hidden />
            </button>
          </>
        ) : null}

        <Carousel
          activeSlideIndex={activeSlide}
          infinite={false}
          hideNavIfAllVisible={false}
          disableNavIfAllVisible={false}
          backwardBtnProps={{ show: false }}
          forwardBtnProps={{ show: false }}
          containerProps={{
            className: '!p-0 md:!px-2',
            style: {
              flex: 1,
              alignItems: 'center',
              alignContent: 'center',
            },
          }}
          onRequestChange={(index) => setActiveSlide(index)}
          easing="ease-out"
          responsiveProps={[
            {
              itemsToShow: 2,
              itemsToScroll: 1,
              minWidth: 768,
            },
            {
              itemsToShow: 3,
              itemsToScroll: 1,
              minWidth: 1150,
            },
          ]}
          itemsToShow={1}
          itemsToScroll={1}
          speed={480}
          centerMode
        >
          {testimonies.map((item: any, index: number) => (
            <TestimonyItem
              item={item}
              setActiveSlide={setActiveSlide}
              index={index}
              activeSlide={activeSlide}
              key={`${item.name}-${index}`}
            />
          ))}
        </Carousel>
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
              onClick={() => setActiveSlide(index)}
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
