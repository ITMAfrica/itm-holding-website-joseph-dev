'use client';

import { getDictionary } from '@/get-dictionary';
import Link from 'next/link';
import { motion } from 'framer-motion';

const viewTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function CallToAction({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const data = dictionary.global.callToAction;
  return (
    <section className="md:py-16 py-8 flex justify-center bg-white rounded-md overflow-hidden">
      <div className="md:w-9/12 w-11/12 md:h-[350px] h-[300px] flex flex-wrap items-center justify-center bg-cover rounded-3xl overflow-hidden bg-no-repeat bg-[url('../public/bg.png')] bg-black/40">
        <div className="w-full text-white">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...viewTransition, delay: 0 }}
            className="text-center text-3xl md:text-5xl px-3 md:px-0 font-bold"
          >
            {data?.paragraph1}
            <span className="text-blue_itm_aqua_marine">{data?.career}</span>
            {data?.click}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...viewTransition, delay: 0.12 }}
            className="text-center pt-2 pb-5 text-xl w-11/12 m-auto md:w-full font-open"
          >
            {data?.subtitle}
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...viewTransition, delay: 0.24 }}
          >
            <Link
              href={data?.btn.link}
              className="px-6 py-2 bg-blue_itm_aqua_marine rounded-full"
              title={data?.btn.title}
            >
              {data?.btn.text}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
