'use client';
import dynamic from 'next/dynamic';

const CountUp = dynamic(() => import('react-countup'), { ssr: false });

export default function HomeMetricsCard({
  number,
  title,
  description,
  id,
}: {
  number: number | string;
  title: string;
  description: string;
  id?: string;
}) {
  const numericNumber = typeof number === 'string' ? parseInt(number, 10) : number;

  return (
    <div
      className="group rounded-lg lg:w-[23%] md:w-[48%] w-full bg-blue_itm_aqua_marine/45 mb-4 lg:mb-0 text-white py-4 px-5"
    >
      <h2 id={id || `metric-count-${numericNumber}`} className="md:text-6xl text-5xl font-bold mb-2 group-hover:text-blue_itm_aqua_marine">
        <CountUp
          enableScrollSpy
          scrollSpyOnce
          duration={2}
          start={0}
          prefix="+ "
          end={numericNumber}
          separator=" "
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
      </h2>
      <h4 className="text-xl font-bold mb-1">{title}</h4>
      <p className="text-xs font-open">{description}</p>
    </div>
  );
}
