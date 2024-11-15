import { useRef } from 'react';
import {
  motion,
  useScroll,
  useAnimate,
  useTransform,
  useInView,
  MotionValue,
} from 'framer-motion';
import Image from 'next/image';

interface Props {
  name: string;
  icon: any;
  description: string;
  image: string;
  paragraph: string;
  index: number;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function ServiceCardText({
  name,
  description,
  paragraph,
  image,
  index,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileInView={{ opacity: 1, offset: ['end start', 'end end'] }}
      viewport={{ amount: 'all' }}
      className="h-fit py-20 flex justify-center items-center snap-center border border-red-400"
    >
      <div className="w-1/2">
        <motion.h4 className="text-xl text-gray_itm">
          Service {index + 1} #
        </motion.h4>
        <motion.h1 className="w-2/3 text-4xl text-blue_itm_primary font-bold py-5">
          {name}
        </motion.h1>
        <p className="py-4">{paragraph}</p>
        <p>{description}</p>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <div className="w-[300px] h-[400px] border border-red-700"></div>
      </div>
    </motion.section>
  );
}
