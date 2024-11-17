import { useRef, useEffect } from 'react';
import {
  motion,
  useScroll,
  useAnimate,
  useTransform,
  useInView,
  MotionValue,
  inView,
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
  icon,
  index,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const titleVariants = {
    hidden: {
      y: -100,
      x: -50,
      transition: {
        duration: 0.25,
      },
    },
    show: {
      y: 0,
      x: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
    }
  }, [isInView]);

  return (
    <div className="h-[90vh] flex items-center justify-center">
      <motion.section
        ref={ref}
        initial={{ opacity: 1 }}
        transition={{ duration: 0.5, stiffness: 'spring' }}
        whileInView={{ opacity: 1, offset: ['start start', 'end end'] }}
        viewport={{ amount: 'all' }}
        className="h-[70vh] flex justify-center items-center snap-center border-2 border-yellow-500"
      >
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="show"
          
          className="w-full"
        >
          <motion.h4 className="text-xl text-gray_itm">
            Service {index + 1} #
          </motion.h4>
          <motion.h1 className="w-2/3 text-4xl text-blue_itm_primary font-bold py-5">
            {name}
          </motion.h1>
          <p className="py-3">{paragraph}</p>
          <p>{description}</p>
        </motion.div>
        {/* <div className="flex items-center justify-center w-2/5">
          <div className="w-[300px] h-[400px] border border-blue_itm_primary">
            <Image src={icon} alt={name} style={{ objectFit: 'cover' }} />
          </div>
        </div> */}
      </motion.section>
    </div>
  );
}
