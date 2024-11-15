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

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transiton: {
        staggerChildren: 0.25,
        delay: 4,
      },
    },
  };
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      viewport={{ amount: 'all' }}
      className="w-10/12 mx-auto snap-mandatory"
      initial="hidden"
      animate="show"
    >
      {servicesHome[lang].map((item: any, index: number) => {
        return <ServiceCardText {...item} index={index} key={index} />;
      })}
    </motion.section>
  );
}
