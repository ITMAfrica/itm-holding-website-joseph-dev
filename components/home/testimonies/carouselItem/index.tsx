import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { BiSolidQuoteAltRight } from 'react-icons/bi';

export default function TestimonyItem({ item, activeSlide }: any) {
  if (activeSlide == item) return <article className="w-fit ease-linear h-fit relative z-10 scale-125 pt-[48px] flex items-center justify-center mx-3 my-24">
    <div className="w-[374px] h-[374px] shadow-2xl rounded-2xl border-t relative  bg-white ">
      <main className="p-6 pt-0">
        <div className="-translate-y-1/2 flex justify-center">
          <div className="w-24 h-24 shadow-lg rounded-full border-4 border-white bg-gray-300"></div>
        </div>
        <span className="text-gray-300 text-3xl">
          <BiSolidQuoteAltLeft />
        </span>
        <p className="text-sm py-4 text-center text-sm">
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
    <article className="w-fit h-[467.5px] ease-linear flex items-center justify-center pt-[12px] my-24 mx-5">
      <div className="w-[325px] h-[325px] bg-white shadow-xl rounded-2xl border pt-0 p-3 relative">
        <div className="-translate-y-1/2 flex justify-center">
          <div className="w-24 h-24 shadow-lg  border-3 border-white rounded-full bg-gray-300"></div>
        </div>
        <span className="text-gray-300 text-3xl">
          <BiSolidQuoteAltLeft />
        </span>
        <p className="text-sm py-4 text-center text-xs">
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
