'use client';
import { servicesHome } from '@/lib/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import CardServices from './card';
import ServiceCardText from './cardItem';
import { useRef } from 'react';

export default function ServicesPageServices({ params }: { params: any }) {
  const ref = useRef(null);
  const lang = params.lang;
  const [toShow] = useState(4);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="flex w-10/12 mx-auto relative">
      <div className="w-4/5 mx-auto border border-red-400 h-screen overflow-scroll snap-y snap-mandatory">
        {servicesHome[lang].map((item: any, index: number) => {
          return <ServiceCardText {...item} index={index} key={index} />;
        })}
      </div>
      <div className="sticky top-0 h-screen flex items-center w-1/5 border border-green-500">
        <div className="w-[300px] h-[400px] bg-blue_itm_linear">Images</div>
      </div>
    </section>
  );
}
