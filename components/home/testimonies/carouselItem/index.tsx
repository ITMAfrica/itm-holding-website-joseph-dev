import Image from 'next/image';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { BiSolidQuoteAltRight } from 'react-icons/bi';

export default function TestimonyItem({ item, index, activeSlide, setActiveSlide }: any) {
  const centerClass = "w-fit ease-linear h-fit relative z-20 scale-125 pt-[48px] flex items-center justify-center mx-3 my-24"
  const asideClass = "w-fit h-[450.5px] z-10 ease-linear flex items-center justify-center pt-[12px] my-24 mx-5"

  return (
    <article
      onClick={
        function () {
          setActiveSlide(index)
        }}
      className={`${activeSlide == index ? centerClass : asideClass}`}
    >
      <div className="w-[325px] min-h-[325px] bg-white shadow-xl rounded-2xl border pt-0 p-3 relative">
        <div className="-translate-y-1/2 flex justify-center">
          <div className="w-24 h-24 p-2 relative shadow-lg overflow-hidden rounded-full border-4 border-white bg-gray-300">
            <Image src={item?.image} fill alt='avatar' />
          </div>
        </div>
        <span className="text-gray-300 text-3xl">
          <BiSolidQuoteAltLeft />
        </span>
        <p className="py-4 text-center text-xs">
          {item?.description}
        </p>
        <span className="flex w-full justify-end text-gray-300 text-3xl">
          <BiSolidQuoteAltRight />
        </span>
        <h3 className="text-center font-bold text-blue_itm_aqua_marine mt-2">
          {item?.name}
        </h3>
        <h6 className="text-center">
          {item?.poste}
        </h6>
      </div>
    </article>
  );
}
