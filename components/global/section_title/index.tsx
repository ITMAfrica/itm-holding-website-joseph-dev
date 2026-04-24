'use client';

import { motion } from 'framer-motion';

export default function SectionTitle({
  text,
  center = false,
}: {
  text: string;
  center?: boolean;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`font-bold text-blue_itm_aqua_marine text-xl ${
        center ? 'text-center' : ''
      } mb-2`}
    >
      {text}
    </motion.h2>
  );
}
