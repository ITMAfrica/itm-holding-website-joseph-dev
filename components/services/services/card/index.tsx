import Image from 'next/image';

export default function CardServices({
  name,
  index,
  icon,
  activeSlide,
  setActiveSlide,
  description,
}: any) {
  if (index == activeSlide) return null;
  return (
    <div className="w-fit py-10 pr-7 pl-0">
      <article
        onClick={function () {
          setActiveSlide(index);
        }}
        className={`h-[45vh] lg:h-[50vh] group w-[18.5vw] rounded-xl shadow-xl hover:shadow-2xl shadow-black ${
          index == activeSlide ? 'shadow-2xl shadow-black' : ''
        } cursor-pointer overflow-hidden relative`}
      >
        <Image
          src={icon}
          alt=""
          fill
          sizes="(min-width: 1024px) 19vw, 100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute top-0 text-white bg-gradient-to-b from-transparent to-black left-0 right-0 bottom-0 p-5 lg:py-10 flex items-end justifty-center">
          <div className="w-full">
            <h1
              className={`font-bold text-2xl group-hover:text-blue_itm_aqua_marine ${
                index == activeSlide ? '' : 'text-white'
              }`}
            >
              {name}
            </h1>
            <p className={`pt-3 text-xs font-open`}>
              {description.slice(0, 100)}...
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
