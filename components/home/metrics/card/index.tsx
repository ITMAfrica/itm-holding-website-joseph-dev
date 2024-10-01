'use client';

import CountUp, { useCountUp } from 'react-countup';

export default function HomeMetricsCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div
      id="counter"
      className="group rounded-lg lg:w-[23%] md:w-[48%] w-full bg-white/20 mb-4 lg:mb-0 text-white py-4 px-5"
    >
      <h2 className="md:text-7xl text-5xl font-bold mb-2 group-hover:text-blue_itm_aqua_marine">
        <CountUp
          enableScrollSpy
          duration={3}
          start={0}
          prefix="+ "
          end={number}
        />
      </h2>
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}
