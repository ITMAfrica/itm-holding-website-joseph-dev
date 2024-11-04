'use client';
import CardFaq from '@/components/global/cards/faq';
import { getDictionary } from '@/get-dictionary';
import imageLeft from '@/public/assets/bg/bg.about.itm.left.png';
import imageRight from '@/public/assets/bg/bg.about.itm.right.png';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutPageHoldingSection({ params }: { params: any }) {
  const [faqs] = useState(Array.from({ length: 3 }));
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.globalContent.pages.about.about;
  return (
    <section className="bg-white  bg-[url('../public/pages/about/bg_aside.png')] bg-left bg-no-repeat lg:py-20 py-10">
      <div className="w-10/12 lg:w-9/12 flex flex-wrap lg:flex-nowrap lg:flex-row flex-col-reverse h-full mx-auto md:pb-20">
        <div className="w-full lg:pb-0 lg:pt-0 pt-20 lg:w-6/12">
          <h1 className="text-blue_itm_aqua_marine font-bold pb-4">
            ITM HOLDING
          </h1>
          <h2 className="text-5xl font-bold text-blue_itm_primary pb-4">
            {data.title}
          </h2>
          <p className="w-full">{data.description}</p>
          <div className="w-full">
            {data.items.map(function (item: any, index: number) {
              return <CardFaq {...item} about key={index} />;
            })}
          </div>
        </div>
        <div className="w-full lg:w-6/12 lg:pb-0 pb-10 h-full flex items-center justify-center relative">
          <div className="w-10/12 lg:w-[400px] h-[300px] md:h-[400px] lg:h-[550px] shadow-2xl shadow-black/60 relative">
            <Image
              src={imageLeft}
              fill
              alt="left"
              style={{ objectFit: 'cover' }}
            />
            <div className="w-full h-full shadow-2xl shadow-black/60 absolute top-[20%] left-[20%]">
              <div className="w-full h-full  shadow-xl relative">
                <Image
                  src={imageRight}
                  fill
                  alt="right"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <div className="w-2/12 lg:hidden block"></div>
        </div>
      </div>
    </section>
  );
}
