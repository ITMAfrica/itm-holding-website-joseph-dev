'use client';
import CardEntity from '@/components/global/cards/entity';
import { organisations } from '@/lib/data';
import { useState } from 'react';
export default function AboutPageEntities({ params }: { params: any }) {
  const lang = params.lang;
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <section className="w-full ">
      <div className="w-full h-fit mx-auto relative" id="company">
        {organisations[lang].map((item: any, index: number) => {
          return (
            <CardEntity
              {...item}
              setActiveSlide={setActiveSlide}
              index={index}
              total={organisations[lang].length}
              activeSlide={activeSlide}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}
