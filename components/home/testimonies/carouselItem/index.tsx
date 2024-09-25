import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { BiSolidQuoteAltRight } from 'react-icons/bi';

export default function TestimonyItem({ item, activeSlide }: any) {
  if (activeSlide == item) return <article className="w-fit h-fit relative z-10 scale-125 pt-[48px] flex items-center justify-center mx-3 my-24">
    <div className="w-[424px] h-[424px] drop-shadow-2xl rounded-2xl relative  bg-white ">
      <main className="p-6 pt-0">
        <div className="-translate-y-1/2 flex justify-center">
          <div className="w-24 h-24 shadow-lg rounded-full bg-gray-300"></div>
        </div>
        <span className="text-gray-300 text-3xl">
          <BiSolidQuoteAltLeft />
        </span>
        <p className="text-sm py-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          debitis iure id deleniti molestias reprehenderit voluptas cumque
          fugiat.
        </p>
        <span className="flex w-full justify-end text-gray-300 text-3xl">
          <BiSolidQuoteAltRight />
        </span>
        <h3 className="text-center font-bold text-blue_itm_aqua_marine mt-2">
          Amos BAFUNA
        </h3>
        <h6 className="text-center">Web developer</h6>
      </main>
    </div>
  </article>
  return (
    <article className="w-fit h-[530px] flex items-center justify-center pt-[12px] my-24 mx-5">
      <div className="w-[350px] h-[350px] bg-white rounded-2xl border pt-0 p-5 relative">
        <div className="-translate-y-1/2 flex justify-center">
          <div className="w-24 h-24 shadow-lg rounded-full bg-gray-300"></div>
        </div>
        <span className="text-gray-300 text-3xl">
          <BiSolidQuoteAltLeft />
        </span>
        <p className="text-sm py-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          debitis iure id deleniti molestias reprehenderit voluptas cumque
          fugiat.
        </p>
        <span className="flex w-full justify-end text-gray-300 text-3xl">
          <BiSolidQuoteAltRight />
        </span>
        <h3 className="text-center font-bold text-blue_itm_aqua_marine mt-2">
          Amos BAFUNA
        </h3>
        <h6 className="text-center">Web developer</h6>
      </div>
    </article>
  );
}
