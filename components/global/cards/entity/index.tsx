import bgEntity from "@/public/assets/bg/bg.entity.png"
import Image from "next/image"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"

export default function CardEntity({ total, index, activeSlide, setActiveSlide }: any) {
    return <article className="w-[100vw] h-fit lg:h-[70vh] lg:flex">
        <div className="lg:w-1/2 h-full relative lg:py-10 pt-10 flex justify-center lg:justify-end">
            <div className="w-10/12 h-[50vh] lg:h-full bg-white relative">
                <Image src={bgEntity} fill alt="" objectFit="cover" />
                <div className="absolute z-20 h-[80px] left-0 flex items-center justify-between px-5 right-0 bottom-0 bg-entityBar/30">
                    <h2 className="font-bold text-lg text-white">
                        Your busness Solutions partner
                    </h2>
                    <div className="w-fit font-bold text-xl text-blue_itm_aqua_marine">
                        <span className="pr-2">{index + 1}</span>/<span className="pl-2">{total}</span>
                    </div>
                </div>
            </div>
            <div className="absolute z-10 top-0 left-0 right-0 bottom-0 bg-entityHover/30">
            </div>
        </div>
        <div className="lg:w-1/2 h-full lg:py-10 pb-10 flex lg:justify-start justify-center relative ">
            <div className="w-10/12 h-full lg:py-0 py-10  flex items-center lg:justify-start justify-center bg-white relative">
                <div className="absolute z-20 text-white text-4xl justify-center h-[80px] flex items-center w-2/12 left-0 right-0 bottom-full lg:bottom-0 bg-entityBar/30">
                    <div onClick={function () {
                        if (activeSlide != 0)
                            setActiveSlide(activeSlide - 1);
                    }} className="w-fit cursor-pointer">
                        <MdOutlineKeyboardArrowLeft />
                    </div>
                    <div onClick={function () {
                        if (activeSlide != total - 1)
                            setActiveSlide(activeSlide + 1);
                    }} className="w-fit cursor-pointer">
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
                <div className="w-8/12 mx-auto text-sm">
                    <h2 className="text-4xl w-full mx-auto font-bold text-blue_itm_primary pb-5">
                        Notre entreprise
                    </h2>
                    <p className="w-full mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda asperiores vero reprehenderit dolorem quo, enim et temporibus dolore. Necessitatibus numquam commodi temporibus sit nam obcaecati laudantium amet explicabo delectus enim.
                        temporibus dolore. Necessitatibus numquam commodi temporibus sit nam obcaecati laudantium amet explicabo delectus enim.temporibus dolore. Necessitatibus numquam commodi temporibus sit nam obcaecati laudantium amet explicabo delectus enim.temporibus dolore. Necessitatibus numquam commodi temporibus sit nam obcaecati laudantium amet explicabo delectus enim.
                    </p>
                </div>
            </div>
        </div>
    </article>
}