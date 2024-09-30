import { MileStoneCardProps } from '@/types';
import moment from 'moment/moment';
import { a } from '@react-spring/web';
import Image from 'next/image';
import NorthWestIcon from '@/svg/northWestIcon';

export default function MileStoneCard({
  expertise,
  contentReveal,
}: MileStoneCardProps) {
  const dates = expertise.timeRange.map((date) => moment(date).format('MMMM'));
  const [initialDate, endDate] = expertise.timeRange;
  const dateDescription = `${moment(initialDate).format(
    'MMMM YYYY'
  )} to ${moment(endDate).format('MMMM YYYY')}`;

  return (
    <article className="ml-[24px] md:ml-[28px] font-normal flex-1 semi-lg:flex-none semi-lg:w-[384px] lg:w-[512px] flex flex-col">
      <a.header className="flex gap-4 mt-auto" style={contentReveal[0]}>
        <h2 className="mb-4 text-3xl text-blue_itm_primary font-bold">
          Un parcours de géant
        </h2>
      </a.header>
      <div className="flex flex-col gap-3 mb-auto content">
        <a.p className="mt-4" style={contentReveal[1]}>
          {expertise.details}
        </a.p>
        <a.p style={contentReveal[2]} className="w-fit" tabIndex={-1}>
          {expertise.details}
        </a.p>
        <a.p
          className="text-sm text-grey-6 md:visually-hidden"
          style={contentReveal[3]}
          aria-label={dateDescription}
          id="active-experience-date"
        >
          {dates[0]} - {dates[1]}
        </a.p>
      </div>
    </article>
  );
}
