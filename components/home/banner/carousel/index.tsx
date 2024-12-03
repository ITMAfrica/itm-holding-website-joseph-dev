'use client';

import CarouselItem from '@/components/home/banner/carouselItem';
import { getDictionary } from '@/get-dictionary';

// import Swiper core and required modules
import {
  Pagination,
  Autoplay,
  A11y,
  Parallax,
  EffectFade,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { duration } from 'moment';

export default function HomePageBanner({
  params,
  toShow,
}: {
  params: any;
  toShow: number;
}) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.home.banner.items;

  return (
    <section className="h-full py-5">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay, A11y, Parallax, EffectFade]}
        spaceBetween={20}
        slidesPerView={toShow}
        longSwipesMs={800}
        autoplay={{ delay: 4000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        className="h-full w-[95vw] my-auto"
      >
        {data.map((item: any, index: number) => (
          <SwiperSlide className="py-0" key={index}>
            <CarouselItem
              {...item}
              indexImage={index}
              key={index}
              index={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
